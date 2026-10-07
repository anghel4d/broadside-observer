---
title: "The irrationality exponent of π is 2"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 017; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-irrationality-exponent-of-pi-is-2-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "number-theory"
  - "lean4"
  - "formalized"
seed_rank: 1877
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The irrationality exponent of pi is 2"
    url: "https://github.com/openai/math/blob/main/preprints/The-irrationality-exponent-of-pi-is-2-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The irrationality exponent of π is 2

## One-sentence takeaway

OpenAI's result family 017 (Number theory) claims: Proves that the irrationality exponent of π is exactly 2: for every ε > 0 and all sufficiently large denominators q, every rational $p/q$ satisfies $|\pi-p/q|\ge q^{-2-\varepsilon}$.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This also proves convergence of the Flint–Hills series $\sum_{n\ge1}1/(n^3\sin^2 n)$, with angles in radians.
- *The irrationality exponent of pi is 2*: We prove the conjecture that the irrationality exponent of π is 2. As a consequence, the classical Flint–Hills series $\sum_{n\ge1}1/(n^3\sin^2 n)$ converges, with angles in radians.
- Lean scope (lean/docs/017.md): The formalization proves that the irrationality exponent of $\pi$ is exactly two. For every $\nu>2$, all sufficiently large positive denominators $q$ satisfy $|\pi-p/q|\ge q^{-\nu}$ for every integer numerator $p$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The paper's convergence consequence for the Flint–Hills series is outside this selected statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The irrationality exponent of pi is 2](https://github.com/openai/math/blob/main/preprints/The-irrationality-exponent-of-pi-is-2-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/017.md
- Comparator statement (The irrationality exponent of $\pi$ equals two): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PiExponent.lean
- Reasoning summary: https://github.com/openai/math/blob/main/reasoning_traces/irrationality-exponent-of-pi.pdf
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
