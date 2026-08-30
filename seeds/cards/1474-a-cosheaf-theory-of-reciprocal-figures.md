---
title: "A Cosheaf Theory of Reciprocal Figures: Planar and Higher Genus Graphic Statics"
authors: ["Zoe Cooperband", "Robert Ghrist", "Jakob Hansen"]
year: 2023
venue: "arXiv:math.AT"
arxiv: "2311.12946"
doi: null
source: "https://arxiv.org/abs/2311.12946"
topics: [curiosity]
seed_rank: 1474
seed_batch: "curiosity-2026-08-31"
reviewed: "2026-08-31"
pool: "engines"
relevance_score: 10
lineage: discrete-differential-geometry
cites:
  - title: "Discrete Exterior Calculus"
    url: "https://arxiv.org/abs/math/0508341"
    year: 2005
    arxiv: "math/0508341"
    doi: null
  - title: "Finite Element Exterior Calculus"
    url: "https://arxiv.org/abs/0806.3412"
    year: 2008
    arxiv: "0806.3412"
    doi: null
see:
  - "1028-discrete-exterior-calculus"
  - "1051-finite-element-exterior-calculus"
  - "1369-discrete-differential-geometry-in-homotopy-type-theory"
---

# A Cosheaf Theory of Reciprocal Figures: Planar and Higher Genus Graphic Statics

## One-sentence takeaway

Maxwell–Cremona graphic statics rewritten as cellular sheaves/cosheaves: the force cosheaf's H_1 is axial self-stress, the linkage sheaf is its dual kinematics, the stiffness matrix is the sheaf Laplacian, and reciprocity / polyhedral lifts / higher-genus dual diagrams are long exact sequences — with existence once dim H_1 F > 4g (reciprocal) or > 6g (lift).

## Why it's lovely

Why you might love this: 19th-century drawing of forces as a dual picture, 1980s Crapo–Whiteley homology, and 2010s sheaf Laplacians finally share one language. Maxwell's counting rule is an Euler characteristic. A truss on a torus gets a dual the moment it has enough self-stress to beat 4g. Recency is flexible; this 2023 paper had slipped the archive/curiosity nets. Leftover of 1028/1051/1369, not a remint of DEC.

## Problem

Graphic statics (form diagram ↔ force diagram, Maxwell–Cremona lift to a polyhedron) is usually a zoo of incidence matrices. Non-planar / higher-genus trusses were folklore plus face-edge-cycle conditions. Sheaves had been gestured at since Crapo, never made the working vocabulary.

## Design

- Force cosheaf F: vertex stalks R^n, edge stalks R (axial), H_1 F = self-stress, H_0 F = mechanisms + Euclidean motions.
- Linkage sheaf F^vee: virtual work; sheaf Laplacian = stiffness matrix; heat flow lands on H^0 (stiff motions).
- Position sheaf: parallel redrawings / impossible edge rotations.
- Planar S^2: short exact sequences of cosheaves give the Maxwell–Cremona and mechanism ↔ impossible-rotation dictionaries (Theorems 33, 34, 37, 42).
- Genus g: if dim H_1 F > 4g there is a nontrivial parallel dual; if > 6g there is a nontrivial polyhedral lift (Theorems 43, 45). Geometric duals, not Whitney graph duals.

## Evidence

Self-contained development with worked figures; Euler-characteristic recovery of Maxwell's 2|V|-|E| = 3+|M|-|S|; explicit K_{3,3}-on-a-torus example where the dual exists and depends on the chosen cell embedding, not just the 1-skeleton.

## Limitations

2D-first; 3D graphic statics is promised, not delivered. Regular cell complexes (no degenerate faces). Dual diagrams may overlap in the plane. Not a drop-in FEM code — a homological rewrite of the drawing board.

## Implications for Broadside

Anoptic structures, tensegrity, and form-finding want exactly this: self-stress as homology, stiffness as a Laplacian, dual diagrams as a rewrite of the same cosheaf. Pairs with DEC/FEEC (1028/1051) and HoTT DDG (1369) as the *statics* sibling of discrete exterior calculus.

## Bottom line

Mint sheaf graphic statics. Reciprocal figures were cohomology with extra steps.

## Links

- arXiv abs: https://arxiv.org/abs/2311.12946
- PDF: https://arxiv.org/pdf/2311.12946.pdf
