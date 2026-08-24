---
title: "Factorization homology of topological manifolds"
authors: ["David Ayala", "John Francis"]
year: 2015
venue: "J. Topol."
arxiv: "1206.5522"
doi: "10.1112/jtopol/jtv028"
source: "https://arxiv.org/abs/1206.5522"
topics: [curiosity]
seed_rank: 1236
seed_batch: "curiosity-2026-08-25"
reviewed: "2026-08-25"
pool: "maths-foundations"
relevance_score: 10
lineage: factorization-homology
cites:
  - title: "On the Classification of Topological Field Theories"
    url: "https://arxiv.org/abs/0905.0465"
    year: 2009
    arxiv: "0905.0465"
    doi: null
  - title: "Higher-dimensional algebra and topological quantum field theory"
    url: "https://arxiv.org/abs/q-alg/9503002"
    year: 1995
    arxiv: "q-alg/9503002"
    doi: null
  - title: "Factorization homology I: higher categories"
    url: "https://arxiv.org/abs/1504.04007"
    year: 2015
    arxiv: "1504.04007"
    doi: null
see:
  - "018-physics-topology-logic-and-computation-a-rosetta-stone"
  - "1148-fault-tolerant-quantum-computation-by-anyons"
  - "1234-deformation-quantization-of-poisson-manifolds"
---

# Factorization homology of topological manifolds

## One-sentence takeaway

Homology whose coefficients are E_n-algebras: integrate an n-disk algebra over any n-manifold, characterized by excision, and global observables are determined by local ones.

## Why it's lovely

Why you might love this: ordinary homology integrates an abelian group over a space. Factorization homology integrates an algebra over little n-disks over an n-manifold. The Eilenberg–Steenrod axioms come back as ⊗-excision. A TQFT that is allowed to live on manifolds with boundary, not only closed ones. Leftover of cobordism: last Curiosity cited Lurie and Baez–Dolan and did not mint them; this is the computational homology theory those sketches point at, not the cobordism hypothesis itself.

## Problem

Beilinson–Drinfeld chiral homology and Lurie's topological chiral homology proposed a homology theory for manifolds with multiplicative coefficients. What are the axioms, in the spirit of Eilenberg–Steenrod, that uniquely characterize it? When does a system of local observables determine the global ones?

## Design

An n-disk algebra is an algebra over the little n-disks operad (or a stack thereof). Factorization homology of a topological n-manifold with those coefficients is defined as a colimit over embeddings of disks, and is characterized by: functoriality, excision for collar gluings, and the value on a disk being the coefficient algebra. The resulting theory is a TQFT of open-closed flavour. Calculations: free n-disk algebras, enveloping algebras of Lie algebras, Koszul duals. Nonabelian Poincaré duality of Salvatore–Segal–Lurie drops out in a page.

## Evidence

Uniqueness theorem from the axioms; sample computations; a short proof of nonabelian Poincaré duality. Journal: *J. Topol.* 8 (2015) 1045–1084, DOI `10.1112/jtopol/jtv028`. The higher-category sequel (Ayala–Francis–Tanaka) and Lurie's cobordism sketch are cited, not minted.

## Limitations

Coefficients are n-disk algebras, not fully extended (∞,n)-categories — that is the sequel. Topological manifolds, not smooth/framed variants in full generality. Not Costello–Gwilliam factorization *algebras* on spacetime (a sibling, not this paper).

## Implications for Broadside

Anyons (1148) are a 2d TQFT with a modular tensor category as coefficients. Factorization homology is the machine that eats the coefficient algebra and returns the value on any manifold. Kontsevich graphs (1234) are a 2d open-string correlator; factorization homology is the manifold-shaped integral of the same instinct. The Rosetta Stone (018) said this language existed; here is the homology theory.

## Bottom line

Mint the integral. Disk algebras in, manifold out.

## Links

- arXiv: [1206.5522](https://arxiv.org/abs/1206.5522)
- Journal: [J. Topol. 8 (2015) 1045–1084](https://doi.org/10.1112/jtopol/jtv028)
