---
title: "Über die Bausteine der mathematischen Logik"
authors:
  - "Moses Schönfinkel"
year: 1924
venue: "Mathematische Annalen"
arxiv: null
doi: "10.1007/BF01458017"
source: "https://doi.org/10.1007/BF01458017"
topics:
  - combinatory-logic
  - schonfinkel
  - abstraction-elimination
seed_rank: 496
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 10
lineage: foundations-of-computing
---

# Über die Bausteine der mathematischen Logik

## One-sentence takeaway

Schönfinkel eliminates bound variables by showing that a handful of combinators — especially \(S\) and \(K\) — generate all applicative combinations, so abstraction is a compilable, not primitive, operation.

## Why it matters here

Direct ancestor of SKI calculi, graph reduction, and "compile lambda to combinators" pipelines still used in FP VMs Anoptic might emit.

## Key ideas

- A complete basis for logic without bound variables: application plus a small set of higher-order constants.
- Anticipates Curry's systematic combinatory logic (1930) and Church's λ-calculus as a parallel variable-free foundation.
- The compiler insight: any λ-term can be rewritten to combinators, so environments and capture-avoiding substitution are eliminable.
- *Math. Ann.* 92:305–316, 1924; presented by Bernays after Schönfinkel left academic life.

## Caveats

## Links

- DOI: [10.1007/BF01458017](https://doi.org/10.1007/BF01458017)
