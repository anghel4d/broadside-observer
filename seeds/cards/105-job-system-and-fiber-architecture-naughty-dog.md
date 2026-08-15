---
title: Job System and Fiber Architecture (Naughty Dog)
authors:
- Christian Gyrling
year: 2015
venue: GDC
arxiv: null
doi: null
source: https://www.gdcvault.com/play/1022186/Parallelizing-the-Naughty-Dog-Engine
topics:
- job-system
- engine
seed_rank: 105
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: engines
relevance_score: 9
cites:
- title: Scheduling Multithreaded Computations by Work Stealing
  url: https://doi.org/10.1145/324133.324234
  year: 1999
  arxiv: null
  doi: 10.1145/324133.324234
- title: Intel Threading Building Blocks
  url: https://www.threadingbuildingblocks.org/
  year: 2007
  arxiv: null
  doi: null
- title: Parallelizing the Naughty Dog Engine Using Fibers
  url: https://www.gdcvault.com/play/1022186/Parallelizing-the-Naughty-Dog-Engine
  year: 2015
  arxiv: null
  doi: null
see:
- "200-scheduling-multithreaded-computations-by-work-stealing"
- "403-intel-threading-building-blocks"
- "106-parallelizing-the-naughty-dog-engine-using-fibers"
---

# Job System and Fiber Architecture (Naughty Dog)

## One-sentence takeaway

Naughty Dog's PS4 job system runs every job inside a fiber so `WaitForCounter` parks the fiber — stack and all — while the worker thread immediately runs another job.

## Why it matters here

Anoptic / ano tick distribution wants this exact API: gameplay systems with deep call stacks can kick child work (raycasts, animation slices) and yield without pinning an OS thread for the rest of the frame.

## Key ideas

- Six worker threads, each locked to a PS4 core. The thread is the execution unit; the fiber is the context (user stack + saved registers). Cooperative only: switches are explicit `sceFiberSwitch`.
- Fiber pool is 160: 128 fibers with 64 KiB stacks and 32 with 512 KiB stacks. Three priority queues (low / normal / high). No work stealing.
- The only job-to-job sync is an atomic counter. `RunJobs(decls, n, &counter)` then `WaitForCounter(counter, 0)` moves the caller onto that counter's wait list; completion decrements and wakes waiters.
- Design goals were the opposite of the PS3 SPU job list: any code can be a job, jobs may yield mid-function (player update kicks raycasts and waits), the user never allocates job storage, one sync primitive. Ease of use beat peak throughput.
- The Last of Us Remastered ran ~800–1000 jobs per frame. Object updates, animation, raycasts, and command-buffer generation are jobs; sockets / file I/O stay on dedicated system threads that only post jobs.

## Caveats

## Links

- URL: https://www.gdcvault.com/play/1022186/Parallelizing-the-Naughty-Dog-Engine
- Slides: https://media.gdcvault.com/gdc2015/presentations/Gyrling_Christian_Parallelizing_The_Naughty.pdf
