---
title: "Microswimmers lose by swimming selfishly"
authors:
  - "Albert Alonso"
year: 2026
venue: "arXiv preprint (cond-mat.soft)"
arxiv: "2610.41965"
doi: null
source: "https://arxiv.org/abs/2610.41965"
topics:
  - "low-reynolds-swimming"
  - "game-theory"
  - "differentiable-simulation"
  - "price-of-anarchy"
seed_rank: 2497
seed_batch: "curiosity-2026-11-03"
reviewed: "2026-11-03"
pool: "maths"
relevance_score: 7
cites:
  - title: "Microswimmers lose by swimming selfishly"
    url: "https://arxiv.org/abs/2610.41965"
    year: 2026
    arxiv: "2610.41965"
    doi: null
see: []
---

# Microswimmers lose by swimming selfishly

## One-sentence takeaway

Optimising the strokes of soft low-Reynolds swimmers with a differentiable Stokes solver shows that two nearby swimmers play a social dilemma: each one's stroke moves its neighbour with a \(1/\ell\) influence but gives itself only a \(1/\ell^2\) incentive to adapt, so selfish swimmers end up worse off than if neither had adapted, while related swimmers recover the gain and competitors pay to hinder each other.

## Why it's lovely

The prisoner's dilemma falls out of the Stokes equations with no biology added: the asymmetry between how much you push your neighbour and how much your neighbour's flow tells you to change is just two different power laws of distance. A lone swimmer, started from random membrane motion, rediscovers the travelling wave on its own, which is a satisfying check that gradient descent through a fluid solver finds physics. For Broadside, it is a clean physical model of a fleet of self-optimising agents that share a medium: when each agent optimises only its own reward, the externality it creates can be an order of distance larger than the signal it receives, and the fix is valuing the neighbour's payoff, not better individual optimisation.

## Key ideas

- **No stroke assumed.** Each swimmer is a closed planar membrane with constant area; its shape is a general Fourier series in angle and time, optimised from random initial strokes.
- **Differentiable Stokes solver.** Gives both each swimmer's own gradient and the cross-gradient of its payoff with respect to the neighbour's stroke, which measures influence directly.
- **Two decay laws.** For swimmers in line, influence on the neighbour decays as \(1/\ell\) while the incentive to respond decays as \(1/\ell^2\); selfish swimmers react only to the weak term.
- **Price of anarchy.** The cooperative gain selfish pairs miss decays only as \(1/\ell^2\), and their Nash adaptation leaves both slower than keeping their solitary strokes.
- **Relatedness dial.** Weighting the neighbour's payoff (kin selection) recovers the gain; negative weighting (competition) lets a swimmer slow its rival only at a cost to itself, with an analytic law covering both.

## Caveats

Two-dimensional membranes and pairs only; larger groups and three-dimensional flows are not studied. The optimisation is over small-deformation Fourier strokes, so the results describe shape-changing amoeboid swimmers rather than flagellated ones. I read the abstract, introduction and model section (17 pages).

## Links

- arXiv abstract: https://arxiv.org/abs/2610.41965
- PDF: https://arxiv.org/pdf/2610.41965
