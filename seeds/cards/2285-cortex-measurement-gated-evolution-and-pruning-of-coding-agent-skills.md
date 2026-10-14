---
title: "Cortex: Measurement-Gated Evolution and Pruning of Coding-Agent Skills and Rules"
authors:
  - "Samuele Giampieri"
year: 2026
venue: "arXiv"
arxiv: "2610.14216"
doi: null
source: "https://arxiv.org/abs/2610.14216"
topics:
  - "runtime-harness-evolution"
  - "continual-agent-skills"
seed_rank: 2285
seed_batch: "frontier-2026-10-14"
reviewed: "2026-10-14"
pool: "agents"
relevance_score: 9
lineage: runtime-harness-evolution
cites:
  - title: "Cortex: Measurement-Gated Evolution and Pruning of Coding-Agent Skills and Rules"
    url: "https://arxiv.org/abs/2610.14216"
    year: 2026
    arxiv: "2610.14216"
    doi: null
see: []
---

# Cortex: Measurement-Gated Evolution and Pruning of Coding-Agent Skills and Rules

## One-sentence takeaway

Treat CLAUDE.md-style rules and skills as code under test: Cortex mines recurring developer corrections into replayable tasks, adds or deletes one rule/skill at a time, and keeps a change only if repeated with/without runs show a net gain and no task gets noticeably worse.

## Why it matters here

M. runs many agents whose behaviour lives in skill files, rules and memory notes; this is a concrete, measurement-gated discipline for growing and pruning that harness instead of appending every correction forever — and its negative findings (skills rarely opened, rules doing the work) are directly actionable for how Broadside skills are written.

## Key ideas

- **Harness = text files.** Project file, optional skills, and auto-loading rules triggered when the agent reads matching files.
- **Gate.** One candidate change at a time; keep only with a net gain across repeated runs and no task made noticeably worse. Deletions of existing text are tested the same way.
- **Never touch unused text.** Cortex neither adds nor deletes text the agent never used.
- **Findings (Claude Haiku 4.5, purpose-built repo).** Auto-loading rules did most of the work; skills helped only when offered with the files a task touches; skills offered every turn were rarely opened; no text read on every turn was added.
- **Honest limits.** Planted harmful rules got no verdict, so the result shows Cortex keeps no unused text, not that it detects damage; under Claude Sonnet 5 a single run's harness added little, and a real OSS project yielded nothing to learn.

## Caveats

Single-author study on a lab repository with a scripted developer; effect sizes on real projects are small or zero by the paper's own account. Treat as a method plus negative results, not a proven win. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.14216
- PDF: https://arxiv.org/pdf/2610.14216
- HTML: https://arxiv.org/html/2610.14216v1
- Code and data: https://github.com/samugit83/cortex
