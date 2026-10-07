---
title: "Subpolynomial query complexity for log-concave sampling"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 139; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Subpolynomial-query-complexity-for-well-conditioned-log-concave-sampling-September-26-2026/article.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1995
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Subpolynomial query complexity for well-conditioned log-concave sampling"
    url: "https://github.com/openai/math/blob/main/preprints/Subpolynomial-query-complexity-for-well-conditioned-log-concave-sampling-September-26-2026/article.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Subpolynomial query complexity for log-concave sampling

## One-sentence takeaway

OpenAI's result family 139 (Theoretical computer science) claims: For C2 potentials with a supplied minimizer and $I\preceq\nabla^2V\preceq2I$, proves that sampling within total variation 1/10 requires only $C_\varepsilon d^\varepsilon$ exact value-and-gradient queries for every fixed ε > 0.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The bound holds on every run, with unrestricted computation between queries. A logarithmic lower bound also holds, so the optimal power-law exponent in this oracle model is zero.
- *Subpolynomial query complexity for well-conditioned log-concave sampling*: For every fixed ε > 0, we give a sampling algorithm using at most $C_\varepsilon d^\varepsilon$ exact first-order queries on every execution for C2 potentials on ℝd with a known minimizer and Hessian between Id and $2I_d$. The output has total-variation distance at most 1/10 from the target Gibbs law. Computation between queries is unrestricted.
- Lean scope (lean/docs/139.md): The formalized result determines the dimension exponent of exact value-and-gradient query complexity for well-conditioned log-concave sampling. For potentials with $V(0)=0$, $\nabla V(0)=0$, and $I\le\nabla^2V\le2I$, the least worst-case query budget achieving total-variation error at most $1/10$ is at most $C_\varepsilon d^\varepsilon$ for every $\varepsilon>0$, and at least $c\log d$ eventually.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Subpolynomial query complexity for well-conditioned log-concave sampling](https://github.com/openai/math/blob/main/preprints/Subpolynomial-query-complexity-for-well-conditioned-log-concave-sampling-September-26-2026/article.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/139.md
- Comparator statement (Subpolynomial query complexity for log-concave sampling): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/LogConcaveQuery.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
