---
title: "Counterexamples to Auslander–Reiten, Tachikawa and related homological conjectures"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 199; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/An-explicit-counterexample-to-the-Auslander-Reiten-conjecture-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "algebra"
  - "lean4"
  - "formalized"
seed_rank: 2054
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "An explicit counterexample to the Auslander-Reiten conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/An-explicit-counterexample-to-the-Auslander-Reiten-conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A counterexample to Tachikawa's second conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/A-counterexample-to-Tachikawas-second-conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Counterexamples to Auslander–Reiten, Tachikawa and related homological conjectures

## One-sentence takeaway

OpenAI's result family 199 (Algebra) claims: Constructs finite-dimensional algebras over a characteristic-two rational-function field that disprove the Auslander–Reiten and Gorenstein-projective conjectures, and Tachikawa's second conjecture.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): An associated endomorphism algebra also disproves the classical, generalized and strong Nakayama conjectures, the Auslander–Gorenstein conjecture, and the Wakamatsu tilting conjecture. The counterexamples persist under every extension of the base field.
- *An explicit counterexample to the Auslander-Reiten conjecture*: We disprove the Auslander–Reiten conjecture for Artin algebras. We construct a finite-dimensional algebra Λ over $k=\mathbb F_2(q,H_1,H_2)$ and a finite-dimensional nonprojective left module Z such that $\mathop{\mathrm{Ext}}\nolimits ^i_\Lambda(Z,Z)=\mathop{\mathrm{Ext}}\nolimits ^i_\Lambda(Z,\Lambda)=0$ for every i > 0. The module is Gorenstein-projective, so the same example also disproves the Gorenstein-projective conjecture.
- *A counterexample to Tachikawa's second conjecture*: We disprove Tachikawa's second conjecture by constructing a finite-dimensional symmetric algebra over $k=\mathbb F_2(q,H_1,H_2)$ with a finite-dimensional nonprojective module whose self-extension groups vanish in every positive degree. The associated endomorphism algebra also gives counterexamples to the classical, generalized, and strong Nakayama conjectures, the Auslander–Gorenstein conjecture, and the Wakamatsu tilting conjecture. These conclusions persist after every extension of k.
- Lean scope (lean/docs/199.md): The Auslander–Reiten conjecture predicts that a finitely generated module $M$ over an Artin algebra $A$ is projective if $\mathrm{Ext}^i_A(M,M\oplus A)=0$ for every $i>0$. The formalized counterexample is a finite-dimensional algebra over $k=\mathbb F_2(q,H_1,H_2)$ and a finite-dimensional nonprojective Gorenstein-projective module with this vanishing.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [An explicit counterexample to the Auslander-Reiten conjecture](https://github.com/openai/math/blob/main/preprints/An-explicit-counterexample-to-the-Auslander-Reiten-conjecture-September-23-2026/paper.pdf)
- Manuscript: [A counterexample to Tachikawa's second conjecture](https://github.com/openai/math/blob/main/preprints/A-counterexample-to-Tachikawas-second-conjecture-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/199.md
- Comparator statement (Auslander–Reiten counterexample): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/AuslanderReiten.lean
- Comparator statement (Tachikawa counterexample): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/Tachikawa.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
