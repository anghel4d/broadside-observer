# Fast Multipole Method

**Slug:** `fast-multipole`  
**Batch:** `fmm-2026-08-24` + `fmm-leftovers-2026-08-24`  
**Cards in thread:** 26 (1163–1188) + leftovers 1193–1196 + see Lightcuts 1042 + H-matrix sibling 1189–1192

## Charter

Hierarchical fast summation for Broadside / Anoptic: the **Fast Multipole Method** (Greengard–Rokhlin) and the tree-code siblings the Keyframe Codes gravity talks treat as prior art (Appel, Barnes–Hut). The thread asks how to evaluate N-body potentials — gravity, Coulomb, Helmholtz, Gaussians — in O(N) or O(N log N) with a bound, instead of O(N²) pairwise or a game-engine Barnes–Hut with a θ knob.

Not a dump of computational-electromagnetics antenna papers. Helmholtz / MLFMA appear only as *founding algorithm* papers (Rokhlin, Coifman–Wandzura, Song–Chew, Darve). Kernel-independent and black-box FMM are the any-K(x,y) variants. Fast Gauss is the same family for heat/RBF. Software cards are real papers or JOSS (PVFMM, ExaFMM, TBFMM, kifmm-rs, **ScalFMM 2014 SISC**). Lightcuts (1042) is the graphics many-lights tree-cut cousin — see, not reminted. Diffusion-curve FMM (Orzan source + Sun 2014 + Bang 2023) is the graphics evaluation spine. H-matrices live on the sibling slug `h-matrices`.

## Ordered spine

1. **Integral-equation origin** — Rokhlin 1985 potential-theory BIE.
2. **Tree-code siblings** — Appel 1985, Barnes–Hut 1986 (talk-cited). Hockney–Eastwood cited, not minted.
3. **Particle FMM** — Greengard–Rokhlin 1987 (talk-cited) → Greengard 1988 book → Carrier–Greengard–Rokhlin 1988 adaptive (talk-cited).
4. **3D Laplace** — Greengard–Rokhlin 1997 new version → Cheng–Greengard–Rokhlin 1999 adaptive 3D (talk 2's spherical-harmonics paper).
5. **Helmholtz / MLFMA founding** — Rokhlin 1990/1993, Coifman–Rokhlin–Wandzura 1993, Song–Chew 1995, Darve 2000. No antenna applications.
6. **Kernel-independent** — Ying–Biros–Zorin 2004 kiFMM, Fong–Darve 2009 bbFMM, Gumerov–Duraiswami 2004 Helmholtz recursions.
7. **Fast Gauss** — Greengard–Strain 1991, Yang–Duraiswami–Gumerov–Davis 2003 IFGT.
8. **Reviews** — Beatson–Greengard 1997 short course, Greengard 1994 Science.
9. **N-body / GPU** — Dehnen 2002 astrophysics FMM, Gumerov–Duraiswami 2008 GPU FMM.
10. **Software** — PVFMM 2015, ExaFMM/Yokota 2013, **ScalFMM / Agullo et al. 2014 SISC**, TBFMM 2020, kifmm-rs 2025.
11. **Graphics FMM** — Orzan 2008 (source primitive) → Sun 2014 FMR → Bang 2023 adaptive hybrid BIEM.

## Graph notes

- **Talk 1** (`FhMftauQZqU`, Keyframe Codes) names Barnes–Hut, Greengard–Rokhlin 1987, Carrier adaptive 1988, and the Dongarra/Sullivan top-10 list (not a paper).
- **Talk 2** (`uOahsDhVZaE`, Keyframe Codes, implementation, start ~8:04) implements adaptive 2D FMM and points at a linked 3D spherical-harmonics paper = Cheng–Greengard–Rokhlin 1999.
- Lightcuts (`1042`) stays on the many-lights lineage; FMM cards see it as the graphics tree-cut cousin.
- **ScalFMM leftover closed:** Agullo–Bramas–Coulaud–Darve–Messner–Takahashi, *Task-Based FMM for Multicore Architectures*, SISC 2014 (RR-8277 / HAL-00807368). TBFMM 1187 is the JOSS descendant — not reminted.
- **H-matrices** moved to sibling lineage `h-matrices` (1189–1192).
- Zhang–Bridson 2014 is PPPM, not FMM — skipped.

## Open frontiers / watch next

- Wideband / broadband Helmholtz FMM (Darve line) if Anoptic grows a wave BEM.
- Periodic bbFMM (PBBFMM3D) if a paper, not just a repo, appears.
- Production Vulkan FMM for RTS gravity vs Dehnen/Barnes–Hut constants.
- Do not expand into IEEE AP-S antenna-application sludge.
