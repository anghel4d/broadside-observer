---
title: "Is every knot a three-way deadlock? Counterexamples and a universality conjecture for the segment number"
authors:
  - "Makoto Ozawa"
year: 2026
venue: "arXiv preprint (math.GT)"
arxiv: "2611.29175"
doi: null
source: "https://arxiv.org/abs/2611.29175"
version_reviewed: "v1"
topics:
  - "knot-theory"
  - "segment-number"
  - "torus-knots"
  - "plane-curves"
  - "computer-census"
seed_rank: 2712
seed_batch: "curiosity-2026-11-25"
reviewed: "2026-11-25"
pool: "maths-foundations"
relevance_score: 7
cites:
  - title: "Is every knot a three-way deadlock? Counterexamples and a universality conjecture for the segment number"
    url: "https://arxiv.org/abs/2611.29175"
    year: 2026
    arxiv: "2611.29175"
    doi: null
see: []
---

# Is every knot a three-way deadlock? Counterexamples and a universality conjecture for the segment number

## One-sentence takeaway

The segment number of a knot, the fewest arcs into which a diagram can be cut so that for every pair one passes over the other at all common crossings, equals three for T(2,q) with q = 3, 5, 7, 9 and for both sums of two trefoils, breaking two expected inequalities and suggesting that every non-trivial knot has segment number three.

## Why it's lovely

Cut a knot diagram into arcs so that any two arcs have a clear above-below relationship: the minimum number of arcs is the segment number, and every non-trivial knot needs at least three. The paper shows that the torus knots T(2,q) for q = 3, 5, 7, 9 already manage with three, which kills the proposal that 5_1 needs four and the conjectured bound bridge number ≤ segment number, since a knot with segment number three has bridge number at least four. Four-dimensional invariants fail as lower bounds too: a knot with segment number three has signature −6 and τ = −3, and since the slice genus of 9_1 is 4, even g4 ≤ s fails. Both connected sums of two trefoils, the square and granny knots, have segment number three, even though a three-segment presentation can never be visibly composite. The author conjectures every non-trivial knot has segment number three, restates it as a question about plane curves cut into three simple arcs with a normal form where one arc is a straight segment, and backs it with an exact-arithmetic computer census that covers all prime knots up to eight crossings except 8_15 and 8_19.

## Key ideas

- **Definition.** The segment number s(K) is the minimum arcs in a diagram such that for every pair of arcs one passes over the other at all their common crossings; s(K) ≥ 3 for every non-trivial knot.
- **Counterexamples.** s = 3 for T(2,q) with q = 3, 5, 7, 9, so 5_1 is not a candidate for s = 4; a knot with s = 3 and b(K) ≥ 4, detected by its 3^4 Fox 3-colourings, breaks b ≤ s.
- **4-D invariants.** A knot with s = 3, signature −6 and τ = −3, and g4(9_1) = 4, show neither signature, τ nor slice genus bounds s from below.
- **Conjecture.** Every non-trivial knot has segment number three, equivalent to a statement about plane curves cut into three simple arcs, with a normal form in which one arc is a straight segment.
- **Census and bounds.** A computer census of 3-segment presentations covers 99 prime knots up to ten crossings (all prime knots up to eight crossings except 8_15 and 8_19); every 3-segment presentation of K has at least 3u(K) crossings and a minimal one has at most six bigons; presentations are certified by exact arithmetic or combinatorial checks.

## Caveats

I read the abstract and the introduction of v1 (22 Nov 2026, 17 pp.); I did not check the proofs or the census. The universality statement is a conjecture, not a theorem, and the census leaves two eight-crossing prime knots open. It is unrefereed.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.29175
- PDF: https://arxiv.org/pdf/2611.29175
