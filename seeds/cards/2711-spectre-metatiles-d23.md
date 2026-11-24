---
title: "Three almost symmetric metatiles generate the Spectre tiling"
authors:
  - "Simon Tatham"
year: 2026
venue: "arXiv preprint (math.CO)"
arxiv: "2611.28888"
doi: null
source: "https://arxiv.org/abs/2611.28888"
version_reviewed: "v1"
topics:
  - "spectre-tiling"
  - "aperiodic-monotile"
  - "substitution-tilings"
  - "metatiles"
  - "hat-tiling"
seed_rank: 2711
seed_batch: "curiosity-2026-11-25"
reviewed: "2026-11-25"
pool: "maths-foundations"
relevance_score: 7
cites:
  - title: "Three almost symmetric metatiles generate the Spectre tiling"
    url: "https://arxiv.org/abs/2611.28888"
    year: 2026
    arxiv: "2611.28888"
    doi: null
see: []
---

# Three almost symmetric metatiles generate the Spectre tiling

## One-sentence takeaway

Three metatiles named D23 (a diabolo, a 2-arms cluster and a 3-arms cluster) form their own iterable substitution system for the Spectre aperiodic monotile, two of them almost rotationally symmetric, and one metatile vanishes entirely when converted to Spectres.

## Why it's lovely

The hat tiling got a tidy auxiliary system of metatiles (H, T, P, F) that makes its structure legible; the chiral Spectre monotile had nothing similar. Here every Spectre tiling is uniquely decomposed into disjoint copies of three clusters: the diabolo with exact order-2 symmetry, and the 2-arms and 3-arms clusters whose outlines are almost symmetric with orders 2 and 3. The near-symmetry has a precise meaning: the region covered by an n-times deflated tile differs from its rotation only in a proportion of tiles tending to 0 as n grows, mirroring near-symmetry in the Spectre tiling itself. The delightful oddity is that one of the three metatiles disappears completely in the conversion to Spectres. It is a small, concrete, well-drawn piece of the aperiodic monotile story, and the substitution-system view is the same kind of hierarchy-of-addresses thinking that shows up in tree-structured data and geometry code.

## Key ideas

- **Metatile system.** D23 has its own substitution that can be iterated as often as needed, then the lowest-order metatiles are converted to Spectres, like HTPF for hats.
- **Clusters.** The diabolo is two Spectres joined back to back along the double-length edge and has exact 2-fold symmetry; the 2-arms and 3-arms clusters have asymmetric tile layouts but almost symmetric outlines of order 2 and 3.
- **Covering.** Every Spectre tiling decomposes uniquely into disjoint D23 clusters; the clusters come from earlier work (cited as ICST26) and this paper shows they work as metatiles.
- **Near-symmetry.** Asymmetry vanishes in proportion as deflation depth n goes to infinity.
- **Oddity.** One of the three metatiles disappears completely in the conversion to Spectres.

## Caveats

I read the abstract and the introduction and construction opening of v1 (21 Nov 2026, 17 pp.); I did not check the substitution rules or the near-symmetry argument. It builds on the Spectre and hat papers (cited as SMKGS24a and SMKGS24b) and on a clusters paper cited as ICST26, neither of which I read here. It is a single-author unrefereed preprint, and there is no application beyond understanding the tiling.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.28888
- PDF: https://arxiv.org/pdf/2611.28888
