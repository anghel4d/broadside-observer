---
title: "A Bounded-Defect Construction for the Mondrian Art Problem"
authors:
  - "Cooper O'Kuhn"
  - "Freeman Slaughter"
year: 2026
venue: "arXiv"
arxiv: "2610.19193"
doi: null
source: "https://arxiv.org/abs/2610.19193"
topics:
  - "mondrian-art-problem"
  - "rectangle-dissection"
  - "pell-equation"
  - "recreational-maths"
seed_rank: 2326
seed_batch: "curiosity-2026-10-17"
reviewed: "2026-10-17"
pool: "maths"
relevance_score: 8
cites:
  - title: "A Bounded-Defect Construction for the Mondrian Art Problem"
    url: "https://arxiv.org/abs/2610.19193"
    year: 2026
    arxiv: "2610.19193"
    doi: null
  - title: "New Upper Bounds on the Mondrian Art Problem"
    url: "https://arxiv.org/abs/2609.01998"
    year: 2026
    arxiv: "2609.01998"
    doi: null
  - title: "There is no Perfect Mondrian Partition for Squares of Side Lengths Less than 1001"
    url: "https://arxiv.org/abs/2311.02385"
    year: 2023
    arxiv: "2311.02385"
    doi: null
  - title: "Decompositions of a Rectangle into Non-Congruent Rectangles of Equal Area"
    url: "https://doi.org/10.1016/j.disc.2021.112389"
    year: 2021
    arxiv: null
    doi: "10.1016/j.disc.2021.112389"
see: ["2298-triangles-and-quadrilaterals-suffice"]
---

# A Bounded-Defect Construction for the Mondrian Art Problem

## One-sentence takeaway

Cut an n × n canvas into pairwise non-congruent integer rectangles and minimize the spread between the largest and smallest area: everyone expected that spread to grow with n, but a seven-rectangle design over Q(√19), made integral through Pell's equation p² − 19q² = −2, keeps it at exactly 280 for the infinite family n = 315, 106785, 36306585, … (n_{j+2} = 340 n_{j+1} − n_j).

## Why it's lovely

The puzzle is named after Piet Mondrian's De Stijl grids and is easy to explain: tile the square with rectangles, no two the same shape (even rotated), and make their areas as close as possible. Known optimal values for n ≤ 900 climb steadily, so the general belief was that the defect M(n) goes to infinity, and a September 2026 preprint had just proved the first non-trivial upper bound, M(n) ≤ 10 n^(5/6). This note shows lim inf M(n) ≤ 280 using a known seven-rectangle equal-area dissection (Dalfó, Fiol, López and Martínez-Pérez, also attributed to the pseudonymous "Blanche Descartes" in 1971), whose sides are irrational numbers in Q(√19), together with Pell's equation: every Pell solution scales the layout while keeping the gap constant. The radar re-checked the construction itself. Exact arithmetic for the first four members (n = 315 up to 12,344,132,115) confirms seven integer rectangles that tile the square with no overlaps, pairwise non-congruent, with defect 280 each time.

## Key ideas

- **Generic layout.** For q < p < 7q with p ≡ q (mod 2), set n = 105q and cut at x ∈ {7(7q − p), 42q, 7(7q + p)} and y ∈ {5(8q − p), 5(13q − p), 15(7q + p)/2}, giving seven rectangles R1…R7.
- **Areas track one number.** With B = n²/7 and E = p² − 19q², the areas are B − 35E (twice), B − 105E/2 (twice), B, and B + 175E/2 (twice). So the defect is exactly 140|E|.
- **Pell makes it constant.** Take E = −2 with base solution (p, q) = (13, 3), which gives n = 315 with rectangles 259×55, 56×255, 238×60, 77×185, 189×75, 70×200 and 112×125. Multiplying by the fundamental unit 170 + 39√19 preserves E, so every member has defect 280.
- **Non-congruence for free.** Each equal-area pair has sides (αu, βv) and (αv, βu) with α ≠ β and u ≠ v, so their perimeters differ.
- **Second family.** A variant with defect 560 has infinitely many sizes divisible by any chosen k.

## Caveats

It doesn't settle the real question, whether M(n) = 0 (a "perfect" Mondrian) can ever happen; it only shows that the defect doesn't have to grow. It's a 9-page preprint with no claim that 280 is optimal along the family. Relative to the canvas area the defect vanishes quickly (280/315² is under 0.3%), which is part of why it went unnoticed.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.19193
- PDF: https://arxiv.org/pdf/2610.19193
- Garrison–Seiler–Semchankau upper bound: https://arxiv.org/abs/2609.01998
- No perfect partition below 1001: https://arxiv.org/abs/2311.02385
