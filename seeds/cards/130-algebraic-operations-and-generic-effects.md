---
title: Algebraic Operations and Generic Effects
authors:
- Gordon Plotkin
- John Power
year: 2003
venue: Applied Categorical Structures
arxiv: null
doi: 10.1023/A:1023064908962
source: https://doi.org/10.1023/A:1023064908962
topics:
- typed-programming-systems
- category-theory-plt
seed_rank: 130
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: languages
relevance_score: 9
cites:
- title: Notions of Computation Determine Monads
  url: https://doi.org/10.1007/3-540-45931-6_24
  year: 2002
  arxiv: null
  doi: 10.1007/3-540-45931-6_24
- title: Notions of Computation and Monads
  url: https://doi.org/10.1016/0890-5401(91)90052-4
  year: 1991
  arxiv: null
  doi: 10.1016/0890-5401(91)90052-4
see:
- "132-notions-of-computation-determine-monads"
- "035-notions-of-computation-and-monads"
lineage: algebraic-effects
---

# Algebraic Operations and Generic Effects

## One-sentence takeaway

Plotkin and Power prove that an algebraic operation `α_x : (T x)^v → (T x)^w` — parametrically natural in the Kleisli category — is the same data as a generic effect, a map `w → v` in `C_T`.

## Why it matters here

ano’s masked array effects and GRID COMMAND’s effectful agent verbs want constructors, not ad-hoc monadic plumbing: `or` is `arb : Bool`, `lookup` is `deref : Loc → T Val`. Handlers come later; this paper is the ops ↔ effects dictionary.

## Key ideas

- Moggi’s strong monad models the λ_c-calculus but has no operations. Algebraic operations are the constructors (`or`, `raise_e`, `read`/`write`, `lookup`/`update`); they must commute with evaluation contexts, `E[M or N] ≡ E[M] or E[N]`.
- The coherence diagram is parametrised Kleisli naturality, enriched over a symmetric monoidal closed `V`, with cotensors supplying arities that need not be finite sets (needed for state and I/O).
- `handle_e` is natural in `C` but not algebraic — Filinski’s deconstructor. Continuations are out of scope; they do not present this way.
- Generic effects are the other syntax. Binary choice ↔ `arb : 1 → T 2` with `M or N ≡ if arb then M else N`. Infinitary `lookup` ↔ `deref : L → T Val` and `update` ↔ `assign : L × Val → T 1` — exactly ML `!` and `:=`. Local state adds `ref : Val → T L`.
- Equivalence is an enriched Yoneda fact about Lawvere `V`-theories: maps in `C_T` ↔ algebraic operations ↔ operations on `T`-algebras (the last form is the hint for call-by-name). The usual monadic semantics of λ_c extends uniformly once generic effects are added.

## Caveats

## Links

- DOI: [10.1023/A:1023064908962](https://doi.org/10.1023/A:1023064908962)
- PDF (author): https://homepages.inf.ed.ac.uk/gdp/publications/alg_ops_gen_effects.pdf
