---
title: "QuoteBench: How Matched Scores Can Hide Command-Path Failures"
authors: ["Shangao Li", "Yao Zhang", "Volker Tresp", "Yuanyuan Yang"]
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2608.13547"
doi: null
source: "https://arxiv.org/abs/2608.13547"
topics: [agent-failure-localization, harness, coding-agents]
seed_rank: 1013
seed_batch: "frontier-2026-08-14"
reviewed: "2026-08-14"
pool: "agents"
relevance_score: 10
lineage: model-vs-harness
cites:
  - title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
    url: "https://arxiv.org/abs/2405.15793"
    year: 2024
    arxiv: "2405.15793"
    doi: null
  - title: "Stop comparing LLM agents without disclosing the harness"
    url: "https://arxiv.org/abs/2605.23950"
    year: 2026
    arxiv: "2605.23950"
    doi: null
  - title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?"
    url: "https://arxiv.org/abs/2310.06770"
    year: 2024
    arxiv: "2310.06770"
    doi: null
  - title: "NL2Bash: A Corpus and Semantic Parser for Natural Language Interface to the Linux Operating System"
    url: "https://arxiv.org/abs/1802.08979"
    year: 2018
    arxiv: "1802.08979"
    doi: null
see:
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
  - "067-loopsbench-from-harness-engineering-to-loop-engineering-in-c"
  - "079-toolgate-token-efficient-pre-call-control-for-tool-augmented"
  - "100-swe-bench-can-language-models-resolve-real-world-github-issu"
---

# QuoteBench: How Matched Scores Can Hide Command-Path Failures

## One-sentence takeaway

Matched agent success can hide a 55–73 point collapse when the same generated Bash is reparsed through one extra quote layer; the harness boundary, not the model, is often the failure.

## Why it matters here

GRID COMMAND and any Anoptic agent that shells out (build, git, shader compile, `ano` REPL) live on this exact seam: model emits a command, the harness serializes/wraps/reparses it. QuoteBench is the standing model-vs-harness topic made measurable — GPT-5.6-sol’s −3.6 matched gap hides −64.3 transport damage and +60.7 contract-conditioned compensation. If we score agents only on task pass, we will pick the wrong model for a nested `ssh`/`docker`/`bash -c` path.

## Key ideas

- 56 one-shot Bash tasks, 14 incident-derived families, exact final-state validators (bytes, argv, JSON, Git) — exit codes miss 23–47% of failures.
- Crosses generation contract (raw vs disclosed-boundary) with execution transport (raw vs nested double-quoted parser); fixed-reply replay attributes the loss to the extra parser, not the model.
- Escaping at interpolation, or a temp script, restores every raw-path success; the contribution is the measurement, not the (trivial) fix.
- Deployment config reorders models; raw generation is nearly saturated at the frontier. Evaluations should report contract, transport, operating point, and validator.

## Caveats


## Links

- arXiv: [2608.13547](https://arxiv.org/abs/2608.13547)
- PDF: https://arxiv.org/pdf/2608.13547
- Project: https://quotebench.lsamc.website/
- Code: https://github.com/LeonardNJU/quoteBench
- Rollouts: https://huggingface.co/datasets/lsamc/QuoteBench-Rollouts
