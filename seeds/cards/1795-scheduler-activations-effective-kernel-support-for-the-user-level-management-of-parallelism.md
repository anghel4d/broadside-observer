---
title: "Scheduler Activations: Effective Kernel Support for the User-Level Management of Parallelism"
authors:
  - "Thomas E. Anderson"
  - "Brian N. Bershad"
  - "Edward D. Lazowska"
  - "Henry M. Levy"
year: 1991
venue: "SOSP / ACM TOCS"
arxiv: null
doi: "10.1145/121132.121151"
source: "https://www2.eecs.berkeley.edu/Pubs/TechRpts/1991/CSD-91-650.pdf"
topics:
  - scheduler-activations
  - user-level-threads
  - operating-systems
  - parallelism
seed_rank: 1795
seed_batch: "archive-2026-09-12"
reviewed: "2026-09-12"
pool: "systems"
relevance_score: 9
lineage: scheduler-activations
cites:
  - title: "Exokernel: An Operating System Architecture for Application-Level Resource Management"
    url: "https://pdos.csail.mit.edu/6.828/2012/readings/engler95exokernel.pdf"
    year: 1995
    arxiv: null
    doi: "10.1145/224056.224076"
see:
  - "1796-exokernel-an-operating-system-architecture-for-application-level-resource-management"
  - "1788-fully-read-write-fence-free-work-stealing-with-multiplicity"
  - "1789-data-structures-for-task-based-priority-scheduling"
---

# Scheduler Activations: Effective Kernel Support for the User-Level Management of Parallelism

## One-sentence takeaway

Scheduler activations give user-level thread systems kernel events so the process can schedule its own parallelism without losing correctness when kernel threads block.

## Why it matters here

Anoptic’s job system and lock-free workers live in the same design space — policy in user space, kernel owns processors and blocking. Complements fence-free work stealing 1788 and priority-task structures 1789; distinct from Exokernel 1796.

## Key ideas

- **Upcalls, not silent blocking.** The kernel notifies the user-level scheduler on processor allocation, blocked I/O, and preemption so the process can reschedule.
- **Avoid N:1 and 1:1 traps.** Pure user threads stall the process on a kernel block; pure kernel threads make every switch a syscall. Activations keep an M:N runtime honest.
- **Application-controlled prioritization.** Once the kernel has handed over a processor, the process decides which user thread runs.
- **Topaz/Firefly measurements.** The paper is not only an interface: it reports a working user-level thread system on a multiprocessor workstation. Ancestor of later M:N runtimes.

## Caveats

Berkeley TR is a scanned image PDF (open this pass); ACM HTML-walled from radar egress. Not a drop-in for modern thread pools — activations are the *kernel event* story, not a work-stealing deque. Distinct from Exokernel 1796 (this mint is the thread/upcall paper).

## Links

- Berkeley TR PDF: https://www2.eecs.berkeley.edu/Pubs/TechRpts/1991/CSD-91-650.pdf
- DOI: https://doi.org/10.1145/121132.121151
