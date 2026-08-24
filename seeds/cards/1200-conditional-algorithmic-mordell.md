---
title: "Conditional algorithmic Mordell"
authors:
  - "Levent Alpoge"
  - "Brian Lawrence"
year: 2024
venue: "arXiv preprint"
arxiv: "2408.11653"
doi: null
source: "https://arxiv.org/abs/2408.11653"
topics:
  - "arithmetic-geometry"
  - "number-theory"
seed_rank: 1200
seed_batch: "alpoge-math-2026-08-24"
reviewed: "2026-08-24"
pool: "maths-foundations"
relevance_score: 10
lineage: arithmetic-geometry
cites:
  - title: "Rank stability in quadratic extensions and Hilbert's tenth problem for the ring of integers of a number field"
    url: "https://arxiv.org/abs/2501.18774"
    year: 2025
    arxiv: "2501.18774"
    doi: "10.1007/s00222-025-01392-3"
see:
  - "1199-rank-stability-in-quadratic-extensions-and-hilbert-s-tenth-pro"
---

# Conditional algorithmic Mordell

## One-sentence takeaway

A Turing machine that, if it halts, outputs C(K) for a hyperbolic curve over a number field, and that is guaranteed to halt if Hodge, Tate, and Fontaine-Mazur hold — "literally the world's worst algorithm," and the first that is even conditionally complete.

## Why it's lovely

Faltings is ineffective. This paper writes down T_Mordell and T_Shafarevich whose termination is implied by standard motivic conjectures. Homepage: assume whatever is expected to be true — can you then specify an algorithm that finds all integral or rational solutions of a polynomial in two variables?

## Problem

Effective Mordell / effective Shafarevich: list the K-points, or the g-dimensional abelian varieties over K with good reduction outside S. Unconditional algorithms exist only in special cases (modularity cards).

## Design

T_Shafarevich enumerates polarised g-dimensional A/K with good reduction outside S; T_Mordell reduces rational points on a hyperbolic curve to that machine. Correctness of output does not need the conjectures; termination does.

## Evidence

arXiv:2408.11653, 21 Aug 2024. No journal as of ingest. Joint with Brian Lawrence (also the thesis Part II).

## Limitations

Conditional. Runtime is not a feature. Do not confuse with 1199, which is unconditional undecidability of H10.

## Implications for Broadside

The effectivity counterpart of the H10 paper. See 1206 / 1203 for unconditional special cases (GL2-type / Hilbert modular).

## Bottom line

Mint the preprint. One card; thesis chapter is the same result.

## Links

- arXiv: [2408.11653](https://arxiv.org/abs/2408.11653)
