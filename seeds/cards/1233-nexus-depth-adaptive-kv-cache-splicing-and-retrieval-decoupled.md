---
title: "Nexus: Depth-Adaptive KV-Cache Splicing and Retrieval-Decoupled Tool Routing for Agentic LLMs on Unified Memory"
authors:
  - "Mustafa Arslan"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2608.20397"
doi: null
source: "https://arxiv.org/abs/2608.20397"
topics:
  - "agent-tokenization-and-caching"
  - "agentic-llm-serving"
  - "continual-agent-skills"
seed_rank: 1233
seed_batch: "frontier-2026-08-24"
reviewed: "2026-08-24"
pool: "agents"
relevance_score: 10
lineage: agent-kv-cache
cites:
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
  - title: "ReCache: Efficient KV Cache Reuse and Compression for Tool-Augmented LLM Agents"
    url: "https://arxiv.org/abs/2608.19662"
    year: 2026
    arxiv: "2608.19662"
    doi: null
  - title: "CacheRoute: Planned Prefix-Affinity Routing for Large-Scale LLM Serving"
    url: "https://arxiv.org/abs/2608.19677"
    year: 2026
    arxiv: "2608.19677"
    doi: null
  - title: "vToken: Token-Level Virtualization for Reclaimable KV Caches"
    url: "https://arxiv.org/abs/2608.13263"
    year: 2026
    arxiv: "2608.13263"
    doi: null
  - title: "Learning Agent Execution for KV-Cache Management in Agentic Serving"
    url: "https://arxiv.org/abs/2608.14624"
    year: 2026
    arxiv: "2608.14624"
    doi: null
  - title: "RAG-MCP: Mitigating Prompt Bloat in LLM Tool Selection via Retrieval-Augmented Generation"
    url: "https://arxiv.org/abs/2505.03275"
    year: 2025
    arxiv: "2505.03275"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "1142-recache-efficient-kv-cache-reuse-and-compression-for-tool-aug"
  - "1143-cacheroute-planned-prefix-affinity-routing-for-large-scale-ll"
  - "1014-vtoken-token-level-virtualization-for-reclaimable-kv-caches"
  - "1077-learning-agent-execution-for-kv-cache-management-in-agentic-serving"
  - "1116-skilleffect-checked-lowering-for-memory-bounded-agent-tools"
  - "1050-deepseek-harness-everything-is-a-plugin"
---

# Nexus: Depth-Adaptive KV-Cache Splicing and Retrieval-Decoupled Tool Routing for Agentic LLMs on Unified Memory

## One-sentence takeaway

Do not re-prefill the MCP tool registry every turn: retrieve the tool with an INT8 lookaside buffer and generate arguments over a ~19-token signature; splicing compiled schema KV is a bounded, RoPE-limited backup, not the main path.

## Problem

MCP / DeepSeek-harness skill plugins dump verbose JSON schemas into the prompt. Prefill is quadratic in that blob, and concatenate-all overflows the window by ~50 tools. ReCache (1142) makes schema KV composition-invariant inside one attention pass; CacheRoute (1143) keeps a shared prefix on the right replica. Neither stops you paying schema prefill every turn, and neither relocates a *compiled* KV block to a new RoPE position. Physical splice looks free until rotary phase drift corrupts attention off-anchor.

## Design

- Routing is depth-independent: nomic-embed INT8 scan (SLB) + calibrated margin gate (τ=0.0136, ~20% escalate to a MiniLM cross-encoder). Arguments are generated over a compressed textual IR (median 19 tokens, p99 32) with FSM / GBNF JSON masks — not over spliced KV.
- Secondary lever: compile each schema to an Aeon Tool Block (F16 K/V, 128-byte RoPE header) and blit it into the live cache under Apple unified memory. Anchored splice is output-exact. Past P=256 tokens of offset, a depth-adaptive suffix redecode R(n_past) grows to 100% so next-token D_KL stays ~0 (never-regress on *fidelity*, not on latency).
- Layout-aware transposed-V copy for soft-capped models (Gemma-2). Discrete GPU and cloud token-stream APIs fail closed to text prefill.

## Evidence

Single tuple: Qwen2.5-14B-Instruct Q4_K_M + nomic-embed-text-v1.5 on M4 Max 64 GB UMA. Routing accuracy 92/90/89/89% at N=10/50/100/250 GitHub-MCP tools (Wilson 89% [81.4, 93.7] at 250); concatenate-all oracle is 98% at 10 and OOM thereafter. Hybrid path first-argument token 443.8 vs 737.3 ms (1.66×) at ~80% main-context token saving. Deep-splice TTFT 1.63–1.73× at 256 tokens, decaying to parity once R→100%. Two negatives: off-anchor bare splice plateaus at ~10⁻² nats (not a cliff); a reference-free K-variance drift gate has Spearman ρ=0.193.

## Limitations

One host, one 14B GGUF, n≤30 on end-to-end arms. Splice is UMA-local; discrete GPU declines. Deep splice is fidelity-microbenchmarked, not a multi-turn production path. Retrieval ceiling is workload-dependent. Artifacts are author-request, not a public git.

## Implications for Broadside

Standing topics: tokenization / KV for agents, agentic serving, skill plugins. ReCache owns *set-valued* schema attention; Nexus owns *do not put the catalog in the prompt*. GRID COMMAND and DeepSeek Harness (1050) / SkillEffect (1116) skill packs should route by retrieval + short signatures, then optionally compile hot schemas. Treat KV transplant as a RoPE-bounded prototype, not a portable serving feature. Pair with CacheRoute when the reusable prefix is the session, not the tool list.

## Links

- arXiv: [2608.20397](https://arxiv.org/abs/2608.20397)
