---
title: "Polymorphic First-Class Environments"
authors:
  - "Jinhao Tan"
  - "Jam Kabeer Ali Khan"
  - "Bruno C. d. S. Oliveira"
year: 2026
venue: "arXiv preprint (cs.PL)"
arxiv: "2610.36798"
doi: null
source: "https://arxiv.org/abs/2610.36798"
topics:
  - "first-class-environments"
  - "modules"
  - "type-systems"
seed_rank: 2458
seed_batch: "craft-2026-10-29"
reviewed: "2026-10-29"
pool: "languages"
lineage: programming-language-foundations
relevance_score: 7
cites:
  - title: "Polymorphic First-Class Environments"
    url: "https://arxiv.org/abs/2610.36798"
    year: 2026
    arxiv: "2610.36798"
    doi: null
see: ["1157-manifest-types-modules-and-separate-compilation", "1156-a-type-theoretic-approach-to-higher-order-modules-with", "1001-from-system-f-to-typed-assembly-language"]
---

# Polymorphic First-Class Environments

## One-sentence takeaway

F_E extends System F so that runtime environments are ordinary typed values, with a small-step semantics that never substitutes, which gives a sound, normalizing, decidable basis for polymorphic first-class modules, dynamic composition of environment fragments, and sandboxing, all mechanized in Rocq.

## Why it matters here

ano wants scripts that run against a chosen slice of the world (a selection, a faction's view, a sandboxed mod) and modules that can be composed at load time. First-class environments are the clean way to say "run this code under exactly these bindings", and until now the theory stopped at simply typed calculi. F_E's environment-based semantics also matches how an interpreter actually runs (closures and environments, not substitution), so the metatheory transfers more directly to a batched VM. Manifest types tie back to Leroy's modules work we already hold.

## Key ideas

- **No substitution anywhere.** Term and type abstractions evaluate to closures; metatheory uses instantiation lemmas instead of substitution lemmas.
- **Boxes** run code under local environments, and **box types** expose the local typing assumptions, which is the sandboxing hook.
- **Manifest types with two-sided type equivalence** model type instantiation and allow transparent type components inside environments and modules.
- **Results.** Type soundness, normalization, decidability and conservativity over System F, in both an explicit type-passing form and an implicitly typed variant closer to ML-family languages.

## Caveats

Pure calculus: no implementation, performance or effects story. Normalization means no general recursion in the core, so a real language needs more. Abstract-level read.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.36798
- PDF: https://arxiv.org/pdf/2610.36798
