---
title: "An upper bound of 61 for the Ramsey number $R(3,3,3,3)$"
authors:
  - "Milos Tatarevic"
year: 2026
venue: "arXiv preprint (math.CO)"
arxiv: "2610.36648"
doi: null
source: "https://arxiv.org/abs/2610.36648"
topics:
  - "ramsey-theory"
  - "sat-solving"
  - "lean4"
  - "computer-assisted-proof"
seed_rank: 2472
seed_batch: "curiosity-2026-10-31"
reviewed: "2026-10-31"
pool: "maths-foundations"
relevance_score: 7
cites:
  - title: "An upper bound of 61 for the Ramsey number $R(3,3,3,3)$"
    url: "https://arxiv.org/abs/2610.36648"
    year: 2026
    arxiv: "2610.36648"
    doi: null
see: ["2436-off-diagonal-ramsey-numbers-of-3-graphs", "2025-sharp-logarithmic-exponents-for-off-diagonal-ramsey-numbers"]
---

# An upper bound of 61 for the Ramsey number $R(3,3,3,3)$

## One-sentence takeaway

Tatarevic proves that every 4-coloring of the edges of K₆₁ contains a monochromatic triangle, so R(3,3,3,3) ≤ 61 (it was 62; the lower bound is 51). The proof combines a double-counting "ticket" argument with 56,374 plus 346 SAT refutations, and the reductions are formalized in Lean.

## Why it's lovely

R(3,3) = 6 is the party puzzle, and R(3,3,3) = 17 has been known since 1955, but four colors have been stuck between 51 and 62 for decades. The proof is a neat mix of hand and machine work. Each vertex sends a "ticket" along every color whose neighborhood is critical (15 or 16 vertices, so one of two good 3-colorings of K₁₆). If every vertex receives no more tickets than it sends, double counting forces every color class to be 15-regular on 61 vertices, and 61 · 15 is odd. SAT solvers check the local cases, and Lean checks that the reduction to those cases is sound. It is the verified-computation pattern this library tracks.

## Key ideas

- **Profiles.** Each vertex has 60 neighbors split among four colors, each of size ≤16 because R(3,3,3) = 17, which gives five degree profiles A to E.
- **Tickets.** A vertex u sends a ticket to v when u's neighborhood in color uv is critical. Profiles send 48, 47, 32, 46 and 60 tickets.
- **Shortfall bounds.** Profiles A, B and D receive at most 47, 46 and 45 tickets (56,374 SAT formulas, all refuted). Profile C needs a separate "entrance" analysis (346 cases).
- **Parity finish.** Then every vertex breaks even, every color graph would be 15-regular on 61 vertices, and that is impossible.
- **Trust.** The reductions are in Lean, and every formula is refuted by two independent SAT solvers.

## Caveats

Single author, and the trust rests on SAT refutations, which are not reported as proof-certified (DRAT/LRAT), plus the Lean reductions. The gap to the lower bound of 51 is still wide. I read the abstract and the overview pages.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.36648
- PDF: https://arxiv.org/pdf/2610.36648
