---
title: "Zum Hilbertschen Aufbau der reellen Zahlen"
authors:
  - "Wilhelm Ackermann"
year: 1928
venue: "Mathematische Annalen"
arxiv: null
doi: "10.1007/BF01459088"
source: "https://doi.org/10.1007/BF01459088"
topics:
  - ackermann-function
  - proof-theory
  - recursion
seed_rank: 492
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "Grundzüge der theoretischen Logik"
    url: "https://link.springer.com/book/10.1007/978-3-642-86848-1"
    year: 1928
    doi: "10.1007/978-3-642-86848-1"
see:
  - "491-grundzuge-der-theoretischen-logik"
---

# Zum Hilbertschen Aufbau der reellen Zahlen

## One-sentence takeaway

Ackermann exhibits a ternary recursive function \(\varphi(a,b,n)\) that iterates addition into multiplication, exponentiation, and beyond, proving there are total computable functions outside the primitive-recursive hierarchy Hilbert needed for a finitary construction of the reals.

## Why it matters here

Shows why "recursive" needs stratification — relevant to totality, termination, and cost models in ano stacks long before Kleene's general recursive functions.

## Key ideas

- Written for Hilbert's higher-type construction of the reals (*Mathematische Annalen* 99:118–133, 1928).
- The original function is ternary; the familiar two-variable \(A(m,n)\) is a later Péter/Robinson simplification, not Ackermann's notation.
- \(\varphi\) is defined by nested recursion and grows faster than every primitive recursive function, so primitive recursion is a proper subclass of the computable.
- Ancestor of the Grzegorczyk hierarchy and of modern arguments that "it terminates" is not the same as "it is primitive recursive."

## Caveats

## Links

- DOI: [10.1007/BF01459088](https://doi.org/10.1007/BF01459088)
