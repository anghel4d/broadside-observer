---
title: "Cache the Knowledge, Not Just the Prompt: Dynamic Datalog as the Action Language for LLM Agents"
authors:
  - "Bruno Rucy Carneiro Alves de Lima"
  - "Victor Henrique Cabral Pinheiro"
year: 2026
venue: "arXiv preprint (cs.PL); accepted at AICCC 2026"
arxiv: "2611.29709"
doi: null
source: "https://arxiv.org/abs/2611.29709"
version_reviewed: "v1"
topics:
  - "agent-tokenization-and-caching"
  - "provenance-first-agent-memory"
  - "relational-ecs-queries"
  - "production-rules-triggers"
seed_rank: 2701
seed_batch: "frontier-2026-11-24"
reviewed: "2026-11-24"
pool: "agents"
relevance_score: 9
see:
  - 006-voyager-an-open-ended-embodied-agent-with-large-language-mod
  - 007-react-synergizing-reasoning-and-acting-in-language-models
  - 072-agent-workflow-memory
  - 083-sglang-efficient-execution-of-structured-language-model-prog
  - 1489-dbsp-automatic-incremental-view-maintenance-for-rich-query-languages
  - 1809-differential-datalog
  - 2559-souffle-on-synthesis-of-program-analyzers
cites:
  - title: "Cache the Knowledge, Not Just the Prompt: Dynamic Datalog as the Action Language for LLM Agents"
    url: "https://arxiv.org/abs/2611.29709"
    year: 2026
    arxiv: "2611.29709"
    doi: null
  - title: "Incremental Evaluation of Dynamic Datalog Programs as a Higher-order DBSP Program"
    url: "https://ceur-ws.org/Vol-3801/paper1.pdf"
    year: 2024
    arxiv: null
    doi: null
  - title: "DBSP: Automatic Incremental View Maintenance for Rich Query Languages"
    url: "https://doi.org/10.14778/3587136.3587137"
    year: 2023
    arxiv: null
    doi: "10.14778/3587136.3587137"
  - title: "Maintaining Views Incrementally"
    url: "https://doi.org/10.1145/170035.170066"
    year: 1993
    arxiv: null
    doi: "10.1145/170035.170066"
  - title: "Maintenance of Datalog Materialisations Revisited"
    url: "https://doi.org/10.1016/j.artint.2018.12.004"
    year: 2019
    arxiv: null
    doi: "10.1016/j.artint.2018.12.004"
  - title: "Executable Code Actions Elicit Better LLM Agents"
    url: "https://arxiv.org/abs/2402.01030"
    year: 2024
    arxiv: "2402.01030"
    doi: null
  - title: "Recursive Language Models"
    url: "https://arxiv.org/abs/2512.24601"
    year: 2025
    arxiv: "2512.24601"
    doi: null
  - title: "SGLang: Efficient Execution of Structured Language Model Programs"
    url: "https://arxiv.org/abs/2312.07104"
    year: 2024
    arxiv: "2312.07104"
    doi: null
---

# Cache the Knowledge, Not Just the Prompt: Dynamic Datalog as the Action Language for LLM Agents

## One-sentence takeaway

Give a knowledge-graph agent a REPL over a dynamic Datalog engine, where rules are inserted and retracted like facts and derived facts stay current, and the agent reuses relations it defined earlier in 179 of 180 applicable cases. SQL and Python agents write 23–82% more output tokens, and a one-rule revision at 13 million facts costs 2 ms as an update against 36 s from scratch.

## Why it matters here

Prompt caching reuses the model's work on a shared prefix; this paper adds the missing twin, reuse of the *tool's* evaluation of everything the session has already defined. A kept Datalog relation reads like a table and stays current like a view, so agent memory becomes derived state with provenance (rules plus base facts), not a pile of notes. For ano this is close to home: standing rules (する/なる) over relational data, maintained incrementally, are exactly what a dynamic Datalog engine does, and the paper shows LLMs can drive one as their action language. It also shows the failure mode of the alternatives. Small models given SQL or Python store almost nothing between questions, and a large model that does store things picks views when data changes, which re-evaluate on every read.

## Key ideas

- **Datalog REPL.** A session holds the graph, its ontology rules and every rule the agent writes. Each agent step is an update (new rules, retractions, revisions), and the engine reports the change in derived facts. Ontology consequences are computed once per session.
- **Reuse is natural.** With two models, agents reuse a kept relation in 179/180 cases where one applies and in 64/66 while the data changes. With SQL tables or a Python namespace, Claude Haiku 5.5 stores a relation in only 2 of 288 cases.
- **Time.** A seven-question chain at 13M facts takes Haiku a median of 48 s (SQL) and 56 s (Python) against 31 s with the REPL. A data change costs about 1 ms. Savings per question on a kept relation grow with graph size (up to 0.63 vs 4.69 s).
- **Large models adapt differently.** Claude Opus 5.5 matches the REPL by storing SQL tables when data is fixed, then switches to views when data changes, paying re-evaluation at every read.
- **Niche language, same accuracy.** With thinking enabled, models answer as accurately in Datalog as in SQL, SPARQL or Python; a local 1.7B open model (LFM3-1.7B) answers recursive questions in Datalog alone.
- **Benchmark.** 23 questions over three knowledge graphs (including LUBM), each labelled by what its reference program needs, posed in Datalog, SQL, SPARQL and Python over base and derived facts.

## Caveats

Read from the v1 PDF (abstract, introduction, related work, background and setup); no HTML version. Small benchmark (23 questions, three graphs) and two main proprietary models; numbers are the authors'. The engine is the authors' own extension of their earlier dynamic Datalog engine (higher-order DBSP), so engine performance and agent-behaviour results are entangled. Knowledge-graph QA is a friendly domain for Datalog; transfer to messier agent state (files, tool outputs) is not tested. No separate limitations section was found in the text.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.29709
- PDF: https://arxiv.org/pdf/2611.29709
- Engine paper (Datalog 2.0 2024): https://ceur-ws.org/Vol-3801/paper1.pdf
