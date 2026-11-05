---
title: "Simple Generational Garbage Collection and Fast Allocation"
authors:
  - "Andrew W. Appel"
year: 1989
venue: "Software: Practice and Experience 19(2):171–183, February 1989"
arxiv: null
doi: "10.1002/spe.4380190206"
source: "https://www.cs.princeton.edu/~appel/papers/143.pdf"
topics:
  - "garbage-collection"
  - "generational"
  - "bump-allocation"
  - "write-barrier"
  - "sml-nj"
seed_rank: 2527
seed_batch: "archive-2026-11-06"
reviewed: "2026-11-06"
pool: "systems"
lineage: memory-reclamation
relevance_score: 9
cites:
  - title: "Simple Generational Garbage Collection and Fast Allocation"
    url: "https://www.cs.princeton.edu/~appel/papers/143.pdf"
    year: 1989
    arxiv: null
    doi: "10.1002/spe.4380190206"
see: ["2490-a-unified-theory-of-garbage-collection", "1364-immix-a-mark-region-garbage-collector-with-space-efficiency-fa", "030-region-based-memory-management"]
---

# Simple Generational Garbage Collection and Fast Allocation

## One-sentence takeaway

Appel packages Ungar-style generations for stock Unix: age-partitioned areas collected newest-first with a remembered set of old→young roots, Cheney copying inside a generation, and a two-instruction bump allocator so fast that allocation — not collection — becomes the bottleneck (~500 lines in SML/NJ, ~5–10% GC overhead).

## Why it matters here

This is the portable "recipe" that made generational GC the default for ML/Lisp without Lisp-machine hardware. Anoptic's arena bump and ano's short-lived query scratch both rest on the same observation Appel sharpens: most records die young, and if stores into old objects are rare you can almost ignore the old heap. His allocation-path obsession (chop instructions out of cons) is exactly the discipline wait-free buses and per-frame arenas need.

## Key ideas

- Generations A₀…Aₙ by age; almost no pointers from older to newer areas unless an assignment created them. Collect Aₙ often; occasionally collect Aᵢ…Aₙ together.
- Contrast Lieberman–Hewitt assignment tables and Moon's ephemeral hardware page marks with Ungar's software remembered set: on a store, if old←young, record the old object as a root. No fetch tax.
- Cheney scan/next inside the chosen generation(s); destination is a contiguous free region so allocation is pointer increment against a limit.
- Fast allocation: keep the allocation pointer in a register; allocate by adding the record size and branching if past the limit — a few instructions, no free-list search.
- Heuristic for asking the OS for more memory when the live/reserved ratio drifts; reported on SML/NJ (~1 word allocated per ~30 instructions executed).

## Caveats

- Assumes mostly-functional mutation rates. High assignment traffic blows up the remembered set and can erase the win (Appel says so for Algol-like languages).
- Not incremental: a full generation copy can pause. For bounded pause you want Baker treadmill / concurrent collectors instead.
- Journal version of the 1988 Princeton tech report; PDF on Appel's site is the readable source.

## Links

- [PDF (Princeton)](https://www.cs.princeton.edu/~appel/papers/143.pdf)
- [PDF (UCSB mirror)](https://sites.cs.ucsb.edu/~ckrintz/racelab/gc/papers/appel88simplegen.pdf)
- [DOI](https://doi.org/10.1002/spe.4380190206)
