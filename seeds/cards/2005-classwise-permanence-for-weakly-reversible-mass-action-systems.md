---
title: "Classwise permanence for weakly reversible mass-action systems"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 149; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Uniform-Permanence-in-Weakly-Reversible-Mass-Action-Systems-October-5-2026/permanence.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "dynamical-systems-and-ergodic-theory"
  - "lean4"
  - "formalized"
seed_rank: 2005
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Uniform Permanence in Weakly Reversible Mass-Action Systems"
    url: "https://github.com/openai/math/blob/main/preprints/Uniform-Permanence-in-Weakly-Reversible-Mass-Action-Systems-October-5-2026/permanence.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Boundedness and persistence of weakly reversible mass-action systems"
    url: "https://github.com/openai/math/blob/main/preprints/Boundedness-and-persistence-of-weakly-reversible-mass-action-systems-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Classwise permanence for weakly reversible mass-action systems

## One-sentence takeaway

OpenAI's result family 149 (Dynamical systems and ergodic theory) claims: Proves the permanence conjecture for every finite weakly reversible mass-action system with fixed positive rate constants.

## Why it matters here

Dynamics results bear on long-run simulation behaviour, chaos and deterministic-lockstep reasoning. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Every positive stoichiometric compatibility class, even an unbounded one, has a common compact convex forward-invariant absorbing set. All positive trajectories in that class therefore eventually share positive lower and finite upper concentration bounds.
- *Uniform Permanence in Weakly Reversible Mass-Action Systems*: We prove the permanence conjecture for finite weakly reversible mass-action systems with fixed positive reaction rates. Every positive stoichiometric compatibility class admits one compact convex forward-invariant set that every positive trajectory in that class enters in finite time, even when the class is unbounded. The set depends only on the network, the rates, and the class; the entry time may depend on the initial state.
- *Boundedness and persistence of weakly reversible mass-action systems*: We prove the boundedness and persistence conjectures for finite weakly reversible mass-action systems with positive constant reaction rates. For every positive initial condition, the solution exists for all forward time, and every concentration remains bounded above and bounded away from zero. The bounds may depend on the initial condition, and no boundedness assumption is imposed on its stoichiometric compatibility class.
- Lean scope (lean/docs/149.md): The boundedness and persistence conjectures for mass-action systems ask whether positive concentrations remain finite and separated from zero. The formalization proves this for every finite weakly reversible reaction network with positive constant reaction rates and every strictly positive initial state.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Uniform Permanence in Weakly Reversible Mass-Action Systems](https://github.com/openai/math/blob/main/preprints/Uniform-Permanence-in-Weakly-Reversible-Mass-Action-Systems-October-5-2026/permanence.pdf)
- Manuscript: [Boundedness and persistence of weakly reversible mass-action systems](https://github.com/openai/math/blob/main/preprints/Boundedness-and-persistence-of-weakly-reversible-mass-action-systems-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/149.md
- Comparator statement (Global boundedness and persistence for weakly reversible mass-action systems): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MassAction.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
