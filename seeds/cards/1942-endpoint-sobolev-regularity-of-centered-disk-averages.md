---
title: "Endpoint Sobolev regularity of centered disk averages"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 085; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/An-Endpoint-Gradient-Bound-for-the-Centered-Disk-Maximal-Operator-September-26-2026/article.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "real-and-complex-analysis"
  - "lean4"
  - "formalized"
seed_rank: 1942
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "An Endpoint Gradient Bound for the Centered Disk Maximal Operator"
    url: "https://github.com/openai/math/blob/main/preprints/An-Endpoint-Gradient-Bound-for-the-Centered-Disk-Maximal-Operator-September-26-2026/article.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Endpoint Sobolev regularity of centered disk averages

## One-sentence takeaway

OpenAI's result family 085 (Real and complex analysis) claims: Resolves the planar centered-disk case of the Hajłasz–Onninen maximal-function regularity problem.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): For every real $f\in W^{1,1}(\mathbb R^2)$, the centered disk maximal function satisfies $\|\nabla Mf\|_1\le C\|\nabla f\|_1$ with an absolute constant. It belongs locally to $W^{1,1}$ and has a globally integrable weak gradient.
- *An Endpoint Gradient Bound for the Centered Disk Maximal Operator*: We prove the endpoint gradient bound $\|\nabla Mf\|_1\le C\|\nabla f\|_1$ for every real-valued $f\in W^{1,1}(\mathbb R^2)$, where $Mf(x)$ is the supremum of the averages of $|f|$ over disks centered at x, and C is an absolute constant. The maximal function belongs to $W^{1,1}_{\mathrm{loc}}(\mathbb R^2)$ and has a globally integrable weak gradient. This gives a positive resolution of the planar centered-disk case of the endpoint question of Hajłasz and Onninen.
- Lean scope (lean/docs/085.md): The centered disk maximal operator takes the supremum of averages of $|f|$ over disks centered at each point. The formalization proves that every real $f\in W^{1,1}(\mathbb R^2)$ has a maximal function that is finite almost everywhere, belongs to $W^{1,1}_{\mathrm{loc}}$, and has a globally integrable weak gradient satisfying $\|\nabla Mf\|_1\le C\|\nabla f\|_1$ for one absolute constant $C$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The general endpoint statement covers the Sobolev setting of the paper; a BV extension is outside these statements.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [An Endpoint Gradient Bound for the Centered Disk Maximal Operator](https://github.com/openai/math/blob/main/preprints/An-Endpoint-Gradient-Bound-for-the-Centered-Disk-Maximal-Operator-September-26-2026/article.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/085.md
- Comparator statement (Signed finite-band disk-maximal gradient bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SignedFiniteBand.lean
- Comparator statement (Endpoint gradient bound for the centered disk maximal operator): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DiskMaximal.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
