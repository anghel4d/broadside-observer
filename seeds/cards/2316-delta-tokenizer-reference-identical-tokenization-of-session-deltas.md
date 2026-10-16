---
title: "Delta Tokenizer: Reference-Identical Tokenization of Session Deltas and Segment-Parallelism for Long Prompts on Multicore CPUs"
authors:
  - "Zhenyu Zhang"
  - "Zhichao Cao"
year: 2026
venue: "arXiv"
arxiv: "2610.19801"
doi: null
source: "https://arxiv.org/abs/2610.19801"
topics:
  - "agent-tokenization-and-caching"
  - "agentic-llm-serving"
seed_rank: 2316
seed_batch: "frontier-2026-10-16"
reviewed: "2026-10-16"
pool: "systems"
relevance_score: 9
lineage: runtime-harness-evolution
cites:
  - title: "Delta Tokenizer: Reference-Identical Tokenization of Session Deltas and Segment-Parallelism for Long Prompts on Multicore CPUs"
    url: "https://arxiv.org/abs/2610.19801"
    year: 2026
    arxiv: "2610.19801"
    doi: null
see:
  - 083-sglang-efficient-execution-of-structured-language-model-prog
---

# Delta Tokenizer: Reference-Identical Tokenization of Session Deltas and Segment-Parallelism for Long Prompts on Multicore CPUs

## One-sentence takeaway

Prefix caching skips recomputing old tokens but the CPU tokenizer still re-encodes every agent turn from character zero; Delta Tokenizer re-encodes only the appended text plus the short tail it can affect, splices at a boundary the tokenizer's own rules cannot move (so output is reference-identical), and inside SGLang cuts agent-session P99 TTFT 9.5× under load.

## Why it matters here

A free, exact latency win for any agent loop that resends a growing conversation, which is every Broadside agent; it also complements the turn-cost picture in card 2287 by showing the CPU front end becomes a real tail-latency term at 100K-token contexts.

## Key ideas

- **Incremental path.** Keep the previous token sequence per session, re-encode only the delta and the affected tail, join at a provably stable split point; ~40× faster per turn than the Hugging Face reference tokenizer.
- **Chunk-parallel path.** For long requests with no reusable state, cut where practical tokenizers already keep neighboring pieces independent, encode on several cores, concatenate to the exact reference encoding: 4M characters 8.2× faster than serial on 16 cores, 1.6–2.1× faster than LoPT.
- **Shared CPU pool.** Short incremental updates are scheduled between chunks of long jobs instead of queueing behind them.
- **SGLang results.** Median chat TTFT −59% at 100K tokens; agent-session P99 TTFT down 9.5× under load and 23× when long requests tie up the front end.
- **Exactness.** Every checked output matches the reference, including 41.8 billion documents through the fast encoder; the appendix reports LoPT's published seam matching producing wrong IDs on CLongEval.

## Caveats

New long sessions still initialize whole on one worker, so all-new long traffic keeps a GPU-prefill-bound tail; special-token cuts are not yet wired into the SGLang adapter; each pool worker holds ~320 MB and the shared prefix store grows ~0.56–0.75 MB per 100K-token session; worker startup and recovery are not evaluated. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.19801
- PDF: https://arxiv.org/pdf/2610.19801
- HTML: https://arxiv.org/html/2610.19801v1
