---
title: "KVStream: Adaptive Parallel Storage Management for KV Caching in Large-Scale LLM Serving"
authors:
  - "Avinash Maurya"
  - "Jaiaid Mobin"
  - "Jie Ye"
  - "M. Mustafa Rafique"
  - "Franck Cappello"
  - "Bogdan Nicolae"
year: 2026
venue: "arXiv preprint (cs.DC)"
arxiv: "2610.31827"
doi: null
source: "https://arxiv.org/abs/2610.31827"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 2431
seed_batch: "frontier-2026-10-26"
reviewed: "2026-10-26"
pool: "systems"
relevance_score: 8
cites:
  - title: "KVStream: Adaptive Parallel Storage Management for KV Caching in Large-Scale LLM Serving"
    url: "https://arxiv.org/abs/2610.31827"
    year: 2026
    arxiv: "2610.31827"
    doi: null
see:
  - 185-cacheblend-fast-large-language-model-serving-for-rag-with-ca
---

# KVStream: Adaptive Parallel Storage Management for KV Caching in Large-Scale LLM Serving

## One-sentence takeaway

When reused prefix KV outgrows GPU and host memory, KVStream treats retrieval as aggregate-bandwidth scheduling across node-local NVMe and the already-mounted parallel or cloud file store, replicating each chunk on every tier and letting whichever tier is free claim the next unread chunk, which reaches within 5% of the bandwidth bound, gives up to 1.49× LMCache's offline throughput, and cuts mean TTFT by up to 6.1× under bursty arrivals on up to 128 GPUs.

## Why it matters here

Agent sessions are the workload that makes prefix working sets huge (long system prompts, repos and growing histories), so storage I/O, not compute, sets time to first token once caches spill. The design is simple and prediction-free: replicate everywhere and route each read by completion, and the performance model shows any static split loses as bandwidth drifts. It complements the flash-lifetime angle in card 2409 and the remote-tier scaling in card 2318.

## Key ideas

- **Motivation.** On the testbed four GPUs leave about 140 GB for KV; working sets reach 0.5–1 TB for a 14B model (3.3–7.2× the GPU KV budget) and about 2 TB at 110B; even slow disk fetch via LMCache is up to 2.2× faster than recomputing on H100s.
- **Mechanism.** Batch each step's reads, defer writes behind the forward pass, replicate each chunk on every tier, and let tiers adaptively claim chunks as they free up.
- **Model.** Completion-routed reads attain the aggregate-bandwidth bound for any per-tier bandwidths; the TTFT gain grows with load and vanishes when host memory or arrival order keeps reuse in cache.
- **Evaluation.** Plugged into LMCache; four models, six datasets, two production traces, up to 128 GPUs.

## Caveats

Full replication multiplies write traffic and capacity on every tier; the authors list reducing replicated writes as future work. Gains depend on the shared file system being idle, which may not hold on busy clusters. Object stores are not yet used as a source.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.31827
- PDF: https://arxiv.org/pdf/2610.31827
