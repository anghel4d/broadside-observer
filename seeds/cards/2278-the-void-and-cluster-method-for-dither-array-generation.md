---
title: "The Void-and-Cluster Method for Dither Array Generation"
authors:
  - "Robert Ulichney"
year: 1993
venue: "Proc. SPIE 1913, Human Vision, Visual Processing, and Digital Display IV, 332–343"
arxiv: null
doi: "10.1117/12.152707"
source: "https://cv.ulichney.com/papers/1993-void-cluster.pdf"
topics:
  - blue-noise
  - dithering
  - sampling
  - real-time-rendering
seed_rank: 2278
seed_batch: "archive-2026-10-14"
reviewed: "2026-10-14"
pool: "graphics"
relevance_score: 8
lineage: blue-noise-sampling
cites:
  - title: "The Void-and-Cluster Method for Dither Array Generation"
    url: "https://doi.org/10.1117/12.152707"
    year: 1993
    arxiv: null
    doi: "10.1117/12.152707"
---

# The Void-and-Cluster Method for Dither Array Generation

## One-sentence takeaway

Void-and-cluster builds a small, tileable threshold array with blue-noise character by repeatedly finding the tightest cluster and the largest void in a binary pattern under a wrap-around Gaussian filter and recording the order in which pixels are removed or added as each cell's rank.

## Why it matters here

Blue-noise textures are a standard tool in real-time rendering: dithering banding away, decorrelating per-pixel random offsets for stochastic transparency, shadows, AO and ray marching, and spreading error so TAA and denoisers can absorb it. The library has the modern spatio-temporal noise work (2251 Tabula Rasa) and stochastic splat rendering (2273) but not the algorithm that generates the classic blue-noise masks those pipelines tile across the screen. It is short enough to run offline in Anoptic's asset pipeline.

## Key ideas

- **Dither array as a ranking.** Each of the M×N cells gets a unique rank 0…MN−1, the order in which it turns on as the input level rises; at render time a pixel is lit if its value exceeds its normalized rank. M and N need not be equal or powers of two.
- **Void- and cluster-finding filter.** A Gaussian-weighted sum over the neighbourhood of each pixel, with toroidal wrap-around so the array tiles seamlessly. Ulichney found σ = 1.5 pixels worked best.
- **Initial pattern.** Start from any pattern with at most half ones (white noise is fine) and relax it by moving the one in the tightest cluster into the largest void, iterating until it converges (the move would put the pixel straight back). The paper's 16×16 example converged in 12 iterations.
- **Three phases.** Phase I removes ones from the initial pattern (tightest cluster first) and assigns ranks downward; Phase II adds ones into the largest voids up to half full; Phase III swaps the roles of ones and zeros and fills the rest.
- **Results.** Arrays as small as 32×32 give dispersed-dot patterns free of the regular cross-hatch of Bayer (recursive tessellation) arrays; with different starting conditions the same procedure can reproduce the recursive-tessellation arrays.

## Caveats

The paper targets halftoning for printing and displays, not Monte Carlo rendering; its quality judgements are visual. Each placed pixel needs a fresh void or cluster search over the whole array, so generation belongs offline, not at runtime. A single 2D mask gives no temporal decorrelation, which is why later work (such as 2251) optimizes spatio-temporal noise. Filter choice matters; Ulichney's 1994 follow-up studies it separately.

## Links

- Paper (author PDF): https://cv.ulichney.com/papers/1993-void-cluster.pdf
- Paper (DOI): https://doi.org/10.1117/12.152707
