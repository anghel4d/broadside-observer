---
title: "Animation Compression Library"
authors:
  - "Nicholas Frechette"
year: 2017
venue: "GitHub"
arxiv: null
doi: null
source: "https://github.com/nfrechette/acl"
topics:
  - animation
  - compression
seed_rank: 389
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
cites:
  - title: "FABRIK: A fast, iterative solver for the Inverse Kinematics problem"
    url: "https://doi.org/10.1016/j.gmod.2011.05.001"
    year: 2011
    arxiv: null
    doi: "10.1016/j.gmod.2011.05.001"
  - title: "Adaptive Scalable Texture Compression"
    url: "https://doi.org/10.2312/EGGH/HPG12/105-114"
    year: 2012
    arxiv: null
    doi: "10.2312/EGGH/HPG12/105-114"
see:
  - "346-fabrik-a-fast-iterative-solver-for-the-inverse-kinematics-pr"
  - "396-adaptive-scalable-texture-compression"
---

# Animation Compression Library

## One-sentence takeaway

ACL quantizes and range-reduces segmented animation clips so skeletal poses decompress in a few SIMD loads, with error measured in object space — and it became Unreal’s default codec in UE 5.3.

## Why it matters here

GRID COMMAND / Broadside characters will drown memory in raw keyframes long before they drown the GPU. ACL is the production answer: C++11, header-friendly, engine-agnostic, and already proven as a default. Pair it with motion matching; do not invent another bit-packer.

## Key ideas

- Split clips into segments, reduce per-track ranges, then quantize rotations/translations/scales to the bits the error budget allows.
- Decompression is sequential and SIMD-heavy; the expensive work is offline.
- Bind-pose stripping and looping policies (v2.1) drop identity tracks that engines were still storing.
- Error is visual / object-space, not “max component delta,” which is why it can be more aggressive than naive 16-bit quats.

## Caveats

## Links

- Repository: https://github.com/nfrechette/acl
- Author blog: https://nfrechette.github.io/
