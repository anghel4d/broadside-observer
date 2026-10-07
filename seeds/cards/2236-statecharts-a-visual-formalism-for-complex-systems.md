---
title: "Statecharts: A Visual Formalism for Complex Systems"
authors:
  - "David Harel"
year: 1987
venue: "Science of Computer Programming 8(3), pp. 231–274"
arxiv: null
doi: "10.1016/0167-6423(87)90035-9"
source: "https://www.state-machine.com/doc/Harel87.pdf"
topics:
  - statecharts
  - hierarchical-state-machines
  - reactive-systems
  - game-ai
  - ui-modes
seed_rank: 2236
seed_batch: "archive-2026-10-08"
reviewed: "2026-10-08"
pool: "game-ai"
relevance_score: 9
lineage: game-ai-planning
cites:
  - title: "On the Development of Reactive Systems"
    url: "https://doi.org/10.1007/978-3-642-82453-1_17"
    year: 1985
    arxiv: null
    doi: "10.1007/978-3-642-82453-1_17"
  - title: "Communicating Sequential Processes"
    url: "https://doi.org/10.1145/359576.359585"
    year: 1978
    arxiv: null
    doi: "10.1145/359576.359585"
  - title: "A Calculus of Communicating Systems"
    url: "https://link.springer.com/book/10.1007/3-540-10235-3"
    year: 1980
    arxiv: null
    doi: "10.1007/3-540-10235-3"
  - title: "The STATEMATE Semantics of Statecharts"
    url: "https://doi.org/10.1145/235321.235322"
    year: 1996
    arxiv: null
    doi: "10.1145/235321.235322"
see:
  - "046-communicating-sequential-processes"
  - "043-a-calculus-of-communicating-systems"
---

# Statecharts: A Visual Formalism for Complex Systems

## One-sentence takeaway

Statecharts are state diagrams plus depth, orthogonality and broadcast communication. Superstates group substates so that one transition covers a whole cluster, AND-decomposed regions run in parallel without spelling out the product of their states, and history entrances resume where the system left off. Together these stop the exponential blow-up that makes flat state machines unusable for reactive systems.

## Why it matters here

GRID COMMAND unit behaviour ("in all combat states, on retreat order go to withdrawing"), squad orders that run independently of a unit's movement mode, and console or UI modes are textbook reactive systems. Game "hierarchical FSMs" are informal statecharts, and Halo 2's behaviour DAG (360) and behaviour trees (283) are the usual alternatives. Using the real formalism gives ano standing rules a clean target: a rule becomes an orthogonal region, and an interrupt becomes a superstate transition. Pairs with Lambda: The Ultimate GOTO 2234, where each state is a tail-called procedure.

## Key ideas

- **Reactive vs transformational.** Reactive systems are event-driven and continuously responding, and an input/output relation does not specify them. The paper credits Pnueli with the term "reactive" and argues states and events are the natural medium for such systems, provided the description is modular and hierarchical.
- **Depth (OR-states).** Clustering states into a superstate lets one arrow from the superstate's boundary stand for transitions from every substate ("in all airborne states, when the yellow handle is pulled the seat is ejected"). Zooming in and out moves between levels. Default arrows choose the entry substate.
- **Orthogonality (AND-states).** A state can be the product of independent components ("gearbox state is independent of braking system"). Their combination is implicit, so sizes add rather than multiply. This is where concurrency enters.
- **History.** An H-entrance re-enters the most recently visited substate at that level. H* (deep history) applies all the way down, overriding defaults. Conditional and selection entrances generalise the single labelled arrow.
- **Broadcast.** Events generated in one orthogonal component are seen by the others. The running example is a multi-alarm digital wristwatch. The paper also reports three years of experience specifying a particularly complex system; the work began as consulting for Israel Aircraft Industries. The STATEMATE tool came out of the work.

## Caveats

The 1987 paper is deliberately diagrammatic. Its formal semantics came later (Harel–Pnueli–Schmidt–Sherman 1987; STATEMATE semantics 1996), and UML and SCXML variants differ on step semantics, priority and simultaneous events, so pick one semantics explicitly. Broadcast between orthogonal regions makes ordering and determinism subtle, which matters for lockstep simulation. Behaviour trees displaced HFSMs in many games for authoring and reuse reasons, not expressiveness. Card written from an OCR of the scanned article (pp. 1–12 and the reference list) plus the published abstract.

## Links

- Article PDF (scanned, Quantum Leaps mirror): https://www.state-machine.com/doc/Harel87.pdf
- DOI: https://doi.org/10.1016/0167-6423(87)90035-9
- STATEMATE semantics (Harel–Naamad 1996): https://doi.org/10.1145/235321.235322
