---
title: A Machine-Independent Theory of the Complexity of Recursive Functions
authors:
  - Manuel Blum
year: 1967
venue: JACM
arxiv: null
doi: 10.1145/321386.321395
source: "https://doi.org/10.1145/321386.321395"
topics:
  - complexity
  - blum-axioms
seed_rank: 729
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 9
lineage: algorithms-and-complexity
cites:
  - title: On the Computational Complexity of Algorithms
    url: "https://doi.org/10.1090/S0002-9947-1965-0170805-7"
    year: 1965
    arxiv: null
    doi: 10.1090/S0002-9947-1965-0170805-7
see:
  - "728-on-the-computational-complexity-of-algorithms"
---

# A Machine-Independent Theory of the Complexity of Recursive Functions

## One-sentence takeaway

Two axioms on an abstract complexity measure imply speed-up and gap theorems that hold for any reasonable cost — time, space, or otherwise.

## Why it matters here

When someone claims a result is “model-independent,” this is the standard they have to meet. Blum’s axioms are the backbone of structural complexity; they will not design your pathfinder, but they tell you which phenomena cannot be an artifact of Turing-machine accounting.

## Key ideas

- A complexity measure \(\Phi\) must be recursive to check and must be finite exactly on the domain of the underlying partial recursive function.
- The Blum speed-up theorem: some functions have no fastest program; any program can be beaten by more than a given recursive factor.
- The theory is deliberately machine-independent: the same theorems apply to time, space, or other measures satisfying the axioms.
- Hartmanis–Stearns concrete time complexity is the cited precursor being abstracted.
- JACM 14(2), April 1967, pp. 322–336.

## Caveats

## Links

- DOI: [10.1145/321386.321395](https://doi.org/10.1145/321386.321395)
- ACM: https://dl.acm.org/doi/10.1145/321386.321395
