---
title: "KDB-X GPU Acceleration v3.0: Same Q Code, Run On Different Hardware"
authors:
  - "Nicholas Sansone"
year: 2026
venue: "KX blog, 13 Nov 2026"
arxiv: null
doi: null
source: "https://kx.com/blog/kdb-x-gpu-acceleration-v3-0-same-q-code-run-on-different-hardware/"
version_reviewed: "web 2026-11-13"
topics:
  - "kdb-q"
  - "array-languages"
  - "gpu-query-execution"
  - "virtual-tables"
  - "as-of-join"
  - "columnar"
  - "data-placement"
seed_rank: 2694
seed_batch: "craft-2026-11-23"
reviewed: "2026-11-23"
pool: "languages"
relevance_score: 8
lineage: array-languages
cites:
  - title: "KDB-X GPU Acceleration v3.0: Same Q Code, Run On Different Hardware"
    url: "https://kx.com/blog/kdb-x-gpu-acceleration-v3-0-same-q-code-run-on-different-hardware/"
    year: 2026
    arxiv: null
    doi: null
---

# KDB-X GPU Acceleration v3.0: Same Q Code, Run On Different Hardware

## One-sentence takeaway

Version 3.0 of KX's GPU module adds virtual GPU tables, so the same qSQL `select ... by ... where` and as-of join run unchanged whether a table lives in host memory or on the GPU; the only device-specific code is moving data with `.gpu.to` / `.gpu.from`.

## Why it matters here

This is the design ano wants: a query is written once and placement is a property of the data binding, not of the query text. Before v3.0, q users had to rewrite GPU queries as functional parse trees (`.gpu.select[T;c;b;a]`) and keep two versions; v3.0 dispatches on the table's type instead. For ano that suggests making "where does this column live" a property of the column/table value that the evaluator dispatches on, with explicit and visible transfers, rather than separate GPU verbs. The as-of join result (100M quotes) is also a reminder that ano's relational joins should keep sorted/partitioned attributes so a device backend can exploit them.

## Key ideas

- **Virtual GPU tables.** `T:.gpu.to t` returns a device-resident table that supports ordinary qSQL; results stay on the device until `.gpu.from`, so a chain of supported operations avoids round trips.
- **One definition, different bindings.** The benchmark defines VWAP, as-of join and correlation once; CPU and GPU runs differ only in which names are bound to device objects.
- **Tensor ops by type dispatch.** For the correlation workload, small wrappers check the argument type (`112h`) and call `.gpu.tensor.*` or the normal q primitive, with `mmu`, `flip`, `avg` and `sqrt` overloaded in `.q`.
- **Reported numbers (H100 vs q with 16 secondary threads; GPU timings include copying results back, exclude the initial upload):** grouped VWAP over 100M trades 680 ms → 47 ms (14.5x); as-of join of 4M trades against 100M quotes 164 ms → 1.77 ms (92.8x); 200x200 correlation over 500k observations 5,388 ms → 12 ms (449x). Results checked equal within about 1e-12.
- **Stated limits:** transfers are explicit and cost time, unsupported operations stay on the CPU, small queries may not benefit, and only the grouped attribute is supported on device (so the benchmark used non-parted tables).

## Caveats

A vendor blog with vendor benchmarks: one warm-up and one timed run, the upload to VRAM excluded, and a CPU baseline with 16 threads. The 449x figure is a matrix-multiply-bound workload, not typical of table queries. KDB-X is closed source, so the dispatch mechanism is described, not shown. Not a research paper.

## Links

- KX blog post: https://kx.com/blog/kdb-x-gpu-acceleration-v3-0-same-q-code-run-on-different-hardware/
