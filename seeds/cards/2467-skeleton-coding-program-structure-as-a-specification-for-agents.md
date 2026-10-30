---
title: "Skeleton Coding: Program Structure as a Specification for Agents"
authors:
  - "Aditya Golatkar"
  - "Alessandro Achille"
  - "Renos Zabounidis"
  - "Vlad Sobal"
  - "Yangruibo Ding"
  - "Baishakhi Ray"
  - "Jonathan Buck"
  - "Guy Van den Broeck"
  - "Maryam Fazel"
  - "Pietro Perona"
  - "Wei Xia"
  - "Stefano Soatto"
year: 2026
venue: "arXiv preprint (cs.LG, cs.AI, cs.SE)"
arxiv: "2610.38214"
doi: null
source: "https://arxiv.org/abs/2610.38214"
topics:
  - "typed-programming-systems"
  - "agent-failure-localization"
seed_rank: 2467
seed_batch: "frontier-2026-10-30"
reviewed: "2026-10-30"
pool: "agents"
relevance_score: 8
see:
  - 1822-harness-or-model-isolating-the-harness-effect-in-agentic-coding-with
cites:
  - title: "Skeleton Coding: Program Structure as a Specification for Agents"
    url: "https://arxiv.org/abs/2610.38214"
    year: 2026
    arxiv: "2610.38214"
    doi: null
---

# Skeleton Coding: Program Structure as a Specification for Agents

## One-sentence takeaway

Giving a coding agent the program's skeleton (data types, modules and function signatures) alongside its tests cut mean test error by 48.4% relative to the best tests-only specifications, narrowed the small-versus-large model gap by about 52%, and lowered implementation cost 15–26x.

## Why it matters here

It puts a theory and numbers behind "sketch the types and signatures before code": tests alone cannot tell whether they pin down the program, because that depends on a structure the agent picks. For Broadside engagements and for Anoptic work, handing agents a skeleton is cheap and lets a smaller model do work that otherwise needs a large one.

## Key ideas

- **Structure first, behavior second.** An agent's chosen decomposition fixes a class of candidate programs; tests then select one within that class, so a test suite that suffices for one structure can leave another badly underdetermined.
- **Control-problem model.** AI-assisted coding is modeled as control, and skeletons are shown to reduce, exponentially in the theory, the number of tests needed to steer to an acceptable program.
- **Helps even with an oracle.** When the agent can query a complete reference implementation, adding a skeleton still cuts mean test error by up to 27%.
- **Less erosion.** Skeletons reduce code erosion by 24.7% on average.

## Caveats

Four models and three benchmarks; the headline gain is for the best-performing skeletons, so how much a typical developer-written skeleton helps is still open. Exponential reduction is a theoretical bound, not the measured gain.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.38214
- PDF: https://arxiv.org/pdf/2610.38214
