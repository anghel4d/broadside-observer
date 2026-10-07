---
title: "Function-field reconstruction from Milnor K-theory and Galois data"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 009; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Reconstruction-of-Function-Fields-from-Mod-ell-Milnor-K-Theory-October-5-2026/mod-ell-bogomolov-pop.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "number-theory"
  - "lean4"
  - "formalized"
seed_rank: 1869
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Reconstruction of Function Fields from Mod-ℓ Milnor K-Theory"
    url: "https://github.com/openai/math/blob/main/preprints/Reconstruction-of-Function-Fields-from-Mod-ell-Milnor-K-Theory-October-5-2026/mod-ell-bogomolov-pop.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Reconstruction from Milnor K-theory modulo the characteristic"
    url: "https://github.com/openai/math/blob/main/preprints/Reconstruction-from-Milnor-K-theory-modulo-the-characteristic-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The Bogomolov-Pop reconstruction theorem"
    url: "https://github.com/openai/math/blob/main/preprints/The-Bogomolov-Pop-reconstruction-theorem-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Function-field reconstruction from Milnor K-theory and Galois data

## One-sentence takeaway

OpenAI's result family 009 (Number theory) claims: Reconstructs function fields of transcendence degree at least two over algebraically closed constants from $K^{\mathrm M}_1/\ell$, $K^{\mathrm M}_2/\ell$, and their product.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): These data recover the perfect closure and constants when ℓ differs from the characteristic, and the original field and its named base in equal characteristic. Also proves Bogomolov–Pop reconstruction from abelian-by-central pro-ℓ Galois data away from the characteristic.
- *Reconstruction of Function Fields from Mod-ℓ Milnor K-Theory*: We prove a mod-ℓ Bogomolov–Pop reconstruction theorem for function fields of transcendence degree at least two over arbitrary algebraically closed fields of characteristic different from ℓ. The groups $K^{\mathrm M}_1/\ell$ and $K^{\mathrm M}_2/\ell$, together with their full bilinear product, determine the perfect closure and its constant field. Every compatible isomorphism of these data is induced by a field isomorphism up to a single scalar in $\mathbb F_\ell^\times$, with only Frobenius ambiguity in the field isomorphism in positive characteristic.
- *Reconstruction from Milnor K-theory modulo the characteristic*: Let K and L be finitely generated extensions of transcendence degree at least two over algebraically closed fields of characteristic p. We prove that every isomorphism of their first Milnor K-groups modulo p preserving the degree-two Steinberg relations is a nonzero scalar multiple of the map induced by a unique field isomorphism. The proof recovers projective lines over the subfields of pth powers by an elementary calculation with derivations.
- *The Bogomolov-Pop reconstruction theorem*: We prove the Bogomolov–Pop reconstruction conjecture for function fields of transcendence degree at least two over arbitrary algebraically closed fields of characteristic different from ℓ. The pro-ℓ abelian-by-central datum determines the perfect closure and its constant field, with precisely the Frobenius and ℓ-adic unit ambiguities.
- Lean scope (lean/docs/009.md): The Bogomolov–Pop reconstruction conjecture concerns recovering a function field and its constants from pro-$\ell$ abelian-by-central Galois data. The linked formalization proves injectivity of the reconstruction correspondence for function fields of transcendence degree at least two over algebraically closed fields of characteristic different from the prime $\ell$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The selected statement proves this uniqueness; existence of a field isomorphism for every admissible Galois-data isomorphism is outside it.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Reconstruction of Function Fields from Mod-ℓ Milnor K-Theory](https://github.com/openai/math/blob/main/preprints/Reconstruction-of-Function-Fields-from-Mod-ell-Milnor-K-Theory-October-5-2026/mod-ell-bogomolov-pop.pdf)
- Manuscript: [Reconstruction from Milnor K-theory modulo the characteristic](https://github.com/openai/math/blob/main/preprints/Reconstruction-from-Milnor-K-theory-modulo-the-characteristic-October-5-2026/paper.pdf)
- Manuscript: [The Bogomolov-Pop reconstruction theorem](https://github.com/openai/math/blob/main/preprints/The-Bogomolov-Pop-reconstruction-theorem-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/009.md
- Comparator statement (Injectivity of Bogomolov–Pop reconstruction modulo the stated ambiguities): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BogomolovPopInjectivity.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
