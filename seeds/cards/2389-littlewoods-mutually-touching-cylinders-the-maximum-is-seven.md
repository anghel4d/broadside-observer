---
title: "Littlewood's mutually touching cylinders: the maximum is seven"
authors:
  - "Ivan Matić"
  - "Radoš Radoičić"
  - "Andreas Spomer"
year: 2026
venue: "arXiv preprint (math.MG)"
arxiv: "2610.26940"
doi: null
source: "https://arxiv.org/abs/2610.26940"
topics:
  - "discrete-geometry"
  - "line-geometry"
  - "computer-assisted-proof"
  - "sign-patterns"
seed_rank: 2389
seed_batch: "curiosity-2026-10-23"
reviewed: "2026-10-23"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "Littlewood's mutually touching cylinders: the maximum is seven"
    url: "https://arxiv.org/abs/2610.26940"
    year: 2026
    arxiv: "2610.26940"
    doi: null
see: ["2368-the-heesch-number-in-e3-is-unbounded", "1053-projective-geometric-algebra"]
---

# Littlewood's mutually touching cylinders: the maximum is seven

## One-sentence takeaway

Eight congruent infinite circular cylinders in space can never all touch one another, so seven (the 2015 construction of Bozóki, Lee and Rónyai) is the maximum, which answers Littlewood's 1968 question with a proof whose geometry reduces to signs on pairs and triples of lines and a pruned search that finishes in two seconds.

## Why it's lovely

Littlewood's question is the kind a child can picture: how many pencils of equal thickness, infinitely long, can each touch every other one? It sat open for almost sixty years while the upper bound crawled down from 24 (Bezdek, 2005) to 18, 10 and then 9 (Höfer, 2026). The final step is elegant rather than brute force. Touching cylinders become lines at a common distance, each line becomes a direction and a moment vector (Plücker-style coordinates), and the whole problem collapses to a finite question about signs. Of roughly 2·10²⁵ sign assignments, only about two million search nodes are ever visited. The bridge to Anoptic is the line representation itself: the Klein product of two lines in direction/moment form is the same machinery projective geometric algebra (card 1053) uses for lines, ray tests and screw motions.

## Key ideas

- **Reformulation.** Two radius-r cylinders touch exactly when their axes are at distance 2r, so the question is the largest set of lines in R³ that are pairwise at the same distance.
- **Line coordinates.** An oriented line is a unit direction u and moment w = p × u. The symmetric Klein product Kl(ℓ, ℓ′) = u·w′ + u′·w gives the distance between skew lines as |Kl| / ‖u × u′‖.
- **Two kinds of signs.** Each pair of lines carries σᵢⱼ = sign Kl (the chirality of earlier work, which forms a Seidel matrix), and each triple carries the sign of the determinant of the three directions (the chirotope of the direction vectors).
- **Forbidden local patterns.** Two determinant identities plus a bilinear identity from the signature-(3,3) form rule out certain sign configurations on four or five lines. After that, the geometry drops out entirely.
- **Pruned search.** Assigning signs to the 28 pairs and 56 triples of eight lines gives 2⁸⁴ leaves. Because each forbidden pattern involves only a few signs, a branch-and-prune search visits about 2·10⁶ nodes and runs in about two seconds.

## Caveats

Computer-assisted, so trust rests on the search code and the correctness of the sign lemmas; the search itself is tiny and easy to re-run, which helps. It is a fresh preprint (18 Oct 2026) not yet refereed. It settles only congruent cylinders in R³; non-congruent radii and higher dimensions (where Solymosi and Zahl showed finiteness) are separate questions.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.26940
- PDF: https://arxiv.org/pdf/2610.26940
