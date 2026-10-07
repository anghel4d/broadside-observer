---
title: "Nagata’s conjecture and maximal Seshadri constants"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 039; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Nagatas-Conjecture-for-Plane-Curves-September-23-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "algebraic-and-complex-geometry"
  - "lean4"
  - "formalized"
seed_rank: 1899
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Nagata's conjecture for plane curves"
    url: "https://github.com/openai/math/blob/main/preprints/Nagatas-Conjecture-for-Plane-Curves-September-23-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Maximal Seshadri constants on arbitrary polarized surfaces"
    url: "https://github.com/openai/math/blob/main/preprints/Maximal-Seshadri-Constants-on-Arbitrary-Polarized-Surfaces-September-23-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Maximal Multipoint Seshadri Constants in Higher Dimensions"
    url: "https://github.com/openai/math/blob/main/preprints/Maximal-Multipoint-Seshadri-Constants-in-Higher-Dimensions-October-5-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Maximal multipoint Seshadri constants in positive characteristic"
    url: "https://github.com/openai/math/blob/main/preprints/Maximal-multipoint-Seshadri-constants-in-positive-characteristic-October-5-2026/seshadri-positive-characteristic.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Nagata’s conjecture and maximal Seshadri constants

## One-sentence takeaway

OpenAI's result family 039 (Algebraic and complex geometry) claims: Proves Nagata's strict inequality $\sum_i m_i\lt d\sqrt r$ for every nonzero effective plane curve of degree d through r ≥ 10 very general complex points, with arbitrary multiplicities mi.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): It also proves maximal multipoint Seshadri constants $(L^n/r)^{1/n}$ for every smooth polarized projective variety of dimension n ≥ 2 and all sufficiently large r: at very general points over ℂ, and at the geometric generic tuple over any algebraically closed field of positive characteristic.
- *Nagata's conjecture for plane curves*: We prove that a nonzero effective plane curve of degree d at r ≥ 10 very general complex points has total multiplicity strictly less than $d\sqrt r$. The inequality holds simultaneously for all curves, including reducible and nonreduced curves, and establishes Nagata's conjecture in its strict, nonhomogeneous form.
- *Maximal Seshadri constants on arbitrary polarized surfaces*: We prove that, for every smooth integral complex projective surface S and every ample line bundle L, the multipoint Seshadri constant at r very general points equals $\sqrt{L^2/r}$ for every sufficiently large integer r. This resolves positively the qualitative Nagata–Biran conjecture for surfaces.
- *Maximal Multipoint Seshadri Constants in Higher Dimensions*: Let L be an ample line bundle on a smooth integral complex projective variety X of dimension n ≥ 3. We prove that there is a threshold $r_0=r_0(X,L)$ such that for every integer $r\ge r_0$, the ordinary multipoint Seshadri constant at r very general points equals the volume bound $(L^n/r)^{1/n}$. This establishes the qualitative Nagata–Biran–Szemberg assertion in these dimensions.
- *Maximal multipoint Seshadri constants in positive characteristic*: Let L be an ample line bundle on a smooth integral projective variety X over an algebraically closed field of positive characteristic, with $\dim X=n\ge3$. We prove that there is a threshold $r_0=r_0(X,L)$ such that for every integer $r\ge r_0$, the ordinary multipoint Seshadri constant at the geometric generic tuple of r points equals the volume bound $(L^n/r)^{1/n}$. The same conclusion holds in dimension two.
- Lean scope (lean/docs/039.md): Nagata's conjecture asserts that a nonzero effective plane curve of degree $d$, with multiplicities at least $m_i$ at $r\ge10$ very general points, satisfies $\sum_i m_i<d\sqrt r$. The formalization establishes this inequality simultaneously for all curves and multiplicity vectors outside one countable union of proper Zariski-closed exceptional sets with nonempty complement.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The formalization establishes this inequality simultaneously for all curves and multiplicity vectors outside one countable union of proper Zariski-closed exceptional sets with nonempty complement. Outside it, the constant is $\sqrt{L^2/r}$ and the boundary class defining this Seshadri constant on the point blowup is nef.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Nagata's conjecture for plane curves](https://github.com/openai/math/blob/main/preprints/Nagatas-Conjecture-for-Plane-Curves-September-23-2026/main.pdf)
- Manuscript: [Maximal Seshadri constants on arbitrary polarized surfaces](https://github.com/openai/math/blob/main/preprints/Maximal-Seshadri-Constants-on-Arbitrary-Polarized-Surfaces-September-23-2026/main.pdf)
- Manuscript: [Maximal Multipoint Seshadri Constants in Higher Dimensions](https://github.com/openai/math/blob/main/preprints/Maximal-Multipoint-Seshadri-Constants-in-Higher-Dimensions-October-5-2026/main.pdf)
- Manuscript: [Maximal multipoint Seshadri constants in positive characteristic](https://github.com/openai/math/blob/main/preprints/Maximal-multipoint-Seshadri-constants-in-positive-characteristic-October-5-2026/seshadri-positive-characteristic.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/039.md
- Comparator statement (Nagata's conjecture): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/Nagata.lean
- Comparator statement (Eventual maximal Seshadri constants): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MaximalSeshadriConstants.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
