---
title: Relationships Between Nondeterministic and Deterministic Tape Complexities
authors:
  - Walter J. Savitch
year: 1970
venue: Journal of Computer and System Sciences
arxiv: null
doi: 10.1016/S0022-0000(70)80006-X
source: "https://doi.org/10.1016/S0022-0000(70)80006-X"
topics:
  - complexity
  - savitch
  - space
seed_rank: 730
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

# Relationships Between Nondeterministic and Deterministic Tape Complexities

## One-sentence takeaway

Savitch’s theorem: \(\mathrm{NSPACE}(s(n)) \subseteq \mathrm{DSPACE}(s(n)^2)\) for space-constructible \(s(n) \ge \log n\), so NPSPACE = PSPACE.

## Why it matters here

Configuration-graph reachability is how you turn a nondeterministic space-bounded guess into a deterministic recursive search. The same skeleton shows up whenever Anoptic explores a huge implicit graph (nav, dependency, proof search) under a tight memory budget.

## Key ideas

- The configuration graph of an \(s(n)\)-space machine has out-degree two and diameter at most exponential in \(s(n)\).
- Recursive midpoint reachability uses \(O(s(n))\) bits per stack frame and \(O(s(n))\) depth, hence quadratic deterministic space.
- As a corollary, nondeterministic polynomial space equals deterministic polynomial space.
- Whether \(\mathrm{NSPACE}(s)=\mathrm{DSPACE}(s)\) in general remains open; Immerman–Szelepcsényi later closes complementation, not determinism.
- JCSS 4(2), 1970, pp. 177–192.

## Caveats

## Links

- DOI: [10.1016/S0022-0000(70)80006-X](https://doi.org/10.1016/S0022-0000(70)80006-X)
