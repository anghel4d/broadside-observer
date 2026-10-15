---
title: "Anatomy of High-Performance Matrix Multiplication"
authors:
  - "Kazushige Goto"
  - "Robert A. van de Geijn"
year: 2008
venue: "ACM Transactions on Mathematical Software 34(3), 1–25"
arxiv: null
doi: "10.1145/1356052.1356053"
source: "https://www.cs.utexas.edu/~flame/pubs/GotoTOMS_revision.pdf"
topics:
  - gemm
  - memory-hierarchy
  - blocking
  - ml-infrastructure
seed_rank: 2308
seed_batch: "archive-2026-10-16"
reviewed: "2026-10-16"
pool: "systems"
relevance_score: 9
lineage: dense-linear-algebra-kernels
see:
  - 353-roofline-an-insightful-visual-performance-model
  - 2300-parallel-sparse-outputs-for-tensor-compilers
cites:
  - title: "Anatomy of High-Performance Matrix Multiplication"
    url: "https://doi.org/10.1145/1356052.1356053"
    year: 2008
    arxiv: null
    doi: "10.1145/1356052.1356053"
  - title: "Roofline: An Insightful Visual Performance Model for Multicore Architectures"
    url: "https://doi.org/10.1109/MCSE.2009.88"
    year: 2009
    arxiv: null
    doi: "10.1109/MCSE.2009.88"
---

# Anatomy of High-Performance Matrix Multiplication

## One-sentence takeaway

Goto and van de Geijn explain how GotoBLAS reaches near-peak GEMM: layer the multiply into panel-panel (gepp) and block-panel (gebp) steps, pack an mc×kc block of A contiguously so it streams from L2 (not L1), pack a kc×nr sliver of B to stay in L1, and size the blocks from the TLB reach and cache sizes — with the TLB, not the cache, often the binding limit.

## Why it matters here

GEMM is the inner loop of every neural-network layer and much of physics and graphics; the blocking and packing recipe here is what BLIS, OpenBLAS and later GPU tiling schemes (and the tensor-compiler work in 2300) inherited. The library has the Roofline model (353) for asking *whether* a kernel is compute- or bandwidth-bound; this card is the worked answer for how to actually get a dense kernel to the roof on a CPU, useful for ano's array runtime and for reasoning about inference engines.

## Key ideas

- **Six kernel shapes, one winner.** Matrix multiply decomposes into gepp/gemp/gepm and then gebp/gepb/gepdot building blocks; gepdot needs twice the L2-to-register bandwidth, unpacking C costs more than packing B, and column-major access favours the gebp-based algorithm, which the paper argues is superior to the alternatives.
- **Stream A from L2, not L1.** Earlier models kept the packed block in L1; the observation here is that the flop rate to L2-streaming rate ratio is small enough that the mc×kc block of A can live in L2, allowing much larger blocks.
- **Packing is part of the algorithm.** Copy the A block and B panel into contiguous buffers in the exact order the micro-kernel reads them; the copy costs O(kc·n) memops against 2·mc·kc·n flops, so it is amortized, and it removes TLB misses and cache conflicts from the inner loop.
- **Choosing kc and mc.** kc·nr numbers should fill under half of L1 so B's sliver isn't evicted; in practice kc doubles fill half a page. mc is chosen so the A block fills about half of the smaller of the TLB-addressable memory and the L2 cache.
- **Breadth of evidence.** Measured on Pentium III/4, Core 2, Opteron, Itanium2, POWER3–POWER5, PPC440 and Alpha generations, reporting near-peak dgemm across that range, with block-size sweeps (e.g. mc choices on the Pentium 4 Prescott).

## Caveats

The paper deliberately addresses the macro layering, not how to write the register-level micro-kernel, which still needs per-architecture assembly. Multicore scheduling, GPUs and low-precision tensor units are outside its scope, and the specific block sizes are tied to mid-2000s caches. The linked PDF is the authors' revision preprint; cite the ACM TOMS version via the DOI.

## Links

- Paper (authors' revision PDF): https://www.cs.utexas.edu/~flame/pubs/GotoTOMS_revision.pdf
- Paper (DOI): https://doi.org/10.1145/1356052.1356053
