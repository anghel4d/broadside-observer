---
title: "Iitaka subadditivity, variation, and logarithmic additivity"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 033; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Orbifold-and-logarithmic-Iitaka-subadditivity-September-26-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "algebraic-and-complex-geometry"
  - "lean4"
  - "formalized"
seed_rank: 1893
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Orbifold and logarithmic Iitaka subadditivity"
    url: "https://github.com/openai/math/blob/main/preprints/Orbifold-and-logarithmic-Iitaka-subadditivity-September-26-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Logarithmic Kodaira dimension and whole-fiber variation"
    url: "https://github.com/openai/math/blob/main/preprints/Logarithmic-Kodaira-dimension-and-whole-fiber-variation-September-26-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The reverse logarithmic Kodaira inequality and additivity"
    url: "https://github.com/openai/math/blob/main/preprints/The-reverse-logarithmic-Kodaira-inequality-and-additivity-September-26-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Projective Hodge lines and ordinary Iitaka subadditivity"
    url: "https://github.com/openai/math/blob/main/preprints/Projective-Hodge-lines-and-ordinary-Iitaka-subadditivity-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "B-semiampleness for compact log-smooth Kähler fibrations"
    url: "https://github.com/openai/math/blob/main/preprints/B-semiampleness-for-compact-log-smooth-Kahler-fibrations-September-10-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Iitaka subadditivity, variation, and logarithmic additivity

## One-sentence takeaway

OpenAI's result family 033 (Algebraic and complex geometry) claims: Proves Campana's orbifold Iitaka subadditivity conjecture for smooth Fujiki-class-$\mathcal C$ manifolds with rational simple-normal-crossing boundaries.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): For projective fibrations $f:U\to V$ of smooth complex quasi-projective varieties with connected fibers, general fiber F, and $\bar\kappa(V)\ge0$, proves Popa's inequality $\bar\kappa(U)\ge\kappa(F)+\max\{\bar\kappa(V),\mathop{\mathrm{Var}}\nolimits (f)\}$, where variation measures the whole geometric generic fiber.
- *Orbifold and logarithmic Iitaka subadditivity*: We prove Campana's orbifold Iitaka subadditivity conjecture for rational simple normal crossing boundaries on compact manifolds in Fujiki class $\mathcal C$, including coefficient one. Ordinary and logarithmic subadditivity follow.
- *Logarithmic Kodaira dimension and whole-fiber variation*: We prove the logarithmic Iitaka–Viehweg inequality for projective surjective morphisms with connected fibers between smooth complex quasi-projective varieties whose base has nonnegative logarithmic Kodaira dimension. The variation measures the birational field of definition of the whole geometric generic fiber. This resolves Popa's logarithmic variation conjecture positively.
- *The reverse logarithmic Kodaira inequality and additivity*: We prove the reverse logarithmic Kodaira inequality for a surjective connected-fiber morphism $f:(X,E)\to(Y,D)$ of smooth projective reduced simple-normal-crossing pairs, with $\mathop{\mathrm{Supp}}\nolimits (f^*D)\subseteq\mathop{\mathrm{Supp}}\nolimits E$, such that X and every boundary stratum are smooth over $Y\setminus\mathop{\mathrm{Supp}}\nolimits D$. Together with logarithmic subadditivity, the inequality gives additivity, including both negative-infinity cases. This resolves Popa's logarithmic additivity conjecture positively in the projective reduced-SNC, stratum-smooth setting.
- *Projective Hodge lines and ordinary Iitaka subadditivity*: We prove the ordinary Iitaka subadditivity conjecture for surjective projective morphisms with connected fibers between smooth connected projective varieties over algebraically closed fields of characteristic zero. If F is the geometric generic fiber of $f:X\to Z$, then $\kappa(X)\geq\kappa(F)+\kappa(Z)$.
- *B-semiampleness for compact log-smooth Kähler fibrations*: We prove the compact log-smooth Kähler case of b-semiampleness. Let $f:Y\to X$ be a surjective holomorphic map with connected fibers between smooth compact connected Kähler manifolds, and let Δ be an effective rational divisor with simple normal crossing support and coefficients in $[0,1]$, with $K_Y+\Delta\sim_{\mathbb Q}f^*L$ for $L\in\mathop{\mathrm{Pic}}\nolimits (X)_{\mathbb Q}$. There is a smooth compact Kähler modification $S\to X$ for which the threshold-moduli line satisfies $M_{S_1}=\nu^*M_S$ in $\mathop{\mathrm{Pic}}\nolimits (S_1)_{\mathbb Q}$ for every smooth compact Kähler modification $\nu:S_1\to S$, and some positive multiple of MS is represented by a holomorphic line bundle generated by global sections.
- Lean scope (lean/docs/033.md): The paper studies logarithmic Kodaira additivity for connected-fiber morphisms of smooth projective reduced simple-normal-crossing pairs that are smooth on all boundary strata away from the base boundary. The linked formalization proves the negative-fiber branch: for a very general base point, if the logarithmic Kodaira dimension of the fiber is $-\infty$, then the total logarithmic Kodaira dimension equals the sum of the base and fiber dimensions and is $-\infty$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The finite-dimension and negative-base branches of the paper's additivity theorem are outside this selected statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Orbifold and logarithmic Iitaka subadditivity](https://github.com/openai/math/blob/main/preprints/Orbifold-and-logarithmic-Iitaka-subadditivity-September-26-2026/paper.pdf)
- Manuscript: [Logarithmic Kodaira dimension and whole-fiber variation](https://github.com/openai/math/blob/main/preprints/Logarithmic-Kodaira-dimension-and-whole-fiber-variation-September-26-2026/paper.pdf)
- Manuscript: [The reverse logarithmic Kodaira inequality and additivity](https://github.com/openai/math/blob/main/preprints/The-reverse-logarithmic-Kodaira-inequality-and-additivity-September-26-2026/paper.pdf)
- Manuscript: [Projective Hodge lines and ordinary Iitaka subadditivity](https://github.com/openai/math/blob/main/preprints/Projective-Hodge-lines-and-ordinary-Iitaka-subadditivity-September-27-2026/paper.pdf)
- Manuscript: [B-semiampleness for compact log-smooth Kähler fibrations](https://github.com/openai/math/blob/main/preprints/B-semiampleness-for-compact-log-smooth-Kahler-fibrations-September-10-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/033.md
- Comparator statement (Logarithmic Kodaira additivity in the negative-fiber branch): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/LogKodairaFiberNegative.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
