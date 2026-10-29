---
title: "Native Rectangular Linear Assignment with Implicit Rejection: A Jonker-Volgenant Solver without Square Expansion"
authors:
  - "Ratha Siv"
year: 2026
venue: "arXiv preprint (cs.MS)"
arxiv: "2610.35948"
doi: null
source: "https://arxiv.org/abs/2610.35948"
topics:
  - "assignment-problem"
  - "rts-target-assignment"
  - "numerical-software"
seed_rank: 2457
seed_batch: "craft-2026-10-29"
reviewed: "2026-10-29"
pool: "game-ai"
lineage: algorithms-and-complexity
relevance_score: 7
cites:
  - title: "Native Rectangular Linear Assignment with Implicit Rejection: A Jonker-Volgenant Solver without Square Expansion"
    url: "https://arxiv.org/abs/2610.35948"
    year: 2026
    arxiv: "2610.35948"
    doi: null
see: ["2446-coordinated-unit-movement", "2437-combinatorial-minimum-cost-flow-in-almost-linear-time-on-dense-graphs", "807-paths-trees-and-flowers"]
---

# Native Rectangular Linear Assignment with Implicit Rejection: A Jonker-Volgenant Solver without Square Expansion

## One-sentence takeaway

For N-by-M assignment where leaving an item unmatched costs a fixed penalty, you don't need to pad to an (N+M)-square matrix; a Jonker-Volgenant shortest-path search can represent "reject" with one terminal distance and one predecessor row, turning a 144.5 MiB padded problem back into the real 8 MiB one.

## Why it matters here

RTS games solve this problem constantly: units to targets, units to formation slots, workers to jobs, with "stay idle" as the rejection option. The usual trick (pad the matrix with dummy rows and columns) blows up memory and cache traffic exactly when N and M are lopsided, which is the normal RTS case (a squad against a city's worth of targets). This is a small, practical, certified recipe that slots into a SoA job system, and it comes with a primal-dual certificate so results can be checked cheaply.

## Key ideas

- **Implicit rejection.** One extra terminal node in the shortest-path search stands for "leave unmatched" at a uniform penalty; no square expansion.
- **One-sided objective with a primal-dual certificate**, derived from established rectangular and optional-assignment formulations.
- **Implementations** in Rust, C++ and a Rust/C++ hybrid with native batching, all checked against exhaustive enumeration.
- **Benchmarks.** 8,946 timing samples per environment across 204 cases, including 5000-square matrices and extreme aspect ratios; the Rust version beats capped-cost SciPy in nine of ten formulation cases.

## Caveats

Single author, single Windows/Intel host. There is a stated counterexample: on congested instances, capped SciPy is about 9x faster, so this is not a universal win. The penalty must be uniform; per-item rejection costs need a different formulation.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.35948
- PDF: https://arxiv.org/pdf/2610.35948
