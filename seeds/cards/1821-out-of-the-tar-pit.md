---
title: "Out of the Tar Pit"
authors:
  - "Ben Moseley"
  - "Peter Marks"
year: 2006
venue: "unpublished / papers-we-love"
arxiv: null
doi: null
source: "https://raw.githubusercontent.com/papers-we-love/papers-we-love/master/design/out-of-the-tar-pit.pdf"
topics:
  - complexity
  - functional-programming
  - relational-model
  - state-management
seed_rank: 1821
seed_batch: "archive-2026-09-14"
reviewed: "2026-09-14"
pool: "languages"
relevance_score: 9
lineage: accidental-complexity
cites:
  - title: "Why Functional Programming Matters"
    url: "https://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf"
    year: 1989
    arxiv: null
    doi: null
  - title: "Can Programming Be Liberated from the von Neumann Style? A Functional Style and Its Algebra of Programs"
    url: "https://doi.org/10.1145/359576.359579"
    year: 1978
    arxiv: null
    doi: "10.1145/359576.359579"
  - title: "Comprehending Monads"
    url: "https://doi.org/10.1017/S0956796800000487"
    year: 1992
    arxiv: null
    doi: "10.1017/S0956796800000487"
see:
  - "1793-why-functional-programming-matters"
  - "157-can-programming-be-liberated-from-the-von-neumann-style-a-fu"
  - "644-comprehending-monads"
---

# Out of the Tar Pit

## One-sentence takeaway

Most software complexity is accidental state and control-flow entanglement — attack it with functional core logic plus a relational model of essential state.

## Why it matters here

Anoptic ECS/DOD and ano scripting should keep essential simulation state explicit and minimize accidental mutable glue. GRID COMMAND’s AI orders and Broadside agent memory both suffer when control flow and hidden state sprawl; this essay is the classic diagnosis and FP+relations prescription.

## Key ideas

- **Brooks reframed.** Separates accidental from essential complexity but argues much remaining complexity is still accidental.
- **State as primary culprit.** Implicit mutable state and explicit control-flow management dominate comprehensibility costs.
- **Recommended shape.** Pure functional logic for behavior; Codd-style relations for essential state — avoid OO’s state/behavior coupling as the default.
- **Informal but influential.** Widely circulated systems/FP essay (Feb 2006) that shaped later “functional core, imperative shell” practice.

## Caveats

Unpublished essay, not a refereed PLDI result — treat as design rhetoric with a concrete sketch, not a verified system. Slightly late vs strict pre-2018 Archive center but well inside preferred band. Open papers-we-love PDF verified. Complements Hughes 1793 and Backus 157; does not remint them.

## Links

- papers-we-love PDF: https://raw.githubusercontent.com/papers-we-love/papers-we-love/master/design/out-of-the-tar-pit.pdf
