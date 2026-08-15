---
title: "Efficient Selectivity and Backup Operators in Monte-Carlo Tree Search"
authors:
  - "Rémi Coulom"
year: 2006
venue: "Computers and Games 2006"
arxiv: null
doi: "10.1007/978-3-540-75538-8_7"
source: "https://www.remi-coulom.fr/CG2006/CG2006.pdf"
topics:
  - mcts
seed_rank: 289
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
cites:
  - title: "An analysis of alpha-beta pruning"
    url: "https://doi.org/10.1016/0004-3702(75)90019-3"
    year: 1975
    arxiv: null
    doi: "10.1016/0004-3702(75)90019-3"
  - title: "Reinforcement Learning: An Introduction"
    url: "https://doi.org/10.1109/tnn.1998.712192"
    year: 1998
    arxiv: null
    doi: "10.1109/tnn.1998.712192"
  - title: "A Sparse Sampling Algorithm for Near-Optimal Planning in Large Markov Decision Processes"
    url: "https://doi.org/10.1023/a:1017932429737"
    year: 2002
    arxiv: null
    doi: "10.1023/a:1017932429737"
  - title: "Computer Go: An AI oriented survey"
    url: "https://doi.org/10.1016/s0004-3702(01)00127-8"
    year: 2001
    arxiv: null
    doi: "10.1016/s0004-3702(01)00127-8"
see:
  - "379-an-analysis-of-alpha-beta-pruning"
---

# Efficient Selectivity and Backup Operators in Monte-Carlo Tree Search

## One-sentence takeaway

Coulom's Crazy Stone paper grows one Monte-Carlo tree simulation at a time, allocates visits by a Gaussian "probability of being best" urgency, and backs up a mix of mean and robust-max so the root value is neither too optimistic nor too averaged.

## Why it matters here

This is the MCTS that predates UCT-as-brand-name and that GRID COMMAND planners can steal: anytime, no branch cut-off, selectivity at the level of a single playout. Useful for tactical search where alpha-beta has no quiet leaves.

## Key ideas

- Do not separate a min-max phase from a Monte-Carlo phase. Every simulation is stored; nodes track count, sum, and sum-of-squares.
- Nodes start as "external" (heuristic random play) and become "internal" after a visit threshold, at which point move selection follows urgency.
- Urgency `u_i = exp(−2.4 (μ₀−μᵢ)² / 2(σ₀²+σᵢ²)) + εᵢ` never quite reaches zero, so a currently-bad move can still be a killer after deeper search.
- Mean backup underestimates; max backup overestimates lucky leaves. The Mix operator blends robust-max (most-visited child) with the mean, fitted by a TD-like procedure on 1,500 self-play positions.
- Crazy Stone won the 10th KGS computer-Go tournament and beat Indigo 61–39; still behind GNU Go on equal time. CG 2006, DOI 10.1007/978-3-540-75538-8_7.

## Caveats

## Links

- Author PDF: https://www.remi-coulom.fr/CG2006/CG2006.pdf
- DOI: [10.1007/978-3-540-75538-8_7](https://doi.org/10.1007/978-3-540-75538-8_7)
