---
title: "A Fast Algorithm for General Raster Rotation"
authors:
  - "Alan W. Paeth"
year: 1986
venue: "Proceedings of Graphics Interface '86 / Vision Interface '86 (Vancouver, May 1986), pp. 77–81, Canadian Information Processing Society"
arxiv: null
doi: "10.20380/GI1986.15"
source: "https://graphicsinterface.org/wp-content/uploads/gi1986-15.pdf"
version_reviewed: "GI '86 proceedings PDF (5 pages, scan with text layer), read via the Internet Archive snapshot of 2025-04-20; the live graphicsinterface.org PDF URL has returned 404 since early 2026"
topics:
  - "raster-rotation"
  - "shear-decomposition"
  - "scanline-algorithms"
  - "image-resampling"
  - "antialiasing"
  - "bitblt"
  - "frame-buffer"
seed_rank: 2741
seed_batch: "archive-2026-11-28"
reviewed: "2026-11-28"
pool: "graphics"
relevance_score: 7
cites:
  - title: "A Fast Algorithm for General Raster Rotation"
    url: "https://doi.org/10.20380/GI1986.15"
    year: 1986
    arxiv: null
    doi: "10.20380/GI1986.15"
  - title: "3-D Transformations of Images in Scanline Order"
    url: "https://doi.org/10.1145/965105.807505"
    year: 1980
    arxiv: null
    doi: "10.1145/965105.807505"
  - title: "Continuous Anti-Aliased Rotation and Zoom of Raster Images"
    url: "https://doi.org/10.1145/965105.807506"
    year: 1980
    arxiv: null
    doi: "10.1145/965105.807506"
  - title: "Compositing Digital Images"
    url: "https://doi.org/10.1145/800031.808606"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808606"
  - title: "The Smalltalk-76 Programming System: Design and Implementation"
    url: "https://doi.org/10.1145/512760.512762"
    year: 1978
    arxiv: null
    doi: "10.1145/512760.512762"
see:
  - "1039-compositing-digital-images"
---

# A Fast Algorithm for General Raster Rotation

## One-sentence takeaway

Any 2-D rotation is the product of three shears: x-shear by α = −tan(θ/2), y-shear by β = sin θ, then x-shear by α again. Each shear only slides a scanline by an offset whose fractional part is constant along that line. So a raster can be rotated with antialiasing in three passes of a one-multiply-per-pixel blend that conserves each row's total intensity and never leaves holes.

## Why it matters here

The technique belongs to Anoptic's scanline-text and software-raster corner: rotating glyph runs, UI layers, sprites or small tiles without a GPU round trip, or inside a compute pass. The inner loop is a perfect row kernel. It has one coefficient per row and no per-pixel branching or address arithmetic beyond a fixed shift, so it vectorizes over SoA channels. The split `left = pixel·f; right = pixel − left` makes each pixel's parts sum exactly to the input whatever the rounding, which is the same "conserve, then redistribute" property wanted in integer compositing (1039 is cited for the coverage channel). Two smaller lessons carry over. Rational shears 1/n give exact, periodic filters, and n = 1 turns 90° rotation into three shuffles with no blending. The pass structure also shows why the middle pass wants column order, which is where a tiled or transposed layout pays off. These uses are my extrapolation; the paper targets paint systems on frame buffers.

## Key ideas

- **Three shears.** Shear matrices have determinant 1, consecutive same-axis shears merge, and an alternating product of three gives any unit-determinant 2×2 matrix, so any rotation. Solving gives β = sin θ. The direct expression for α is numerically unstable near θ = 0, so the paper uses the half-angle form α = −tan(θ/2). In code it is just `x += α·y; y += β·x; x += α·y`. This also explains Cohen's incremental circle generator: overwriting x in place is a shear, so the determinant stays 1 and the circle closes.
- **Raster shear as a row blend.** Each unit pixel becomes a unit-area parallelogram, displaced by a non-integral offset that is the same along the row. The parallelogram is approximated by a unit square through its edge midpoints. The `xshear` loop keeps `oleft` from the previous pixel, writes `pixel − left + oleft`, and costs one `pixmult` per pixel.
- **Error analysis.** Filtering is exact whenever a parallelogram spans at most two pixels, which always happens for shear 1/n. Four-fold raster symmetry limits the work to angles of 45° or less. At 45° (α ≈ −0.4142, β ≈ 0.7071) the middle pass is exact 29.3% of the time, its worst single-pixel error is √2/8 (17.7%), and the worst-case shear filter stays within 4.2% averaged over skews. The error "peaks" the data rather than adding noise. Artifacts show only on high-frequency content such as single-pixel lines under magnification.
- **Rational angles.** Shears α = 1/j give blend coefficients that repeat every j scanlines, so specialized filters can be tabulated (the paper lists angles from 90° down to 22.62°).
- **Implementation tricks.** Without a hardware multiply, build a 256-entry multiply table per scanline, shared by lines −n and n through skew symmetry. Pack RGB as 24 bits and do the final add as one parallel add: the parts are scaled by f and 1 − f, so no carry crosses channels. Add translation (BitBlt-style) for free by offsetting passes two and three. Compose a general affine map into one matrix and decompose it into scale, rotation and shear. Scale before rotating when enlarging and after when shrinking.
- **Versus Catmull–Smith two-pass.** The two-pass method shears and scales together, so it must sample two fractional positions per pixel and recompute them along the row. It also cannot do 90° exactly. Paeth's sample offsets are exact floating-point constants per scanline. Both approaches need transposes around the column-order pass in a pipeline.

## Caveats

This is a five-page conference paper built around frame-buffer microcode of its time (Adage/Ikonas at Waterloo). I found no measured timings, so "faster than previous methods" rests on operation counts. The filter is a box-filter approximation, which is acceptable for paint and UI but not a high-quality resampler. Rotations past 90° need a prior 90° step. Three passes mean three full reads and writes of the image, and the middle pass runs along columns. The proceedings scan has OCR noise in the equations, so I took the formulas from the text and code listing rather than the typeset matrices. I read the full paper.

## Links

- PDF (Internet Archive copy of the GI proceedings PDF): https://web.archive.org/web/20250420075648/https://graphicsinterface.org/wp-content/uploads/gi1986-15.pdf
- PDF (original GI URL, currently 404): https://graphicsinterface.org/wp-content/uploads/gi1986-15.pdf
- DOI: https://doi.org/10.20380/GI1986.15
