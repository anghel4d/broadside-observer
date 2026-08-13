---
title: "mHC: Manifold-Constrained Hyper-Connections"
authors:
  - "Zhenda Xie"
  - "Yixuan Wei"
  - "Huanqi Cao"
  - "Chenggang Zhao"
  - "Chengqi Deng"
  - "Jiashi Li"
  - "Damai Dai"
  - "Huazuo Gao"
  - "Jiang Chang"
  - "Kuai Yu"
  - "Liang Zhao"
  - "Shangyan Zhou"
  - "Zhean Xu"
  - "Zhengyan Zhang"
  - "Wangding Zeng"
  - "et al."
year: 2025
venue: "arXiv:cs.LG"
arxiv: "2512.24880"
doi: null
source: "https://arxiv.org/abs/2512.24880"
topics:
  - "residual"
  - "hyper-connections"
  - "manifold"
  - "deepseek"
seed_rank: 996
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
lineage: deepseek
cites:
  - title: "Deep Residual Learning for Image Recognition"
    url: "https://doi.org/10.1109/CVPR.2016.90"
    year: 2016
    doi: "10.1109/CVPR.2016.90"
  - title: "DeepSeek-V3 Technical Report"
    url: "https://arxiv.org/abs/2412.19437"
    year: 2025
    arxiv: "2412.19437"
  - title: "Attention Is All You Need"
    url: "https://arxiv.org/abs/1706.03762"
    year: 2017
    arxiv: "1706.03762"
see:
  - "947-deep-residual-learning-for-image-recognition"
  - "942-deepseek-v3-technical-report"
  - "013-attention-is-all-you-need"
---

# mHC: Manifold-Constrained Hyper-Connections

## One-sentence takeaway

Project Hyper-Connections' residual mixing onto the Birkhoff polytope (Sinkhorn-Knopp doubly-stochastic maps) so identity-mapping stability survives a widened residual stream — then V4 ships it.

## Why it matters here

Macro-architecture for residual topology. ResNet identity mapping restored under n-stream residuals; 6.7% overhead at n=4. The residual story Weaves would draw as a term.

## Key ideas

- arXiv:2512.24880. ByteDance Hyper-Connections widen the residual stream and learn mixing matrices, but composites explode (amax gain ~3000) and wreck identity mapping.
- mHC: Sinkhorn-Knopp (~20 iters) projects H_res onto doubly-stochastic matrices; H_pre/post via sigmoid. Spectral norm ≤1, closed under multiply, mean-preserving convex mixes.
- TileLang fused kernels, selective recompute, DualPipe overlap; n=4 costs +6.7% time. 27B: −0.021 loss vs baseline, more stable than unconstrained HC.
- Used as default residual in Engram (1261) and DeepSeek-V4 (1263).

## Caveats

- Manifold choice (Birkhoff) is one option; the paper invites others.
- n=4 is the reported production setting; wider streams change I/O math.

## Links

- arXiv: [2512.24880](https://arxiv.org/abs/2512.24880)
