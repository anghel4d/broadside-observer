---
title: "Recursive Unsolvability of a Problem of Thue"
authors:
  - "Emil L. Post"
year: 1947
venue: "Journal of Symbolic Logic"
arxiv: null
doi: "10.2307/2267226"
source: "https://doi.org/10.2307/2267226"
topics:
  - word-problem
  - semi-thue
  - post
  - undecidability
seed_rank: 535
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "Formal reductions of the general combinatorial decision problem"
    url: "https://doi.org/10.2307/2371809"
    year: 1943
    arxiv: null
    doi: "10.2307/2371809"
  - title: "Finite Combinatory Processes—Formulation I"
    url: "https://doi.org/10.2307/2268534"
    year: 1936
    arxiv: null
    doi: "10.2307/2268534"
  - title: "An Unsolvable Problem of Elementary Number Theory"
    url: "https://doi.org/10.2307/2371045"
    year: 1936
    arxiv: null
    doi: "10.2307/2371045"
see:
  - "533-formal-reductions-of-the-general-combinatorial-decision-prob"
  - "532-finite-combinatory-processes-formulation-i"
  - "507-an-unsolvable-problem-of-elementary-number-theory"
---

# Recursive Unsolvability of a Problem of Thue

## One-sentence takeaway

Post proves the word problem for finitely presented semigroups is unsolvable: there is no algorithm that, given a finite set of string equations, decides whether two words are equivalent.

## Why it matters here

Direct ancestor of undecidability in term rewriting, string-diagram rewriting, and any ano/Anoptic tool that treats rewrite rules as a programming language. If the rules can encode a tag system, equality of terms is not a compiler pass.

## Key ideas

- A semi-Thue system is a finite set of productions \(u \to v\) on words; a Thue system is the symmetric case (equations).
- Post reduces an unsolvable combinatorial problem (via the 1943 tag-system work) to "are these two words equivalent modulo the equations?"
- Independently, Markov obtained the same unsolvability in the USSR; the result is often called the Markov–Post theorem.
- Sets up the later Post correspondence problem and the Boone–Novikov unsolvability of the group word problem.

## Caveats

## Links

- DOI: [10.2307/2267226](https://doi.org/10.2307/2267226)
- JSTOR: https://www.jstor.org/stable/2267226
