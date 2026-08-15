---
title: "Linear Logic, *-Autonomous Categories and Cofree Coalgebras"
authors:
  - "R. A. G. Seely"
year: 1989
venue: "Contemporary Mathematics 92"
arxiv: null
doi: null
source: "https://www.math.mcgill.ca/rags/nets/llsac.pdf"
topics:
  - linear-logic
  - category-theory
  - star-autonomous
seed_rank: 149
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
cites:
  - title: "Linear Logic"
    url: "https://doi.org/10.1016/0304-3975(87)90045-4"
    year: 1987
    arxiv: null
    doi: "10.1016/0304-3975(87)90045-4"
see:
  - "040-linear-logic"
---

# Linear Logic, *-Autonomous Categories and Cofree Coalgebras

## One-sentence takeaway

Girard's linear logic is the internal language of a *-autonomous category (closed symmetric monoidal, finite products, closed involution), and the exponential `!` is a cotriple that turns cartesian comonoids into tensorial comonoids so the Kleisli category of `!` is cartesian closed.

## Why it matters here

This is the CT↔LL dictionary Broadside's linear/session side depends on: dualizing object as `(-)⊥`, tensor vs. cartesian product, and `!` as the "of course" comonad that restores ordinary intuitionistic function space.

## Key ideas

- Analogous to the CCC / simply-typed λ-calculus correspondence. The linear structure is a *-autonomous category `G`: closed symmetric monoidal, with finite products and a closed involution (Barr).
- Multiplicative connectives live in the monoidal closed structure (`⊗`, `⊸`, dualizing object); additives are the cartesian products/coproducts.
- Girard's exponential `!` is a cotriple (comonad) on `G`. It carries the canonical comonoid structure on `A` with respect to cartesian product to a comonoid structure on `!A` with respect to tensor — i.e. `!` manufactures the "reusable" objects that linear logic otherwise forbids.
- The Kleisli category of that cotriple is cartesian closed, which is why intuitionistic logic embeds into linear logic via `A → B  ≔  !A ⊸ B`.
- Short (Contemporary Mathematics 92, 1989, pp. 371–382). The author's abstract page states the characterisation in one paragraph; the PDF is the paper.

## Caveats

## Links

- PDF: https://www.math.mcgill.ca/rags/nets/llsac.pdf
- Abstract: https://www.math.mcgill.ca/rags/nets/llsac.abstract.html
