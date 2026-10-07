---
title: "Failure of Kohn–Sham ensemble representation"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 278; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-Coulomb-Ground-State-Density-without-Kohn-Sham-Ensemble-Representation-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "unformalized"
seed_rank: 2133
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "A Coulomb ground-state density without Kohn-Sham ensemble representation"
    url: "https://github.com/openai/math/blob/main/preprints/A-Coulomb-Ground-State-Density-without-Kohn-Sham-Ensemble-Representation-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Failure of Kohn–Sham ensemble representation

## One-sentence takeaway

OpenAI's result family 278 (Mathematical physics) claims: Constructs a three-electron Coulomb molecule with two equal positive-integer-charge nuclei whose absolute ground-state density has no noninteracting ground-state ensemble representation by a single real spin-independent local potential in $L^{3/2}(\mathbb R^3)+L^\infty(\mathbb R^3)$.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): This disproves Kohn–Sham ensemble representability for that potential class; the required nuclear charge is specified nonnumerically.
- *A Coulomb ground-state density without Kohn-Sham ensemble representation*: We construct a finite three-electron Coulomb molecule whose spin-summed ground-state density cannot be reproduced by any ground-state ensemble of noninteracting electrons in a single real, spin-independent local potential in $L^{3/2}(\mathbf R^3)+L^\infty(\mathbf R^3)$. The molecule has two equal positive integer nuclear charges, specified by an exact finite nonnumerical formula.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [A Coulomb ground-state density without Kohn-Sham ensemble representation](https://github.com/openai/math/blob/main/preprints/A-Coulomb-Ground-State-Density-without-Kohn-Sham-Ensemble-Representation-September-25-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
