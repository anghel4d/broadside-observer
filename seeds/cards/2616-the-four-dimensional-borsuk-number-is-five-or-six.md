---
title: "The four-dimensional Borsuk number is five or six"
authors:
  - "Logan R. Chalmers"
year: 2026
venue: "arXiv preprint (math.MG)"
arxiv: "2611.17375"
doi: null
source: "https://arxiv.org/abs/2611.17375"
version_reviewed: "v1"
topics:
  - "borsuk-problem"
  - "discrete-geometry"
  - "convex-geometry"
  - "lean-formalization"
seed_rank: 2616
seed_batch: "curiosity-2026-11-17"
reviewed: "2026-11-16"
pool: "maths-foundations"
relevance_score: 7
see:
  - "2012-borsuk-s-conjecture-fails-in-dimension-nine"
  - "2531-a-diameter-one-set-in-r5-that-cannot-be-covered-by-six-diameter-one-balls"
cites:
  - title: "The four-dimensional Borsuk number is five or six"
    url: "https://arxiv.org/abs/2611.17375"
    year: 2026
    arxiv: "2611.17375"
    doi: null
---

# The four-dimensional Borsuk number is five or six

## One-sentence takeaway

Every set of diameter one in four-dimensional space splits into at most six parts of smaller diameter, improving the upper bound from seven, so the 4D Borsuk number is now pinned to five or six; the theorem is formalized in Lean.

## Why it's lovely

Borsuk's question (can you always cut a set into d+1 smaller-diameter pieces?) is true in the plane and in space and false in high dimensions (card 2012 has the dimension-nine counterexample). Dimension four is the first case where nobody knows the answer, and this result narrows it to one integer. The proof splits by circumradius into three cases (cones, balls, rational polytopes), and the Lean formalization makes a case analysis like that trustworthy.

## Key ideas

- **Question.** Can every diameter-one set in R^4 be split into five parts of smaller diameter? Five are sometimes necessary.
- **Result.** Six always suffice (the previous upper bound was seven).
- **Small circumradius.** Cut with six cones.
- **Large circumradius.** Five balls meet every diametral pair of a compact set.
- **Intermediate radii.** Bound each part's diameter by the diameter of a rational polytope.
- **Formalized.** The theorem is checked in Lean.

## Caveats

Abstract-level read of the v1 preprint (Monday 16 Nov 2026 arXiv listing); not refereed. The case Borsuk conjectured (five pieces) is still open in dimension four. I have not inspected the Lean proof or the intermediate-radius polytope bounds.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.17375
- PDF: https://arxiv.org/pdf/2611.17375
