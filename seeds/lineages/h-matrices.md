# Hierarchical matrices (H / H²)

**Slug:** `h-matrices`  
**Batch:** `fmm-leftovers-2026-08-24`  
**Cards in thread:** 4 (1189–1192) + see FMM 1163 / 1166

## Charter

Algebraic sibling of the Fast Multipole Method: **H-matrices** (Hackbusch 1999) and **H²-matrices** (Hackbusch–Börm 2002). FMM gives you a fast matvec for a kernel. H-matrices give you a data-sparse *format* — admissible blocks are low-rank, arithmetic (add / mul / invert) stays almost linear after truncation. H² adds nested bases (the M2M / L2L analogue) and drops storage from O(Nk log N) to O(Nk).

Not a dump of H-matrix FEM preconditioners, control-theory Riccati solvers, or every ACA paper. Panel clustering (Hackbusch–Nowak 1989) is the BEM geometric ancestor. The one review is Börm–Grasedyck–Hackbusch 2003 EABE; Grasedyck–Hackbusch Computing 2003 and MPI LN 21/2003 stay cites. No graphics-founding H-matrix paper turned up this cycle.

## Ordered spine

1. **Panel clustering** — Hackbusch–Nowak 1989 (BEM ancestor).
2. **H-matrices** — Hackbusch 1999 Computing Part I (founding). Part II (2000, multi-d) cited, not minted.
3. **H²-matrices** — Hackbusch–Börm 2002 Computing (adaptive nested bases). Named earlier in Hackbusch–Khoromskij–Sauter 2000, not reminted.
4. **Review / construction** — Börm–Grasedyck–Hackbusch 2003 EABE. Computing 2003 construction + MPI LN 21/2003 workbook cited.

## Graph notes

- FMM (`fast-multipole`) is the analytic twin; H is the algebraic one. Cards see 1163 (Rokhlin BIE) and 1166 (Greengard–Rokhlin 1987).
- HSS / HODLR / HBS are weak-admissibility cousins, not this thread.
- kiFMM / bbFMM (1176, 1177) are the kernel-independent analytic cousins.

## Open frontiers / watch next

- A real graphics H-matrix paper (none found 2026-08-24).
- Do not expand into FEM-preconditioner or IEEE CEM sludge.
