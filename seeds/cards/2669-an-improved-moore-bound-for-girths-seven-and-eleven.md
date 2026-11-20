---
title: "An improved Moore bound for girths seven and eleven"
authors:
  - "Frederik Garbe"
year: 2026
venue: "arXiv preprint (math.CO)"
arxiv: "2611.26037"
doi: null
source: "https://arxiv.org/abs/2611.26037"
version_reviewed: "v1"
topics:
  - "extremal-graph-theory"
  - "moore-bound"
  - "cages"
  - "degree-diameter"
  - "spectral-graph-theory"
seed_rank: 2669
seed_batch: "curiosity-2026-11-21"
reviewed: "2026-11-20"
pool: "maths-foundations"
relevance_score: 7
cites:
  - title: "An improved Moore bound for girths seven and eleven"
    url: "https://arxiv.org/abs/2611.26037"
    year: 2026
    arxiv: "2611.26037"
    doi: null
  - title: "On Moore Graphs with Diameters 2 and 3"
    url: "https://doi.org/10.1147/rd.45.0497"
    year: 1960
    arxiv: null
    doi: "10.1147/rd.45.0497"
see: []
---

# An improved Moore bound for girths seven and eleven

## One-sentence takeaway

A graph with minimum degree d and girth at least 7 needs at least m(d,3) + (1−o(1))d/8 vertices, and for girth 11 the excess grows like Ω(d^{3/5}). This is the first improvement of the 1960 Moore bound by more than an additive constant, and it answers questions of Bollobás (1978) and Bermond–Bollobás (1981).

## Why it's lovely

The Moore bound is the first counting argument people learn in graph theory: run breadth-first search from any vertex and the tree of depth k already needs 1 + d + d(d−1) + … vertices. Graphs that meet it exactly are rare. Hoffman and Singleton showed in 1960 that for girth 5 they exist only in degrees 2, 3, 7 and perhaps 57 (the famous missing Moore graph). Bannai–Ito and Damerell later ruled out every larger odd girth for d ≥ 3. For sixty years nobody could show that you have to pay more than a couple of extra vertices: the best general bound for girth ≥ 7 was the Moore bound + 2 (Bannai–Ito 1981). Garbe shows that the excess tends to infinity with d for girths 7 and 11, and gets matching degree/diameter results: a graph of maximum degree d and diameter 3 misses the Moore bound by Ω(√d). The girth-7 proof is an elementary sharpening of Hoffman–Singleton's own eigenvalue trick, and the key change is replacing A with 2A + I. The result also matters for networks: Moore graphs are ideal interconnects (as many nodes as possible at a given hop count), and this sharpens how close real topologies can get.

## Key ideas

- **Setup.** n(d,k) is the minimum order of a graph with minimum degree d and girth ≥ 2k+1, and m(d,k) = 1 + dΣ_{i<k}(d−1)^i. The excess is n − m.
- **Girth 7.** Every graph of minimum degree d ≥ 3 and girth ≥ 7 has more than m(d,3) + (√d − √2)²/8 vertices, which is (1 − o(1))d/8. Equivalently, excess e forces d < (√(8e) + √2)².
- **Method.** This is the Hoffman–Singleton eigenvalue method. For a d-regular girth-7 graph with excess graph E (vertices at distance ≥ 4), F_d(A) = A³ + A² − 2(d−1)A − (d−1)I = J − B. Every nontrivial eigenvalue λ satisfies |F_d(λ)| ≤ e and sits near one of three roots. Since F_d(−½) = ⅛ for every d, eigenvalues in (−1, 0) are squeezed. The new idea is to work with the shifted matrix 2A + I instead of A, which turns the old additive gains into unbounded ones.
- **Girth 11.** n(d,5) > m(d,5) + c·d^{3/5}, using an auxiliary polynomial that was found by computer search.
- **Degree/diameter.** Graphs with maximum degree d and diameter at most 3 miss the Moore bound by Ω(√d) vertices, with an explicit constant, and diameter 5 gives a deficit of Ω(d^{3/10}). This answers Bermond–Bollobás affirmatively.
- **Context.** Before this, unbounded excess was known only for vertex-transitive graphs (Biggs). For even girth 6, 8 and 12, generalized polygons meet the even Moore bound whenever d−1 is a prime power.

## Caveats

I read the abstract, introduction and AI declaration of v1 (19 Nov 2026); it is not refereed. The bounds are asymptotic in d with fixed girth, and girths 9, 13 and higher are not covered. The degree-57 Moore graph question (girth 5) is untouched. Per the declaration, Claude Opus 5.5 helped sharpen bounds, wrote search code for the k = 5 auxiliary polynomial, and helped with presentation.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.26037
- PDF: https://arxiv.org/pdf/2611.26037
- Hoffman & Singleton (1960): https://doi.org/10.1147/rd.45.0497
