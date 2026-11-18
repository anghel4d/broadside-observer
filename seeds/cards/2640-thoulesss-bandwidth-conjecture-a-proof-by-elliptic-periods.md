---
title: "Thouless's bandwidth conjecture: a proof by elliptic periods"
authors:
  - "Yongqiang Zhao"
year: 2026
venue: "arXiv preprint (math-ph)"
arxiv: "2611.19723"
doi: null
source: "https://arxiv.org/abs/2611.19723"
version_reviewed: "v1"
topics:
  - "hofstadter-butterfly"
  - "almost-mathieu-operator"
  - "spectral-theory"
  - "elliptic-curves"
  - "ai-assisted-mathematics"
seed_rank: 2640
seed_batch: "curiosity-2026-11-19"
reviewed: "2026-11-18"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "Thouless's bandwidth conjecture: a proof by elliptic periods"
    url: "https://arxiv.org/abs/2611.19723"
    year: 2026
    arxiv: "2611.19723"
    doi: null
  - title: "Bandwidths for a quasiperiodic tight-binding model"
    url: "https://doi.org/10.1103/PhysRevB.28.4272"
    year: 1983
    arxiv: null
    doi: "10.1103/PhysRevB.28.4272"
  - title: "Energy levels and wave functions of Bloch electrons in rational and irrational magnetic fields"
    url: "https://doi.org/10.1103/PhysRevB.14.2239"
    year: 1976
    arxiv: null
    doi: "10.1103/PhysRevB.14.2239"
  - title: "On the total bandwidth for the rational Harper's equation"
    url: "https://doi.org/10.1007/BF02101237"
    year: 1995
    arxiv: null
    doi: "10.1007/BF02101237"
  - title: "Zero measure spectrum for the almost Mathieu operator"
    url: "https://doi.org/10.1007/BF02101708"
    year: 1994
    arxiv: null
    doi: "10.1007/BF02101708"
  - title: "On Thouless bandwidth formula in the Hofstadter model"
    url: "https://arxiv.org/abs/1703.09634"
    year: 2017
    arxiv: "1703.09634"
    doi: null
---

# Thouless's bandwidth conjecture: a proof by elliptic periods

## One-sentence takeaway

For the critical Harper (almost Mathieu) operator at rational flux p/q, q times the total length of the spectral bands, which is the width of a horizontal slice of the Hofstadter butterfly, tends to 32G/π ≈ 9.33, where G is Catalan's constant, uniformly in p. This proves Thouless's 1983 conjecture.

## Why it's lovely

The Hofstadter butterfly is one of the best-known pictures in physics: electron energy bands on a lattice in a magnetic field, drawn against the flux, form a nested Cantor-like butterfly. Thouless noticed numerically in 1983 that at flux p/q the bands have total width about 9.33/q, and later suggested the exact constant 32G/π. That is unexpected, because Catalan's constant also gives the entropy of spanning trees on the square lattice. The AI disclosure credits the author with the main idea of linking the bandwidth to the matrix-tree theorem and to square-lattice spanning-tree entropy. The proof then goes through a compact genus-one (elliptic) family and its periods. This is a curiosity keeper with no direct engine link, though graph Laplacians and spanning-tree counting will be familiar to anyone who has worked on meshes.

## Key ideas

- **Operator.** (Hu)_n = u_{n+1} + u_{n−1} + 2cos(2παn + ϑ)u_n with α = p/q. S_{p,q} is the union of the spectra over all phases ϑ, and |S_{p,q}| is the total bandwidth.
- **Theorem.** lim_{q→∞} sup_p |q·|S_{p,q}| − 32G/π| = 0 over reduced p/q. It therefore holds along every rational sequence that approaches an irrational, whatever its continued fraction.
- **Earlier bounds.** The Last–Wilkinson sum rule gives |S| ≥ 4/q. Last (1994) proved 2(√5+1)/q < |S| < 8e/q. Helffer–Kerdelhué proved the asymptotic only for 1/q and for 2/q with q odd.
- **Route.** A universal limit of the normalized even coarea density determines the bandwidth. An exact finite-matrix formula reduces this local law to one normalized period for each fixed odd numerator. That period comes from a compact genus-one family whose period equation is fixed by nodal-annulus calculations.
- **Uniformity.** An exact rational Fourier identity and uniform closed-path bounds extend the result to all reduced numerators and both parities of the denominator.

## Caveats

I read the abstract, introduction and AI disclosure of v1 (Sunday 15 Nov 2026); the paper is not refereed. It is 71 pages by a single author, and the author used ChatGPT and Codex for proof strategies, checking calculations, literature search and exposition. The result concerns only the critical coupling and the total bandwidth, not finer structure of the butterfly.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.19723
- PDF: https://arxiv.org/pdf/2611.19723
- Thouless 1983, Bandwidths for a quasiperiodic tight-binding model: https://doi.org/10.1103/PhysRevB.28.4272
