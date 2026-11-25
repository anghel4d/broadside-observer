---
title: "Blocks with ownership: a novel approach to CPU and GPU memory in C++"
authors:
  - "Branimir Karadžić"
year: 2026
venue: "Branimir Karadžić's blog, 16 Nov 2026 (bx / bgfx)"
arxiv: null
doi: null
source: "https://bkaradzic.github.io/posts/memory-management/"
version_reviewed: "web 2026-11-16"
topics:
  - "memory-allocators"
  - "composable-allocators"
  - "gpu-suballocation"
  - "tlsf"
  - "ownership"
  - "leak-tracking"
  - "c++"
seed_rank: 2716
seed_batch: "craft-2026-11-25"
reviewed: "2026-11-25"
pool: "engines"
relevance_score: 8
lineage: memory-allocators
cites:
  - title: "Blocks with ownership: a novel approach to CPU and GPU memory in C++"
    url: "https://bkaradzic.github.io/posts/memory-management/"
    year: 2026
    arxiv: null
    doi: null
  - title: "std::allocator Is to Allocation what std::vector Is to Vexation (CppCon 2015)"
    url: "https://www.youtube.com/watch?v=LIb3L4vKZ7U"
    year: 2015
    arxiv: null
    doi: null
  - title: "Composing High-Performance Memory Allocators"
    url: "https://doi.org/10.1145/378795.378821"
    year: 2001
    arxiv: null
    doi: "10.1145/378795.378821"
  - title: "Magazines and Vmem: Extending the Slab Allocator to Many CPUs and Arbitrary Resources"
    url: "https://www.usenix.org/legacy/event/usenix01/full_papers/bonwick/bonwick.pdf"
    year: 2001
    arxiv: null
    doi: null
  - title: "TLSF: a New Dynamic Memory Allocator for Real-Time Systems"
    url: "https://web.archive.org/web/20230512151610/http://www.gii.upv.es/tlsf/files/ecrts04_tlsf.pdf"
    year: 2004
    arxiv: null
    doi: null
see:
  - "438-composing-high-performance-memory-allocators"
  - "199-magazines-and-vmem-extending-the-slab-allocator-to-many-cpus"
---

# Blocks with ownership: a novel approach to CPU and GPU memory in C++

## One-sentence takeaway

bx (the library under bgfx) makes every allocation a 24-byte, move-only, `[[nodiscard]]` `Blk` that carries its size, alignment, an 8-bit handle of the allocator that made it, the last operation, and the allocator's own bookkeeping, so the same composable allocators (TLSF, first fit, frame ring, thread caches) sub-allocate RAM and `VkDeviceMemory`/`ID3D12Heap` alike, with no headers written into the memory.

## Why it matters here

Anoptic is built around arenas and explicit memory, and it has to manage GPU heaps as well as CPU memory. This is a shipped, benchmarked design that unifies the two: GPU memory is just a slab whose `cpuAccessible` bit is false, so the allocator keeps all metadata in the block, and the same TLSF that serves CPU allocations sub-allocates device memory (bgfx's D3D12 and Vulkan renderers do this today). The ownership rules translate well to C23 discipline even without C++ move semantics: every mutating call consumes the block and returns the new one, an invalid block says *why* (failed, too large, freed...), and in tracking builds a block that dies still owning memory reports its allocation site. A one-byte allocator handle instead of an allocator pointer also shrinks every container.

## Key ideas

- **Block layout.** 64-bit `ptr` (a pointer, or an offset when the memory is on the GPU), 40-bit size (up to 1 TiB), log2 alignment, a CPU-accessible bit, a 3-bit last-operation code (no-op, alias, allocate, free, grow, realign, truncate), an 8-bit allocator handle, 32 bits of allocator bookkeeping and a 16-bit slot index for routing inside composed allocators.
- **Unique ownership without RAII frees.** No copy, move invalidates the source, mutating functions take `Blk&&` and return the result (a failed resize returns the original, marked no-op), and nothing is freed at scope exit, so `Blk` stays trivially relocatable. Non-owning aliases must be asked for explicitly.
- **One entry point.** `realloc(blk, size, alignment)`: an invalid block in means allocate, size 0 means free, otherwise resize; `try*`, checking and `Unchecked` wrappers sit on top. A pointer-only API stores the `Blk` in a header only where requested.
- **Composable parts, no virtuals.** Memory sources (OS pages, reserve-and-commit, inline fixed capacity), region managers (first fit, bit array, TLSF, frame ring, double-ended stack), composition (threshold, overflow, more-core), threading (mutex, thread-local, Bonwick-style magazine thread cache), plus secure-clear and debug allocators (stats, fill patterns, guard-page stomp).
- **Same allocators on GPU heaps.** Each device heap is `addSlab`'d with its index in the upper bits of `ptr`; TLSF keeps free-list state in the block. On 256 allocs + 256 frees over a 256 MiB virtual heap: bx TLSF 25.6 µs, VMA 32.1 µs, D3D12MA 31.4 µs.
- **General heap from the same blocks.** Throughput, footprint and balanced modes; on mimalloc-bench the balanced heap scores 79.2 overall (mimalloc 1.8.2 85.9, snmalloc 79.2, rpmalloc 76.7, glibc 70.6, jemalloc 69.0) and is 1.37× faster than glibc.

## Caveats

An author's own write-up of his library; all benchmarks are his, run on his machines, and the post itself notes the rpmalloc benchmark is a synthetic stress test. The "novel" claim is about the combination (block as single owner, allocator in the block, one allocator family for CPU and GPU); every piece has precedent (Alexandrescu 2015, Vmalloc, Heap Layers, magazines, TLSF, VMA virtual blocks). 256 live allocators per process is a hard limit, and an allocator must outlive every block it returned because handles are reused. The ownership guarantees rely on C++ move semantics; a C port would only get them through conventions or tooling. The code itself was not read.

## Links

- Post: https://bkaradzic.github.io/posts/memory-management/
- Archived copy: https://web.archive.org/web/20261117114145/https://bkaradzic.github.io/posts/memory-management/
- bx library: https://github.com/bkaradzic/bx
- Found via Graphics Programming Weekly 464: https://www.jendrikillner.com/post/graphics-programming-weekly-issue-464/
