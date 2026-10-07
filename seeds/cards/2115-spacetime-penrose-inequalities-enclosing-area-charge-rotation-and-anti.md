---
title: "Spacetime Penrose inequalities: enclosing area, charge, rotation, and anti-de Sitter extensions"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 260; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-spacetime-Penrose-inequality-with-charge-and-original-data-rigidity-October-5-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "lean4"
  - "formalized"
seed_rank: 2115
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The spacetime Penrose inequality with charge and original-data rigidity"
    url: "https://github.com/openai/math/blob/main/preprints/The-spacetime-Penrose-inequality-with-charge-and-original-data-rigidity-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A Charged Reduction of the Spacetime Penrose Inequality in Spatial Dimensions at Least Four"
    url: "https://github.com/openai/math/blob/main/preprints/A-Charged-Reduction-of-the-Spacetime-Penrose-Inequality-in-Spatial-Dimensions-at-Least-Four-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Spacetime Penrose inequalities: enclosing area, charge, and rigidity"
    url: "https://github.com/openai/math/blob/main/preprints/Spacetime-Penrose-inequalities-enclosing-area-charge-and-rigidity-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The Kerr–Newman Penrose Inequality for Axisymmetric Electrovacuum Exteriors"
    url: "https://github.com/openai/math/blob/main/preprints/The-Kerr-Newman-Penrose-Inequality-for-Axisymmetric-Electrovacuum-Exteriors-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Electromagnetic tails and the Kerr–Newman Penrose inequality"
    url: "https://github.com/openai/math/blob/main/preprints/Electromagnetic-tails-and-the-Kerr-Newman-Penrose-inequality-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The nonmaximal anti-de Sitter Penrose Inequality and original-data rigidity"
    url: "https://github.com/openai/math/blob/main/preprints/The-nonmaximal-anti-de-Sitter-Penrose-Inequality-and-original-data-rigidity-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The Penrose inequality for maximal asymptotically hyperbolic initial data"
    url: "https://github.com/openai/math/blob/main/preprints/The-Penrose-inequality-for-maximal-asymptotically-hyperbolic-initial-data-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A local Penrose inequality for conformal perturbations of Schwarzschild–anti-de Sitter data"
    url: "https://github.com/openai/math/blob/main/preprints/A-local-Penrose-inequality-for-conformal-perturbations-of-Schwarzschild-anti-de-Sitter-data-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The spacetime Penrose inequality and enclosing area"
    url: "https://github.com/openai/math/blob/main/preprints/The-spacetime-Penrose-inequality-and-enclosing-area-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Conformal flow and the Riemannian Penrose inequality with minimizing frontiers"
    url: "https://github.com/openai/math/blob/main/preprints/Conformal-flow-and-the-Riemannian-Penrose-inequality-with-minimizing-frontiers-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Equality and rigidity in the spacetime Penrose inequality"
    url: "https://github.com/openai/math/blob/main/preprints/Equality-and-rigidity-in-the-spacetime-Penrose-inequality-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Boundary graph deformations for the spacetime Penrose inequality"
    url: "https://github.com/openai/math/blob/main/preprints/Boundary-graph-deformations-for-the-spacetime-Penrose-inequality-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Area-controlled end replacement and the Bondi Penrose inequality in the CKS class"
    url: "https://github.com/openai/math/blob/main/preprints/Area-controlled-end-replacement-and-the-Bondi-Penrose-inequality-in-the-CKS-class-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Spacetime Penrose inequalities: enclosing area, charge, rotation, and anti-de Sitter extensions

## One-sentence takeaway

OpenAI's result family 260 (Mathematical physics) claims: Proves the sharp enclosing-area spacetime Penrose inequality for smooth one-ended asymptotically flat initial data in every spatial dimension n ≥ 3, under dominant energy, weak future trapping, positive enclosing area, and the stated decay assumptions.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): It bounds invariant ADM mass below using minimum enclosing area, with equality rigidity under additional horizon hypotheses. Charged upper-area bounds treat dyonic three-dimensional data; the higher-dimensional purely electric extension uses the matched neutral theorem.
- *The spacetime Penrose inequality with charge and original-data rigidity*: Under the stated energy, decay, and trapping hypotheses, we prove the sharp charged spacetime Penrose upper-area inequality for one-ended three-dimensional initial data with source-free electric and magnetic fields. The theorem allows arbitrary second fundamental form, nonzero ADM momentum, and disconnected boundary. Writing m for invariant ADM mass, Q for total charge magnitude, and rA for the minimum-enclosing-area radius, the bound is m ≥ Q and $r_A\le m+\sqrt{m^2-Q^2}$.
- *A Charged Reduction of the Spacetime Penrose Inequality in Spatial Dimensions at Least Four*: Using the companion neutral spacetime Penrose theorem exactly at its stated strong-decay, future-trapped, positive-area, and future-timelike scope, we prove the sharp purely electric upper-area inequality in every spatial dimension n ≥ 4 for one-ended charged data satisfying the charged dominant energy condition and $\mathop{\mathrm{div}}\nolimits _g E=0$, with the specified decay, integrability, and finite-flux assumptions. The data may have arbitrary interior topology and ADM momentum, with a future or past trapping sign chosen independently on each boundary component. Positive enclosing area and strict ADM timelikeness are conclusions.
- *Spacetime Penrose inequalities: enclosing area, charge, and rigidity*: We prove sharp spacetime Penrose inequalities for invariant ADM mass and minimum enclosing area in three and four spatial dimensions. Under their respective designated-end conventions, the neutral numerical results allow arbitrary second fundamental form, nonzero momentum, disconnected weakly future trapped boundary, and finitely many ends. Under the stated horizon hypotheses, equality for the neutral inequalities reconstructs the original exterior data as spacelike slices of Schwarzschild spacetime in three dimensions and Schwarzschild–Tangherlini spacetime in four; the four-dimensional equality theorem concerns a connected, one-ended exterior.
- *The Kerr–Newman Penrose Inequality for Axisymmetric Electrovacuum Exteriors*: We prove the sharp Kerr–Newman Penrose inequality

$\displaystyle m^2\ge \frac{A}{16\pi}+\frac{Q^2}{2} +\frac{\pi(Q^4+4J^2)}{A}.$

Here $Q^2=Q_e^2+Q_b^2$, and J is the conserved total angular momentum, including its electromagnetic contribution. The result applies to smooth axisymmetric electrovacuum exteriors in the stated one-ended topological and decay class, with a connected outermost, outer-area-minimizing future marginally outer trapped boundary, Coulomb electromagnetic asymptotics, zero ADM momentum, and the explicitly assumed physical-area condition $A\ge4\pi\sqrt{Q^4+4J^2}$. No maximality assumption is made.
- *Electromagnetic tails and the Kerr–Newman Penrose inequality*: We construct smooth axisymmetric electrovacuum exteriors that violate the Kerr–Newman Penrose inequality when J is the bare gravitational ADM angular momentum and the electromagnetic fields have only $O(r^{-2})$ decay, allowing angularly varying leading tails. The examples have zero total electric and magnetic charge even though both electromagnetic fields are nonzero. They have a connected outermost, outer-area-minimizing future marginally outer trapped boundary and lie strictly on the physical area branch.
- Plus 8 more companion manuscripts in this family; see Links.
- Lean scope (lean/docs/260.md): The formalization replaces a three-dimensional Cha–Khuri–Sakovich hyperboloidal end by asymptotically flat ends while preserving each fixed compact interior, completeness, and the dominant energy condition. For strictly future-timelike initial-data charge, the ADM masses approach the invariant Bondi mass and the loss of enclosing area tends to zero.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The implementation retains a conditional inequality for the connected marginal-boundary case, assuming the asymptotically flat exterior Penrose inequality.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The spacetime Penrose inequality with charge and original-data rigidity](https://github.com/openai/math/blob/main/preprints/The-spacetime-Penrose-inequality-with-charge-and-original-data-rigidity-October-5-2026/paper.pdf)
- Manuscript: [A Charged Reduction of the Spacetime Penrose Inequality in Spatial Dimensions at Least Four](https://github.com/openai/math/blob/main/preprints/A-Charged-Reduction-of-the-Spacetime-Penrose-Inequality-in-Spatial-Dimensions-at-Least-Four-October-5-2026/paper.pdf)
- Manuscript: [Spacetime Penrose inequalities: enclosing area, charge, and rigidity](https://github.com/openai/math/blob/main/preprints/Spacetime-Penrose-inequalities-enclosing-area-charge-and-rigidity-October-5-2026/paper.pdf)
- Manuscript: [The Kerr–Newman Penrose Inequality for Axisymmetric Electrovacuum Exteriors](https://github.com/openai/math/blob/main/preprints/The-Kerr-Newman-Penrose-Inequality-for-Axisymmetric-Electrovacuum-Exteriors-October-5-2026/paper.pdf)
- Manuscript: [Electromagnetic tails and the Kerr–Newman Penrose inequality](https://github.com/openai/math/blob/main/preprints/Electromagnetic-tails-and-the-Kerr-Newman-Penrose-inequality-October-5-2026/paper.pdf)
- Manuscript: [The nonmaximal anti-de Sitter Penrose Inequality and original-data rigidity](https://github.com/openai/math/blob/main/preprints/The-nonmaximal-anti-de-Sitter-Penrose-Inequality-and-original-data-rigidity-October-5-2026/paper.pdf)
- Manuscript: [The Penrose inequality for maximal asymptotically hyperbolic initial data](https://github.com/openai/math/blob/main/preprints/The-Penrose-inequality-for-maximal-asymptotically-hyperbolic-initial-data-October-5-2026/paper.pdf)
- Manuscript: [A local Penrose inequality for conformal perturbations of Schwarzschild–anti-de Sitter data](https://github.com/openai/math/blob/main/preprints/A-local-Penrose-inequality-for-conformal-perturbations-of-Schwarzschild-anti-de-Sitter-data-October-5-2026/paper.pdf)
- Manuscript: [The spacetime Penrose inequality and enclosing area](https://github.com/openai/math/blob/main/preprints/The-spacetime-Penrose-inequality-and-enclosing-area-September-27-2026/paper.pdf)
- Manuscript: [Conformal flow and the Riemannian Penrose inequality with minimizing frontiers](https://github.com/openai/math/blob/main/preprints/Conformal-flow-and-the-Riemannian-Penrose-inequality-with-minimizing-frontiers-September-27-2026/paper.pdf)
- Manuscript: [Equality and rigidity in the spacetime Penrose inequality](https://github.com/openai/math/blob/main/preprints/Equality-and-rigidity-in-the-spacetime-Penrose-inequality-September-27-2026/paper.pdf)
- Manuscript: [Boundary graph deformations for the spacetime Penrose inequality](https://github.com/openai/math/blob/main/preprints/Boundary-graph-deformations-for-the-spacetime-Penrose-inequality-September-27-2026/paper.pdf)
- Manuscript: [Area-controlled end replacement and the Bondi Penrose inequality in the CKS class](https://github.com/openai/math/blob/main/preprints/Area-controlled-end-replacement-and-the-Bondi-Penrose-inequality-in-the-CKS-class-September-27-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/260.md
- Comparator statement (Area-controlled end replacement and Schwarzschild equality examples): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CKSBondiPenrose.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
