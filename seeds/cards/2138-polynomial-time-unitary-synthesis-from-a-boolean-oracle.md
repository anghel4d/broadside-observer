---
title: "Polynomial-time unitary synthesis from a Boolean oracle"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 283; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Polynomial-Time-Unitary-Synthesis-from-a-Boolean-Oracle-October-5-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "unformalized"
seed_rank: 2138
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Polynomial-Time Unitary Synthesis from a Boolean Oracle"
    url: "https://github.com/openai/math/blob/main/preprints/Polynomial-Time-Unitary-Synthesis-from-a-Boolean-Oracle-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Polynomial-time unitary synthesis from a Boolean oracle

## One-sentence takeaway

OpenAI's result family 283 (Mathematical physics) claims: Solves the constant-error Aaronson–Kuperberg unitary synthesis problem: a uniform polynomial-size quantum oracle circuit approximates every n-qubit unitary channel within diamond-norm error 1/2, after a suitable Boolean oracle is chosen.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): Gates, qubits, oracle calls and query length are polynomially bounded. The target-dependent oracle may have an unrestricted truth table; its efficient classical construction is not asserted.
- *Polynomial-Time Unitary Synthesis from a Boolean Oracle*: We give a positive answer to the constant-error formulation of the Aaronson–Kuperberg unitary synthesis problem. For every n, a quantum oracle circuit generated in polynomial time from n alone can approximate the channel of every n-qubit unitary to full diamond-norm error at most 1/2, after a suitable Boolean oracle is chosen. Using the fixed gates $H,T,T^\dagger,\mathrm{CNOT}$, the circuit has polynomially many qubits, elementary gates, and oracle calls, and its oracle queries have polynomial length.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Polynomial-Time Unitary Synthesis from a Boolean Oracle](https://github.com/openai/math/blob/main/preprints/Polynomial-Time-Unitary-Synthesis-from-a-Boolean-Oracle-October-5-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
