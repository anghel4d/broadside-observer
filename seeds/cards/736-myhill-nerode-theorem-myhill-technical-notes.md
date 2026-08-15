---
title: "Finite Automata and the Representation of Events"
authors:
  - John Myhill
year: 1957
venue: "WADC Technical Report 57-624"
arxiv: null
doi: null
source: "https://books.google.com/books?id=QjZwISLU4rAC"
topics:
  - automata
  - myhill-nerode
seed_rank: 736
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 8
lineage: algorithms-and-complexity
cites: []
see: []
---

# Finite Automata and the Representation of Events

## One-sentence takeaway

Myhill’s 1957 WADC notes characterize regular events by a finite-index equivalence on strings — the Myhill half of the Myhill–Nerode theorem.

## Why it matters here

DFA minimization and “is this protocol regular?” questions in compilers, netcode, and agent scripts rest on this algebraic criterion. Pair with Nerode 1958; textbooks polish the statement this report first writes down.

## Key ideas

- Two strings are equivalent relative to an event if no continuation distinguishes them; regularity is finite index of that relation.
- The equivalence classes are the states of a canonical automaton recognizing the event.
- The write-up is a chapter in *Fundamental Concepts in the Theory of Systems*, WADC TR 57-624, pp. 112–137 (ASTIA AD 155741).
- Nerode’s 1958 congruence paper is the independent companion; Rabin–Scott 1959 is the decision-problem sequel.
- Original notes are less accessible than Hopcroft–Ullman; the theorem name is Myhill–Nerode.

## Caveats

## Links

- Google Books volume: https://books.google.com/books?id=QjZwISLU4rAC
- CiNii record: https://cir.nii.ac.jp/crid/1570854176000165888
