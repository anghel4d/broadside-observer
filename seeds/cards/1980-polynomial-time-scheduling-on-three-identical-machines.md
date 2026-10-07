---
title: "Polynomial-time scheduling on three identical machines"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 124; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-polynomial-time-algorithm-for-three-machine-unit-job-scheduling-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1980
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "A Polynomial-Time Algorithm for Three-Machine Unit-Job Scheduling"
    url: "https://github.com/openai/math/blob/main/preprints/A-polynomial-time-algorithm-for-three-machine-unit-job-scheduling-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Polynomial-time scheduling on three identical machines

## One-sentence takeaway

OpenAI's result family 124 (Theoretical computer science) claims: Resolves the three-processor unit-job scheduling problem of Garey and Johnson: a deterministic polynomial-time algorithm minimizes makespan for nonpreemptive unit-length jobs with arbitrary precedence constraints on three identical parallel machines.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): For an explicitly given precedence graph, it decides deadline feasibility exactly and constructs a feasible schedule.
- *A Polynomial-Time Algorithm for Three-Machine Unit-Job Scheduling*: We give a uniform deterministic polynomial-time algorithm for scheduling unit-length jobs with arbitrary precedence constraints on three identical parallel machines. The algorithm constructs a schedule of minimum makespan and decides exactly whether all jobs can finish by a specified deadline. The proof reorganizes feasible schedules into intervals whose job sets have descriptions of bounded size.
- Lean scope (lean/docs/124.md): The formalization gives a deterministic polynomial-time algorithm for scheduling nonempty collections of unit-length jobs with arbitrary acyclic precedence constraints on three identical parallel machines. It constructs a schedule of minimum makespan and decides exactly whether a valid specified deadline can be met.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A Polynomial-Time Algorithm for Three-Machine Unit-Job Scheduling](https://github.com/openai/math/blob/main/preprints/A-polynomial-time-algorithm-for-three-machine-unit-job-scheduling-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/124.md
- Comparator statement (Optimal three-machine unit-job scheduling): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ThreeMachine.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
