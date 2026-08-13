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
seed_rank: 981
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: Nondeterministic Space is Closed Under Complement
  url: "https://doi.org/10.1137/0217058"
  year: 1988
  arxiv: null
  doi: 10.1137/0217058
  card: 982-nondeterministic-space-is-closed-under-complement
- title: The Method of Forced Enumeration for Nondeterministic Automata
  url: "https://doi.org/10.1007/BF00280712"
  year: 1988
  arxiv: null
  doi: 10.1007/BF00280712
  card: 983-the-method-of-forced-enumeration-for-nondeterministic-automa
---

# Relationships Between Nondeterministic and Deterministic Tape Complexities

## One-sentence takeaway

Savitch’s theorem: NSPACE(s) ⊆ DSPACE(s²) for space-constructible s.

## Why it matters here

Classic space-simulation result every complexity course meets.

## Key ideas

- Recursive reachability on configuration graphs.
- Quadratic deterministic simulation of nondeterminism.
- Implies NPSPACE = PSPACE.
- Template for configuration-graph algorithms.

## Caveats

- Whether NSPACE(s)=DSPACE(s) remains open in general.
- Constructibility matters in fine analyses.

## Links

- DOI: [10.1016/S0022-0000(70)80006-X](https://doi.org/10.1016/S0022-0000(70)80006-X)
- URL: https://doi.org/10.1016/S0022-0000(70)80006-X
