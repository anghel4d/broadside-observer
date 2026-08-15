---
title: "Ready Cohorts: Bounding GPU Opportunity and Avoiding Host Round Trips in LLM-Agent Control"
authors: ["Josef Chen"]
year: 2026
venue: "arXiv:cs.DC"
arxiv: "2608.12123"
doi: null
source: "https://arxiv.org/abs/2608.12123"
topics: [agentic-llm-serving]
seed_rank: 1016
seed_batch: "frontier-2026-08-14"
reviewed: "2026-08-14"
pool: "agents"
relevance_score: 9
lineage: agentic-serving
cites:
  - title: "Architectural Implications of Agentic AI Workflows"
    url: "https://arxiv.org/abs/2608.04458"
    year: 2026
    arxiv: "2608.04458"
    doi: null
  - title: "TokTier: Exact Stateful CPU+GPU Tokenization for Agentic LLM Serving"
    url: "https://arxiv.org/abs/2607.29678"
    year: 2026
    arxiv: "2607.29678"
    doi: null
  - title: "Parrot: Efficient Serving of LLM-based Applications with Semantic Variable"
    url: "https://www.usenix.org/conference/osdi24/presentation/lin-chaofan"
    year: 2024
    arxiv: null
    doi: null
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
---

# Ready Cohorts: Bounding GPU Opportunity and Avoiding Host Round Trips in LLM-Agent Control

## One-sentence takeaway

Agent control (route, update state, emit next effect) is only GPU-profitable when same-route events pack above a cohort threshold before launch deadlines; keeping one device-resident decision beats a 4-byte host round-trip 1.19–2.39×.

## Why it matters here

This is the agentic-serving systems paper of the window: not another KV trick, but the CPU–GPU seam *between* model and tool calls — the loop Anoptic’s lock-free buses already care about. Ready-cohort quantities F / P* / U / A give a falsifiable budget for whether GRID COMMAND’s deterministic transitions belong on GPU or stay on the job system.

## Key ideas

- Formalizes the ready-cohort boundary: hardware threshold K, fixed-window share F, exact offline share P*, local overlap U, online achieved A (unmeasured here).
- Under equal relative deadlines, an exact DP computes P*. Frozen τ²-bench panel replay at 100k sessions, K=256, 50 ms: F=30.19%, P*=43.00%, U=45.85% — exact packing recovers 81.83% of the alignment gap. At ≤10k sessions P* is often zero.
- Mechanism study: GPU predicate + device graph tail-launch vs copy-4-bytes-and-redispatch; resident path wins all 36 named-placement cells. Nested device launch *without* removing the host decision loses all 60 cells.
- Joined online runtime (finite queues, CPU fallback, privileged effect commit) is explicitly future work.

## Caveats


## Links

- arXiv: [2608.12123](https://arxiv.org/abs/2608.12123)
- PDF: https://arxiv.org/pdf/2608.12123
- Code: https://github.com/josefchen/ready-cohorts
- Evidence: https://huggingface.co/datasets/josefchen/ready-cohorts
