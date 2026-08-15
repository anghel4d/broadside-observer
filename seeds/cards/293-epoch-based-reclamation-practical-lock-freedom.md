---
title: "Epoch-Based Reclamation / Practical lock-freedom"
authors:
  - "Keir Fraser"
year: 2004
venue: "Cambridge UCAM-CL-TR-579"
arxiv: null
doi: null
source: "https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-579.pdf"
topics:
  - memory-allocation
  - reclamation
  - lockfree
seed_rank: 293
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: memory-reclamation
cites:
  - title: "Read-Copy Update"
    url: "https://www.rdrop.com/~paulmck/RCU/"
    year: 1998
    arxiv: null
    doi: null
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/TPDS.2004.8"
  - title: "DEBRA: Distributed Epoch-Based Reclamation"
    url: "https://doi.org/10.1145/2767386.2767436"
    year: 2015
    arxiv: null
    doi: "10.1145/2767386.2767436"
  - title: "Userspace RCU Library (liburcu)"
    url: "https://liburcu.org/"
    year: 2009
    arxiv: null
    doi: null
see:
  - "304-read-copy-update"
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "330-debra-distributed-epoch-based-reclamation"
  - "466-userspace-rcu-library-liburcu"
---

# Epoch-Based Reclamation / Practical lock-freedom

## One-sentence takeaway

Fraser's thesis introduces epoch-based reclamation: threads publish the epoch they are in, and a retired node is freed only after every thread has left that epoch — the Crossbeam / userspace-RCU mental model.

## Why it matters here

This is the cheap reclaimer ano will actually ship first. Hazard pointers bound unreclaimed junk; epochs bound read-side cost. Know the grace-period stall before you advertise wait-freedom.

## Key ideas

- Practical lock-freedom (the thesis title) is the engineering program: design lock-free data structures that a working programmer can implement, including the reclaimer.
- An epoch is a global counter. Entering a read-side critical section snapshots it; retiring a node timestamps it. The node is safe to free once the global epoch has advanced past every snapshot that could have seen it.
- Read-side is a store to a per-thread epoch slot — far cheaper than a hazard-pointer scan — at the cost of a grace period if one thread sleeps in a section.
- DEBRA (2015) and liburcu are the distributed / production descendants.
- UCAM-CL-TR-579, February 2004. Canonical PDF on cl.cam.ac.uk.

## Caveats

## Links

- Tech report: https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-579.pdf
