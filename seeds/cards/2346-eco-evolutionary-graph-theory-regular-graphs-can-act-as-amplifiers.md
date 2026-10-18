---
title: "Eco-Evolutionary Graph Theory: Regular Graphs can act as Amplifiers"
authors:
  - "George Berry"
  - "Christoph Hauert"
year: 2026
venue: "bioRxiv"
arxiv: null
doi: "10.64898/2026.10.16.759554"
source: "https://www.biorxiv.org/content/10.64898/2026.10.16.759554v1"
topics:
  - "evolutionary-graph-theory"
  - "moran-process"
  - "population-dynamics"
  - "stochastic-processes"
seed_rank: 2346
seed_batch: "curiosity-2026-10-19"
reviewed: "2026-10-19"
pool: "biology"
relevance_score: 7
cites:
  - title: "Eco-Evolutionary Graph Theory: Regular Graphs can act as Amplifiers"
    url: "https://www.biorxiv.org/content/10.64898/2026.10.16.759554v1"
    year: 2026
    arxiv: null
    doi: "10.64898/2026.10.16.759554"
  - title: "Evolutionary dynamics on graphs (Lieberman, Hauert and Nowak)"
    url: "https://doi.org/10.1038/nature03204"
    year: 2005
    arxiv: null
    doi: "10.1038/nature03204"
see: ["546-theory-of-self-reproducing-automata", "2261-a-repeating-sequence-of-simple-rules-creates-a-universal-computer"]
---

# Eco-Evolutionary Graph Theory: Regular Graphs can act as Amplifiers

## One-sentence takeaway

Replacing the Moran process's lock-step "one dies, one is born" with independent birth and death events plus empty sites unifies the two clashing update rules as limits of one model, and in it plain regular graphs and lattices become amplifiers of selection, which the classical isothermal theorem says they can never be.

## Why it's lovely

Evolutionary graph theory has a famous embarrassment: whether a network helps or hinders selection depends on whether you pick who reproduces first or who dies first, a modelling choice with no biological meaning. The star graph amplifies under one rule and suppresses under the other. Berry and Hauert fix this the way an ecologist would, by letting individuals reproduce only into vacant space and die at their own rate. The two old rules fall out as limits (death rate to zero gives death-Birth; large fitness differences approach the Birth-death value as an upper bound), and results now move continuously with scalar parameters. The surprise is that the humblest structures, rings and grids, start favouring good mutants and purging bad ones. For anyone who simulates agents on grids, it is a reminder that "occupied versus empty" is not a detail.

## Key ideas

- **Decoupled Moran process.** Each individual reproduces at rate f into an adjacent vacant node (A + ∅ → 2A) and dies at rate d (A → ∅). The population size floats instead of being pinned at N.
- **Unification.** As d → 0 the fixation probability converges to the death-Birth Moran value; for large fitness differentials the Birth-death value is an upper bound.
- **Amplifiers.** An amplifier raises the fixation probability of advantageous mutants (r > 1) and lowers it for disadvantageous ones (r < 1) relative to the well-mixed case. In this model random regular graphs and lattices are amplifiers, although they are neutral (Bd, isothermal theorem) or suppressing (dB) in the classical Moran process.
- **Context.** Classical results: star and super-star amplify under Bd but suppress under dB; under dB only weak amplifiers were known.

## Caveats

Results lean on simulation and limits over specific graph families; the strength of amplification and its dependence on the death rate need the full paper's figures to judge. A preprint, not yet peer reviewed. It changes which model one should trust, not any measured biology.

## Links

- bioRxiv abstract: https://www.biorxiv.org/content/10.64898/2026.10.16.759554v1
- PDF: https://www.biorxiv.org/content/10.64898/2026.10.16.759554v1.full.pdf
- Lieberman, Hauert and Nowak, Evolutionary dynamics on graphs: https://doi.org/10.1038/nature03204
