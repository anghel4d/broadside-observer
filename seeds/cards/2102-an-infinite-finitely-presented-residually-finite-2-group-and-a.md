---
title: "An infinite finitely presented residually finite 2-group and a finitely presented nil algebra"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 247; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/An-infinite-finitely-presented-residually-finite-2-group-October-5-2026/residually-finite-torsion.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "group-theory"
  - "lean4"
  - "formalized"
seed_rank: 2102
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "An infinite finitely presented residually finite 2-group"
    url: "https://github.com/openai/math/blob/main/preprints/An-infinite-finitely-presented-residually-finite-2-group-October-5-2026/residually-finite-torsion.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "An infinite finitely presented periodic group"
    url: "https://github.com/openai/math/blob/main/preprints/An-infinite-finitely-presented-periodic-group-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# An infinite finitely presented residually finite 2-group and a finitely presented nil algebra

## One-sentence takeaway

OpenAI's result family 247 (Group theory) claims: Constructs an infinite finitely presented residually finite group whose elements all have finite 2-power order, answering the finitely presented Burnside problem negatively even in this class.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The construction also yields an infinite-dimensional finitely presented nil associative 𝔽2-algebra and a finitely presented infinite-dimensional algebraic unitization, giving negative answers to the corresponding nilpotence and Kurosh finiteness questions.
- *An infinite finitely presented residually finite 2-group*: We prove that the infinite, ordinarily finitely presented periodic Steinberg group $\Gamma=\mathop{\mathrm{St}}\nolimits _{12}(R)$ of a companion paper is residually finite. Its finite-index subgroup $G=\ker(\Gamma\to\mathop{\mathrm{St}}\nolimits _{12}(\mathbb F_2))$ is infinite, ordinarily finitely presented, and residually finite, and every element of G has finite 2-power order. The orders of its elements are unbounded.
- *An infinite finitely presented periodic group*: We construct an infinite group with an ordinary finite presentation in which every element has finite order, answering the finitely presented Burnside question negatively. We also construct an infinite-dimensional finitely presented nonunital nil associative algebra over 𝔽2 that is Jacobson radical but not nilpotent. Its unitization is finitely presented, algebraic, and infinite-dimensional.
- Lean scope (lean/docs/247.md): The finitely presented Burnside question asks whether a finitely presented group in which every element has finite order must be finite. The formalization gives a negative answer by constructing an infinite finitely presented periodic group, including a witness realized as a Steinberg group over an algebra of characteristic two.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The paper's separate nil-algebra and radical-algebra conclusions are outside these selected statements.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [An infinite finitely presented residually finite 2-group](https://github.com/openai/math/blob/main/preprints/An-infinite-finitely-presented-residually-finite-2-group-October-5-2026/residually-finite-torsion.pdf)
- Manuscript: [An infinite finitely presented periodic group](https://github.com/openai/math/blob/main/preprints/An-infinite-finitely-presented-periodic-group-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/247.md
- Comparator statement (Infinite finitely presented periodic group): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PeriodicGroup.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
