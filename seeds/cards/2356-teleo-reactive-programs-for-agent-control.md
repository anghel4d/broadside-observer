---
title: "Teleo-Reactive Programs for Agent Control"
authors:
  - "Nils J. Nilsson"
year: 1994
venue: "Journal of Artificial Intelligence Research 1, 139–158"
arxiv: "cs/9401101"
doi: "10.1613/jair.30"
source: "https://arxiv.org/abs/cs/9401101"
topics:
  - reactive-game-ai
  - production-rules
  - goal-regression
  - agent-control
seed_rank: 2356
seed_batch: "archive-2026-10-20"
reviewed: "2026-10-20"
pool: "game-ai"
relevance_score: 8
lineage: reactive-agent-architectures
see:
  - 2332-elephants-don-t-play-chess
  - 2305-pengi-an-implementation-of-a-theory-of-activity
  - 309-strips-a-new-approach-to-the-application-of-theorem-proving-
  - 460-behavior-trees-in-robotics-and-ai-an-introduction
cites:
  - title: "Teleo-Reactive Programs for Agent Control"
    url: "https://arxiv.org/abs/cs/9401101"
    year: 1994
    arxiv: "cs/9401101"
    doi: "10.1613/jair.30"
---

# Teleo-Reactive Programs for Agent Control

## One-sentence takeaway

Nilsson's teleo-reactive (T-R) programs are ordered lists of condition → action rules that are re-evaluated continuously, so the agent always runs the action of the first true condition; when each condition is the regression of a higher one through its action and the conditions together cover every situation, the program is "universal" and drives the agent to its goal from anywhere, recovering automatically from setbacks and from other agents' help.

## Why it matters here

For GRID COMMAND unit and squad AI this is the cleanest middle ground between Brooks-style reactive layers (2332) and STRIPS planning (309): rules are written backward from the goal like a plan, executed every tick like a priority list, and they tolerate a world that changes under them. The universality conditions give a checkable design rule for hand-written unit behaviours, and the T-R tree form ("execute the action leading out of the shallowest true node") maps directly onto a cheap per-tick evaluation that the rule engine (Rete 042, TREAT 1004) could keep incrementally.

## Key ideas

- **Durative actions, continuous conditions.** Actions such as move or rotate continue while their condition stays the first true one; the program is best read as a circuit, not a sequence of discrete events.
- **Regression property and completeness.** A T-R sequence satisfies the regression property if each lower condition is the regression of some higher condition through its action; it is complete if the disjunction of conditions is a tautology; universal = both, which guarantees goal achievement when actions usually have their intended effects.
- **Homeostasis.** When the goal holds the agent idles; if the goal is undone it resumes from wherever it now is; if another agent achieves part of the goal it skips ahead.
- **Hierarchy, parameters, recursion.** Actions can be T-R programs themselves, with parameters bound at run time; only the circuitry for the current bindings is built, unlike compile-time circuit approaches (GAPPS, Chapman's video-game player, Brooks' BL) that must anticipate all contingencies.
- **Implementation.** A LISP cond re-run after each small action increment, assuming the world changes slowly compared with evaluation (the paper compares this to Esterel's synchrony hypothesis).
- **T-R trees.** Nodes are conditions, arcs are actions toward the root goal; with a tie-breaking rule (shallowest or least-cost-to-goal) a tree becomes a sequence. The paper demonstrates programs in the simulated Botworld construction domain and on a Nomadic Technologies mobile robot.

## Caveats

The paper is deliberately informal; it gives no complexity analysis of continuous condition evaluation and assumes sampling is fast relative to the environment. Universality says nothing about efficiency or oscillation when two conditions flicker, and coordination between several T-R agents is left to future work. Evidence is illustrative experiments rather than benchmarks.

## Links

- Paper (arXiv): https://arxiv.org/abs/cs/9401101
- Paper (arXiv PDF): https://arxiv.org/pdf/cs/9401101
- Paper (DOI, JAIR): https://doi.org/10.1613/jair.30
