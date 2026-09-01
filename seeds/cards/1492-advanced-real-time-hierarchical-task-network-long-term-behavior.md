---
title: "Advanced Real-Time Hierarchical Task Network: Long-Term Behavior in Real-Time Games"
authors: ["Kousuke Namiki", "Tomohiro Mori", "Youichiro Miyake", "Shinpei Sakata", "Gustavo Martins"]
year: 2021
venue: "AIIDE"
arxiv: null
doi: "10.1609/aiide.v17i1.18910"
source: "https://doi.org/10.1609/aiide.v17i1.18910"
topics: [strategy-rts-agents]
seed_rank: 1492
seed_batch: "craft-2026-09-01"
reviewed: "2026-09-01"
pool: "game-ai"
relevance_score: 9
lineage: game-ai-planning
cites:
  - title: "Three States and a Plan: The AI of F.E.A.R."
    url: "https://alumni.media.mit.edu/~jorkin/gdc2006_orkin_jeff_fear.pdf"
    year: 2006
    arxiv: null
    doi: null
  - title: "SHOP2: An HTN Planning System"
    url: "https://doi.org/10.1613/jair.1141"
    year: 2003
    arxiv: null
    doi: "10.1613/jair.1141"
  - title: "Hierarchical Task Network Plan Reuse for Video Games"
    url: "https://doi.org/10.1109/CIG.2016.7860434"
    year: 2016
    arxiv: null
    doi: "10.1109/CIG.2016.7860434"
see:
  - "022-three-states-and-a-plan-the-ai-of-f-e-a-r"
  - "461-applying-goal-oriented-action-planning-to-games"
  - "296-shop2-an-htn-planning-system"
  - "283-behavior-trees-for-next-gen-game-ai"
---

# Advanced Real-Time Hierarchical Task Network: Long-Term Behavior in Real-Time Games

## One-sentence takeaway

Square Enix practitioner HTN: stop thrashing long-term plans by emitting a branched Situation–Task Network from a cheap simulator, then let a Plan Executor pick a live branch instead of replanning every surprise.

## Why it matters here

Last Craft's game-ai slot was honest-empty (JPS 196 / Emerson / GOAP 22 / BT already). GRID COMMAND still needs the *real-time HTN leftover* of GOAP 22/461 and SHOP2 296: a plan that survives the other player moving. Namiki et al. name re-planning as the failure mode — crank the frequency and the NPC collapses to FSM/BT reactivity. ART-HTN's answer is a multi-scenario plan, not a tighter A*. Steal ST-Network + executor grounding; do not remint JPS 196, Emerson, GOAP, BT, or HRL-IM 1064.

## Key ideas

- **The actual claim.** Conventional HTN cannot handle environmental change, stochastic events, or opponents, so production games replan. ART-HTN has three functions: a Simulation Planner, a Multi-Scenario Plan, and a Plan Executor. Planning uses a simplified parameter model (not a full 3D tick) so several candidate tasks can be rolled out as branches.
- **ST-Network, not a chain.** Instead of one precondition/effect chain, the planner emits paired (situation, action) data — a Situation Task Network, game-tree-shaped. The executor enumerates nodes near the current situation, picks the most effective action, and decomposes *tasks* (win/loss-relevant, used in the simulator) into *operators* (engine-grounded: head direction, posture, BT/visual-script leaves). If the opponent's move is already a branch, no replan.
- **Search made cheap enough for a console.** Brute-force task assignment explodes. Three cuts: (1) *meaningful* actions ("approach", "hide") not metre-scale sidesteps; (2) Composite Tasks that can refuse interruption so "hide then attack" is not cancelled mid-approach; (3) Symbol Analyzer helpers that tag situations (encircled, engaged) for high-level tactics the simulator alone would miss. High-Level Planner does march/logistics; Simulation Planner does the fight.
- **Threading, not a measured frame budget.** Because the executor is robust to unplanned micro-detail, "the Planning System can be executed somewhat independently" — "spending a few seconds in a separate thread to search for advanced moves." Demo: one robot vs enemies; ST-Network nodes coloured by predicted win (blue) / defeat (red); smoke grenades as a defensive plan. Conclusion: "still only able to compute one-on-one situations."

## Caveats

Five-page practitioner paper. No FPS, no millisecond planner budget, no ablation vs GOAP/SHOP2. "Frame budget" is the Craft leftover, not a number in the PDF — they explicitly allow multi-second off-thread search. ML is a development-time evaluation-function story, not a shipped NN policy (no standard NN inference on PS5/Xbox/Switch *yet*, 2021). One-on-one only.

## Links

- DOI: [10.1609/aiide.v17i1.18910](https://doi.org/10.1609/aiide.v17i1.18910)
- AAAI OJS: https://ojs.aaai.org/index.php/AIIDE/article/view/18910
- PDF: https://cdn.aaai.org/ojs/18910/18910-52-22676-1-2-20211004.pdf
