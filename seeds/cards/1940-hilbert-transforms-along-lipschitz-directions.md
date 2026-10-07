---
title: "Hilbert transforms along Lipschitz directions"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 083; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-uniform-Hilbert-transform-estimate-for-Lipschitz-directions-September-25-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "real-and-complex-analysis"
  - "lean4"
  - "formalized"
seed_rank: 1940
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A uniform Hilbert transform estimate for Lipschitz directions"
    url: "https://github.com/openai/math/blob/main/preprints/A-uniform-Hilbert-transform-estimate-for-Lipschitz-directions-September-25-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Hilbert transforms along Lipschitz directions

## One-sentence takeaway

OpenAI's result family 083 (Real and complex analysis) claims: Proves a uniform strong L2 bound for the planar Hilbert transform along any Lipschitz unit vector field, at integration lengths bounded by an absolute multiple of its reciprocal Lipschitz constant.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The estimate is uniform over inner truncations and yields an L2-bounded principal-value operator, establishing Stein's weak-type conjecture at this short scale.
- *A uniform Hilbert transform estimate for Lipschitz directions*: We prove a uniform L2 bound for the Hilbert transform along a Lipschitz unit vector field in the plane, with integration restricted to a fixed absolute multiple of the reciprocal Lipschitz seminorm. The bound is uniform in the inner truncation and holds for fields depending on both coordinates. This gives an affirmative answer to Stein's weak-$(2,2)$ conjecture.
- Lean scope (lean/docs/083.md): The formalization proves uniform $L^2$ bounds for short Hilbert transforms along Lipschitz unit vector fields in the plane, including fields depending on both coordinates. For Lipschitz constant $K>0$, every hard truncation with $0<\varepsilon\le R\le1/(10^6K)$ has one universal $L^2$ bound on Schwartz functions, independent of the inner cutoff.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A uniform Hilbert transform estimate for Lipschitz directions](https://github.com/openai/math/blob/main/preprints/A-uniform-Hilbert-transform-estimate-for-Lipschitz-directions-September-25-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/083.md
- Comparator statement (Uniform short Hilbert-transform bounds for Lipschitz directions): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/LipschitzHilbert.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
