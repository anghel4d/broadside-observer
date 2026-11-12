---
title: "Unilluminable rooms: minimal examples, classifications and exceptions"
authors:
  - "J. C. F. de Winter"
  - "George W. Tokarsky"
year: 2026
venue: "arXiv preprint (math.CO; cs.CG)"
arxiv: "2611.13226"
doi: null
source: "https://arxiv.org/abs/2611.13226"
topics:
  - "illumination-problem"
  - "polygonal-billiards"
  - "mirror-unfolding"
  - "reflection-tilings"
  - "exhaustive-search"
  - "ai-assisted-math"
seed_rank: 2571
seed_batch: "curiosity-2026-11-13"
reviewed: "2026-11-13"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "Polygonal rooms not illuminable from every point"
    url: "https://doi.org/10.1080/00029890.1995.12004679"
    year: 1995
    arxiv: null
    doi: "10.1080/00029890.1995.12004679"
  - title: "Illumination in rational billiards"
    url: "https://arxiv.org/abs/1905.09358"
    year: 2024
    arxiv: "1905.09358"
    doi: null
see: []
---

# Unilluminable rooms: minimal examples, classifications and exceptions

## One-sentence takeaway

Light a candle in a polygonal room of mirrors and there can be a point it never reaches: building on Tokarsky's 1995 parity trick, the paper proves the 12-sided "pinwheel" is the only smallest hole-free lattice room with an invisible point, that two mutually invisible points need at least 24 sides (exactly 12 rooms; 89 with 25 sides), and that posts, partitions or a pinched hole bring that down to 16–22.

## Why it's lovely

The whole proof is a parity argument you can do in your head. Tile the room with reflected copies of an isosceles right triangle and unfold any light ray into a straight segment. A segment between two "even" lattice points (both coordinates even) always passes through an "odd" lattice point first. Make every odd lattice point a corner, where light is absorbed, and no ray can ever join two even points. A question about light becomes a question about counting tiles. Euler-formula lemmas then turn "how few sides?" into finite searches that close the classification. The paper also has a 9-gon with three mutually invisible corners, a 42-gon where a 180° symmetry does the job of a missing corner, and a ring of three trapezoids where a ray comes back to a corner that is invisible in any one trapezoid, because the hole swaps the tile labels. For Anoptic this is the purely specular limit of light transport. Mirror unfolding is the image-source and portal trick that renderers and geometric-acoustics tracers already use, and the paper is a reminder that perfect mirrors with absorbing corners can make a region provably dark that no number of samples will ever light.

## Key ideas

- **Blocking lemma.** If every side reflects a lattice \(\Lambda\) onto itself (and \(2\Lambda\) onto \(2\Lambda\)), and every point of \(\Lambda\setminus2\Lambda\) in the room is a corner, then all points of \(2\Lambda\) are invisible and pairwise mutually invisible. The proof is unfolding plus a gcd argument.
- **Counting lemmas.** \(N = T - 2M + 2 - 2h - f\) (sides, tiles, sources, holes, flat points) and \(T \ge 12M + 3f\) give \(N \ge 10M + 2 + 2f\). This bounds the search so it can be exhaustive.
- **Minimal rooms.** One source: the pinwheel (12 sides) on the right-triangle tiling and the cross (16) on the square tiling. Two sources, hole-free: 24 sides (12 types) and 34 on squares (14 types, including Tokarsky's rectilinear room). One post gives 18, a partition 20, a pinched hole 22 (21 if you count maximal segments), and a free hole 26.
- **Modules.** Rooms assembled from \(n\) twelve-tile modules have exactly \(12n\) sides and \(n\) sources. Three sources need at least 36 sides, and the paper asks whether \(12n\) is optimal for all \(n\).
- **Beyond lattices.** 27-gons on the 30-60-90 tiling (15 types), a nonagon with three invisible corners, a symmetry standing in for a corner, and a trapezoid ring where holes break the folding argument.

## Caveats

The minimality results hold only inside the classes studied (lattice rooms and their post, partition and hole variants on particular tilings). Whether a simple polygon with fewer than 24 sides can have two mutually invisible interior points is still open (their Question 4). Several classifications depend on exhaustive computer searches; the code and exact coordinates ship with the paper. The acknowledgements say the proofs were generated and the draft written with GPT-6, then checked and rewritten with Claude Opus 5.5, under the authors' guidance. I read the full arXiv HTML.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.13226
- PDF: https://arxiv.org/pdf/2611.13226
- Wolecki, Illumination in rational billiards: https://arxiv.org/abs/1905.09358
