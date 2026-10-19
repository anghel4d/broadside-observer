---
title: "The Case for TPU-Accelerated Analytical Query Processing"
authors:
  - "Jaehyun Ha"
  - "Yeounoh Chung"
  - "Helena Caminal"
  - "Aditya K Kamath"
  - "Fatma Özcan"
  - "Arvind Krishnamurthy"
  - "Henry M. Levy"
year: 2026
venue: "arXiv"
arxiv: "2610.22673"
doi: null
source: "https://arxiv.org/abs/2610.22673"
topics:
  - "query-processing"
  - "tpu"
  - "jax-xla"
  - "static-shapes"
  - "array-programming"
seed_rank: 2352
seed_batch: "craft-2026-10-19"
reviewed: "2026-10-19"
pool: "languages"
relevance_score: 7
lineage: array-languages
cites:
  - title: "The Case for TPU-Accelerated Analytical Query Processing"
    url: "https://arxiv.org/abs/2610.22673"
    year: 2026
    arxiv: "2610.22673"
    doi: null
  - title: "MonetDB/X100: Hyper-Pipelining Query Execution"
    url: "https://www.cidrdb.org/cidr2005/papers/P19.pdf"
    year: 2005
    arxiv: null
    doi: null
see:
  - "129-monetdb-x100-hyper-pipelining-query-execution"
  - "1153-morsel-driven-parallelism-a-numa-aware-query-evaluation-framework"
  - "1855-a-data-parallel-compiler-hosted-on-the-gpu"
---

# The Case for TPU-Accelerated Analytical Query Processing

## One-sentence takeaway

Google's NTA runs all 22 TPC-H queries entirely on TPUs by compiling each relational plan into a statically shaped JAX/XLA program with Pallas kernels, giving every intermediate a statistics-derived "guarded capacity" and choosing dense TensorCore or gather/scatter SparseCore versions of each operator, and it beats DuckDB by a geometric-mean 7.0× on one chip at SF100 and 68.6× on 16 TPUs at SF1000.

## Why it matters here

This is array-language engineering at full scale. It shows how to turn data-dependent relational operators (joins, group-by, distinct, top-k) into fixed-shape, branch-free array programs, which is exactly the problem an ano compiler faces when it targets GPUs or other accelerators that want static shapes. The guarded-capacity idea is the reusable part: pick a bound from statistics, have each operator report when it overflows, and recompile with a bigger bound only if that happens. It's a clean way to get static shapes without padding everything to the worst case.

## Key ideas

- **The mismatch.** TensorCores run a statically scheduled VLIW pipeline with software-managed VMEM, filled only by DMAs whose sizes and addresses are fixed at compile time. Naive relational code therefore means worst-case padding and HBM stalls on irregular gathers and scatters. SparseCores handle index streams but need explicit DMA staging and synchronization through shared CMEM.
- **Guarded capacities.** Catalog statistics bound each output: a join's bound follows its probe input, a group-by takes min(input, product of NDVs), and ORDER BY … LIMIT K takes min(input, K). Each operator writes at most its bound and raises an overflow flag. The host accepts a result only if no flag is set, and otherwise raises the violated bound, re-plans and recompiles. That never happened in the evaluated workloads.
- **Dense rewrites of sparse work.** Sorted-Hash Lookup Join sorts hashed composite keys and checks each candidate against the packed key instead of building sparse hash tables. Small-domain aggregation and distinct become one-hot masks reduced on the matrix units (for example, one-hot matmul up to K = 256, then segment reduction).
- **Calibrated selection.** A cost model calibrated on TPU v5p picks each operator's implementation. It uses SparseCore gather for primary-key/foreign-key joins that have a prebuilt index and Sorted-Hash Lookup when none exists, prefers SparseCore over the vector unit for indexed joins above 50K probe rows, and allows one-hot distinct only up to 128 slots and VMEM sort only up to 8 MiB of active payload.
- **Where it wins and stalls.** The biggest gains come from queries that collapse the working set early: Q13 reads dictionary tokens straight into a 61-bin count. Scan-heavy queries such as Q1, Q5, Q7 and Q8 stay bound by HBM bandwidth at 3.1–3.7×, and substring-heavy Q16 gains least at 1.9×. Variable-length strings are left as future work.

## Caveats

It's a vendor case study on vendor hardware, with TPC-H only, against single-node CPU DuckDB. Cost and energy comparisons aren't the headline, and the multi-TPU SF1000 run is set against one CPU baseline. The capacities depend on good catalog statistics, and the recompile-on-overflow path was never exercised, so its cost on skewed or adversarial data is unknown. Strings and other variable-width data are the stated weak spot, and the hand-tuned Pallas kernels are a real engineering cost, which the authors suggest coding agents could take on.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.22673
- PDF: https://arxiv.org/pdf/2610.22673
