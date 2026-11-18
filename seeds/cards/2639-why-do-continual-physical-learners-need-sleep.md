---
title: "Why do continual physical learners need sleep?"
authors:
  - "Nada Elmeligy"
  - "Nidhi Pashine"
  - "J. M. Schwarz"
year: 2026
venue: "arXiv preprint (physics.bio-ph)"
arxiv: "2611.22070"
doi: null
source: "https://arxiv.org/abs/2611.22070"
version_reviewed: "v1"
topics:
  - "continual-learning"
  - "physical-learning"
  - "sleep"
  - "consolidation"
  - "rehearsal"
seed_rank: 2639
seed_batch: "curiosity-2026-11-19"
reviewed: "2026-11-18"
pool: "agents"
relevance_score: 8
cites:
  - title: "Why do continual physical learners need sleep?"
    url: "https://arxiv.org/abs/2611.22070"
    year: 2026
    arxiv: "2611.22070"
    doi: null
  - title: "The \"Wake-Sleep\" Algorithm for Unsupervised Neural Networks"
    url: "https://doi.org/10.1126/science.7761831"
    year: 1995
    arxiv: null
    doi: "10.1126/science.7761831"
---

# Why do continual physical learners need sleep?

## One-sentence takeaway

A disordered spring network trained by local stiffness changes on a stream of mechanical tasks loses the ability to learn as its bonds specialize. A conserved budget trades learning capacity against bond-dominance polarization, and running local repair in a separate sleep-like phase restores capacity better than repairing while learning.

## Why it's lovely

Jellyfish, hydra and sea anemones sleep, though none has a brain. This paper asks whether learning itself creates the need for sleep, and gets a mechanical answer from a network of springs with no biology in it. The core is a rule-independent identity. Each bond's dominance is its share of the load, these shares sum to a fixed total, and so learning capacity plus polarization is conserved. Specializing therefore spends capacity. Bonds can measure their own dominance by sensing random internal jiggling and rebalance it, but forces from active training bias that measurement, so repair works better offline. This maps closely onto Broadside's rehearsal/practice and continual-skills themes: a principled reason for agents to have a separate maintenance or consolidation phase instead of repairing while acting. Card 2630, on stale skills, is the agent-side counterpart.

## Key ideas

- **Setup.** Mechanical allostery: tension at an input bond should produce a target response at an output bond. The network learns a stream of such tasks by local updates to bond stiffness.
- **Dominance.** f_b = k_b/(k_b + k_env,b) ∈ [0,1] is the share of the load a bond carries against the rest of the network. The f_b sum to a fixed total n, so training can only move dominance between bonds, not create it.
- **Budget.** Learning capacity C = Σ f_b(1 − f_b) and polarization ("sleep pressure") P = Σ (f_b − f̄)² satisfy C + P = B, a constant, so ΔC = −ΔP. The paper says this holds for any learning rule and for mechanical, electrical or hydraulic networks.
- **Forgetting as specialization.** Continual training drives bonds toward full dominance or bypass, both of which have little plasticity, so the network gets worse at learning new tasks.
- **Repair.** Random internal perturbations let each bond estimate its dominance; above-average bonds are weakened and below-average ones strengthened. During active learning the training forces bias these estimates, and separating wake (learn) and sleep (repair) phases removes the interference.

## Caveats

I read the abstract and parts of the main text of v1 (Tuesday 17 Nov 2026); it is not refereed. These are simulations of an idealized spring network. The link to biological sleep is an analogy and hypothesis, and nothing here is shown to carry over to neural networks or LLM agents. The conserved budget is exact for this class of linear networks only.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.22070
- PDF: https://arxiv.org/pdf/2611.22070
- Hinton et al., The wake-sleep algorithm (Science, 1995): https://doi.org/10.1126/science.7761831
