---
title: The Method of Forced Enumeration for Nondeterministic Automata
authors:
  - Róbert Szelepcsényi
year: 1988
venue: Acta Informatica
arxiv: null
doi: 10.1007/BF00280712
source: "https://doi.org/10.1007/BF00280712"
topics:
  - complexity
  - szelepcsenyi
  - nl
seed_rank: 732
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 9
lineage: algorithms-and-complexity
cites:
  - title: Relationships Between Nondeterministic and Deterministic Tape Complexities
    url: "https://doi.org/10.1016/S0022-0000(70)80006-X"
    year: 1970
    arxiv: null
    doi: 10.1016/S0022-0000(70)80006-X
see:
  - "730-relationships-between-nondeterministic-and-deterministic-tap"
---

# The Method of Forced Enumeration for Nondeterministic Automata

## One-sentence takeaway

Forced enumeration of a nondeterministic automaton’s reachable configurations independently proves that nondeterministic space is closed under complement.

## Why it matters here

Cite jointly with Immerman as the Immerman–Szelepcsényi theorem. Same collapse (NL = coNL); different write-up, via automata rather than inductive counting language.

## Key ideas

- A nondeterministic automaton’s configuration set can be enumerated in nondeterministic logspace once its cardinality is known.
- “Forced enumeration” uses that count to certify both membership and non-membership.
- The consequence is \(\mathrm{NSPACE}(s) = \mathrm{coNSPACE}(s)\), matching Immerman 1988.
- Savitch’s configuration-graph simulation is the shared ancestor.
- Acta Informatica 26, 1988, pp. 279–284. Does not collapse NP/coNP.

## Caveats

## Links

- DOI: [10.1007/BF00280712](https://doi.org/10.1007/BF00280712)
- Springer: https://link.springer.com/article/10.1007/BF00280712
