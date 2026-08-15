---
title: "A Calculus of Communicating Systems"
authors:
  - "Robin Milner"
year: 1980
venue: "LNCS 92"
arxiv: null
doi: "10.1007/3-540-10235-3"
source: "https://link.springer.com/book/10.1007/3-540-10235-3"
topics:
  - concurrency
  - archive
seed_rank: 43
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hand_topup"
relevance_score: 10
cites:
  - title: "Communicating Sequential Processes"
    url: "https://doi.org/10.1145/359576.359585"
    year: 1978
    arxiv: null
    doi: "10.1145/359576.359585"
see:
  - "046-communicating-sequential-processes"
---

# A Calculus of Communicating Systems

## One-sentence takeaway

Milner’s CCS is an algebra of concurrent processes — prefix, sum, parallel composition, restriction, relabelling — quotiented by observational equivalence (bisimulation), the process-calculus twin of Hoare’s CSP.

## Why it matters here

GRID COMMAND systems and Broadside agent pipelines are named processes that synchronize on channels. CCS is the compositional vocabulary; later π-calculus adds mobility, but the observational-equivalence idea starts here.

## Key ideas

- Syntax is small on purpose: `a.P`, `P + Q`, `P | Q`, restriction, and a nil process. Synchronization happens when complementary actions `a` and `ā` meet.
- Semantics is given by labelled transition systems; *observation equivalence* (bisimulation) identifies processes that cannot be told apart by an experimenter.
- Communication trees and expansion theorems let you rewrite a parallel system into a sequential sum — the algebraic payoff.
- Determinacy and confluence get their own chapters; they are the process-calculus cousins of “this pipeline has no races.”
- Springer LNCS 92, ISBN 3-540-10235-3, DOI 10.1007/3-540-10235-3. Later restated in *Communication and Concurrency* (1989).

## Caveats

## Links

- DOI: [10.1007/3-540-10235-3](https://doi.org/10.1007/3-540-10235-3)
- Springer: https://link.springer.com/book/10.1007/3-540-10235-3
