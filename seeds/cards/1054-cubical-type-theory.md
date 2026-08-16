---
title: "Cubical Type Theory: a constructive interpretation of the univalence axiom"
authors: ["Cyril Cohen", "Thierry Coquand", "Simon Huber", "Anders Mörtberg"]
year: 2018
venue: "LIPIcs TYPES 2015"
arxiv: "1611.02108"
doi: "10.4230/LIPIcs.TYPES.2015.5"
source: "https://arxiv.org/abs/1611.02108"
topics: [curiosity]
seed_rank: 1054
seed_batch: "curiosity-2026-08-17"
reviewed: "2026-08-17"
pool: "languages"
relevance_score: 9
lineage: homotopy-type
cites:
  - title: "A model of type theory in cubical sets"
    url: "https://doi.org/10.4230/LIPIcs.TYPES.2013.5"
    year: 2014
    arxiv: null
    doi: "10.4230/LIPIcs.TYPES.2013.5"
  - title: "The Equivalence Axiom and Univalent Models of Type Theory"
    url: "https://arxiv.org/abs/1402.5556"
    year: 2014
    arxiv: "1402.5556"
    doi: null
  - title: "Homotopy Type Theory: Univalent Foundations of Mathematics"
    url: "https://homotopytypetheory.org/book/"
    year: 2013
    arxiv: null
    doi: null
  - title: "An Algebraic Weak Factorisation System on 01-Substitution Sets: A Constructive Proof"
    url: "https://arxiv.org/abs/1409.1829"
    year: 2014
    arxiv: "1409.1829"
    doi: null
see:
  - "154-locally-cartesian-closed-categories-and-type-theory"
  - "160-adjointness-in-foundations"
  - "18-physics-topology-logic-and-computation-a-rosetta-stone"
  - "1025-on-the-sphere-spectrum-from-the-viewpoint-of-linear-logic"
  - "38-theorems-for-free"
---

# Cubical Type Theory: a constructive interpretation of the univalence axiom

## One-sentence takeaway

Add dimension names from a de Morgan algebra and a Kan composition operation, and univalence becomes a *theorem*: glueing turns a partial equivalence into a total type, function extensionality computes, and paths are cubes you can fill.

## Why it matters here

Why you might love this: identity types stop being an inductive family you transport along and become n-cubes with faces, connections, and a composition that fills open boxes. Bridge: this is the computational twin of the homotopy/linear-logic Rosetta (cards 18, 1025) — not another string-diagram rewrite, but a type theory where \(\langle i\rangle\,t\) is a path, \(\mathsf{Glue}\) is how equivalences become paths, and higher inductive types (circle, truncation) have judgmental computation rules. For ano/Idris-shaped languages: extensionality that *runs*.

## Key ideas

- Interval \(\mathbb{I}\): free de Morgan algebra on names (min/max as \(\wedge/\vee\), reversal \(1-r\)). Contexts extend with \(i:\mathbb{I}\) and with face restrictions \(\Gamma,\varphi\). A type in \(n\) names is an n-cube; connections \(i\wedge j\), \(i\vee j\) give Kan fillers from composition.
- Path types \(\mathsf{Path}\,A\,t\,u\) with name-abstraction \(\langle i\rangle t\) and application \(t\,r\). Function extensionality is \(\langle i\rangle\lambda x.\,p\,x\,i\); singletons are contractible with a connection.
- Composition \(\mathsf{comp}^i A\,[\varphi\mapsto u]\,a_0\): extensibility at \(0\) is preserved along a path to \(1\). Defined by induction on type (Π, Σ, N, Path, Glue, U). Fillers come for free from connections.
- Glueing: given \(A\) total and a partial equivalence \(f:T\simeq A\) on extent \(\varphi\), \(\mathsf{Glue}[\varphi\mapsto(T,f)]A\) is a total type extending \(T\). Unglue is an equivalence; hence \((X:\mathsf{U})\times\mathsf{Equiv}\,X\,A\) is contractible — univalence.
- Semantics: fibrant types in cubical sets (presheaves on the Kleisli category of free de Morgan algebras) with a uniform composition structure. Identity types à la Swan recover judgmental \(\mathsf{J}\)-computation without forcing \(\mathsf{Path}=\mathsf{Id}\).

## Caveats

- Regularity (\(\mathsf{transport}\) along a constant path is judgmentally \(\mathrm{id}\)) fails, so \(\mathsf{Path}\) is not Martin-Löf \(\mathsf{Id}\); Swan’s marked-constant-path constructor restores the usual eliminator.
- This is TYPES 2015 / LIPIcs 2018; later cubical type theories (Cartesian cubical, XTT, Cubical Agda) change the interval algebra and the Kan operations.
- Glue composition is the technical heart and is easy to get wrong; the paper’s algorithm is the thing to steal, not the slogan.

## Links

- arXiv: [1611.02108](https://arxiv.org/abs/1611.02108)
- Journal: [LIPIcs TYPES 2015, vol. 69](https://doi.org/10.4230/LIPIcs.TYPES.2015.5)
- Implementation: [cubicaltt](https://github.com/mortberg/cubicaltt)
