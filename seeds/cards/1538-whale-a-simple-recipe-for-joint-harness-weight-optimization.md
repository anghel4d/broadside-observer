---
title: "WHALE: A Simple Recipe for Joint Harness-Weight Optimization"
authors:
  - "Haechan Kim"
  - "Yoonho Lee"
  - "Gisang Lee"
  - "Chelsea Finn"
  - "Kangwook Lee"
year: 2026
venue: "arXiv:cs.LG"
arxiv: "2609.00196"
doi: null
source: "https://arxiv.org/abs/2609.00196"
topics:
  - "agent-failure-localization"
  - "continual-agent-skills"
seed_rank: 1538
seed_batch: "frontier-2026-09-02"
reviewed: "2026-09-02"
pool: "agents"
relevance_score: 10
lineage: agent-harness-runtime
cites:
  - title: "HELIX: Model-Harness Co-evolution for Recursive Self-Improvement"
    url: "https://arxiv.org/abs/2608.13951"
    year: 2026
    arxiv: "2608.13951"
    doi: null
  - title: "JIT-Agent: Scaling Harness Intelligence via Just-in-Time Harness Evolution"
    url: "https://arxiv.org/abs/2608.25593"
    year: 2026
    arxiv: "2608.25593"
    doi: null
  - title: "DeepSeek Harness: Everything is a Plugin"
    url: "https://deepseek.com/harness/en/"
    year: 2026
    arxiv: null
    doi: null
see:
  - "1079-helix-model-harness-co-evolution-for-recursive-self-improvement"
  - "1447-jit-agent-scaling-harness-intelligence-via-just-in-time"
  - "1050-deepseek-harness-everything-is-a-plugin"
  - "1119-harness-continual-learning-continual-adaptation-beyond-model-par"
---
# WHALE: A Simple Recipe for Joint Harness-Weight Optimization

## One-sentence takeaway

WHALE jointly optimizes model weights and executable harness code — not just prompts — so neither frozen side bottlenecks the other.

## Why it matters here

HELIX (1079) co-evolves model and harness offline; JIT-Agent (1447) synthesizes harnesses online. WHALE is the simple joint recipe that updates weights and harness code together. Broadside needs this when Cordis plugins and a local model both move.

## Key ideas

- Agent performance is joint in parameters and executable harness (context + control flow code), not prompts alone.
- Isolating either side leaves the system bottlenecked by the frozen counterpart.
- WHALE: a simple joint harness–weight optimization recipe (co-authors include Chelsea Finn and Kangwook Lee).
- Broader than prompt optimization: harness code that manages context and control flow is in the loop.

## Caveats

- Executable harness mutations need a safe sandbox (see EvoUndo / Auditing Harness Tampering leftovers).
- Not a Cordis plugin ABI; map WHALE updates onto 1050's plugin surface before adopting.
- Empirical scope is paper-reported — verify against Broadside loops before treating as default trainer.

## Links

- arXiv: [2609.00196](https://arxiv.org/abs/2609.00196)
- PDF: https://arxiv.org/pdf/2609.00196
