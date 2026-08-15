---
title: "A Rig of Transformations"
authors: ["Emma Tye"]
year: 2026
venue: "arXiv"
arxiv: "2608.12409"
doi: null
source: "https://arxiv.org/abs/2608.12409"
topics: [curiosity]
seed_rank: 1029
seed_batch: "curiosity-2026-08-15"
reviewed: "2026-08-15"
pool: "languages"
relevance_score: 9
lineage: data-layout
cites:
  - title: "Bit-Stealing Made Legal: Compilation for Custom Memory Representations of Algebraic Data Types"
    url: "https://doi.org/10.1145/3607858"
    year: 2023
    arxiv: null
    doi: "10.1145/3607858"
  - title: "Symmetries in reversible programming: from symmetric rig groupoids to reversible programming languages"
    url: "https://arxiv.org/abs/2110.05404"
    year: 2022
    arxiv: "2110.05404"
    doi: "10.1145/3498667"
  - title: "Views: a way for pattern matching to cohabit with data abstraction"
    url: "https://doi.org/10.1145/41625.41658"
    year: 1987
    arxiv: null
    doi: "10.1145/41625.41658"
see:
  - "345-structure-of-arrays-and-data-layout-for-simd"
  - "020-data-oriented-design-or-why-you-might-be-shooting-yourself-i"
  - "172-the-essence-of-entity-component-system"
  - "952-categorical-foundations-for-cute-layouts"
  - "926-the-semantics-of-rank-polymorphism"
  - "045-notation-as-a-tool-of-thought"
  - "668-on-understanding-types-data-abstraction-and-polymorphism"
---

# A Rig of Transformations

## One-sentence takeaway

Finite ADTs are a commutative rig; rig equalities are isomorphisms that compile to layout transforms, and a preorder of partial isomorphisms (embedding-projection pairs) is the correct-by-construction language for padding, bit-packing, and high-level-vs-runtime representations.

## Why it matters here

Why you might love this: ano is a columnar/array language that will grow packed structs, ECS chunks, and SPIR-V buffers; this is the algebra of "the convenient type is not the in-memory type." Distributivity turns two bools-in-a-sum into a six-constructor packed sum; 0 ⊑ A plus congruence gives left/right padding without a 0-absorption bomb. Bridge: CuTe layouts (952) and SoA (345) are the GPU/engine cousins; Ribbit compiled layouts, this paper is the rig DSL that derives the conversion.

## Key ideas

- Signature: 0, 1, +, ×, flat Sum_n / Prod_n; commutative-rig axioms modelled by isomorphisms of finite types (bool ≅ 1+1, etc.).
- Binary representation is *not* invariant under the axioms: nested binary sums pay two tags, Sum_3 pays one — so the proof of A ≅ B *is* the layout transform.
- Partial isomorphisms A ⊑ A' (forward total, backward Maybe) model padding. Single non-structural axiom 0 ⊑ A; padding A ⊑ A×B needs 1 ⊑ B (B nonempty) so absorb-0 cannot collapse everything to 0.
- Worked example: convenientSet (bools + mixed int widths) ≅ packed Sum_6 via bool-sum, commute, distribute, then Int32 ⊑ Int32×Int32 right-pad for field alignment.
- Meta-programs (Π A. Σ A'. A ⊑ A') compose; flattenSums is a recursive optimisation. Future work: compile programs on convenient types to programs on efficient types; link to rig categories.

## Caveats


## Links

- arXiv: [2608.12409](https://arxiv.org/abs/2608.12409)
