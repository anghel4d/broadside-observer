---
title: "A diameter-one set in R^5 that cannot be covered by six diameter-one balls"
authors:
  - "A. Arman"
  - "A. Bondarenko"
  - "A. Prymak"
  - "D. Radchenko"
year: 2026
venue: "arXiv preprint (math.MG)"
arxiv: "2611.08198"
doi: null
source: "https://arxiv.org/abs/2611.08198"
topics:
  - "discrete-geometry"
  - "covering-problems"
  - "borsuk-problem"
  - "ai-assisted-math"
seed_rank: 2531
seed_batch: "curiosity-2026-11-09"
reviewed: "2026-11-09"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "A nine-dimensional counterexample to Borsuk's covering assertion"
    url: "https://github.com/openai/math/blob/main/preprints/A-nine-dimensional-counterexample-to-Borsuks-covering-assertion-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "On Grünbaum's problem for symmetric configurations"
    url: "https://arxiv.org/abs/2607.22032"
    year: 2026
    arxiv: "2607.22032"
    doi: null
  - title: "Convex bodies of constant width with exponential illumination number"
    url: "https://arxiv.org/abs/2304.10418"
    year: 2025
    arxiv: "2304.10418"
    doi: null
see:
  - "2012-borsuk-s-conjecture-fails-in-dimension-nine"
---

# A diameter-one set in R^5 that cannot be covered by six diameter-one balls

## One-sentence takeaway

The Veronese image of the real projective plane, sitting in the five-dimensional space of trace-zero symmetric \(3\times3\) matrices, has diameter 1 but cannot be covered by six balls of diameter 1, so Grünbaum's equal-diameter covering number satisfies \(g_5\ge7\) and the "\(n+1\) balls suffice" guess fails already in dimension five.

## Why it's lovely

It takes the same rank-one-projector trick behind the AI-found nine-dimensional Borsuk counterexample (card 2012), drops from \(\mathbb{R}^4\) to \(\mathbb{R}^3\), and turns the covering question into a picture on the ordinary 2-sphere: a hypothetical cover becomes twelve spherical ellipses in six antipodal pairs, Euler's formula forces them into twelve pentagons, and an area count (each pentagon under \(\pi/3\), twelve of them under \(4\pi\)) kills it. A dodecahedron then shows the same set can be split into six pieces of smaller diameter, so the example cleanly separates ball covering from Borsuk partitioning. The distance identity \(\|p(u)-p(v)\|^2 = 1-(u\cdot v)^2\) is the kind of one-line embedding that makes the whole thing feel inevitable. The authors disclose that the example itself was found with generative AI tools and the proofs are theirs, which continues the AI-maths thread this library is tracking.

## Key ideas

- **The set.** \(p(u)=(uu^T-I/3)/\sqrt2\) for \(u\in S^2\); diameter 1 is attained exactly at orthogonal pairs, and the convex hull is the full-dimensional body of trace-one PSD matrices (shifted), with the same non-covering property.
- **Reduction to the sphere.** Each ball of radius 1/2 pulls back to a spherical ellipse; a six-ball cover gives twelve ellipses in antipodal pairs covering \(S^2\).
- **Euler's formula and area.** The intersection structure forces twelve pentagonal regions, each inside the spherical convex hull of five ellipse points with area below \(\pi/3\); twelve of those cannot cover \(4\pi\). Section 5 gives an alternative topological proof of the intersection structure.
- **Finite and robust.** A finite subset of diameter 1 cannot be covered by six closed balls even of radius 0.50001.
- **Not a Borsuk counterexample.** A regular dodecahedron (opposite faces paired) partitions the set into six pieces of diameter at most \(2\sqrt2/3\), so \(g_5>6\) but \(b_5\) is untouched.

## Caveats

This concerns Grünbaum's ball-covering problem, not Borsuk's partition problem, and the authors explicitly show their set does not beat \(n+1\) for Borsuk in dimension five. Fresh preprint, not yet refereed; the example was found with AI tools (unspecified) and verified by the authors by hand, with no formal proof mentioned. I read the introduction, Section 2 and the Borsuk-partition section (about 10 pages).

## Links

- arXiv abstract: https://arxiv.org/abs/2611.08198
- PDF: https://arxiv.org/pdf/2611.08198
- OpenAI nine-dimensional Borsuk example: https://github.com/openai/math/blob/main/preprints/A-nine-dimensional-counterexample-to-Borsuks-covering-assertion-September-23-2026/paper.pdf
