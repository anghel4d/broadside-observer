---
title: "Cyclotron: A Recurrence Language for Expressing Interprocessor Communication"
authors:
  - "Shiv Sundram"
  - "Akhilesh Balasingam"
  - "Nathan Zhang"
  - "Kunle Olukotun"
  - "Fredrik Kjolstad"
year: 2026
venue: "arXiv"
arxiv: "2610.20981"
doi: null
source: "https://arxiv.org/abs/2610.20981"
topics:
  - "recurrence-equations"
  - "space-time-mapping"
  - "systolic-arrays"
  - "distributed-linear-algebra"
  - "array-languages"
seed_rank: 2327
seed_batch: "craft-2026-10-17"
reviewed: "2026-10-17"
pool: "languages"
relevance_score: 8
lineage: array-languages
cites:
  - title: "Cyclotron: A Recurrence Language for Expressing Interprocessor Communication"
    url: "https://arxiv.org/abs/2610.20981"
    year: 2026
    arxiv: "2610.20981"
    doi: null
see:
  - "2300-parallel-sparse-outputs-for-tensor-compilers"
  - "2301-expressing-numpy-broadcasting-via-verb-rank-in-j"
---

# Cyclotron: A Recurrence Language for Expressing Interprocessor Communication

## One-sentence takeaway

Write an algorithm as unordered recurrences over an iteration space where values can live *on the iteration points themselves* (so `(i,j,k)A ← (i,j−1,k)A` is a systolic hop), tag each dimension as spatial or temporal, and the Stanford compiler derives correctly ordered per-processor sends, receives and kernels; swapping the communication pattern is a one-line change, and the generated Cholesky beats ScaLAPACK by 1.34–1.68× on 16 CPU nodes and cuSolverMp by 1.12–1.28× on 16 A100s.

## Why it matters here

This is the cleanest current statement of an idea ano and the Anoptic job graph both circle: keep *what* is computed (the recurrence), *where/when* it runs (the space–time mapping) and *how data travels* (systolic, broadcast, ring, tree, or piecewise mixes) as three separate, editable things. The paper's own finding that the winning communication schedule flips with problem size and interconnect (broadcast lost on one 16-node cluster and won everywhere on a 4-node InfiniBand box) is the argument for making movement a first-class, cheap-to-retarget part of the program rather than baked into a library.

## Key ideas

- **Values have addresses in the iteration space.** A value is named by the tensor element *and* the point where it lives, `(i,j,k)A`; a recurrence relating two points *is* a data movement, written in the same coordinates as the computation.
- **Per-dimension space/time tag.** A separate annotation says which dimensions map across processing elements and which become a temporal loop; the recurrence text doesn't change, so the same program yields different spatial mappings ("a retag, not a rewrite").
- **Ordering is derived, not written.** Recurrences are unordered; a dependency algorithm uses the chosen mapping to sequence computation and coupled send/receive pairs, avoiding the hand-ordering mistakes that deadlock MPI codes.
- **Fixed lowering pipeline.** Space–time fold plus temporal loop, dependency resolution into sends/receives, synchronization-aware control flow per target protocol, then optional block-cyclic decomposition and communication deduplication.
- **Beyond nearest-neighbour.** Unlike AutoSA/AlphaZ (neighbour-only) or Stellar (systolic-only), it expresses one-to-all and tree broadcasts, bidirectional split rings and heterogeneous piecewise policies across subdomains, and fuses kernels such as Cholesky–TRSM natively.
- **Results.** Matrix multiply 1.7–1.8× over ScaLAPACK; Cholesky 1.34–1.68× over ScaLAPACK (CPU), up to 1.24× over SLATE with matched host-staged transport, and 1.12–1.28× over cuSolverMp with GPU-direct transport, which the authors attribute to dependency-driven overlap versus cuSolverMp's bulk-synchronous NCCL broadcasts.

## Caveats

Evaluated only on dense linear algebra (GEMM, TRSM, Cholesky) at modest scale (16 CPU nodes, 16 GPUs); many of the 11 Cholesky schedules lose to ScaLAPACK, so the speedup depends on someone (or some search) picking the right schedule, and automatic schedule search is future work. Mapping onto actual spatial dataflow fabrics (interlinked PEs) is also left for later. Preprint; no public code link found in the text.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.20981
- PDF: https://arxiv.org/pdf/2610.20981
