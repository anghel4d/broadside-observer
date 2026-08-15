---
title: "The Type and Effect Discipline"
authors:
  - "Jean-Pierre Talpin"
  - "Pierre Jouvelot"
year: 1994
venue: "Information and Computation"
arxiv: null
doi: "10.1006/inco.1994.1046"
source: "https://doi.org/10.1006/inco.1994.1046"
topics:
  - typed-programming-systems
  - region-memory-capabilities
seed_rank: 142
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
cites:
  - title: "Polymorphic Effect Systems"
    url: "https://doi.org/10.1145/73560.73564"
    year: 1988
    arxiv: null
    doi: "10.1145/73560.73564"
  - title: "Algebraic Reconstruction of Types and Effects"
    url: "https://doi.org/10.1145/99583.99623"
    year: 1991
    arxiv: null
    doi: "10.1145/99583.99623"
  - title: "Types and Effects Towards the Integration of Functional and Imperative Programming"
    url: "https://apps.dtic.mil/sti/pdfs/ADA186930.pdf"
    year: 1987
    arxiv: null
    doi: null
  - title: "A theory of type polymorphism in programming"
    url: "https://doi.org/10.1016/0022-0000(78)90014-4"
    year: 1978
    arxiv: null
    doi: "10.1016/0022-0000(78)90014-4"
see:
  - "150-polymorphic-effect-systems"
---

# The Type and Effect Discipline

## One-sentence takeaway

An ML-style reconstruction algorithm infers types, regions (alias sets of references), and effects (`init`/`read`/`write` on those regions) for a call-by-value core with `new`/`get`/`set`, then uses subeffecting and effect masking so a computation can be treated as pure when its store actions are unobservable.

## Why it matters here

Ano and the engine's effect polymorphism sit on this discipline: arrows carry a latent effect, regions partition the store, and masking is how a block that touches only private memory looks pure to its caller.

## Key ideas

- Three static domains. Types include `unit`, refs `ref_ρ(τ)`, and functions `τ --σ--> τ'` whose latent effect `σ` is the body's effect at application. Regions abstract sets of possibly aliased locations. Effects are `0`, `init(ρ)`, `read(ρ)`, `write(ρ)`, union, and effect variables.
- Subeffecting (`σ ⊇ σ'`) is the effect analogue of subtyping. It is what lets the two arms of a conditional, or the two sides of an assignment, be coerced to a common upper bound — the example `{if true (lambda (x) x) (lambda (x) (get (new x)))}` is accepted here and rejected by earlier effect-matching systems.
- Reconstruction computes a maximal type (in the usual substitution order), a lower bound on the effect, and a region assignment that minimizes spurious aliasing. Let-generalization is restricted to non-expansive expressions (variables, lambdas, and lets of those), following Tofte.
- Consistency: a dynamic trace of `init`/`read`/`write` on concrete locations is related to the static effect by a store model that maps each location to a region and type. Expanding the store preserves the relation.
- The applications they name are stack allocation of references whose region does not escape, and parallel code generation that preserves sequential semantics because non-interfering effects are known statically.

## Caveats

## Links

- DOI: [10.1006/inco.1994.1046](https://doi.org/10.1006/inco.1994.1046)
- PDF (UCLA copy of the journal article): https://web.cs.ucla.edu/~palsberg/tba/papers/talpin-jouvelot-iandc94.pdf
