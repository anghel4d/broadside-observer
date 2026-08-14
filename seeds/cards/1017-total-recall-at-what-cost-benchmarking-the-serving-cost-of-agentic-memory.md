---
title: "Total Recall at What Cost? Benchmarking the Serving Cost of Agentic Memory Systems"
authors: ["Natchanon Pollertlam", "Witchayut Kornsuwannawit"]
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2608.11879"
doi: null
source: "https://arxiv.org/abs/2608.11879"
topics: [provenance-first-agent-memory, agentic-llm-serving]
seed_rank: 1017
seed_batch: "frontier-2026-08-14"
reviewed: "2026-08-14"
pool: "agents"
relevance_score: 9
lineage: agent-memory
cites:
  - title: "MemGPT: Towards LLMs as Operating Systems"
    url: "https://arxiv.org/abs/2310.08560"
    year: 2023
    arxiv: "2310.08560"
    doi: null
  - title: "Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory"
    url: "https://arxiv.org/abs/2504.19413"
    year: 2025
    arxiv: "2504.19413"
    doi: null
  - title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"
    url: "https://arxiv.org/abs/2005.11401"
    year: 2020
    arxiv: "2005.11401"
    doi: null
  - title: "Evaluating Very Long-Term Conversational Memory of LLM Agents"
    url: "https://arxiv.org/abs/2402.17753"
    year: 2024
    arxiv: "2402.17753"
    doi: null
see:
  - "004-memgpt-towards-llms-as-operating-systems"
  - "008-retrieval-augmented-generation-for-knowledge-intensive-nlp-t"
  - "002-efficient-memory-management-for-large-language-model-serving"
---

# Total Recall at What Cost? Benchmarking the Serving Cost of Agentic Memory Systems

## One-sentence takeaway

Agent-memory serving cost is driven by internal ingest/reflect pipelines, not conversation length: a (N, L) regression that fits rolling-window and full-transcript baselines to <6.5% misses Mem0/Hindsight/Mastra by 18–69%, and break-even vs full history ranges from turn 0 to never-in-400.

## Why it matters here

Provenance-first memory is a standing topic; this is the missing *bill*. Long GRID COMMAND / Broadside sessions will be tempted to Mem0-style extract-and-retrieve. The paper shows backbone × memory is a joint decision, no system wins cost and LoCoMo accuracy, and Hindsight’s retain–recall–reflect ingest can cost 3.3× the full transcript at small messages. Pick memory for the expected horizon, not the blog-post accuracy.

## Key ideas

- Three systems (Mem0, Hindsight, Mastra Observational Memory) vs rolling-window floor and full-transcript ceiling; two backbones × two reasoning efforts; synthetic dialogues to 400 turns; 665 LoCoMo questions.
- Separable model log(C+1)=a+p log(L+1)+q log(t+1): full history p≈q≈1; rolling window q≈0.1; memory systems fail hold-out because cost tracks internal state (fact extract, thresholded reflect).
- Break-even vs full history (measured, not fitted): Mastra OM 0–86 turns, Mem0 0–342, Hindsight 60–never. After 400 turns a cheap memory can be 12.7× cheaper than the transcript.
- Accuracy 21–54%; lowest cost-per-correct is Mastra OM on gpt-oss-20b-low, Mem0 leads on Gemma 4 26B.

## Caveats

- Cost dialogues are synthetic; fact-extraction density may differ in real traces.
- Single accuracy corpus (LoCoMo persona chat), not task-oriented RTS orders.
- Hindsight ingest LLM was not per-cell-controlled; exclude it from backbone comparisons.
- gpt-oss-20b full-history aborted at turn 374 on a serving-stack token-count bug.

## Links

- arXiv: [2608.11879](https://arxiv.org/abs/2608.11879)
- PDF: https://arxiv.org/pdf/2608.11879
