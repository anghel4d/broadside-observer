---
title: "Silent Instrument Errors Reorder Agent Leaderboards"
authors:
  - "Yangze Liu"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.04399"
doi: null
source: "https://arxiv.org/abs/2611.04399"
topics:
  - "agent-failure-localization"
  - "autoresearch-experiment-selection"
seed_rank: 2511
seed_batch: "frontier-2026-11-04"
reviewed: "2026-11-04"
pool: "agents"
relevance_score: 9
see:
  - 2492-replayrca-measuring-post-hoc-diagnosis-and-live-oversight-of-agent-fai
  - 2496-real-computation-or-merely-naming-a-pre-registered-mechanism-audit-of
cites:
  - title: "Silent Instrument Errors Reorder Agent Leaderboards"
    url: "https://arxiv.org/abs/2611.04399"
    year: 2026
    arxiv: "2611.04399"
    doi: null
---

# Silent Instrument Errors Reorder Agent Leaderboards

## One-sentence takeaway

Agent leaderboard gaps can come from the grading and logging code rather than the agents: on HAL and tau2-bench, an ungraded half of episodes, double-counted nested model costs, grader actions logged as agent actions and silent evaluator changes each produced plausible but wrong numbers, and HAL confirmed three of them.

## Why it matters here

Every agent comparison we make, including picking models and harnesses for client work, rests on someone's evaluation pipeline. This paper shows those pipelines fail silently and argues they are part of the measurement. Its four cheap checks (graded fraction, root-span cost, action provenance tags, pinned evaluator versions with published re-grade diffs) are directly usable in our own evals.

## Key ideas

- **The headline case.** A general agent appeared 13 points behind a specialised airline scaffold; the general agent often ended conversations in a way that never triggered grading, so only about half its episodes were scored. Grading those under the benchmark's own rule closes the pooled gap without rerunning anything.
- **Three more instrument errors.** A cost column counts nested model calls twice, unevenly across rows. Archived trajectories record grader-written actions as agent actions. A mode check that misreads four files collapses their scores by 59–82 points with no error printed.
- **Re-grading is a new measurement.** A correct, announced evaluator fix still reorders a leaderboard.
- **Method.** Audit done from published artifacts alone; HAL maintainers confirmed their three findings within five weeks.

## Caveats

Single-author audit of two leaderboards; the claim that such errors are common elsewhere is an expectation, not a measurement. The fixes are checks for evaluation builders, not a new benchmark.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.04399
- PDF: https://arxiv.org/pdf/2611.04399
