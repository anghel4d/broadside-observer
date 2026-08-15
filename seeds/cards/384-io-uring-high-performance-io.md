---
title: "Efficient IO with io_uring"
authors:
  - "Jens Axboe"
year: 2019
venue: "kernel.dk"
arxiv: null
doi: null
source: "https://kernel.dk/io_uring.pdf"
topics:
  - async-io
  - os
seed_rank: 384
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 8
cites:
  - title: "StarPU: a unified platform for task scheduling on heterogeneous multicore architectures"
    url: "https://doi.org/10.1002/cpe.1631"
    year: 2011
    arxiv: null
    doi: "10.1002/cpe.1631"
see:
  - "397-starpu-a-unified-platform-for-task-scheduling-on-heterogeneo"
---

# Efficient IO with io_uring

## One-sentence takeaway

io_uring is a pair of mmap’d SQ/CQ rings so user space can submit and reap I/O without a syscall per operation, replacing `aio`/`epoll` for high-rate disk and network work.

## Why it matters here

Anoptic asset streaming (textures, clips, nav chunks) should not `read()` on the sim thread or pay `io_submit` per request. Axboe’s ring is the Linux path: batch SQEs, let the kernel complete into the CQ, wake a streaming worker. That is how you keep GRID COMMAND’s I/O off the frame budget.

## Key ideas

- Shared submission and completion queues in user-mapped memory; `io_uring_enter` is only needed to kick the kernel or wait, and even that can be skipped with `SQPOLL`.
- One API for files, sockets, timeouts, linked operations (`IOSQE_IO_LINK`), and fixed buffers/files to skip per-I/O mapping.
- Completions are ordered per-SQE chain, not globally — the application owns concurrency.
- Designed so polling + registered buffers approach kernel-bypass throughput without leaving the kernel.

## Caveats

## Links

- PDF: https://kernel.dk/io_uring.pdf
- Lord of the io_uring: https://unixism.net/loti/
