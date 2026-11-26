---
title: "MGMem: An Efficient, Deterministic, and Provenance-Preserving Framework for Long-Horizon Agent Memory"
authors:
  - "Junhong Huang"
  - "Xin Tong"
  - "Jun Xia"
year: 2026
venue: "arXiv preprint (cs.CL)"
arxiv: "2611.33174"
doi: null
source: "https://arxiv.org/abs/2611.33174"
version_reviewed: "v1"
topics:
  - "provenance-first-agent-memory"
  - "agentic-memory"
  - "determinism"
seed_rank: 2720
seed_batch: "frontier-2026-11-26"
reviewed: "2026-11-26"
pool: "agents"
relevance_score: 9
see:
  - 004-memgpt-towards-llms-as-operating-systems
  - 069-a-mem-agentic-memory-for-llm-agents
  - 074-from-local-to-global-a-graph-rag-approach-to-query-focused-s
cites:
  - title: "MGMem: An Efficient, Deterministic, and Provenance-Preserving Framework for Long-Horizon Agent Memory"
    url: "https://arxiv.org/abs/2611.33174"
    year: 2026
    arxiv: "2611.33174"
    doi: null
  - title: "MemGPT: Towards LLMs as Operating Systems"
    url: "https://arxiv.org/abs/2310.08560"
    year: 2023
    arxiv: "2310.08560"
    doi: null
  - title: "A-Mem: Agentic Memory for LLM Agents"
    url: "https://arxiv.org/abs/2502.12110"
    year: 2025
    arxiv: "2502.12110"
    doi: null
  - title: "From Local to Global: A Graph RAG Approach to Query-Focused Summarization"
    url: "https://arxiv.org/abs/2404.16130"
    year: 2024
    arxiv: "2404.16130"
    doi: null
  - title: "Evaluating Very Long-Term Conversational Memory of LLM Agents (LoCoMo)"
    url: "https://arxiv.org/abs/2402.17753"
    year: 2024
    arxiv: "2402.17753"
    doi: null
  - title: "LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory"
    url: "https://arxiv.org/abs/2410.10813"
    year: 2024
    arxiv: "2410.10813"
    doi: null
---

# MGMem: An Efficient, Deterministic, and Provenance-Preserving Framework for Long-Horizon Agent Memory

## One-sentence takeaway

MGMem builds agent memory with no generative LLM calls at index time. A deterministic parser links recurring mentions across sessions into an incidence graph, a three-stage resolver maps the question's mentions onto it, and the reader gets back the raw dialogue episodes rather than summaries. On LoCoMo it reaches 75.89 ± 0.10% (three runs), +2.60 pp over EMem, and indexes in about 199 s against 984–2,816 s for generated-memory systems.

## Why it matters here

This is the provenance-first memory design Broadside keeps asking for, stated as three design rules: no generated intermediates on the indexing path, the same input always gives the same index, and the reader only ever sees source turns. It shows that dropping the summarize/extract step costs little accuracy on a standard benchmark and removes a large build cost and a source of run-to-run drift. It is a clean baseline for any "memory as an index over authoritative records" design, and it makes the audit trail from answer to turn a property of the structure rather than something checked afterwards.

## Key ideas

- **Generate-then-retrieve is the target.** The paper names three costs of LLM-written memory: thousands of generative calls per build (309–6,081 for ten LoCoMo conversations in the authors' runs of LightMem, AnchorMem and EMem), non-determinism across rebuilds, and loss of provenance because the reader consumes synthesized text.
- **Cross-session mention incidence graph.** A discriminative parser cascade (spaCy `en_core_web_trf`) finds mentions, normalizes and merges them lexically, and links them to the episodes they occur in. Episode boundaries and incidence completion are deterministic.
- **Subject-conditioned three-stage resolution.** Exact match, then a subject-local bridge, then a full-graph bridge. Episodes are scored with IDF-style weights; dense similarity is used only to break ties.
- **Bounded reader context.** The reader sees at most five raw episodes. A stratified 200-answer human audit finds 94.0% evidence support and 94.5% human–judge agreement.
- **Numbers.** LoCoMo (1,540 questions, four categories): 75.89 ± 0.10%, +9.27 pp over a BM25+dense hybrid. Full LongMemEval-S: 72.60% overall, against BM25 at 74.60% and Hybrid at 73.80%, leading or tying only on single-session types.

## Caveats

I read the abstract, introduction, efficiency/provenance section and limitations of the v1 HTML. On LongMemEval-S the method is slightly behind plain BM25 overall, so the win is cost, determinism and traceability more than accuracy. Evaluation covers English conversational QA only, with a spaCy English model, and the authors say fixed retrieval budgets can miss evidence for multi-session and temporal questions. Some comparisons are quoted rather than matched-protocol. Raw episodes keep provenance on the retrieval side, but the generated answer can still be unsupported. The arXiv API lists a first-version date of 21 Oct 2026 although the paper first appeared in the 26 Nov listing.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.33174
- PDF: https://arxiv.org/pdf/2611.33174
- HTML: https://arxiv.org/html/2611.33174v1
