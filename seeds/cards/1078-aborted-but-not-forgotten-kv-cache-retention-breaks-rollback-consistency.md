---
title: "Aborted but Not Forgotten: KV-Cache Retention Breaks Rollback Consistency in Language Agents"
authors:
  - "Guijia Zhang"
  - "Harry Yang"
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2608.15939"
doi: null
source: "https://arxiv.org/abs/2608.15939"
topics:
  - "kv-cache"
  - "rollback"
  - "attended-state"
  - "agent-safety"
seed_rank: 1078
seed_batch: "frontier-2026-08-18"
reviewed: "2026-08-18"
pool: "agents"
relevance_score: 10
lineage: rollback-consistency
cites:
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
  - title: "SGLang: Efficient Execution of Structured Language Model Programs"
    url: "https://arxiv.org/abs/2312.07104"
    year: 2024
    arxiv: "2312.07104"
    doi: null
  - title: "Prompt Cache: Modular Attention Reuse for Low-Latency Inference"
    url: "https://arxiv.org/abs/2311.04934"
    year: 2024
    arxiv: "2311.04934"
    doi: null
  - title: "vToken: Token-Level Virtualization for Reclaimable KV Caches"
    url: "https://arxiv.org/abs/2608.13263"
    year: 2026
    arxiv: "2608.13263"
    doi: null
see:
  - "016-deterministic-lockstep"
  - "197-ggpo-rollback-networking"
  - "1014-vtoken-token-level-virtualization-for-reclaimable-kv-caches"
  - "1018-correct-is-not-governed-provenance-integrity-in-agentic-workflows"
  - "002-efficient-memory-management-for-large-language-model-serving"
---

# Aborted but Not Forgotten: KV-Cache Retention Breaks Rollback Consistency in Language Agents

## One-sentence takeaway

A believed-complete abort that only clears the transcript is not rollback: retained session KV still attends the rejected branch, and that alone can flip a later protected effect.

## Why it matters here

Anoptic already treats rollback as a *sim* contract (016 lockstep, 197 GGPO). Agent sessions now have the same split: logical history vs physical attended state. vLLM/SGLang content-addressed prefix caches self-heal (they key on the served request); the exposed pattern is the retained `past_key_values` handle that every "fast" multi-turn agent path uses. GRID COMMAND / Broadside tool loops reject, retry, and time-travel — LangGraph's advertised rollback still leaves KV stale. Complements Correct Is Not Governed (1018, provenance of *who decided*) with a serving-layer invariant: abort must restore *what the model attends*.

## Key ideas

- Two-layer property. Layer-1: attended-state integrity (`K' ≡ κ(committed transcript)`), model-independent. Layer-2: typed-effect equality with a cold restart; resistant models can pass Layer-2 while still violating Layer-1.
- Same-token / different-cache audit: feed identical finalize tokens, vary only whether the cached prefix is the aborted branch or a rebuild from committed bytes. Carrier token absent from the served request in 63/63 cells.
- Census: 25/63 cells flip a protected delivery (7 open-weight families). Neutral residue (no command) already flips 7/21. Framework-default transformers cache-reuse and LangGraph time-travel reproduce it. Content-addressed vLLM/SGLang are exempt.
- Fix is transaction-local restore (rebuild / crop / checkpoint the aborted session only). Global flush works but taxes co-tenants. Prompt-level "distrust rejected content" does not close the channel (14/45 remaining).

## Caveats

- Scoped to retained-handle reuse, not automatic prefix caches. Provider-hidden commercial session caches are unknown.
- Layer-2 exploitability is model-dependent (9/9 down to 0/9); the paper's claim is the Layer-1 invariant, not universal jailbreak.
- Hybrid-Mamba / Mistral caches and a cross-engine rewind-vs-reprefill cost study are future work.

## Links

- arXiv: [2608.15939](https://arxiv.org/abs/2608.15939)
