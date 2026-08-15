---
title: "Formal reductions of the general combinatorial decision problem"
authors:
  - "Emil L. Post"
year: 1943
venue: "American Journal of Mathematics"
arxiv: null
doi: "10.2307/2371809"
source: "https://doi.org/10.2307/2371809"
topics:
  - tag-systems
  - post
  - undecidability
seed_rank: 533
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "Finite Combinatory Processes—Formulation I"
    url: "https://doi.org/10.2307/2268534"
    year: 1936
    arxiv: null
    doi: "10.2307/2268534"
  - title: "Recursive Unsolvability of a Problem of Thue"
    url: "https://doi.org/10.2307/2267226"
    year: 1947
    arxiv: null
    doi: "10.2307/2267226"
  - title: "Recursively enumerable sets of positive integers and their decision problems"
    url: "https://doi.org/10.1090/S0002-9904-1944-08111-1"
    year: 1944
    arxiv: null
    doi: "10.1090/S0002-9904-1944-08111-1"
  - title: "Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I"
    url: "https://doi.org/10.1145/367177.367199"
    year: 1960
    arxiv: null
    doi: "10.1145/367177.367199"
see:
  - "532-finite-combinatory-processes-formulation-i"
  - "535-recursive-unsolvability-of-a-problem-of-thue"
  - "534-recursively-enumerable-sets-of-positive-integers-and-their-d"
  - "575-recursive-functions-of-symbolic-expressions-and-their-comput"
---

# Formal reductions of the general combinatorial decision problem

## One-sentence takeaway

Post isolates tag systems—read a fixed prefix, append a word that depends on it, repeat—and shows that general combinatorial decision problems reduce to them.

## Why it matters here

Tag systems are the minimal "rewrite as computation" object. Anoptic procedural generation, string-diagram rewriting, and any later production-rule engine sit on this grain: a tiny local rewrite with undecidable global behaviour.

## Key ideas

- A tag system has a deletion number \(\beta\) and a production for each alphabet symbol; each step deletes the first \(\beta\) symbols and appends the production of the first.
- Post shows how apparently richer combinatorial decision problems reduce to the halting/reachability question for tag systems.
- The paper is the bridge from the 1936 combinatory-process formulation to the 1947 unsolvability of Thue's word problem and to the later Post correspondence problem.
- Simple rewriting, hard undecidability: the same moral as later term-rewriting and cellular-automaton universality results.

## Caveats

## Links

- DOI: [10.2307/2371809](https://doi.org/10.2307/2371809)
- JSTOR: https://www.jstor.org/stable/2371809
