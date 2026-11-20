---
title: "Proof of the polygonal Saint-Venant inequality conjectured by Pólya–Szegö"
authors:
  - "Beniamin Bogosel"
  - "Dorin Bucur"
  - "Ilaria Fragalà"
year: 2026
venue: "arXiv preprint (math.AP)"
arxiv: "2611.24573"
doi: null
source: "https://arxiv.org/abs/2611.24573"
version_reviewed: "v1"
topics:
  - "shape-optimization"
  - "torsional-rigidity"
  - "isoperimetric-inequalities"
  - "regular-polygons"
  - "elasticity"
seed_rank: 2665
seed_batch: "curiosity-2026-11-21"
reviewed: "2026-11-20"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "Proof of the polygonal Saint-Venant inequality conjectured by Pólya–Szegö"
    url: "https://arxiv.org/abs/2611.24573"
    year: 2026
    arxiv: "2611.24573"
    doi: null
  - title: "Proof of the local version of the Pólya–Szegö conjecture for the torsional rigidity of polygons"
    url: "https://arxiv.org/abs/2609.23051"
    year: 2026
    arxiv: "2609.23051"
    doi: null
  - title: "Computer-assisted local maximality of regular polygons for torsional rigidity"
    url: "https://arxiv.org/abs/2609.14785"
    year: 2026
    arxiv: "2609.14785"
    doi: null
see: []
---

# Proof of the polygonal Saint-Venant inequality conjectured by Pólya–Szegö

## One-sentence takeaway

Among all polygons with at most n sides and a given area, including non-convex ones, the regular n-gon is the unique maximizer of torsional rigidity. Pólya and Szegő conjectured this in 1951 and proved it only for triangles and quadrilaterals.

## Why it's lovely

Torsional rigidity measures how hard it is to twist a beam with a given cross-section, and the classical Saint-Venant inequality says that, for a fixed area, the disk is best. Pólya and Szegő asked the obvious discrete question: if the cross-section must be an n-gon, is the regular one best? Steiner symmetrization preserves the number of sides only for n = 3 and 4, so the problem stayed open for every n ≥ 5 for 75 years. Recent progress was computer-assisted and local (validated shape Hessians for 5 ≤ n ≤ 25, then a local proof). This paper gives a global proof that is entirely analytic and readable. The authors also note that with LLM help they could adapt the method to the twin Faber–Krahn problem (lowest drum tone), but they refused to publish that version because it was 'hardly verifiable' and 'lacking of mathematical insight'. That is a rare and useful statement of what mathematicians still want from a proof. For Broadside, it is a good reminder that symmetry wins in shape optimization only when the right partition argument exists.

## Key ideas

- **Functional.** τ(Ω) = −inf over u ∈ H¹₀(Ω) of ∫_Ω (|∇u|² − 2u), the classical torsion energy. The disk maximizes it among all shapes of a given area (the Saint-Venant inequality).
- **Area-angle proportional partition.** Any polygon with at most n sides is cut into convex pieces, each attached to a side, whose areas are proportional to their angles. The idea is inspired by Solynin–Zalgaller's proof of the logarithmic-capacity analogue, but uses a convex partition instead of a triangle covering.
- **Mixed torsional rigidity.** A sharp comparison bounds the total rigidity by a sum of mixed rigidities of the cells against isosceles triangles.
- **Angular concavity.** A concavity property of mixed torsion of isosceles triangles, from the authors' previous paper, shows the sum is maximized when all angles are equal, which gives the regular n-gon.
- **Scope.** Non-convex polygons are included, and equality holds only for the regular n-gon up to congruence.

## Caveats

I read the abstract, introduction and AI statement of v1 (19 Nov 2026); it is not refereed. The authors say AI tools helped check arguments and edit, and that the proof is their own. The polygonal Faber–Krahn inequality (first Dirichlet eigenvalue) is a different problem; their addendum says a human-verifiable proof of it is still wanted, and that a related preprint has appeared.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.24573
- PDF: https://arxiv.org/pdf/2611.24573
- Local version (2026): https://arxiv.org/abs/2609.23051
- Computer-assisted local maximality: https://arxiv.org/abs/2609.14785
