---
title: "The Lane–Emden and Hénon–Lane–Emden conjectures"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 370; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-Subcritical-Henon-Lane-Emden-Conjecture-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "partial-differential-equations"
  - "lean4"
  - "formalized"
seed_rank: 2225
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The Subcritical Hénon–Lane–Emden Conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/The-Subcritical-Henon-Lane-Emden-Conjecture-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The Lane–Emden and Hénon–Lane–Emden conjectures

## One-sentence takeaway

OpenAI's result family 370 (Partial differential equations) claims: Resolves the subcritical Lane–Emden conjecture and its weighted Hénon extension.

## Why it matters here

PDE results are the theory behind fluid, wave and transport simulation the engines approximate numerically. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): For n ≥ 2, $p,q\gt 0$ and real A, B, the system $-\Delta u=|x|^A v^p$, $-\Delta v=|x|^B u^q$ has no positive entire solution when $(n+A)/(p+1)+(n+B)/(q+1)\gt n-2$, with solutions continuous at the origin and classical elsewhere. No symmetry or growth assumption is needed. Known radial existence gives the exact existence criterion for n ≥ 3 and $A,B\gt -2$.
- *The Subcritical Hénon–Lane–Emden Conjecture*: We prove the subcritical Hénon–Lane–Emden conjecture: for every dimension n ≥ 2, positive powers p, q, and real weights A, B, the system has no strictly positive entire solution when $(n+A)/(p+1)+(n+B)/(q+1)\gt n-2$. Solutions need only be continuous at the origin and classical elsewhere, without a condition at infinity. For n ≥ 3 and $A,B\gt -2$, combining this result with the radial existence theorem of Bidaut-Véron and Giacomini proves Phan's Conjecture C in full: a positive radial entire solution exists whenever the strict inequality fails.
- Lean scope (lean/docs/370.md): The formalized result proves nonexistence of positive entire solutions to the subcritical Hénon–Lane–Emden system. For $n\ge2$, $p,q>0$, and real $A,B$ with $(n+A)/(p+1)+(n+B)/(q+1)>n-2$, there are no positive functions, continuous everywhere and $C^2$ off the origin, satisfying $-\Delta u=|x|^A v^p$ and $-\Delta v=|x|^B u^q$ away from the origin.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The Subcritical Hénon–Lane–Emden Conjecture](https://github.com/openai/math/blob/main/preprints/The-Subcritical-Henon-Lane-Emden-Conjecture-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/370.md
- Comparator statement (Subcritical Hénon–Lane–Emden nonexistence): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/HenonEmden.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
