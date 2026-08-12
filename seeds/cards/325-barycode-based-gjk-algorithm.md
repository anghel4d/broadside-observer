---
title: "Barycode-based GJK Algorithm"
authors:
  - "Yu Zhang"
  - "Yangming Wu"
  - "Xigui Wang"
  - "Xiaocheng Zhou"
year: 2020
venue: "arXiv:cs.RO"
arxiv: "2011.09117"
doi: null
source: "https://arxiv.org/abs/2011.09117"
topics:
  - physics
seed_rank: 325
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
---

# Barycode-based GJK Algorithm

## One-sentence takeaway

In this paper, we present a more efficient GJK algorithm to solve the collision detection and distance query problems in 2D.

## Why it matters here

Real-time graphics technique relevant to Anoptic Vulkan/meshlet/GI path (Barycode-based GJK Algorithm).

## Key ideas

- In this paper, we present a more efficient GJK algorithm to solve the collision detection and distance query problems in 2D.
- We contribute in two aspects: First, we propose a new barycode-based sub-distance algorithm that does not only provide a simple and unified condition to determine the minimum simplex but also improve the efficiency in distant, touching, and overlap cases in distance query.
- Second, we provide a highly efficient implementation subroutine for collision detection by optimizing the exit conditions of our GJK distance algorithm, which shows dramatic improvements in run-time for applications that only need binary results.
- We benchmark our methods along with that of the well-known open-source collision detection libraries, such as Bullet, FCL, OpenGJK, Box2D, and Apollo over a range of random datasets.
- The results indicate that our methods and implementations outperform the state-of-the-art in both collision detection and distance query.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2011.09117](https://arxiv.org/abs/2011.09117)
- URL: https://arxiv.org/abs/2011.09117
