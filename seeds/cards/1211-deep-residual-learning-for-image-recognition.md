---
title: "Deep Residual Learning for Image Recognition"
authors:
  - "Kaiming He"
  - "Xiangyu Zhang"
  - "Shaoqing Ren"
  - "Jian Sun"
year: 2015
venue: "CVPR 2016 / arXiv"
arxiv: "1512.03385"
doi: "10.1109/CVPR.2016.90"
source: "https://arxiv.org/abs/1512.03385"
topics:
  - "resnet"
  - "skip-connections"
  - "vision"
seed_rank: 1211
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
lineage: categorical-deep-learning
cites:
  - title: "ImageNet classification with deep convolutional neural networks"
    url: "https://doi.org/10.1145/3065386"
    year: 2017
    doi: "10.1145/3065386"
    card: "1213-imagenet-classification-with-deep-convolutional-neural-nets"
---

# Deep Residual Learning for Image Recognition

## One-sentence takeaway

Residual (skip) connections make 100+ layer nets trainable — ILSVRC 2015 winner, and the skip-wire that every later architecture diagram still draws.

## Why it matters here

The residual wire is a morphism Weaves has to express. Canonical DL architecture alongside AlexNet/Transformers.

## Key ideas

- arXiv:1512.03385 (2015); CVPR 2016. 152-layer ImageNet nets; 3.57% ensemble error.
- Learn residual functions wrt layer inputs rather than unreferenced maps.
- Also lifts detection/segmentation (COCO) via depth of representation.

## Caveats

- Vision paper, not a semantics. Skip connections are the categorical interest (additive bypass as a morphism).

## Links

- arXiv: [1512.03385](https://arxiv.org/abs/1512.03385)
- DOI: https://doi.org/10.1109/CVPR.2016.90
