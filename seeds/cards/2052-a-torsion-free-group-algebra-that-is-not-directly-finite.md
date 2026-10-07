---
title: "A torsion-free group algebra that is not directly finite"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 197; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-Torsion-Free-Group-Algebra-That-Is-Not-Directly-Finite-October-4-2026/direct-finiteness.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "algebra"
  - "lean4"
  - "formalized"
seed_rank: 2052
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A Torsion-Free Group Algebra That Is Not Directly Finite"
    url: "https://github.com/openai/math/blob/main/preprints/A-Torsion-Free-Group-Algebra-That-Is-Not-Directly-Finite-October-4-2026/direct-finiteness.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A Counterexample to Kaplansky's Direct-Finiteness Conjecture in Characteristic Two"
    url: "https://github.com/openai/math/blob/main/preprints/A-Counterexample-to-Kaplanskys-Direct-Finiteness-Conjecture-in-Characteristic-Two-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A Counterexample to the Group-Ring Determinant Conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/A-Counterexample-to-the-Group-Ring-Determinant-Conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A Counterexample to Kaplansky's Direct-Finiteness Conjecture in Odd Characteristic"
    url: "https://github.com/openai/math/blob/main/preprints/A-Counterexample-to-Kaplanskys-Direct-Finiteness-Conjecture-in-Odd-Characteristic-September-26-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# A torsion-free group algebra that is not directly finite

## One-sentence takeaway

OpenAI's result family 197 (Algebra) claims: Constructs a finitely presented torsion-free nonsofic group whose group algebra over 𝔽2 is not directly finite, disproving Kaplansky's conjecture even without torsion.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Companion examples give injective nonsurjective cellular automata on all configurations, refuting Gottschalk's surjunctivity conjecture. Another counterexample is an integral group-ring matrix, invertible over the rational group ring, with Fuglede–Kadison determinant strictly between zero and one, disproving the unrestricted Determinant Conjecture.
- *A Torsion-Free Group Algebra That Is Not Directly Finite*: We construct a finitely presented torsion-free counterexample to Kaplansky's direct finiteness conjecture over the field of two elements. The group admits a finite two-dimensional classifying complex.
- *A Counterexample to Kaplansky's Direct-Finiteness Conjecture in Characteristic Two*: We disprove Kaplansky's direct-finiteness conjecture by constructing a finite field K of characteristic two, a finitely presented group G, and finite sums $a,b\in K[G]$ with $ab=1$ but $ba\ne1$. The group G is nonsofic. The same elements define a cellular automaton on KG that is injective but not surjective, disproving Gottschalk's surjunctivity conjecture.
- *A Counterexample to the Group-Ring Determinant Conjecture*: We disprove the unrestricted group-ring Determinant Conjecture. We construct a finitely generated group G and a square matrix over $\mathbb Z[G]$ that is invertible over $\mathbb Q[G]$ and has Fuglede–Kadison determinant strictly between zero and one. The logarithmic integral defining the determinant is finite.
- *A Counterexample to Kaplansky's Direct-Finiteness Conjecture in Odd Characteristic*: We construct a counterexample to Kaplansky's direct-finiteness conjecture in odd characteristic. For one specified odd prime p, we obtain a field K of order p4, a finitely generated group G containing torsion, and finite sums $a,b\in K[G]$ with $ab=1$ but $ba\ne1$. The same elements define a cellular automaton on KG that is injective but not surjective.
- Lean scope (lean/docs/197.md): Kaplansky's direct-finiteness conjecture asserts that $ab=1$ implies $ba=1$ for $a,b\in K[G]$, for every field $K$ and group $G$. The formalized results construct a finite field of characteristic two and a group algebra violating this implication.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 4 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The further conclusion that the group is nonsofic is outside these statements.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A Torsion-Free Group Algebra That Is Not Directly Finite](https://github.com/openai/math/blob/main/preprints/A-Torsion-Free-Group-Algebra-That-Is-Not-Directly-Finite-October-4-2026/direct-finiteness.pdf)
- Manuscript: [A Counterexample to Kaplansky's Direct-Finiteness Conjecture in Characteristic Two](https://github.com/openai/math/blob/main/preprints/A-Counterexample-to-Kaplanskys-Direct-Finiteness-Conjecture-in-Characteristic-Two-September-23-2026/paper.pdf)
- Manuscript: [A Counterexample to the Group-Ring Determinant Conjecture](https://github.com/openai/math/blob/main/preprints/A-Counterexample-to-the-Group-Ring-Determinant-Conjecture-September-23-2026/paper.pdf)
- Manuscript: [A Counterexample to Kaplansky's Direct-Finiteness Conjecture in Odd Characteristic](https://github.com/openai/math/blob/main/preprints/A-Counterexample-to-Kaplanskys-Direct-Finiteness-Conjecture-in-Odd-Characteristic-September-26-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/197.md
- Comparator statement (Finitely presented characteristic-two counterexample): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/KaplanskyFinitelyPresented.lean
- Comparator statement (Characteristic-two direct-finiteness counterexample): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/KaplanskyDirectFiniteness.lean
- Comparator statement (Group-ring determinant counterexample): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/GroupRingDeterminant.lean
- Comparator statement (Prescribed odd-characteristic counterexample): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/OddKaplansky.lean
- Reasoning summary: https://github.com/openai/math/blob/main/reasoning_traces/kaplansky-direct-finiteness-characteristic-two.pdf
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
