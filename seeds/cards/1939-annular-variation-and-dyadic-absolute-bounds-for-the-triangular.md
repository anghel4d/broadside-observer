---
title: "Annular variation and dyadic absolute bounds for the triangular Hilbert transform"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 082; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Annular-variation-of-the-triangular-Hilbert-transform-at-the-symmetric-point-October-5-2026/annular-variation.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "real-and-complex-analysis"
  - "lean4"
  - "formalized"
seed_rank: 1939
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Annular variation of the triangular Hilbert transform at the symmetric point"
    url: "https://github.com/openai/math/blob/main/preprints/Annular-variation-of-the-triangular-Hilbert-transform-at-the-symmetric-point-October-5-2026/annular-variation.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "An L³ bound for the dyadic triangular Hilbert form"
    url: "https://github.com/openai/math/blob/main/preprints/An-L3-bound-for-the-dyadic-triangular-Hilbert-form-October-5-2026/dyadic-triangular-hilbert.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The maximal triangular Hilbert transform at the symmetric point"
    url: "https://github.com/openai/math/blob/main/preprints/The-maximal-triangular-Hilbert-transform-at-the-symmetric-point-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Annular variation and dyadic absolute bounds for the triangular Hilbert transform

## One-sentence takeaway

OpenAI's result family 082 (Real and complex analysis) claims: Proves maximal and annular r-variation bounds, for every r > 2, from complex $L^3(\mathbb R^2)\times L^3(\mathbb R^2)$ to $L^{3/2}(\mathbb R^2)$.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The maximal estimate controls both hard truncation endpoints and gives almost-everywhere and norm convergence. Pairing with a third input settles the triangular Hilbert transform estimate at the symmetric $L^3\times L^3\times L^3$ point.
- *Annular variation of the triangular Hilbert transform at the symmetric point*: We prove the annular r-variation estimate for the triangular Hilbert transform from complex $L^3\times L^3$ to L3/2 for every r > 2. The partitions may depend on the output point and range over all positive scales. The estimate yields the two-endpoint maximal bound and joint almost-everywhere and norm principal values, and resolves the symmetric scalar triangular Hilbert transform problem.
- *An L³ bound for the dyadic triangular Hilbert form*: We prove a uniform $L^3\times L^3\times L^3$ estimate for the dyadic triangular Hilbert form with unrestricted real inputs. The sum of the absolute local contributions over any finite set of scales is bounded by forty times the product of the input norms. In particular, the bound allows coefficients of modulus at most one to vary independently among admissible interval triples.
- *The maximal triangular Hilbert transform at the symmetric point*: For arbitrary complex inputs in $L^3(\mathbb R^2)$, we prove the pointwise maximal $L^3\times L^3\to L^{3/2}$ estimate for the triangular Hilbert transform, with the supremum over both hard truncation endpoints. The estimate yields joint almost-everywhere and L3/2 convergence as the lower endpoint tends to zero and the upper endpoint tends to infinity. This also proves the conjectured scalar estimate at the symmetric point.
- Lean scope (lean/docs/082.md): The formalized result proves the symmetric maximal estimate for the triangular Hilbert transform: for arbitrary complex $F,G\in L^3(\mathbb R^2)$, the $L^{3/2}$ norm of the supremum over all finite hard-truncation intervals is at most $C\|F\|_3\|G\|_3$ for one absolute constant $C$. It also establishes a common full-measure set on which the truncated integrals are defined and almost-everywhere measurability of the maximal output.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Annular variation of the triangular Hilbert transform at the symmetric point](https://github.com/openai/math/blob/main/preprints/Annular-variation-of-the-triangular-Hilbert-transform-at-the-symmetric-point-October-5-2026/annular-variation.pdf)
- Manuscript: [An L³ bound for the dyadic triangular Hilbert form](https://github.com/openai/math/blob/main/preprints/An-L3-bound-for-the-dyadic-triangular-Hilbert-form-October-5-2026/dyadic-triangular-hilbert.pdf)
- Manuscript: [The maximal triangular Hilbert transform at the symmetric point](https://github.com/openai/math/blob/main/preprints/The-maximal-triangular-Hilbert-transform-at-the-symmetric-point-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/082.md
- Comparator statement (Maximal triangular Hilbert transform bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/TriangularHilbert.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
