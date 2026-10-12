---
title: "Finiteness of planar central configurations of five bodies for all positive masses"
authors:
  - "Tejasvi Singh Tomar"
year: 2026
venue: "arXiv"
arxiv: "2610.13100"
doi: null
source: "https://arxiv.org/abs/2610.13100"
topics:
  - "celestial-mechanics"
  - "n-body"
  - "algebraic-geometry"
  - "lean"
  - "smale-problems"
seed_rank: 2267
seed_batch: "curiosity-2026-10-13"
reviewed: "2026-10-13"
pool: "maths"
relevance_score: 8
cites:
  - title: "Finiteness of planar central configurations of five bodies for all positive masses"
    url: "https://arxiv.org/abs/2610.13100"
    year: 2026
    arxiv: "2610.13100"
    doi: null
see: ["1845-astronomia-ova-kepler-ptolemy-equant-legendre", "1848-lyapunov-stability-polynomial-vector-fields-undecidable"]
---

# Finiteness of planar central configurations of five bodies for all positive masses

## One-sentence takeaway

For every choice of five positive masses, the planar five-body problem has only finitely many central configurations up to similarity, which settles Smale's sixth problem for five bodies in the plane, with exact certificates and a Lean 4 proof of the main theorem.

## Why it's lovely

Central configurations are the shapes a gravitating system can hold while it rotates rigidly or collapses homothetically, and asking whether there are only finitely many is a 1998 Smale problem that was open for five bodies at some masses. The lovely part is the method: tropical-style balancing of valuations at the places at infinity of a hypothetical curve of solutions, then exact rational certificates checked by programs and Lean. It is a clean example of a classical mechanics question closed by exact computer algebra plus a proof assistant, the same pattern of trusted certificates over heavy search that the agents shelf keeps returning to.

## Key ideas

- **Builds on Albouy–Kaloshin.** They proved finiteness for masses outside a closed algebraic set of codimension two; this paper handles the remaining positive masses.
- **Valuation balancing.** Infinitely many central configurations would give an algebraic curve of complex solutions, and at its places at infinity the valuations of the mutual distances must balance. The paper enumerates the possible valuation vectors and the mass conditions under which each can occur.
- **Zero-energy clusters.** Limits where four bodies form a cluster of zero potential energy are handled by expanding the potential, which is constant along the curve, at a place; this rules out one diagram outright and part of another.
- **Exact certificates.** Remaining mass conditions are refuted by exact rational certificates, except on a few one-parameter families treated by hand.
- **Two special rays.** On the rays through (1,4,4,4,4) and (1,1,4,4,4) certificates do not apply (on the first the complex equations really have a continuum of solutions); there the real central configurations are counted directly: 306 and 294 up to orientation-preserving similarity.

## Caveats

Single-author 91-page preprint (Oct 2026), not yet refereed. The Lean formalization covers the main theorem, but trusting it still means trusting the statement's encoding and the external certificate checking. Planar case only; the spatial five-body and general n-body cases stay open.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.13100
- PDF: https://arxiv.org/pdf/2610.13100
- Certificates, checker programs and Lean 4 proof (Zenodo): https://doi.org/10.5281/zenodo.23202861
