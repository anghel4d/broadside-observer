---
title: "CurveCodec 2: Skeleton-agnostic animation compression with a learned entropy model"
authors:
  - "Mingyi Shi"
  - "Huancheng Lin"
  - "Xuelin Chen"
  - "Taku Komura"
year: 2026
venue: "arXiv"
arxiv: "2610.04211"
doi: null
source: "https://arxiv.org/abs/2610.04211"
topics:
  - "animation"
  - "compression"
seed_rank: 2272
seed_batch: "craft-2026-10-13"
reviewed: "2026-10-13"
pool: "graphics"
relevance_score: 7
lineage: animation-compression
cites:
  - title: "CurveCodec 2: Skeleton-agnostic animation compression with a learned entropy model"
    url: "https://arxiv.org/abs/2610.04211"
    year: 2026
    arxiv: "2610.04211"
    doi: null
see:
  - "389-animation-compression-library"
  - "329-motion-matching-and-the-road-to-next-gen-animation"
---

# CurveCodec 2: Skeleton-agnostic animation compression with a learned entropy model

## One-sentence takeaway

A skeletal-animation codec that keeps the closed-loop quantization and key thinning of production codecs, and uses a small learned model only for entropy-coding residuals, reaches 0.37x ACL's bytes under ACL's own worst-case error contract.

## Why it matters here

Unit animation memory and streaming bandwidth scale with army size in an RTS; this paper measures where the redundancy in skeletal motion actually lies and shows which part of a codec is worth handing to a learned model (residual entropy coding) and which isn't (in-betweening), with bit-exact integer inference so decode is deterministic across platforms.

## Key ideas

- **Measure first.** At production precision the biggest win is predicting each quantized curve from its own past; the second is choosing per joint, in closed loop through the hierarchy, which samples not to code.
- **Learned in-betweeners don't pay.** On the gaps the encoder leaves, a nearest-neighbour oracle over millions of samples is no better than linear interpolation.
- **What the network learns.** The distribution of residuals; a small model drives entropy coding, with integer inference that is bit-exact across platforms.
- **Representation.** Every sub-track is coded as a curve in the log map, quantized in closed loop and thinned to rate-distortion-selected keys.
- **Contracts checked per clip.** Either ACL's worst-case per-joint error within tolerance or ACL's mean error per clip; 0.37x ACL bytes at 0.01 cm (worst case) and 0.22x at 0.1 cm (mean) on 4,472 held-out clips from 33 datasets; decodes on one CPU core.

## Caveats

Preprint (2026-10-03). Decode cost versus ACL's SIMD decoder and random-access/seek behaviour need checking before adopting; the learned entropy model adds a model asset and a dependency on bit-exact integer kernels.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.04211
- PDF: https://arxiv.org/pdf/2610.04211
- Project page: https://rubbly.cn/publications/curvecodec/
