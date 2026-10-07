---
title: "Shelah's eventual categoricity and the prescribed-threshold obstruction"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 240; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-CH-Obstruction-to-a-Prescribed-Categoricity-Threshold-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-logic"
  - "lean4"
  - "formalized"
seed_rank: 2095
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A CH obstruction to a prescribed categoricity threshold"
    url: "https://github.com/openai/math/blob/main/preprints/A-CH-Obstruction-to-a-Prescribed-Categoricity-Threshold-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Eventual categoricity for abstract elementary classes"
    url: "https://github.com/openai/math/blob/main/preprints/Eventual-Categoricity-for-Abstract-Elementary-Classes-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Shelah's eventual categoricity and the prescribed-threshold obstruction

## One-sentence takeaway

OpenAI's result family 240 (Mathematical logic) claims: Proves Shelah's eventual categoricity conjecture in ZFC: for each bound on the Löwenheim–Skolem number, a uniform threshold makes categoricity of an abstract elementary class in one cardinal above that threshold imply categoricity throughout the same tail.

## Why it matters here

Logic and set-theory results touch the type-theory and formal-methods corner of the library (Lean, ano's type system). More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Categoricity means uniqueness up to isomorphism at a given cardinality. Under the continuum hypothesis, a proposed specific Hanf threshold need not suffice.
- *A CH obstruction to a prescribed categoricity threshold*: Assuming the continuum hypothesis, we construct an abstract elementary class with Löwenheim–Skolem number ℵ0 that is categorical in every sufficiently large cardinal but has at least two nonisomorphic models of cardinality $\beth_{\omega_2}$. Thus categoricity does not transfer down to the proposed bound $\beth_{(2^{\aleph_0})^+}$, which equals $\beth_{\omega_2}$ under CH. Consequently, if ZFC is consistent, the prescribed-threshold form of Shelah's categoricity conjecture is not provable in ZFC.
- *Eventual categoricity for abstract elementary classes*: We prove Shelah's eventual categoricity conjecture for abstract elementary classes in ZFC. For each infinite bound on the Löwenheim–Skolem number there is a uniform threshold such that categoricity in any one cardinal at or above that threshold implies categoricity in every cardinal at or above the same threshold.
- Lean scope (lean/docs/240.md): Under the continuum hypothesis, the formalized result refutes the proposed transfer of categoricity down to the Hanf threshold. It gives an abstract elementary class in a countable relational language, with Löwenheim–Skolem number $\aleph_0$, that has two nonisomorphic models at $\beth_{\omega_2}=h(\aleph_0)$ but is categorical in every cardinal at least $\beth_{(2^{\aleph_1})^+}$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: No amalgamation, joint embedding, tameness, or absence-of-maximal-models assumption is imposed.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A CH obstruction to a prescribed categoricity threshold](https://github.com/openai/math/blob/main/preprints/A-CH-Obstruction-to-a-Prescribed-Categoricity-Threshold-September-24-2026/paper.pdf)
- Manuscript: [Eventual categoricity for abstract elementary classes](https://github.com/openai/math/blob/main/preprints/Eventual-Categoricity-for-Abstract-Elementary-Classes-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/240.md
- Comparator statement (CH categoricity-threshold obstruction): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CHObstruction.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
