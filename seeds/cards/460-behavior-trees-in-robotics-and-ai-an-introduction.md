---
title: "Behavior Trees in Robotics and AI: An Introduction"
authors:
  - "Michele Colledanchise"
  - "Petter Ögren"
year: 2018
venue: "CRC Press / Chapman & Hall AI and Robotics Series"
arxiv: "1709.00084"
doi: "10.1201/9780429489105"
source: "https://arxiv.org/abs/1709.00084"
topics:
  - behavior-trees
  - game-ai
seed_rank: 460
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
lineage: game-ai-planning
cites:
  - title: "Managing Complexity in the Halo 2 AI System"
    url: "https://www.gdcvault.com/play/1020359/Managing-Complexity-in-the-Halo"
    year: 2005
  - title: "Behavior Trees for Next-Gen Game AI"
    url: "https://aigamedev.com/"
    year: 2007
see:
  - "360-managing-complexity-in-the-halo-2-ai-system"
  - "283-behavior-trees-for-next-gen-game-ai"
---

# Behavior Trees in Robotics and AI: An Introduction

## One-sentence takeaway

Colledanchise and Ögren treat behavior trees as modular reactive task-switching graphs, then give a state-space analysis that proves safety, robustness, and how BTs generalize FSMs, decision trees, and the subsumption architecture.

## Why it matters here

Best single reference when GRID COMMAND graduates ad-hoc Halo/Champandard BT lore into something an agent runtime can analyze rather than just tick.

## Key ideas

- A BT is a tree of control and execution nodes that switches among tasks while staying both modular and reactive — the properties that moved BTs from games into robotics.
- Formal tools map a tree onto a state-space description so designers can reason about safety, robustness, and completion time.
- Those tools also make precise how BTs subsume earlier switching structures.
- Stochastic BTs attach probabilities to action outcomes and compute success probability and expected time to completion; later chapters cover planning and learning on top of BTs.

## Caveats

## Links

- arXiv: [1709.00084](https://arxiv.org/abs/1709.00084)
- DOI: [10.1201/9780429489105](https://doi.org/10.1201/9780429489105)
