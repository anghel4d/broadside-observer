---
title: "The entropy photon-number inequality"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 273; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-entropy-photon-number-inequality-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "lean4"
  - "formalized"
seed_rank: 2128
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The entropy photon-number inequality"
    url: "https://github.com/openai/math/blob/main/preprints/The-entropy-photon-number-inequality-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The entropy photon-number inequality

## One-sentence takeaway

OpenAI's result family 273 (Mathematical physics) claims: Proves the entropy photon-number inequality for beam-splitter mixing of two independent finite-energy bosonic inputs in any finite number of modes: the output's entropy photon number is at least the transmissivity-weighted average of the inputs'.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Arbitrary entanglement within each input is allowed, and product thermal inputs attain equality even when their entropies differ.
- *The entropy photon-number inequality*: We prove the entropy photon-number inequality for two independent bosonic inputs with finite mean energy, for every finite number of modes. This resolves the entropy photon-number conjecture in this finite-energy setting while allowing arbitrary entanglement among the modes within either input. As a consequence, we determine the exact minimum output entropy at fixed input entropy for every finite tensor power of an identical thermal attenuator, over finite-energy inputs that may be entangled across modes.
- Lean scope (lean/docs/273.md): The formalization proves the entropy photon-number inequality for two independent bosonic inputs with finite mean energy and any finite positive number $n$ of modes. Write $N(\rho)=g^{-1}(S(\rho)/n)$, where $S$ is von Neumann entropy and $g(x)=(x+1)\log(x+1)-x\log x$ is the thermal entropy per mode.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The thermal-attenuator minimum-output-entropy and broadcast-capacity consequences in the paper are outside this selected inequality.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The entropy photon-number inequality](https://github.com/openai/math/blob/main/preprints/The-entropy-photon-number-inequality-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/273.md
- Comparator statement (Entropy photon-number inequality for finite-energy bosonic inputs): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/EntropyPhotonNumber.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
