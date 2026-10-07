---
title: "The Courtade–Kumar and Hellinger conjectures"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 119; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Sharp-binary-information-contraction-on-the-discrete-cube-September-24-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1976
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Sharp binary-information contraction on the discrete cube"
    url: "https://github.com/openai/math/blob/main/preprints/Sharp-binary-information-contraction-on-the-discrete-cube-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Hellinger contraction with arbitrary Boolean output bias"
    url: "https://github.com/openai/math/blob/main/preprints/Hellinger-contraction-with-arbitrary-Boolean-output-bias-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The Courtade–Kumar and Hellinger conjectures

## One-sentence takeaway

OpenAI's result family 119 (Theoretical computer science) claims: Proves the Courtade–Kumar conjecture: among Boolean functions of independent uniform bits, a single coordinate retains the most mutual information after independent bit-flip noise.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): A stronger theorem treats randomized binary summaries at fixed initial information. The Hellinger conjecture is also proved for every Boolean output bias and noise correlation.
- *Sharp binary-information contraction on the discrete cube*: We prove sharp contraction of the information carried by a binary channel under independent symmetric noise on a uniform discrete cube. At fixed initial information, a noisy coordinate retains the most information. The Boolean specialization resolves the Courtade–Kumar conjecture and gives an output-entropy refinement.
- *Hellinger contraction with arbitrary Boolean output bias*: We prove the Hellinger conjecture for Boolean functions on the uniform discrete cube, with arbitrary output bias. For a Boolean function of mean m and every $\rho\in[-1,1]$, the loss $\sqrt{1-m^2}-\mathbb E\sqrt{1-(T_\rho f)^2}$ is at most $1-\sqrt{1-\rho^2}$, with equality for signed coordinates. The proof combines asymmetric dimension induction, a calibrated noise-semigroup energy estimate, and finite exact arithmetic certificates.
- Lean scope (lean/docs/119.md): The formalization proves sharp contraction of the information carried by a binary channel under independent symmetric noise on a uniform discrete cube. At each fixed initial information level, a noisy coordinate channel attains the maximum retained information.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Sharp binary-information contraction on the discrete cube](https://github.com/openai/math/blob/main/preprints/Sharp-binary-information-contraction-on-the-discrete-cube-September-24-2026/main.pdf)
- Manuscript: [Hellinger contraction with arbitrary Boolean output bias](https://github.com/openai/math/blob/main/preprints/Hellinger-contraction-with-arbitrary-Boolean-output-bias-September-24-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/119.md
- Comparator statement (Courtade–Kumar inequality and attainment): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CourtadeKumar.lean
- Comparator statement (Sharp binary-channel contraction and entropy production): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SoftChannel204.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
