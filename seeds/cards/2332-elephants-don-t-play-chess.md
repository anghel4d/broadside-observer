---
title: "Elephants Don't Play Chess"
authors:
  - "Rodney A. Brooks"
year: 1990
venue: "Robotics and Autonomous Systems 6(1–2), 3–15"
arxiv: null
doi: "10.1016/S0921-8890(05)80025-9"
source: "https://people.csail.mit.edu/brooks/papers/elephants.pdf"
topics:
  - reactive-game-ai
  - subsumption-architecture
  - behavior-arbitration
  - situated-agents
seed_rank: 2332
seed_batch: "archive-2026-10-18"
reviewed: "2026-10-18"
pool: "game-ai"
relevance_score: 8
lineage: reactive-agent-architectures
see:
  - 2305-pengi-an-implementation-of-a-theory-of-activity
  - 460-behavior-trees-in-robotics-and-ai-an-introduction
  - 201-steering-behaviors-for-autonomous-characters
  - 022-three-states-and-a-plan-the-ai-of-f-e-a-r
cites:
  - title: "Elephants Don't Play Chess"
    url: "https://doi.org/10.1016/S0921-8890(05)80025-9"
    year: 1990
    arxiv: null
    doi: "10.1016/S0921-8890(05)80025-9"
---

# Elephants Don't Play Chess

## One-sentence takeaway

Brooks argues for the "physical grounding hypothesis" — the world is its own best model, so intelligence should be decomposed into layered behaviour-generating modules (augmented finite state machines that suppress or inhibit each other's wires) rather than perception → central symbolic reasoner → action — and backs it with a family portrait of MIT robots built that way.

## Why it matters here

GRID COMMAND units need cheap, robust, many-instance behaviour, and this is the paper that names the layering discipline behind steering stacks (201), behaviour trees (460) and Pengi's deictic routines (2305). Its concrete rule — add a capability by adding new network structure and side-tapping existing wires, never editing debugged layers — is a workable contract for an RTS AI codebase where hundreds of units run the same small machines each tick, and Toto's map-as-active-nodes shows how even "planning" can live inside that substrate.

## Key ideas

- **Decompose by behaviour, not function.** Each layer connects perception to action on its own; competence grows by adding layers, whereas in the classical pipeline no single module produces behaviour.
- **AFSMs as substrate.** The old subsumption language compiles augmented finite state machines (registers, alarm-clock timers, a small FSM driving a combinational network) into a scheduler plus FSM routines for 68000/68HC11/6301 targets; the later behaviour language groups real-time rule sets into behaviours that share registers and retriggerable monostables.
- **Suppression and inhibition.** Higher layers attach as side-taps: a suppressor replaces a lower layer's input for a short time, an inhibitor blocks an output; Allen's wander layer sums a random heading with the obstacle-avoidance vector and suppresses the primitive avoid output while the halt reflex keeps running unchanged.
- **Use the world as the message bus.** Herbert's 24 slow 8-bit processors had no internal communication between behaviour modules: the arm noticed the wheels had stopped in front of a soda can by reading shaft encoders, not by being told.
- **Incremental, never-edited networks.** Genghis (1 kg, six legs, 12 motors, 12 force sensors) gained standing, blind walking, terrain compliance, obstacle stepping and person-following purely by adding structure; Toto built a landmark graph whose nodes are behaviours, with path planning by spreading activation from the goal.

## Caveats

This is a position paper: the evidence is a set of robot demonstrations, not controlled comparisons, and the claims about scaling to "vastly more ambitious systems" were prospective in 1990. Arbitration by fixed suppression wiring gets hard to reason about as layers multiply, which is part of why games moved to behaviour trees and utility systems. The polemic against symbols should be read alongside planners like F.E.A.R.'s GOAP (022), which mix both styles.

## Links

- Paper (author PDF): https://people.csail.mit.edu/brooks/papers/elephants.pdf
- Paper (DOI): https://doi.org/10.1016/S0921-8890(05)80025-9
