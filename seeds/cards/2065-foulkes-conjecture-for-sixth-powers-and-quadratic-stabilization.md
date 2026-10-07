---
title: "Foulkes' conjecture for sixth powers and quadratic stabilization"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 210; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Foulkes-Conjecture-for-the-Sixth-Symmetric-Power-September-25-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "algebra"
  - "lean4"
  - "formalized"
seed_rank: 2065
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Foulkes' conjecture for the sixth symmetric power"
    url: "https://github.com/openai/math/blob/main/preprints/Foulkes-Conjecture-for-the-Sixth-Symmetric-Power-September-25-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Quadratic stabilization of the canonical Foulkes--Howe map"
    url: "https://github.com/openai/math/blob/main/preprints/Quadratic-Stabilization-of-the-Canonical-Foulkes-Howe-Map-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Foulkes' conjecture for sixth powers and quadratic stabilization

## One-sentence takeaway

OpenAI's result family 210 (Algebra) claims: Proves the sixth case of Foulkes’ conjecture: $\mathop{\mathrm{Sym}}\nolimits ^6(\mathop{\mathrm{Sym}}\nolimits ^bV)$ embeds equivariantly in $\mathop{\mathrm{Sym}}\nolimits ^b(\mathop{\mathrm{Sym}}\nolimits ^6V)$ for every b ≥ 6 and finite-dimensional complex V.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): More generally, the canonical multiplication map $\mathop{\mathrm{Sym}}\nolimits ^b(\mathop{\mathrm{Sym}}\nolimits ^aV)\to\mathop{\mathrm{Sym}}\nolimits ^a(\mathop{\mathrm{Sym}}\nolimits ^bV)$ is surjective for a ≥ 2 and $b\ge a(a-1)$, giving dimension-independent quadratic stabilization.
- *Foulkes' conjecture for the sixth symmetric power*: We prove the sixth-symmetric-power case of Foulkes' conjecture. For every integer b ≥ 6 and every finite-dimensional complex vector space V, there is a $\mathop{\mathrm{GL}}\nolimits (V)$-equivariant injection $\mathop{\mathrm{Sym}}\nolimits ^6(\mathop{\mathrm{Sym}}\nolimits ^b V)\hookrightarrow\mathop{\mathrm{Sym}}\nolimits ^b(\mathop{\mathrm{Sym}}\nolimits ^6 V)$.
- *Quadratic stabilization of the canonical Foulkes--Howe map*: For every finite-dimensional complex vector space V, we prove that the canonical Foulkes–Howe map $\mathop{\mathrm{Sym}}\nolimits ^b(\mathop{\mathrm{Sym}}\nolimits ^a V)\longrightarrow\mathop{\mathrm{Sym}}\nolimits ^a(\mathop{\mathrm{Sym}}\nolimits ^b V)$ is surjective whenever a ≥ 2 and $b\ge a(a-1)$. This gives a quadratic stabilization bound independent of $\dim V$.
- Lean scope (lean/docs/210.md): The formalized result proves surjectivity of the canonical averaged Foulkes–Howe map $\mathrm{Sym}^b(\mathrm{Sym}^a\,V)\to\mathrm{Sym}^a(\mathrm{Sym}^b\,V)$ for every finite-dimensional complex vector space, $a\ge2$, and $b\ge a(a-1)$. It also covers the bijective $a=1$ case, the vanishing-on-products consequence, and the corresponding equivariant embedding in the reverse direction.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Foulkes' conjecture for the sixth symmetric power](https://github.com/openai/math/blob/main/preprints/Foulkes-Conjecture-for-the-Sixth-Symmetric-Power-September-25-2026/main.pdf)
- Manuscript: [Quadratic stabilization of the canonical Foulkes--Howe map](https://github.com/openai/math/blob/main/preprints/Quadratic-Stabilization-of-the-Canonical-Foulkes-Howe-Map-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/210.md
- Comparator statement (Quadratic stabilization of the canonical Foulkes–Howe map): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/FoulkesHowe.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
