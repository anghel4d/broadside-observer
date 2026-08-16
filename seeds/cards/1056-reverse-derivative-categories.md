---
title: "Reverse derivative categories"
authors: ["Robin Cockett", "Geoffrey Cruttwell", "Jonathan Gallagher", "Jean-Simon Pacaud Lemay", "Benjamin MacAdam", "Gordon Plotkin", "Dorette Pronk"]
year: 2020
venue: "CSL 2020 (LIPIcs)"
arxiv: "1910.07065"
doi: "10.4230/LIPIcs.CSL.2020.18"
source: "https://arxiv.org/abs/1910.07065"
topics: [curiosity]
seed_rank: 1056
seed_batch: "curiosity-2026-08-17"
reviewed: "2026-08-17"
pool: "maths-foundations"
relevance_score: 9
lineage: reverse-ad
cites:
  - title: "Cartesian Differential Categories"
    url: "https://www.tac.mta.ca/tac/volumes/22/23/22-23abs.html"
    year: 2009
    arxiv: null
    doi: null
  - title: "Dual-Numbers Reverse AD for Functional Array Languages"
    url: "https://arxiv.org/abs/2507.12640"
    year: 2025
    arxiv: "2507.12640"
    doi: null
  - title: "Categorical Foundations of Gradient-Based Learning"
    url: "https://arxiv.org/abs/2103.01931"
    year: 2022
    arxiv: "2103.01931"
    doi: "10.1007/978-3-030-99336-8_1"
  - title: "Compiling to Categories"
    url: "https://conal.net/papers/compiling-to-categories/"
    year: 2017
    arxiv: null
    doi: null
see:
  - "918-dual-numbers-reverse-ad-for-functional-array-languages"
  - "99-compiling-to-categories"
  - "940-categorical-foundations-of-gradient-based-learning"
  - "941-deep-learning-with-parametric-lenses"
  - "1029-a-rig-of-transformations"
---

# Reverse derivative categories

## One-sentence takeaway

A reverse derivative combinator \(\mathsf{R}[f]:A\times B\to A\) is equivalent to a forward derivative plus a dagger on the subcategory of linear maps — reverse AD is forward AD with a fibrewise transpose.

## Why it matters here

Why you might love this: the cheap-gradient principle is not a Turing-tape trick, it is an axiom. Bridge: card 918 implements reverse AD with dual numbers in an array language; this paper says what that *is* — Cartesian left additive category, reverse combinator RD.1–7, and the reconstruction \(\mathsf{D}[f] = (\langle 1,0\rangle\times 1)\,\mathsf{R}[\mathsf{R}[f]]\,\pi_1\). Compiling-to-categories (99) and parametric lenses (941) sit on the same spine: lenses/optics for backprop are the dagger-fibration of linear maps in disguise.

## Key ideas

- Forward recap: Cartesian left additive category + differential combinator \(\mathsf{D}[f]:A\times A\to B\) (additivity in the vector slot, chain rule, symmetry of mixed partials). Linear maps are those with \(\mathsf{D}[f]=\pi_1 f\); they form a category with biproducts.
- Reverse combinator \(\mathsf{R}[f]:A\times B\to A\). In \(\mathsf{Smooth}\), \(\mathsf{R}[F](x,y)=J_F(x)^T y\). Axioms RD.1–7 mirror CDC.1–7 with the chain rule running backwards: \(\mathsf{R}[fg]=\langle\pi_0,\langle\pi_0 f,\pi_1\rangle\mathsf{R}[g]\rangle\mathsf{R}[f]\).
- Every reverse differential category is a Cartesian differential category, by applying \(\mathsf{R}\) twice and injecting. Linear maps of the induced CDC are exactly those with \(f^{\dagger\dagger}=f\) for \(f^\dagger:=\iota_1\mathsf{R}[f]\), and \(\mathsf{Lin}(\mathbb{X})\) is a \(\dagger\)-category with \(\dagger\)-biproducts.
- Converse: a CDC whose simple linear fibration is a dagger fibration with fibrewise \(\dagger\)-biproducts (contextual dagger \(f^{\dagger[C]}\)) is a reverse differential category. Reverse derivative is functorial as \(\mathbb{X}\to\widetilde{\mathsf{Lin}(\mathbb{X})}^*\) sending \(f\mapsto(f,\mathsf{R}[f])\).

## Caveats

- This axiomatizes *total* maps; partial reverse AD (the programming-language case) is listed as future work.
- Having a forward derivative does *not* give a reverse derivative — you need the dagger on linear maps. Polynomials over a rig and \(\mathsf{Smooth}\) have it; a generic CDC may not.
- Later “categorical foundations of gradient-based learning” (940) and parametric lenses (941) are the applied sequel; mint the axioms here.

## Links

- arXiv: [1910.07065](https://arxiv.org/abs/1910.07065)
- Conference: [LIPIcs CSL 2020, vol. 152](https://doi.org/10.4230/LIPIcs.CSL.2020.18)
