---
title: "The lattice of antichains of intervals: Dyck paths, level sets, and sweep dimension"
authors:
  - "Paolo Boldi"
  - "Sebastiano Vigna"
year: 2026
venue: "arXiv preprint (math.CO)"
arxiv: "2610.41385"
doi: null
source: "https://arxiv.org/abs/2610.41385"
topics:
  - "order-theory"
  - "information-retrieval"
  - "minimal-interval-semantics"
  - "catalan-combinatorics"
seed_rank: 2499
seed_batch: "curiosity-2026-11-03"
reviewed: "2026-11-03"
pool: "maths"
relevance_score: 7
cites:
  - title: "The lattice of antichains of intervals: Dyck paths, level sets, and sweep dimension"
    url: "https://arxiv.org/abs/2610.41385"
    year: 2026
    arxiv: "2610.41385"
    doi: null
see: []
---

# The lattice of antichains of intervals: Dyck paths, level sets, and sweep dimension

## One-sentence takeaway

The Clarke–Cormack–Burkowski lattice, which is the algebra behind minimal-interval query semantics in search engines, is anti-isomorphic (minus its top) to the Stanley lattice of Dyck paths, with rank equal to \(\binom{n+1}{2}\) minus the path's area; this gives its rank generating function as a reversed \(q\)-Catalan polynomial, proves Takács's asymptotic for the largest level set, and introduces a sweep dimension for intervals in arbitrary posets.

## Why it's lovely

A data structure from search engine internals (the set of minimal text passages that witness a Boolean query) turns out to be a Catalan object, so every query answer over a document of length \(n\) is secretly a mountain range whose area is its rank. Boldi and Vigna built the MG4J and WebGraph systems, so this is engineers finding the classical combinatorics under their own index. For Broadside and ano, it is a reminder that interval and region queries have a clean lattice algebra with lazy operators; the sweep dimension result says how many linear orders, that is how many sort keys or index sweeps, you need to answer interval membership in a partially ordered setting.

## Key ideas

- **Minimal-interval semantics.** A query's answer on a document is the antichain of minimal intervals that satisfy it; Boolean operators become lattice operations.
- **Dyck-path anti-isomorphism.** Explicit and elementary map to the Stanley lattice of Dyck words of semilength \(n+1\); rank is \(\binom{n+1}{2}\) minus area, so the rank generating function is the reversed Carlitz–Riordan \(q\)-Catalan polynomial.
- **Largest level set.** Using a local limit theorem for random-walk excursion area, \(\lambda_n \sim \kappa\,4^{n+1}/(n+1)^3\) with \(\kappa \approx 1.0807\), confirming Takács unconditionally.
- **Sweep dimension.** For a finite poset \(P\), the minimum number of linear orders separating every interval from every element outside it; it equals the Dushnik–Miller dimension of \(P\)'s convex-subset lattice, the least \(k\) embedding intervals as preimages of upper orthants in \(\mathbb{R}^k\), and lies tightly between \(\max(2,w)\) and \(2w\) for width \(w\).
- **Staircases.** Antichains of intervals embed, preserving joins, into \(k\)-dimensional staircase regions.

## Caveats

Pure combinatorics; it explains the structure of an existing query algebra rather than giving a faster index or new operators. The applied payoff for annotative indexing over general posets is suggested, not measured. I read the abstract and introduction (34 pages).

## Links

- arXiv abstract: https://arxiv.org/abs/2610.41385
- PDF: https://arxiv.org/pdf/2610.41385
