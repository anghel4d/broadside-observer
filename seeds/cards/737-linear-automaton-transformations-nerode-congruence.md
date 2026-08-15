---
title: Linear Automaton Transformations
authors:
  - Anil Nerode
year: 1958
venue: Proceedings of the AMS
arxiv: null
doi: 10.1090/S0002-9939-1958-0135681-9
source: "https://doi.org/10.1090/S0002-9939-1958-0135681-9"
topics:
  - automata
  - myhill-nerode
seed_rank: 737
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 8
lineage: algorithms-and-complexity
cites: []
see: []
---

# Linear Automaton Transformations

## One-sentence takeaway

Nerode’s right-congruence on strings — \(x \sim_L y\) iff for every continuation \(z\), \(xz \in L \Leftrightarrow yz \in L\) — has finite index exactly when \(L\) is regular.

## Why it matters here

This is the canonical minimality criterion for DFAs: the congruence classes *are* the states of the unique minimal automaton. Compilers, protocol recognizers, and any Anoptic lexer/parser sit on this fact.

## Key ideas

- The Nerode congruence is a right congruence; finite index iff the language is regular.
- The quotient automaton is unique up to isomorphism among deterministic recognizers.
- The paper’s title is about linear transformations realized by automata; the congruence is the tool that became the theorem.
- Myhill 1957 is the independent companion; Rabin–Scott 1959 is the decision-problem sequel.
- Proc. Amer. Math. Soc. 9(4), August 1958, pp. 541–544.

## Caveats

## Links

- DOI: [10.1090/S0002-9939-1958-0135681-9](https://doi.org/10.1090/S0002-9939-1958-0135681-9)
- AMS: https://www.ams.org/journals/proc/1958-009-04/S0002-9939-1958-0135681-9/
