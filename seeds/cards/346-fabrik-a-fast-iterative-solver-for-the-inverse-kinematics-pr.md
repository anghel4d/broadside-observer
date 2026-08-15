---
title: "FABRIK: A fast, iterative solver for the Inverse Kinematics problem"
authors:
  - "Andreas Aristidou"
  - "Joan Lasenby"
year: 2011
venue: "Graphical Models"
arxiv: null
doi: "10.1016/j.gmod.2011.05.001"
source: "https://doi.org/10.1016/j.gmod.2011.05.001"
topics:
  - animation
  - ik
seed_rank: 346
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
cites: []
see: []
---

# FABRIK: A fast, iterative solver for the Inverse Kinematics problem

## One-sentence takeaway

FABRIK solves a kinematic chain by alternately reaching forward from the end effector to the target and backward from the root, placing each joint on the line to its neighbor at the bone’s rest length.

## Why it matters here

Anoptic animation and GRID COMMAND aim-at / foot-plant IK need something cheaper than Jacobian pseudoinverses; FABRIK is the iterative solver engines actually ship for full-body and limb IK.

## Key ideas

- Forward pass: pin the end effector on the target, then walk toward the root, placing joint `i` at distance `d_i` along the segment to joint `i+1`.
- Backward pass: pin the root back on its base, then walk toward the end effector the same way. Repeat until the tip is close enough or a iteration cap is hit.
- No matrices, no inverses, no singularities of the Jacobian. Joint limits are applied by projecting each placed joint into an allowed cone/hinge after the line step.
- Extends to multiple end effectors and to closed loops by sharing sub-chains. Typical convergence in a handful of iterations for humanoid limbs.
- *Graphical Models* 73(5), 2011. The previous cite list was unrelated Morse-theory papers and has been dropped.

## Caveats

## Links

- DOI: [10.1016/j.gmod.2011.05.001](https://doi.org/10.1016/j.gmod.2011.05.001)
