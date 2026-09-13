---
title: "Probabilistic Cellular Automata for Granular Media in Video Games"
authors: ["Jonathan Devlin", "Micah D. Schuster"]
year: 2021
venue: "The Computer Games Journal"
arxiv: "2008.06341"
doi: "10.1007/s40869-020-00122-4"
source: "https://arxiv.org/abs/2008.06341"
topics: [cellular-automata, falling-sand, game-sim]
seed_rank: 1807
seed_batch: "craft-2026-09-13"
reviewed: "2026-09-13"
pool: "game-ai"
relevance_score: 10
lineage: falling-sand-sims
cites:
  - title: "Theory of Self-Reproducing Automata"
    url: "https://archive.org/details/theoryofselfrepr00vonneumann"
    year: 1966
    arxiv: null
    doi: null
see:
  - "546-theory-of-self-reproducing-automata"
  - "1135-a-cellular-texture-basis-function"
---

# Probabilistic Cellular Automata for Granular Media in Video Games

## One-sentence takeaway

Devlin–Schuster turn side-profile falling-sand into a tunable probabilistic CA: a modified Margolus neighborhood plus friction-like transition probabilities that reproduce hourglass sandpile looks without a full continuum particle solver.

## Why it matters here

GRID COMMAND still needs Noita-style world matter this week — dirt, sand, rubble that flows under bombardment — and the library only has von Neumann automata 546 / cellular texture 1135, not a production falling-sand recipe. This paper is the leftover *craft* for that pocket: square lattice, dirty-cheap updates, friction knobs you can dial until the pile angle of repose looks right. Orthogonal to Flecs ECS storage; compose as a chunked CA layer next to the unit sim.

## Key ideas

- **Modified Margolus neighborhood.** Pairwise block updates (not naive Moore) keep mass conservation and avoid the double-update races that break naive sand CAs.
- **Probabilistic transitions.** Friction between grains is a probability table, not a force integrator — cheap enough for large 2D maps and tunable for look.
- **Hourglass evidence.** Qualitative sandpile morphology under different probabilities; computational cost vs continuum sims is the production argument.
- **Game lineage.** Explicitly situates against Noita / RimWorld / Oxygen Not Included class sims — the GRID COMMAND world pocket.

## Caveats

Journal version 2021 (Computer Games Journal); arXiv preprint `2008.06341` (nlin.CG, Aug 2020). Side-profile 2D only — not a 3D voxel CA (Artificial Matter TR is the 3D leftover, cite not mint this cycle). Noita’s own chunk/dirty-rect/checkerboard multithreading is GDC talk craft, not this paper. Do not remint 546 / 1135.

## Links

- arXiv abs: https://arxiv.org/abs/2008.06341
- PDF: https://arxiv.org/pdf/2008.06341
- DOI: https://doi.org/10.1007/s40869-020-00122-4
