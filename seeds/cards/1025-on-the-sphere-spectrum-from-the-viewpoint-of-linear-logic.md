---
title: "On the sphere spectrum from the viewpoint of linear logic"
authors: ["Ryo Horiuchi"]
year: 2026
venue: "arXiv"
arxiv: "2608.13012"
doi: null
source: "https://arxiv.org/abs/2608.13012"
topics: [curiosity]
seed_rank: 1025
seed_batch: "curiosity-2026-08-15"
reviewed: "2026-08-15"
pool: "maths-foundations"
relevance_score: 9
lineage: linear-logic
cites:
  - title: "Linear Logic"
    url: "https://doi.org/10.1016/0304-3975(87)90045-4"
    year: 1987
    arxiv: null
    doi: "10.1016/0304-3975(87)90045-4"
  - title: "Weakly distributive categories"
    url: "https://doi.org/10.1016/0022-4049(95)00057-Q"
    year: 1997
    arxiv: null
    doi: "10.1016/0022-4049(95)00057-Q"
  - title: "Smash products and Γ-spaces"
    url: "https://doi.org/10.1017/S0305004198002838"
    year: 1999
    arxiv: null
    doi: "10.1017/S0305004198002838"
  - title: "What kind of linearly distributive category do polynomial functors form?"
    url: "https://arxiv.org/abs/2407.01849"
    year: 2024
    arxiv: "2407.01849"
    doi: null
  - title: "Segal's Gamma rings and universal arithmetic"
    url: "https://arxiv.org/abs/2004.08879"
    year: 2021
    arxiv: "2004.08879"
    doi: "10.1093/qmath/haaa042"
see:
  - "040-linear-logic"
  - "149-linear-logic-autonomous-categories-and-cofree-coalgebras"
  - "018-physics-topology-logic-and-computation-a-rosetta-stone"
  - "029-categories-for-the-working-mathematician-2nd-ed"
  - "951-an-introduction-to-string-diagrams-for-computer-scientists"
---

# On the sphere spectrum from the viewpoint of linear logic

## One-sentence takeaway

Γ-sets with smash ∧ and substitution ∘, sharing the sphere spectrum S as unit, form an isomix linearly distributive category — smash is ⊗ (times), substitution is ⅋ (par), and Lydakis' assembly map is the mixor.

## Why it matters here

Why you might love this: Girard's two multiplicative connectives finally sit on the same discrete homotopy object that models connective spectra and F₁-arithmetic. The distributors come from a normal duoidal interchange (Spivak–Srinivasan), not from a *-autonomous dualising object. Bridge: cards 040 / 149 / 018 already keep linear logic and the Rosetta Stone; this is a specific model where the unit of both tensors is the sphere, so "mix" is geometric rather than a logic gag.

## Key ideas

- Γ-sets are pointed functors Γ^op → Set_*; the sphere spectrum S is the inclusion (S ≅ Γ¹).
- Smash ∧ is Day convolution against smash of pointed finite sets (generalises ⊗_ℕ of commutative monoids / multiplication of naturals); substitution ∘ is composition after left Kan extension to Set_* (generalises monads / rigs via Σ_S).
- (Γ-Set, ∧, ∘, S) is a normal duoidal category; every normal duoidal category is an isomix linearly distributive category.
- Mixors ≅ assembly maps L_{X,Y} : X ∧ Y → X ∘ Y; on Eilenberg–Mac Lane Γ-sets they relate Connes–Consani γ-rings to Durov-style monads.
- From the stable-homotopy viewpoint (Γ-spaces) the assembly maps become equivalences, so times and par agree up to stable equivalence.

## Caveats


## Links

- arXiv: [2608.13012](https://arxiv.org/abs/2608.13012)
