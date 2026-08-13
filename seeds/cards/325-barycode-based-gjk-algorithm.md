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
cites:
  - title: "Real-Time Collision Detection"
    url: "https://doi.org/10.1201/b14581"
    year: 2004
    arxiv: null
    doi: "10.1201/b14581"
  - title: "MuJoCo: A physics engine for model-based control"
    url: "https://doi.org/10.1109/iros.2012.6386109"
    year: 2012
    arxiv: null
    doi: "10.1109/iros.2012.6386109"
  - title: "FCL: A general purpose library for collision and proximity queries"
    url: "https://doi.org/10.1109/icra.2012.6225337"
    year: 2012
    arxiv: null
    doi: "10.1109/icra.2012.6225337"
  - title: "A fast algorithm for incremental distance calculation"
    url: "https://doi.org/10.1109/robot.1991.131723"
    year: 2002
    arxiv: null
    doi: "10.1109/robot.1991.131723"
  - title: "Improving the GJK Algorithm for Faster and More Reliable Distance Queries Between Convex Objects"
    url: "https://doi.org/10.1145/3072959.3083724"
    year: 2017
    arxiv: null
    doi: "10.1145/3072959.3083724"
  - title: "CGAL"
    url: "https://doi.org/10.1145/1653771.1653865"
    year: 2009
    arxiv: null
    doi: "10.1145/1653771.1653865"
  - title: "V-Clip"
    url: "https://doi.org/10.1145/285857.285860"
    year: 1998
    arxiv: null
    doi: "10.1145/285857.285860"
  - title: "Real-time collision detection and distance computation on point cloud sensor data"
    url: "https://doi.org/10.1109/icra.2013.6631081"
    year: 2013
    arxiv: null
    doi: "10.1109/icra.2013.6631081"
  - title: "Enhancing GJK: computing minimum and penetration distances between convex polyhedra"
    url: "https://doi.org/10.1109/robot.1997.606761"
    year: 2002
    arxiv: null
    doi: "10.1109/robot.1997.606761"
  - title: "A Fast and Robust GJK Implementation for Collision Detection of Convex Objects"
    url: "https://doi.org/10.1080/10867651.1999.10487502"
    year: 1999
    arxiv: null
    doi: "10.1080/10867651.1999.10487502"
see:
  - "371-real-time-collision-detection"
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
