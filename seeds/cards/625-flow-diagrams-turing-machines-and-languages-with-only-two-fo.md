---
title: "Flow Diagrams, Turing Machines and Languages with Only Two Formation Rules"
authors:
  - "Corrado Böhm"
  - "Giuseppe Jacopini"
year: 1966
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/355592.365646"
source: "https://doi.org/10.1145/355592.365646"
topics:
  - structured-programming
  - bohm-jacopini
  - goto
seed_rank: 625
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "On Computable Numbers, with an Application to the Entscheidungsproblem"
    url: "https://doi.org/10.1112/plms/s2-42.1.230"
    year: 1936
    arxiv: null
    doi: "10.1112/plms/s2-42.1.230"
see:
  - "515-on-computable-numbers-with-an-application-to-the-entscheidun"
---

# Flow Diagrams, Turing Machines and Languages with Only Two Formation Rules

## One-sentence takeaway

Böhm and Jacopini prove that every flowchart is equivalent to one built from composition and if-then-else (plus a loop), so a language with those two formation rules is already Turing-complete.

## Why it matters here

Theorem behind Dijkstra’s goto culture war and behind every structured-IR claim. Anoptic/ano control flow does not need arbitrary jumps to be computationally complete — though Knuth 1974 will argue completeness is not the same as convenience.

## Key ideas

- A normal-form transformation takes an arbitrary flow diagram to one that uses only sequence, selection, and iteration.
- The corresponding programming language needs only two formation rules and still simulates a Turing machine.
- Extra Boolean variables / flags are allowed in the reduction — the source of later “yes but look at the flags” objections.
- CACM 9(5), 1966, pp. 366–371.

## Caveats

## Links

- DOI: [10.1145/355592.365646](https://doi.org/10.1145/355592.365646)
