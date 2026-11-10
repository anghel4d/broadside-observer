---
title: "Cube tilings, partition counters, and the Calkin–Wilf and Kepler trees"
authors:
  - "Jarosław Grytczuk"
  - "Andrzej P. Kisielewicz"
  - "Krzysztof Przesławski"
year: 2026
venue: "arXiv preprint (math.CO, math.MG, math.NT)"
arxiv: "2611.12239"
doi: null
source: "https://arxiv.org/abs/2611.12239"
topics:
  - "cube-tilings"
  - "sterns-diatomic-sequence"
  - "calkin-wilf-tree"
  - "lattice-tilings"
  - "finite-fourier-analysis"
seed_rank: 2552
seed_batch: "curiosity-2026-11-11"
reviewed: "2026-11-11"
pool: "maths-foundations"
relevance_score: 7
cites:
  - title: "Recounting the rationals"
    url: "https://doi.org/10.1080/00029890.2000.12005205"
    year: 2000
    arxiv: null
    doi: "10.1080/00029890.2000.12005205"
  - title: "Local fluctuations, majorization, and nontransitivity in cube tilings of Z^d"
    url: "https://arxiv.org/abs/2611.09844"
    year: 2026
    arxiv: "2611.09844"
    doi: null
see: []
---

# Cube tilings, partition counters, and the Calkin–Wilf and Kepler trees

## One-sentence takeaway

Tile \(\mathbb{Z}^d\) with translates of the discrete cube \(\{0,1\}^d\), count how many pieces each translate of the cube is cut into, and for the right lattice tiling that counter is a row of Stern's diatomic sequence, so pairs of counter values enumerate every positive rational once (the Calkin–Wilf tree) and complementary binary words give Kepler's 1619 tree of fractions.

## Why it's lovely

Three old friends (Hajós-style cube tilings, Stern's 1858 sequence and Kepler's Harmonices Mundi tree) turn out to be the same object seen from different sides. The counter has a startlingly rigid sum: over any translate of the cube it equals \(3^d\), whatever the tiling. The geometry then "supplies" the Kepler tree by itself, through face partitions the tiling cuts. The second half is a nice inverse problem solved with finite Fourier analysis: does the counter's cyclic profile remember the lattice? Yes up to reflections, because \(1+t+t^{-1}\) never vanishes at 2-power roots of unity. For Anoptic's tile and voxel tooling it is a small, exact counting identity about how aligned blocks overlap a window, which is the kind of fact that shows up in sparse-grid and cascade bookkeeping.

## Key ideas

- **Partition counter.** \(\ell_T(x)\) counts subcubes that tiles cut from \(K_d+x\); equivalently, black unit cubes touching a unit cube. Its sum over any translate of \(K_d\) is \(3^d\) for every tiling.
- **Cocyclic lattices.** A lattice tiling with cyclic quotient is the solution set of one normalized congruence \(\sum w_i x_i\equiv 0 \pmod{2^d}\), and its counter is determined by the profile along one generator.
- **Stern rows.** For \(\Lambda^b_d=\{x:\sum 2^{d-i}x_i\equiv 0 \pmod{2^d}\}\), \(\ell(k e_d)=s(2^d+k)\), so \(v\mapsto\pi(v)/\pi(\bar v)\) is the Calkin–Wilf tree and its words ending in 0 give the Kepler tree.
- **Profile rigidity.** Two standard cocyclic cube-tiling lattices share an ordered cyclic profile iff they differ by coordinate reflections, giving exactly \(2^{(d-2)(d-3)/2}\) profiles for \(d\ge 2\).
- **Boxes.** For tilings by discrete boxes the Fourier factors become Dirichlet kernels, and the paper determines exactly when the profile still determines the lattice.

## Caveats

Pure combinatorics with no algorithmic payoff claimed; the bridge to engine bookkeeping is my own analogy. The geometric forcing of the Kepler tree (Section 7) is intricate, and I read the introduction and main theorem statements, not every proof.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.12239
- PDF: https://arxiv.org/pdf/2611.12239
- Calkin and Wilf, Recounting the rationals: https://doi.org/10.1080/00029890.2000.12005205
- Companion paper (Kisielewicz): https://arxiv.org/abs/2611.09844
- OEIS A002487 (Stern's diatomic sequence): https://oeis.org/A002487
