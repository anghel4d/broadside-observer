---
title: "A Texture Lookup Approach to Bézier Curve Evaluation on the GPU"
authors: ["Muhammad Anas", "Alan Wolfe"]
year: 2026
venue: "Journal of Computer Graphics Techniques (JCGT) 15(2)"
arxiv: "2603.15447"
doi: null
source: "https://arxiv.org/abs/2603.15447"
topics: [unicode-text-shaping, mesh-shaders-gpu-driven]
seed_rank: 1595
seed_batch: "craft-2026-09-05"
reviewed: "2026-09-05"
pool: "graphics"
relevance_score: 9
lineage: gpu-curves-vector
cites:
  - title: "GPU-Centered Font Rendering Directly from Glyph Outlines"
    url: "https://jcgt.org/published/0006/02/02/"
    year: 2017
    arxiv: null
    doi: null
  - title: "Warnock: Harnessing GPU Geometry Amplification for Vector Graphics"
    url: "https://doi.org/10.1145/3820012"
    year: 2026
    arxiv: null
    doi: "10.1145/3820012"
see:
  - "1128-gpu-centered-font-rendering-directly-from-glyph-outlines"
  - "1030-warnock-gpu-geometry-amplification-for-vector-graphics"
---

# A Texture Lookup Approach to Bézier Curve Evaluation on the GPU

## One-sentence takeaway

Evaluate Bézier curves (and surfaces/volumes, B-splines, NURBS) by packing the polynomial into a texture and letting fixed-function interpolators do the work — Seiler interpolation included — instead of a shader polynomial.

## Why it matters here

Anoptic UI paths, vector overlays, and GPU font/curve work still evaluate polynomials in shader ALU next to Slug outline coverage (1128) and Warnock mesh-amplified paths (1030). This JCGT note is the “steal the texture unit” leftover: when a pass is ALU-bound, Bézier eval becomes a filtered tap. Use it for HUD strokes, projected overlays, and as a cheaper inner evaluator inside a 1128/1030-style outline pipeline — not as a replacement rasterizer.

## Key ideas

- **Fixed-function interpolation as the evaluator.** Encode the Bézier in a texture so hardware linear filtering computes the polynomial; the shader just samples.
- **Same idea, more geometry.** Surfaces and volumes fall out of higher-dimensional textures; B-splines, NURBS, integral and rational polynomials are the same packing problem.
- **Seiler interpolation.** Fits the framework to cut extra taps / improve the interpolator’s use of the encoded polynomial.
- **Bakeoff vs shader math.** Paper compares performance and accuracy against evaluating the same curves as polynomials in shader code — the win is for compute-bound passes that can spare texture bandwidth.

## Caveats

JCGT 15(2) pp. 1–11, 2026; DOI still pending. Texture-unit eval is not glyph rasterization (1128) and not path tessellation (1030 / Loop–Blinn). Precision and filtering artifacts are the cost of leaving the ALU. Do not remint 1128 / 1030 / 128.

## Links

- arXiv abs: https://arxiv.org/abs/2603.15447
- arXiv PDF: https://arxiv.org/pdf/2603.15447
- JCGT: https://jcgt.org/published/0015/02/01/
- JCGT PDF: https://jcgt.org/published/0015/02/01/paper.pdf
