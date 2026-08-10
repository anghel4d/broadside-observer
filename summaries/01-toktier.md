---
title: "TokTier: Exact Stateful CPU+GPU Tokenization for Agentic LLM Serving"
authors:
  - Zhenyu Zhang
  - Zhichao Cao
arxiv: "2607.29678"
source: "https://arxiv.org/abs/2607.29678"
published: "2026-07-31"
version_reviewed: "v2 (2026-08-03)"
reviewed: "2026-08-10"
topics:
  - agentic-llm-serving
  - tokenization
  - prefix-caching
  - systems
---

# TokTier

**Paper:** [Abstract](https://arxiv.org/abs/2607.29678) · [Official PDF](https://arxiv.org/pdf/2607.29678)

## One-sentence takeaway

Agent workloads repeatedly append small tool results to very large transcripts, so tokenization should be stateful too: TokTier re-tokenizes only the changed boundary region on ordinary turns, sends uncommon full-context rebuilds through an exact GPU path, and falls back whenever it cannot certify reference-equivalent output.

## Problem

KV-prefix caching removes much of the model-side work for a repeated prompt, but it begins only after the front end has converted the full text into token IDs. Conventional serving stacks therefore re-scan and re-tokenize the entire transcript on every agent step even when nearly all of it is unchanged.

The paper characterizes 153,951 calls from Claude Code and Codex CLI use. The median call appends roughly 1.4 thousand characters to contexts whose median size is 86 thousand to 123 thousand tokens. The aggregate prompt-cache hit rate is 94.1%, while only 1.0–3.6% of calls are session starts or rebuilds with no reusable prefix. A single user turn can also trigger many model calls. Consequently, an O(N) tokenizer is repeatedly applied to a growing N, producing roughly quadratic cumulative work over a long session.

Token IDs cannot safely be concatenated naively. For strings A and B, tokenizing A followed by tokenizing B can differ from tokenizing the concatenated text, because the append can change regex pre-tokenization boundaries and BPE merges near the seam. Since token IDs are both model input and prefix-cache keys, approximate equivalence is insufficient.

## Design

TokTier divides traffic into two paths while maintaining one contract: every emitted token sequence must exactly match the frozen reference tokenizer applied to the complete request.

### Session continuation: certified incremental repair

For each live session, TokTier retains token IDs and byte spans. When text is appended, it re-tokenizes the append plus a bounded suffix of the old context. It looks for a matching region and accepts a splice only after a tokenizer-family-specific stable-boundary check establishes that pre-tokenization cannot reach across that boundary. If certification fails, it widens the window and ultimately runs full reference tokenization. Failure of the optimization therefore costs latency but never changes output.

### Session miss: exact GPU tokenization

Large starts, rebuilds, and state misses use a GPU implementation. The authors reformulate the left-to-right GPT-family regex pre-tokenizer as operations over maximal character-class runs, allowing parallel execution without changing its output. A GPU BPE pipeline then encodes the pieces. Small requests, unsupported behavior, and fast-path failures remain on the reference CPU path.

### Operational safeguards

The service binds implementations to content-addressed tokenizer artifacts, routes by session state and request size, and samples live outputs through a shadow verifier that re-tokenizes them with the reference implementation. This last layer is important because the authors found at least one failure whose manifestation depended on prior process history.

## Evidence and headline results

- Differential validation covered 17 production tokenizer families, about 15 billion split checks, a full 12.4-terabyte real-text sweep, and more than 93,000 replayed agent steps. The reported campaigns found zero token-ID divergence.
- Incremental repair took approximately 0.5–1.1 milliseconds from 100 thousand to 3 million characters. It was as much as 437 times faster than Hugging Face tokenization and 2.1 times faster than a fully prewarmed Gigatoken baseline at 1 million characters.
- GPU full tokenization encoded a 1-million-character request in 0.87 milliseconds. The paper reports up to a 491-fold improvement over Hugging Face and a 23.4-fold latency improvement over the fastest previously published CPU method under the matched protocol.
- With vLLM in the loop, median time to first token improved by 16–34% in loaded regimes. A replay of burst arrivals improved P99 by 23%.
- Under a 50-millisecond P99 target, four CPU repair cores plus one GPU sustained 1,821 requests per second, whereas the tested 16-core stateless CPU front end saturated at 40 requests per second.

These numbers are regime-specific rather than universal. At about 28 thousand tokens in an unloaded sequential stream, the end-to-end result was effectively a tie; the gain appears when contexts are long, appends are small, concurrency creates front-end contention, or rebuilds arrive in bursts.

## What is novel

The strongest contribution is not merely a faster tokenizer. It is the alignment of tokenization architecture with the temporal structure of agent sessions, together with a correctness discipline suitable for cache keys and model inputs. The design combines:

1. workload measurement in terms of complete context N and new material delta;
2. an optimization whose work follows delta rather than N;
3. a per-request certificate before reusing cached tokenization state;
4. exact acceleration for the uncommon full-context path; and
5. layered validation through proofs of local conditions, differential campaigns, frozen artifacts, fallbacks, and runtime sampling.

## Limitations and cautions

- Zero divergence is strong empirical evidence for the exact versions tested, not formal verification of the entire tokenizer stack or a guarantee for future tokenizer snapshots.
- Two of the 17 families cannot use the current repair predicate and always take full-tokenization paths. WordPiece and some normalization or added-token work also remain on the CPU.
- Exact BPE has a serial dependency chain, so the GPU path is latency-bound rather than bandwidth-bound. A high-clock consumer GPU can outperform a larger server card for this job.
- The current deployment relies on session affinity. Cross-worker state transfer, state replication, admission control, and state-lifetime policy remain production concerns.
- The trace panel is concentrated on coding agents and includes six users across nine machines. Independent traces support the same workload shape, but the result does not automatically generalize to every agent application.
- A fully prewarmed content cache can win for smaller contexts on quiet cores. TokTier becomes more compelling as context size grows relative to each append.

## Implications for Broadside

TokTier offers a general systems pattern worth carrying beyond tokenization: preserve state across agent steps, make common-case work proportional to the change, certify reuse before splicing, and retain a slow reference path plus runtime verification.

For future Broadside experiments, request traces should distinguish total context, newly appended material, session-state hits, KV-cache hits, and rebuilds. Reporting only prompt length hides the workload structure that makes this optimization possible. The paper also demonstrates that front-end work can become a dominant bottleneck precisely because downstream caching has become effective; optimizing one layer can expose the next serial layer.

## Bottom line

TokTier is a persuasive systems paper for long-running coding-agent serving. Its exactness contract and validation strategy are as important as its latency results. The practical value is largest for long, cache-heavy, multi-step sessions rather than short or lightly loaded chat traffic.
