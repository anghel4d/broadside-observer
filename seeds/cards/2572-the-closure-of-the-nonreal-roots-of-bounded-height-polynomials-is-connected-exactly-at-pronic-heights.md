---
title: "The closure of the nonreal roots of bounded-height polynomials is connected exactly at pronic heights"
authors:
  - "Bernat Espigulé"
year: 2026
venue: "arXiv preprint (math.CV; math.NT)"
arxiv: "2611.14517"
doi: null
source: "https://arxiv.org/abs/2611.14517"
topics:
  - "roots-of-polynomials"
  - "fractal-loci"
  - "connectedness"
  - "power-series-double-zeros"
  - "pisot-numbers"
  - "computer-assisted-proof"
seed_rank: 2572
seed_batch: "curiosity-2026-11-13"
reviewed: "2026-11-13"
pool: "maths-foundations"
relevance_score: 7
cites: []
see: []
---

# The closure of the nonreal roots of bounded-height polynomials is connected exactly at pronic heights

## One-sentence takeaway

Plot every non-real root of every integer polynomial whose coefficients have absolute value at most \(h\) and take the closure. The resulting fractal is connected exactly when \(h = q(q-1)\) is a pronic number (2, 6, 12, 20, …). At every other height it has at least five components, and at a density-one set of heights it has infinitely many, piling up at \(\pm p\) and \(\pm 1/p\).

## Why it's lovely

Pictures of algebraic numbers are among the most beautiful images in mathematics, and this paper finds a clean arithmetic law in their topology. Keep the real roots and the set is always connected. Remove them and connectedness flickers on only at the products of consecutive integers. At height 19 the point 5 is its own component with infinitely many islands crowding onto it; at height 20 they all fuse into one continuum (the paper's Figure 1). The mechanism is a two-coordinate "value and derivative" digit recursion along a real double zero. Integer digits cannot correct an expanding state the way a continuous coefficient could, so the endpoint is forced exactly to \(q\). Along the way it settles a twenty-year-old numerical observation of Shmerkin and Solomyak: at height 2 the double zeros are \(\{1/2\}\cup[1/\rho,1)\), with \(\rho\) the tribonacci constant. For Anoptic, sets like this are escape-time-style renders where every pixel is a membership test over an infinite digit tree. The paper shows how to turn such pictures into certificates using exact Bernstein-form inequalities instead of sampled shading. Its figures are deliberately labelled "illustration, not proof".

## Key ideas

- **Theorem A.** \(\mathcal{C}_h\) is connected (and locally connected) iff \(h=q(q-1)\). Otherwise it has at least five components. The full nonzero root closure is connected at every height.
- **Pronic endpoint.** At \(h=q(q-1)\), a power series with digits bounded by \(h\) can have a real double zero no closer to 0 than \(1/q\). The proof forces the first digit to be \(2q-1\) and then traps the tail in an expanding state.
- **Clopen separation.** Comparing value and derivative of every admissible series near a reference double zero produces root sets that are open and closed in the whole core. Components separated near the axis cannot reconnect anywhere else.
- **Cascades.** Just below a pronic height, \(\pm p,\pm1/p\) are singleton components with infinitely many interior-bearing components accumulating on them. Above it, the components accumulate on the main body.
- **Sparse alphabets.** The same separation survives deleting digits. Constant term 1 with digits \(\{-5,4,5\}\) already gives a nonisolated singleton component at \(1/3\).

## Caveats

Parts are computer-assisted: the covers near the endpoint, the planar separators at square-adjacent heights and the real-trace results at heights 1, 3, 4 and 7 depend on exact-arithmetic checks in a supplement and a computational companion. Infinitude of components is still open at heights 1, 3, 4, 9, 25, 63 and 81, and at up to one height in each later square-adjacent triple. The shaded figures are numerical illustrations, not certificates. I read the introduction and Sections 1–4 in the arXiv HTML; the rest only in outline.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.14517
- PDF: https://arxiv.org/pdf/2611.14517
