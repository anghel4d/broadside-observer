# Lineage: `memory-allocators`

**Charter.** Size-class / slab / multipool dynamic allocation: from kernel object caches and classical DSA taxonomy, through magazine/thread-cache and per-processor heaps, to industrial concurrent mallocs (jemalloc, TCMalloc, snmalloc, mimalloc, …) and allocator-policy cousins (Lakos local/multipool, Heap Layers). One coherent thread — not arenas/bump-only practice, and not safe-memory-reclamation.

**Slug:** `memory-allocators`  
**seed_batch (mint wave):** `lineage-memory-allocators-2026-08-13`  
**Number block:** 581–620 (minted 581–591)

## Ordered spine

| Year | Card | Role in thread |
|-----:|------|----------------|
| 1988 | `581-design-of-a-general-purpose-memory-allocator-for-the-4-3bsd` | BSD power-of-two kernel malloc (size-class precursor) |
| 1994 | `259-the-slab-allocator-an-object-caching-kernel-memory-allocator` | Slab object-caching kernel allocator |
| 1995 | `382-dynamic-storage-allocation-a-survey-and-critical-review` | DSA survey & fragmentation taxonomy |
| 2000 | `377-hoard-a-scalable-memory-allocator-for-multithreaded-applicat` | Scalable per-processor heaps / blowup bound |
| 2000 | `582-a-memory-allocator-dlmalloc` | Lea segregated-fit userspace baseline |
| 2001 | `583-composing-high-performance-memory-allocators` | Composable allocator layers |
| 2001 | `256-magazines-and-vmem-extending-the-slab-allocator-to-many-cpus` | Per-CPU magazines + vmem |
| 2002 | `584-reconsidering-custom-memory-allocation` | Custom vs general heaps; reaps |
| 2004 | `585-scalable-lock-free-dynamic-memory-allocation` | Lock-free size-class malloc |
| 2004 | `442-an-efficient-memory-allocator-for-network-processors-and-mul` | O(1) two-level segregated fit (realtime) |
| 2006 | `586-scalable-locality-conscious-multithreaded-memory-allocatio` | Sync-free local path + remote free lists |
| 2006 | `364-a-scalable-concurrent-malloc-3-implementation-for-freebsd-je` | Multi-arena industrial size-class heap |
| 2006 | `488-diehard-probabilistic-memory-safety-for-unsafe-languages` | Randomized/replicated safety heap |
| 2007 | `587-tcmalloc-thread-caching-malloc` | Thread-caching industrial size-class heap |
| 2007 | `588-slub-the-unqueued-slab-allocator` | Linux unqueued slab successor |
| 2013 | `252-local-memory-allocators-in-large-scale-c-lakos-allocator-mod` | Local/multipool allocator policy (cousin) |
| 2015 | `412-supermalloc-a-super-fast-multithreaded-malloc-for-64-bit-mac` | 64-bit multithreaded size-class malloc |
| 2015 | `589-fast-multicore-scalable-low-fragmentation-memory-allocatio` | Virtual spans + scalable global backend |
| 2017 | `590-rpmalloc-lock-free-thread-caching-size-class-allocator` | Embeddable lock-free size-class allocator |
| 2019 | `399-mesh-compacting-memory-management-for-c-c-applications` | Page-aliased compaction |
| 2019 | `401-snmalloc-a-message-passing-allocator` | Message-passing remote frees |
| 2019 | `012-mimalloc-free-list-sharding-in-action` | Free-list sharding (Anoptic global heap) |
| 2020 | `328-learning-slab-classes-to-alleviate-memory-holes-in-memcached` | Learned slab class sizing |
| 2021 | `314-allocator-aware-aa-software-lakos-et-al` | Allocator-aware vocabulary types (cousin) |
| 2021 | `591-beyond-malloc-efficiency-to-fleet-efficiency-a-hugepage-awa` | Hugepage-aware TCMalloc backend |
| 2024 | `286-starmalloc-a-formally-verified-concurrent-performant-and-sec` | Verified concurrent security-oriented malloc |

## Narrative

1. **Taxonomy & precursors.** Wilson et al. (1995) map freelists, buddy systems, and segregated fits; McKusick & Karels (1988) show power-of-two kernel size classes in 4.3BSD.
2. **Slab caches.** Bonwick (1994) makes object-caching slabs the kernel classic; Magazines & Vmem (2001) add per-CPU magazines and a general resource arena — the multipool pattern games keep rediscovering.
3. **Userspace size-class baseline.** Lea’s dlmalloc (notes ~2000) is the segregated-fit measuring stick; Berger et al. Heap Layers (2001) and Reconsidering Custom Allocation (2002) turn allocator *policy* into an experimental (and engineering) object — with reaps as the justified region/heap hybrid.
4. **Scalable multipools.** Hoard (2000) bounds blowup with per-processor heaps; Michael (2004) lock-frees that structure; Streamflow (2006) makes local paths sync-free and remote frees lock-free; TLSF (2004) gives O(1) segregated fit for realtime.
5. **Industrial heaps.** jemalloc (2006) and TCMalloc (~2007) ship arena/thread-cache size-class designs at OS and warehouse scale; Linux SLUB (2007) simplifies Bonwick-descended kernel slabs. SuperMalloc (2015) and scalloc (2015) push 64-bit VA / virtual-span backends; rpmalloc (2017) embeds the pattern for games.
6. **Living successors.** Mesh (2019) compactifies via page aliasing; snmalloc (2019) message-passes remote frees; mimalloc (2019) shards freelists (Anoptic’s global heap). Temeraire (2021) optimizes TCMalloc for hugepage fleet efficiency; StarMalloc (2024) targets verified secure concurrency; learned slab classes (2020) close the loop on size-class *configuration*.
7. **Policy cousins (in-lineage).** Lakos local/multipool (2013) and Allocator-Aware software (2021) are not malloc papers, but they are how large C++ codebases *consume* size-class/multipool heaps — cited into this thread rather than forked into a separate AA-only lineage.

## Adjacent (not tagged `lineage: memory-allocators`)

Engine bump/arena practice and GPU/VMA pools stay nearby but on other threads: Bitsquid custom allocation, Molecular Matters series, per-frame arenas, Vulkan Memory Allocator, object-pool pattern writeups. Cite them from craft notes; do not dilute this slug.

## Open frontiers / watch next

- Per-CPU / RSEQ frontends vs classical magazines (modern TCMalloc).
- Hugepage- and CXL-aware backends beyond Temeraire.
- Verified or hardware-assisted concurrent mallocs (StarMalloc line).
- Size-class autodetection / workload-adaptive bins (beyond Memcached slab learning).
- How Lakos-style AA propagation should bind to mimalloc arenas + frame regions in Anoptic.

## Broadside cards in thread

- `581-design-of-a-general-purpose-memory-allocator-for-the-4-3bsd` — Design of a General Purpose Memory Allocator for the 4.3BSD UNIX Kernel
- `259-the-slab-allocator-an-object-caching-kernel-memory-allocator` — The Slab Allocator: An Object-Caching Kernel Memory Allocator
- `382-dynamic-storage-allocation-a-survey-and-critical-review` — Dynamic Storage Allocation: A Survey and Critical Review
- `377-hoard-a-scalable-memory-allocator-for-multithreaded-applicat` — Hoard: A Scalable Memory Allocator for Multithreaded Applications
- `582-a-memory-allocator-dlmalloc` — A Memory Allocator (dlmalloc)
- `583-composing-high-performance-memory-allocators` — Composing High-Performance Memory Allocators
- `256-magazines-and-vmem-extending-the-slab-allocator-to-many-cpus` — Magazines and Vmem: Extending the Slab Allocator to Many CPUs and Arbitrary Resources
- `584-reconsidering-custom-memory-allocation` — Reconsidering Custom Memory Allocation
- `585-scalable-lock-free-dynamic-memory-allocation` — Scalable Lock-Free Dynamic Memory Allocation
- `442-an-efficient-memory-allocator-for-network-processors-and-mul` — An Efficient Memory Allocator for Network Processors and Multiprocessors (TLSF)
- `586-scalable-locality-conscious-multithreaded-memory-allocatio` — Scalable Locality-Conscious Multithreaded Memory Allocation (Streamflow)
- `364-a-scalable-concurrent-malloc-3-implementation-for-freebsd-je` — A Scalable Concurrent malloc(3) Implementation for FreeBSD (jemalloc)
- `488-diehard-probabilistic-memory-safety-for-unsafe-languages` — DieHard: Probabilistic Memory Safety for Unsafe Languages
- `587-tcmalloc-thread-caching-malloc` — TCMalloc: Thread-Caching Malloc
- `588-slub-the-unqueued-slab-allocator` — SLUB: The Unqueued Slab Allocator
- `252-local-memory-allocators-in-large-scale-c-lakos-allocator-mod` — Local Memory Allocators in Large-Scale C++ (Lakos allocator model)
- `412-supermalloc-a-super-fast-multithreaded-malloc-for-64-bit-mac` — SuperMalloc: A Super Fast Multithreaded malloc for 64-bit Machines
- `589-fast-multicore-scalable-low-fragmentation-memory-allocatio` — Fast, Multicore-Scalable, Low-Fragmentation Memory Allocation through Large Virtual Memory and Global Data Structures (scalloc)
- `590-rpmalloc-lock-free-thread-caching-size-class-allocator` — rpmalloc: Lock-Free Thread-Caching Size-Class Allocator
- `399-mesh-compacting-memory-management-for-c-c-applications` — Mesh: Compacting Memory Management for C/C++ Applications
- `401-snmalloc-a-message-passing-allocator` — snmalloc: A Message Passing Allocator
- `012-mimalloc-free-list-sharding-in-action` — mimalloc: Free List Sharding in Action
- `328-learning-slab-classes-to-alleviate-memory-holes-in-memcached` — Learning Slab Classes to Alleviate Memory Holes in Memcached
- `314-allocator-aware-aa-software-lakos-et-al` — Allocator-Aware (AA) Software (Lakos et al.)
- `591-beyond-malloc-efficiency-to-fleet-efficiency-a-hugepage-awa` — Beyond malloc efficiency to fleet efficiency: a hugepage-aware memory allocator (Temeraire)
- `286-starmalloc-a-formally-verified-concurrent-performant-and-sec` — StarMalloc: A Formally Verified, Concurrent, Performant, and Security-Oriented Memory Allocator
