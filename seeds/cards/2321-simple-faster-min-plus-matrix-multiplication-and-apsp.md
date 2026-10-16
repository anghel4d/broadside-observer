---
title: "Simple, Faster (min, +) Matrix Multiplication and APSP"
authors:
  - "Barna Saha"
  - "Christopher Ye"
year: 2026
venue: "arXiv"
arxiv: "2610.20297"
doi: null
source: "https://arxiv.org/abs/2610.20297"
topics:
  - "all-pairs-shortest-paths"
  - "min-plus-product"
  - "fine-grained-complexity"
  - "ai-assisted-proof"
seed_rank: 2321
seed_batch: "curiosity-2026-10-17"
reviewed: "2026-10-17"
pool: "maths"
relevance_score: 9
cites:
  - title: "Simple, Faster (min, +) Matrix Multiplication and APSP"
    url: "https://arxiv.org/abs/2610.20297"
    year: 2026
    arxiv: "2610.20297"
    doi: null
  - title: "Truly subquadratic 3SUM and truly subcubic APSP via triangles in sparse lopsided graphs"
    url: "https://arxiv.org/abs/2610.06783"
    year: 2026
    arxiv: "2610.06783"
    doi: null
  - title: "A simplified proof of polynomial improvements for 3SUM and APSP"
    url: "https://eccc.weizmann.ac.il/report/2026/247/"
    year: 2026
    arxiv: null
    doi: null
see: ["740-algorithm-97-shortest-path", "739-on-a-routing-problem", "750-efficient-algorithms-for-shortest-paths-in-sparse-networks", "1964-matrix-multiplication-with-exponent-at-most-9-4"]
---

# Simple, Faster (min, +) Matrix Multiplication and APSP

## One-sentence takeaway

All-pairs shortest paths is now truly subcubic: building on the early-October 2026 Alman–Vassilevska Williams breakthrough (credited to Anthropic, N^2.9995), this short note finishes the 2016 "phased" min-plus framework with that paper's thin-matrix-product theorem as the missing sparse certificate, giving a simpler deterministic Õ(N^2.9964) algorithm.

## Why it's lovely

"APSP needs N³ time" was one of the three load-bearing hypotheses of fine-grained complexity, and Floyd–Warshall's triple loop had only ever lost sub-polynomial factors (Williams's N³/2^Θ(√log N) was the high-water mark). The first refutation appeared in early October 2026 and the radar held it then as too good to trust without review. A week later there is an independent simplification (Karingula–Lovett on ECCC) and this note, which reconnects the new result to the older Bringmann–Grandoni–Saha–Vassilevska Williams route. That route had always left only a subcubic number of candidate witnesses but never had a fast way to find them. For a game engine the exponent is irrelevant in practice, but the conceptual hole it fills (min-plus product, the semiring behind every distance table and pathfinding precompute) is right at the heart of what RTS pathing and tropical-algebra tricks rely on.

## Key ideas

- **Equivalence.** The (min, +) product, C[i,j] = min_k A[i,k] + B[k,j], is equivalent to APSP up to polylog factors, so improving it also improves negative triangle, replacement paths, second shortest path, metricity, weighted tree edit distance and 2D maximum subarray.
- **Phased approach (BGSV 2016/2019).** Recursively scale and round to get an additive approximation C̃, perturb A and B so many entries become small, and handle those with fast ordinary matrix multiplication. Afterwards only a truly subcubic number of witness triples (i, k, j) with A[i,k] + B[k,j] < C̃(i,j) remain.
- **Missing piece now supplied.** Theorem 25 of Alman–Vassilevska Williams computes selected entries of a thin integer product XY (inner dimension D ≤ N^ε, ε < 0.1204) in O(N² log² D / D^γ). Saha and Ye block A and B and build X, Y families whose selected entries certify which blocks can contain a witness, then search depth-first and stop at the first true witness.
- **Results.** A Las Vegas algorithm runs in expected Õ(N^2.9963432), and a deterministic algorithm achieves the same exponent, for integer entries polynomially bounded in N.
- **AI disclosure.** The authors used ChatGPT Pro to verify the approach and optimize parameters, and say the deterministic algorithm's ideas came from ChatGPT Pro "with mild supervision".

## Caveats

This is a 17-page note on top of a breakthrough that is itself weeks old and unrefereed, and the gain over 3 is about 0.004 in the exponent, so the result is about what is possible, not about practical speed. Real-valued (non-integer) weights are not covered here, though the authors mention ChatGPT-suggested extensions they are still checking. The note cites ω ≤ 9/4 from an unrefereed OpenAI manuscript but says weaker bounds suffice.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.20297
- PDF: https://arxiv.org/pdf/2610.20297
- Alman–Vassilevska Williams breakthrough: https://arxiv.org/abs/2610.06783
- Karingula–Lovett simplification (ECCC TR26-247): https://eccc.weizmann.ac.il/report/2026/247/
