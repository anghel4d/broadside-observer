---
title: "Sharp Cartan–Hadamard isoperimetry and rigidity"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 337; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Generalized-Cartan-Hadamard-isoperimetry-and-Euclidean-equality-rigidity-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "differential-geometry"
  - "lean4"
  - "formalized"
seed_rank: 2192
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Generalized Cartan–Hadamard isoperimetry and Euclidean equality rigidity"
    url: "https://github.com/openai/math/blob/main/preprints/Generalized-Cartan-Hadamard-isoperimetry-and-Euclidean-equality-rigidity-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Sharp integral fillings in CAT(0) spaces"
    url: "https://github.com/openai/math/blob/main/preprints/Sharp-integral-fillings-in-CAT%280%29-spaces-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Sharp Cartan–Hadamard isoperimetry and rigidity

## One-sentence takeaway

OpenAI's result family 337 (Differential geometry) claims: Proves generalized Cartan–Hadamard isoperimetry in every dimension: in a complete simply connected manifold with sectional curvature at most κ ≤ 0, every finite-volume finite-perimeter set satisfies the sharp comparison with the equal-volume model ball.

## Why it matters here

Differential geometry is the deep background for geometry processing, curvature flows and mesh work in graphics. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Bounded positive-volume equality regions for κ = 0 are Euclidean balls. Also proves sharp Euclidean filling bounds for compactly supported integral n-cycles, n ≥ 2, in arbitrary proper CAT$(0)$ spaces.
- *Generalized Cartan–Hadamard isoperimetry and Euclidean equality rigidity*: We resolve the generalized Cartan–Hadamard isoperimetric conjecture in every dimension. In a complete simply connected smooth manifold with sectional curvature at most κ ≤ 0, every finite-volume set of finite ambient perimeter has perimeter at least that of the equal-volume ball in curvature κ. For bounded positive-volume sets, equality in the Euclidean comparison holds precisely when the set agrees up to null sets with an open region isometric, with its induced metric, to a round Euclidean ball.
- *Sharp integral fillings in CAT(0) spaces*: Every compactly supported integral n-cycle, n ≥ 2, in a proper CAT(0) space bounds a compactly supported integral current with the sharp Euclidean mass bound. The theorem allows arbitrary integer multiplicities and unrestricted ambient dimension. In particular, we prove the Euclidean Cartan–Hadamard isoperimetric conjecture in dimensions at least three.
- Lean scope (lean/docs/337.md): The formalization proves the sharp Euclidean filling inequality for every compactly supported integral $n$-cycle in a proper $\mathrm{CAT}(0)$ space, for $n\ge2$. It constructs a compactly supported integral filling whose mass is at most $C_n$ times the boundary mass to the power $(n+1)/n$, where $C_n$ is the Euclidean isoperimetric coefficient.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Generalized Cartan–Hadamard isoperimetry and Euclidean equality rigidity](https://github.com/openai/math/blob/main/preprints/Generalized-Cartan-Hadamard-isoperimetry-and-Euclidean-equality-rigidity-September-23-2026/paper.pdf)
- Manuscript: [Sharp integral fillings in CAT(0) spaces](https://github.com/openai/math/blob/main/preprints/Sharp-integral-fillings-in-CAT%280%29-spaces-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/337.md
- Comparator statement (Optimality of the Euclidean filling coefficient): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/FillingCoefficient.lean
- Comparator statement (Sharp integral fillings in proper $\mathrm{CAT}(0)$ spaces): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SharpCAT0Filling.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
