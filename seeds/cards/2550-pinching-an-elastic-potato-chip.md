---
title: "Pinching an elastic potato chip"
authors:
  - "Kosei Kataoka"
  - "Tomohiko G. Sano"
year: 2026
venue: "arXiv preprint (cond-mat.soft)"
arxiv: "2611.10546"
doi: null
source: "https://arxiv.org/abs/2611.10546"
topics:
  - "thin-shells"
  - "isometric-bending"
  - "asymptotic-lines"
  - "wave-equation"
  - "geometric-rigidity"
seed_rank: 2550
seed_batch: "curiosity-2026-11-11"
reviewed: "2026-11-11"
pool: "physics"
relevance_score: 7
cites: []
see: []
---

# Pinching an elastic potato chip

## One-sentence takeaway

Pinch a saddle-shaped shell at two edge points and its deformation travels along the asymptotic lines (curves of zero normal curvature) exactly like light along rays: inextensibility turns the shell's mid-surface into a wave equation in space, so the surface splits into lit, penumbra and shadow regions that predict where it lifts, where it sinks and where it stays rigid.

## Why it's lovely

A potato chip turns out to be an optics problem. For a hyperbolic-paraboloid shell the inextensible compatibility condition is a 1D wave equation with one in-plane coordinate playing the role of time, so d'Alembert's formula solves the isometric limit and the grip line acts as a light source whose rays are the asymptotic net. Whether the tip of the chip rises or falls flips at a critical curvature ratio \(R_1^*\sim R_2\), and 3D-printed experiments, a discrete elastic-shell simulation and shallow-shell theory all agree. For Anoptic it is a pleasing mirror of the radiance-cascade and soft-shadow work: the same lit/penumbra/shadow classification by characteristic lines, here describing where mechanical information can reach rather than where light lands.

## Key ideas

- **Wave equation from isometry.** For \(\mathring z = x^2/2R_1 - y^2/2R_2\), inextensible bending gives \(w_{,yy}/R_1 - w_{,xx}/R_2 = 0\), a wave equation with \(x\) as time and speed \(c=\sqrt{R_2/R_1}\); the solution is \(w = F(y+cx)+F(y-cx)\), fixed by the grip-line shape.
- **Lit, penumbra, shadow.** Each point is classified by how many of its two asymptotic lines reach the grip line; lit points are lifted by the pinch, shadowed ones sink, and finite thickness blurs the boundary into a penumbra.
- **Tip reversal.** The bending-energy minimiser under the grip constraint predicts the tip falling for \(R_1\) below a critical radius and rising above it, matching experiment across \(R_1\) = 5–80 mm.
- **Rigidity map.** The same ray rule predicts where a clamped shell is stiff: stiffness is nearly constant in the lit region and decays across the boundary into shadow.
- **Failure guess.** Stress concentrates in the lit region; the authors suggest cracks may run along the lit–shadow boundary.

## Caveats

A short letter on one geometry family (shallow saddles cut to a disk, pinched at two points); the clean ray picture is exact only in the zero-thickness isometric limit, and thickness corrections come from numerical shallow-shell solutions rather than a closed form. The crack-channelling idea is speculation. I read the full letter.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.10546
- PDF: https://arxiv.org/pdf/2611.10546
