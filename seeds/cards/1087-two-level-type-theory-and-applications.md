---
title: "Two-level type theory and applications"
authors: ["Danil Annenkov", "Paolo Capriotti", "Nicolai Kraus", "Christian Sattler"]
year: 2023
venue: "Math. Structures Comput. Sci."
arxiv: "1705.03307"
doi: "10.1017/S0960129523000130"
source: "https://arxiv.org/abs/1705.03307"
topics: [curiosity]
seed_rank: 1087
seed_batch: "curiosity-2026-08-19"
reviewed: "2026-08-19"
pool: "languages"
relevance_score: 9
lineage: two-level-type-theory
cites:
  - title: "Cubical Type Theory: a constructive interpretation of the univalence axiom"
    url: "https://arxiv.org/abs/1611.02108"
    year: 2018
    arxiv: "1611.02108"
    doi: "10.4230/LIPIcs.TYPES.2015.5"
  - title: "Univalent foundations of mathematics"
    url: "https://arxiv.org/abs/1403.0001"
    year: 2014
    arxiv: "1403.0001"
    doi: null
  - title: "Idris 2: Quantitative Type Theory in Practice"
    url: "https://arxiv.org/abs/2104.00480"
    year: 2021
    arxiv: "2104.00480"
    doi: "10.4230/LIPIcs.ECOOP.2021.9"
  - title: "Brouwer's fixed-point theorem in real-cohesive homotopy type theory"
    url: "https://arxiv.org/abs/1509.07584"
    year: 2018
    arxiv: "1509.07584"
    doi: "10.1017/S0960129517000147"
see:
  - "1054-cubical-type-theory"
  - "1055-idris-2-quantitative-type-theory-in-practice"
  - "1073-two-level-morphology"
  - "1025-on-the-sphere-spectrum-from-the-viewpoint-of-linear-logic"
---

# Two-level type theory and applications

## One-sentence takeaway

HoTT (inner, univalent, path equality) and a strict MLTT with UIP (outer, "internalised metatheory") share contexts, with a conversion \(\mathrm{c}\) inner→outer; this lets you quantify over *external* \(\mathbb{N}\) to build semisimplicial types and Reedy-fibrant diagrams without leaving type theory.

## Why it matters here

Why you might love this: the open problem "is there a function \(S:\mathbb{N}\to\mathcal{U}_1\) of semisimplicial types of level \(n\)?" is the poster child of a statement that is true *externally* for each numeral and inexpressible internally. 2LTT makes the external/internal split a first-class judgment, conservatively over HoTT (you can prove inner results in 2LTT and transport them back). Voevodsky's HTS is the rigid special case; this paper is the modular one. Bridge: cubical TT (1054) computes univalence; QTT (1055) grades usage; 2LTT grades *strictness* — three different "second axes" on type theory, and ano's two-level morphology (1073) is the linguistic rhyme: a surface automaton sitting on a stricter underlying calculus.

## Key ideas

- Two cwf hierarchies on one category of contexts; conversion preserves context extension, hence terms of \(A\) and \(\mathrm{c}(A)\) are isomorphic. \(\Pi/\Sigma/\mathbf{1}\) are preserved up to canonical iso; positive types (\(+\), \(\mathbf{0}\), \(\mathbb{N}\), identity) are not, on purpose.
- Conservativity: a term of an inner type in 2LTT yields a term in HoTT (presheaf-model argument, including a variant with injective conversion strictly preserving \(\Pi/\Sigma/\mathbf{1}\)).
- Inner replacement cannot be internalised: a fibrant-replacement type former forces UIP on the inner level.
- Payoff: Reedy-fibrant diagrams over an *outer* inverse category, including a type of \(n\)-truncated semisimplicial types for outer \(n\), and a proposed definition of \((\infty,1)\)-category.

## Caveats

- Journal year is 2023 (MSCS HoTT 2019 special issue); arxiv 2017. HTS-style extra axioms (shared \(\mathbb{N}\), fibrant outer universes, equality reflection) are *optional* and break conservativity if imposed wholesale.
- This is not a cubical computational interpretation and not QTT — do not remint 1054/1055.
- Formalisation is possible in Lean/Agda via type classes or `SSet`, but the paper is the theory, not a compiler.

## Links

- arXiv: [1705.03307](https://arxiv.org/abs/1705.03307)
- Journal: [Math. Structures Comput. Sci. 33 (2023) 688–743](https://doi.org/10.1017/S0960129523000130)
