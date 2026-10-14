---
title: "Frozen History: When Temporal Losses Stop Accumulation in Learned Real-Time Supersampling"
authors:
  - "Hao Yu"
  - "Guoying Zhao"
year: 2026
venue: "arXiv"
arxiv: "2610.15752"
doi: null
source: "https://arxiv.org/abs/2610.15752"
topics:
  - "temporal-upsampling"
  - "real-time-rendering"
seed_rank: 2291
seed_batch: "frontier-2026-10-14"
reviewed: "2026-10-14"
pool: "graphics"
relevance_score: 8
cites:
  - title: "Frozen History: When Temporal Losses Stop Accumulation in Learned Real-Time Supersampling"
    url: "https://arxiv.org/abs/2610.15752"
    year: 2026
    arxiv: "2610.15752"
    doi: null
  - title: "Amortized Supersampling"
    url: "https://doi.org/10.1145/1618452.1618481"
    year: 2009
    arxiv: null
    doi: "10.1145/1618452.1618481"
  - title: "A Survey of Temporal Antialiasing Techniques"
    url: "https://doi.org/10.1111/cgf.14018"
    year: 2020
    arxiv: null
    doi: "10.1111/cgf.14018"
see:
  - "350-amortized-supersampling"
  - "250-a-survey-of-temporal-antialiasing-techniques"
---

# Frozen History: When Temporal Losses Stop Accumulation in Learned Real-Time Supersampling

## One-sentence takeaway

In learned real-time supersampling, a temporal-consistency loss can silently stop sample accumulation — with correct registration the network just copies its warped history on static pixels — and four common registration errors hide this during training.

## Why it matters here

Any Anoptic temporal upscaler (learned or hand-built TAA/TAAU) lives on jitter, motion vectors and history; this paper is a checklist of registration bugs that make a loss look helpful while it is actually freezing history, plus evidence that a plain, correctly registered network beats published results.

## Key ideas

- **Freezing.** On static content, under accurate registration, the network can copy warped history at almost no temporal cost; motion-vector jitter raises that cost and masks the effect.
- **Four concealed registration errors.** Jitter-carrying motion vectors, one motion field for both resolution lattices, jittered depth, and an unregistered skip path.
- **Oracle.** A model-free oracle shows correct registration makes freezing two orders of magnitude cheaper on static pixels.
- **Reversal.** Under exact registration, raising the temporal weight lowers pixel variance but costs accuracy (0.7–0.9 dB on static frames at weight 0.25), across three network families and two scales.
- **Results.** Small temporal weight + normalised sample accumulator improves best published QRISP PSNR by 0.34–0.62 dB at ×2/×3/×4 to 1080p; ×2 static-pixel std is a quarter of DLSS 2's; ≥4.4 dB over classical temporal upsampling on Arm's jittered Bistro capture; ×4 model runs in 2.03 ms per 1080p frame on an H200.

## Caveats

Timings are on an H200, far from game-console budgets; comparisons with DLSS 2 are on static-pixel variance, not overall quality. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.15752
- PDF: https://arxiv.org/pdf/2610.15752
- HTML: https://arxiv.org/html/2610.15752v1
- Code: https://github.com/CV-AC/Frozen_history
