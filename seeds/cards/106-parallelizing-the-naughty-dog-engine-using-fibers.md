---
title: Parallelizing the Naughty Dog Engine Using Fibers
authors:
- Christian Gyrling
year: 2015
venue: GDC
arxiv: null
doi: null
source: https://www.gdcvault.com/play/1022186/Parallelizing-the-Naughty-Dog-Engine
topics:
- job-system
seed_rank: 106
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: engines
relevance_score: 9
cites:
- title: Job System and Fiber Architecture (Naughty Dog)
  url: https://www.gdcvault.com/play/1022186/Parallelizing-the-Naughty-Dog-Engine
  year: 2015
  arxiv: null
  doi: null
- title: Scheduling Multithreaded Computations by Work Stealing
  url: https://doi.org/10.1145/324133.324234
  year: 1999
  arxiv: null
  doi: 10.1145/324133.324234
- title: Dynamic Circular Work-Stealing Deque
  url: https://doi.org/10.1145/1073970.1073974
  year: 2005
  arxiv: null
  doi: 10.1145/1073970.1073974
see:
- "105-job-system-and-fiber-architecture-naughty-dog"
- "200-scheduling-multithreaded-computations-by-work-stealing"
- "291-dynamic-circular-work-stealing-deque"
---

# Parallelizing the Naughty Dog Engine Using Fibers

## One-sentence takeaway

To hit 60 fps on The Last of Us Remastered, Naughty Dog jobified every gameplay update onto fibers, then overlapped game logic of frame N with render of frame N−1 so six locked cores could absorb ~100 ms of work inside a 16.66 ms budget.

## Why it matters here

Anoptic's frame graph is the same problem: a fiber wait must not stall a worker, TLS cannot be cached across a yield, and filling cores means pipelining systems across frames rather than hoping one critical path shrinks.

## Key ideas

- Fibers vs threads: a fiber switch is register + stack-pointer save/restore (`sceFiberSwitch`), not a kernel context switch. Jobs keep their real C++ call stack; you do not rewrite updates as state machines.
- Wait path: `WaitForCounter` parks the current fiber on the counter's wait list, pulls a fresh fiber from the 160-fiber pool, and runs the next queued job on the same worker. When the counter hits zero the waiter is resumed — possibly on a different worker.
- Because fibers migrate, OS mutexes / condvars / TLS are illegal. Sync is atomics plus a job mutex that sleeps the fiber instead of spinning. TLS must live in a separate TU so Clang cannot cache the TLS address across a yield.
- TBB-style systems either run jobs to completion, nest (so the waiter cannot resume until the nested job finishes), or eat a thread context switch. Fibers do none of those.
- After jobifying objects and command buffers they were still ~25 ms CPU-bound with holes on every core. The ship path was a feed-forward pipeline: game logic and render/command-buffer setup of different frames in parallel, plus careful memory lifetimes across the overlap.

## Caveats

## Links

- URL: https://www.gdcvault.com/play/1022186/Parallelizing-the-Naughty-Dog-Engine
- Slides: https://media.gdcvault.com/gdc2015/presentations/Gyrling_Christian_Parallelizing_The_Naughty.pdf
