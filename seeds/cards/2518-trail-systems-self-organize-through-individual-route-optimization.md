---
title: "Trail systems self-organize through individual route optimization"
authors:
  - "Brendan Wallace"
  - "Andrew Berdahl"
year: 2026
venue: "arXiv preprint (q-bio)"
arxiv: "2611.04346"
doi: null
source: "https://arxiv.org/abs/2611.04346"
topics:
  - "stigmergy"
  - "trail-formation"
  - "pathfinding"
  - "collective-behaviour"
seed_rank: 2518
seed_batch: "curiosity-2026-11-05"
reviewed: "2026-11-05"
pool: "game-ai"
relevance_score: 8
cites:
  - title: "Trail systems self-organize through individual route optimization"
    url: "https://arxiv.org/abs/2611.04346"
    year: 2026
    arxiv: "2611.04346"
    doi: null
see: []
---

# Trail systems self-organize through individual route optimization

## One-sentence takeaway

When walkers who know the whole map each take the least-cost path, and walking lowers the ground's cost while unused ground slowly recovers, they grow desire-path networks that are near-optimal for a given amount of trail, whose junction angles follow a critical angle set by the on-trail to off-trail cost ratio, and which can settle into several different stable layouts from the same start.

## Why it's lovely

Desire paths across a campus lawn turn out to be a distributed optimiser: no walker plans the network, yet the network stores a compressed record of where movement keeps paying off, across more lifetimes than any walker has. Flipping the classic pheromone model (cost goes down instead of attraction going up, and agents plan globally instead of following local gradients) gives Steiner-tree-like networks and a testable geometric law from one equation. For Anoptic and GRID COMMAND, this is almost directly a terrain mechanic and a pathfinding cost field: units running ordinary least-cost search on a cost grid they wear down will carve readable roads, and the cost ratio is a single designer knob for how sprawling or minimal those roads become.

## Key ideas

- **Model.** Agents on a 2D grid plan least-cost paths to destinations; ground they cross drops in cost at one rate and relaxes back to its background cost at another.
- **Scenarios shape networks.** Fixed destinations give Steiner-tree-like merges; a hub with random rim points gives branching trees; left-to-right migration gives parallel trails that coalesce; uniformly random goals give a ring or cross with tendrils, and periodic boundaries change it again.
- **Critical departure angle.** From the two costs the authors derive the angle at which leaving a straight trail toward a target becomes worth it; the 90th to 99th percentile of observed deviation angles scale linearly with that prediction.
- **Efficiency frontier.** Measured as total trail against pairwise travel cost, the emergent systems trace an optimal trade-off curve.
- **Multiple attractors.** With identical parameters and only start positions randomised, some point layouts settle into several distinct stable networks, so history decides which roads you get.

## Caveats

Simulations only, with no fit to measured animal or human trail data yet; full map knowledge is the opposite extreme from earlier local-gradient models and real walkers sit in between. Grid resolution and the specific decay rates are not stress-tested here. I read the abstract, introduction and results sections (32 pages).

## Links

- arXiv abstract: https://arxiv.org/abs/2611.04346
- PDF: https://arxiv.org/pdf/2611.04346
