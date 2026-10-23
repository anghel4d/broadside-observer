---
title: "Information Set Monte Carlo Tree Search"
authors:
  - "Peter I. Cowling"
  - "Edward J. Powley"
  - "Daniel Whitehouse"
year: 2012
venue: "IEEE Transactions on Computational Intelligence and AI in Games 4(2):120-143"
arxiv: null
doi: "10.1109/TCIAIG.2012.2200894"
source: "https://eprints.whiterose.ac.uk/75048/"
topics:
  - mcts
  - imperfect-information
  - determinization
  - fog-of-war
  - game-ai
seed_rank: 2404
seed_batch: "archive-2026-10-24"
reviewed: "2026-10-24"
pool: "game-ai"
relevance_score: 8
lineage: mcts
see:
  - 1009-bandit-based-monte-carlo-planning
  - 354-parallel-monte-carlo-tree-search
  - 096-forward-modeling-for-partial-observation-strategy-games-a-st
  - 113-portfolio-greedy-search-and-simulation-for-large-scale-comba
cites:
  - title: "Information Set Monte Carlo Tree Search"
    url: "https://doi.org/10.1109/TCIAIG.2012.2200894"
    year: 2012
    arxiv: null
    doi: "10.1109/TCIAIG.2012.2200894"
---

# Information Set Monte Carlo Tree Search

## One-sentence takeaway

Instead of running separate UCT searches on sampled "determinized" perfect-information worlds, ISMCTS grows one tree whose nodes are information sets, using a fresh determinization only to guide each iteration — which shares the whole budget across samples and removes most strategy fusion — with three variants for hidden state (SO-ISMCTS), partially observable moves (SO-ISMCTS+POM) and per-player trees (MO-ISMCTS), the last playing evenly with intermediate-to-expert humans at Lord of the Rings: The Confrontation.

## Why it matters here

GRID COMMAND has fog of war, so any search-based skirmish or commander AI must reason about states it cannot see without cheating. Determinized UCT (sample the hidden units, search as if visible) is the obvious first build and the paper shows its two failure modes: the budget is split across trees that duplicate work, and the AI assumes it can act differently in states it cannot tell apart. ISMCTS is a drop-in change to that design — one tree keyed by what the player knows, per-iteration sampling of what it does not — and the subset-armed-bandit fix matters directly because which enemy actions are legal depends on hidden units.

## Key ideas

- **Problems with determinization.** Budget sharing across independent trees duplicates effort; strategy fusion assumes different decisions can be made in states of the same information set; nonlocality (opponents steering play) is noted but left to opponent modelling.
- **SO-ISMCTS.** One tree, nodes are information sets from the root player's view, edges are actions; each iteration samples a determinization consistent with the root information set and restricts the descent to actions legal in it.
- **Subset-armed bandits.** Because legal actions differ between states in an information set, UCB's parent visit count is replaced by the number of times the parent was visited and the action was available; without this, rare actions are over-explored.
- **SO-ISMCTS + POM.** Edges are moves as seen by the root player, so indistinguishable opponent actions share one edge; this removes the remaining strategy fusion but makes the opponent model effectively random among indistinguishable moves.
- **MO-ISMCTS.** One tree per player, each over that player's information sets; every iteration descends all trees simultaneously, selecting with the acting player's tree — a better opponent model at higher cost.
- **Results.** In Lord of the Rings: The Confrontation, where deep search is needed, ISMCTS has the advantage through more efficient use of the budget; in the phantom (4, 4, 4) game strategy fusion is particularly detrimental, so ISMCTS again outperforms determinization; in Dou Di Zhu the two are on a par because the information-set tree's branching factor is orders of magnitude larger. MO-ISMCTS won 14 of 32 games as Light and 16 of 32 as Dark against human players.

## Caveats

Evaluated on board and card games with small, turn-based action sets, not real-time unit control. ISMCTS iterations are more expensive than determinized UCT's; in the phantom game above 1.5 s per move both ISMCTS variants became relatively weaker than determinized UCT, because assuming the opponent knows hidden information often led them to conclude, incorrectly, that the game was lost and play randomly. Belief distributions are not modelled (uniform over each information set); read from the submitted version deposited in White Rose, which may differ from the published layout.

## Links

- Paper (White Rose eprint, submitted version PDF): https://eprints.whiterose.ac.uk/75048/
- Paper (DOI, IEEE TCIAIG): https://doi.org/10.1109/TCIAIG.2012.2200894
