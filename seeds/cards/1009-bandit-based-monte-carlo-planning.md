---
title: "Bandit Based Monte-Carlo Planning"
authors: ["Levente Kocsis", "Csaba Szepesvári"]
year: 2006
venue: "ECML"
arxiv: null
doi: "10.1007/11871842_29"
source: "https://doi.org/10.1007/11871842_29"
topics: [mcts, uct, game-tree-search]
seed_rank: 1009
seed_batch: "archive-2026-08-14"
reviewed: "2026-08-14"
pool: "game-ai"
relevance_score: 10
lineage: mcts
cites:
  - title: "Efficient Selectivity and Backup Operators in Monte-Carlo Tree Search"
    url: "https://doi.org/10.1007/11821850_43"
    year: 2006
    arxiv: null
    doi: "10.1007/11821850_43"
  - title: "Finite-time Analysis of the Multiarmed Bandit Problem"
    url: "https://doi.org/10.1023/A:1013689704352"
    year: 2002
    arxiv: null
    doi: "10.1023/A:1013689704352"
see:
  - "289-efficient-selectivity-and-backup-operators-in-monte-carlo-tr"
  - "022-three-states-and-a-plan-the-ai-of-f-e-a-r"
---

# Bandit Based Monte-Carlo Planning

## One-sentence takeaway

Treat each node of a Monte-Carlo search tree as a multi-armed bandit and apply UCB1: UCT is consistent for finite-horizon/discounted MDPs and, in the experiments, beats the then-standard rollout planners.

## Why it matters here

The library has Coulom's 2006 selectivity/backup paper (289) and F.E.A.R. GOAP (022) but not Kocsis–Szepesvári UCT — the other founding MCTS paper, and the one RTS/combat planners actually name. GRID COMMAND's tactical search and any ano-driven order planner that cannot enumerate the tree want this bound-plus-bandit recipe.

## Key ideas

- Rollout-based Monte-Carlo planning is one of the few viable methods for large MDPs; the question is how to allocate simulations.
- UCT = UCB1 applied to trees: at each node, pick the action maximizing empirical mean plus an exploration bonus ~ sqrt(log n / n_a).
- Consistency: the probability of selecting an optimal action converges to 1 as the sample count grows; finite-sample bounds on estimation error are given for finite-horizon and discounted MDPs.
- Empirically stronger than ARTDP and PG-ID on P-games and the sailing MDP used in prior Monte-Carlo planning work.
- Together with Coulom 2006 this is the 2006 pair that made MCTS the default for Go and then games with huge action spaces.

## Caveats


## Links

- DOI: [10.1007/11871842_29](https://doi.org/10.1007/11871842_29)
- Springer: https://link.springer.com/chapter/10.1007/11871842_29
- Open PDF: https://computer-go.info/resources/bandit.html
