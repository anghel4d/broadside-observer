---
title: "A Better x86 Memory Model: x86-TSO"
authors:
  - "Scott Owens"
  - "Susmit Sarkar"
  - "Peter Sewell"
year: 2009
venue: "TPHOLs"
arxiv: null
doi: "10.1007/978-3-642-03359-9_27"
source: "https://doi.org/10.1007/978-3-642-03359-9_27"
topics:
  - memory-model
  - concurrency
seed_rank: 485
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: concurrent-data-structures
cites:
  - title: "How to Make a Multiprocessor Computer That Correctly Executes Multiprocess Programs"
    url: "https://doi.org/10.1109/TC.1979.1675439"
    year: 1979
    doi: "10.1109/TC.1979.1675439"
see:
  - "472-how-to-make-a-multiprocessor-computer-that-correctly-execute"
---

# A Better x86 Memory Model: x86-TSO

## One-sentence takeaway

x86-TSO replaces the unsound x86-CC vendor reading with an operational store-buffer machine (and an equivalent axiomatic TSO) that matches observed Intel/AMD behaviour and is strong enough to program above.

## Why it matters here

This is the usable programmer-facing model for Anoptic C++ atomics on x86: FIFO store buffers, store-forwarding, and MFENCE, not sequential consistency and not causal consistency.

## Key ideas

- Each processor has a FIFO write buffer; a load may read its own buffered store before that store is globally visible, explaining the classic store-buffering litmus (`r1=r2=0`).
- Independent-reads-of-independent-writes (IRIW) is forbidden, matching hardware and SDM rev-29, unlike the earlier IWP/x86-CC reading.
- Locked instructions and LFENCE/SFENCE/MFENCE are modelled; the HOL4 development includes a memevents explorer and a verified checker.
- Extended writeup is UCAM-CL-TR-745; conference version is TPHOLs 2009 LNCS 5674.

## Caveats

## Links

- DOI: [10.1007/978-3-642-03359-9_27](https://doi.org/10.1007/978-3-642-03359-9_27)
- Tech report: https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-745.html
- Author PDF: https://www.cl.cam.ac.uk/~pes20/weakmemory/x86tso-paper.pdf
