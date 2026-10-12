---
title: "Primitive periods in greedy chip-firing games"
authors:
  - "Zheng Huang"
  - "Anyuan Tian"
year: 2026
venue: "arXiv"
arxiv: "2610.08949"
doi: null
source: "https://arxiv.org/abs/2610.08949"
topics:
  - "chip-firing"
  - "hunger-game"
  - "apportionment"
  - "fair-scheduling"
  - "dynamics"
seed_rank: 2269
seed_batch: "curiosity-2026-10-13"
reviewed: "2026-10-13"
pool: "maths"
relevance_score: 7
cites:
  - title: "Primitive periods in greedy chip-firing games"
    url: "https://arxiv.org/abs/2610.08949"
    year: 2026
    arxiv: "2610.08949"
    doi: null
see: ["1083-riemann-roch-and-abel-jacobi-theory-on-a-finite-graph"]
---

# Primitive periods in greedy chip-firing games

## One-sentence takeaway

In Li and Propp's hunger game, where the hungriest state of a Markov chain fires and feeds its neighbours in proportion to the transition probabilities, every periodic orbit has least period T (the smallest integer making T times the stationary distribution integral), with each state firing exactly T·pi_i times.

## Why it's lovely

It is a deterministic machine that realises a stationary distribution exactly over each period, a cousin of rotor-routers and of quota-based apportionment. The paper notes that the greedy rule "pick whoever is furthest below its proportional target" (the chairman assignment problem) is exactly a rank-one hunger game. That is the rule game and engine schedulers reach for when they want weighted fairness without randomness, for example sharing AI think time or production slots across RTS factions in fixed proportions, and here it comes with a clean period theorem.

## Key ideas

- **Hunger game.** Each state has real-valued hunger; the state of maximal hunger fires (ties broken by a fixed order), losing 1 and adding P_ij to each state j.
- **Least period T.** Every periodic orbit has least period T, and state i fires T·pi_i times in it; this settles two conjectures of Li and Propp.
- **Tiling.** The periodic states of total hunger zero tile the corresponding hyperplane by lattice translations.
- **Fixed-priority chip-firing.** An analogous least-period theorem holds for nontrivial periodic orbits on strongly connected digraphs.
- **Monotone scores.** Firing the state of maximal score, for any nondecreasing score of hunger, still gives least period T, with a sufficient condition for eventual periodicity from every start.

## Caveats

Preprint (Oct 2026), pure combinatorics; it proves period structure, not discrepancy bounds or transient lengths, which are what a scheduler would also care about. Rational transition matrices only.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.08949
- PDF: https://arxiv.org/pdf/2610.08949
