---
title: "Complete Diagrammatic Axiomatisations of Relative Entropy"
authors: ["Ralph Sarkis", "Fabio Zanasi"]
year: 2026
venue: "ENTICS"
arxiv: "2603.04530"
doi: null
source: "https://arxiv.org/abs/2603.04530"
topics: [curiosity]
seed_rank: 1026
seed_batch: "curiosity-2026-08-15"
reviewed: "2026-08-15"
pool: "maths-foundations"
relevance_score: 8
lineage: string-diagrams
cites:
  - title: "Representable Markov Categories and Comparison of Statistical Experiments in Categorical Probability"
    url: "https://arxiv.org/abs/2010.07416"
    year: 2023
    arxiv: "2010.07416"
    doi: "10.1016/j.tcs.2023.113896"
  - title: "The Geometry of Tensor Calculus, I"
    url: "https://doi.org/10.1016/0001-8708(91)90003-P"
    year: 1991
    arxiv: null
    doi: "10.1016/0001-8708(91)90003-P"
  - title: "A Survey of Graphical Languages for Monoidal Categories"
    url: "https://arxiv.org/abs/0908.3347"
    year: 2011
    arxiv: "0908.3347"
    doi: "10.1007/978-3-642-12821-9_4"
see:
  - "951-an-introduction-to-string-diagrams-for-computer-scientists"
  - "948-the-geometry-of-tensor-calculus-i"
  - "944-representable-markov-categories-statistical-experiments"
  - "933-weaves-wires-and-morphisms-algebra-of-deep-learning"
  - "117-a-survey-of-graphical-languages-for-monoidal-categories"
---

# Complete Diagrammatic Axiomatisations of Relative Entropy

## One-sentence takeaway

KL and Rényi divergences on stochastic matrices get complete quantitative string-diagram axioms, for both Kronecker (⊗) and direct-sum (⊕) monoidal structures, with the chain rule stated as a quantitative implication.

## Why it matters here

Why you might love this: the Weaves / string-diagram spine (933, 951, 944) already treats wires as morphisms; this is the missing quantitative layer — distances between diagrams, not just equality. The chain rule becoming an implicational axiom (premises bound conditionals ⇒ conclusion bounds the joint) is a specific technique, not a survey of information theory. Bridge: Markov categories already in-library; this is how you would write "how far is this stochastic matrix from that one" as a rewrite.

## Key ideas

- Enrich FStoch two ways: FStoch^⊗ (Kronecker / synthetic probability, Bayesian networks) and FStoch^⊕ (direct sum / barycentric algebras, randomness-as-monad). BStoch^⊗ is the 2^n full subcategory that already has a non-quantitative axiomatisation (causal circuits).
- Framework: quantitative monoidal algebra extended with implicational axioms s =_ε t, so judgements carry a real bound.
- Completeness: freely generated enriched SMCs are isomorphic to BStoch^⊗ and FStoch^⊕ with KL; the same pattern lifts to Rényi of every order α ∈ [0, ∞], KL as α = 1.
- Chain_⊗ and Chain_⊕ are the load-bearing implications in the completeness proofs.

## Caveats

- BStoch^⊗, not the full FStoch^⊗ — the non-enriched axiomatisation does not exist for arbitrary dimensions.
- KL is not a metric (asymmetric, infinite on singular pairs); the enrichment is a quantitative theory, not a law of cosines.
- Builds on a prior total-variation axiomatisation; this card is the relative-entropy completeness result, not that paper.

## Links

- arXiv: [2603.04530](https://arxiv.org/abs/2603.04530)
