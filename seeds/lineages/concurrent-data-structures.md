# Lineage: concurrent-data-structures

Charter: umbrella thread for **concurrent data structures** — correctness (linearizability / wait-freedom / memory models) plus the living epistemology of concurrent FIFO queues from Michael & Scott’s 1996 lock-free MS-queue through wait-free helping, basket/elimination parallelism, Dmitry Vyukov’s industrial MPMC/MPSC rings, LMAX Disruptor mechanical sympathy, FAA/ring scalability (LCRQ → SCQ → LPRQ → wCQ), and modern polylog/verified wait-free designs still cited today. Memory reclamation (Michael 2002 / hazard pointers 2004) is cited as an inseparable dependency but kept on the reclamation thread — do not steal its `lineage`.

## Ordered spine

1. **Problem / correctness frame** — Concurrent FIFO with linearizability (Herlihy & Wing 1990) and progress taxonomy (Herlihy wait-freedom 1991). Queues are the event bus / job mailbox primitive for engines and Anoptic.
2. **Michael & Scott 1996** — Canonical lock-free linked MPMC queue (and two-lock blocking cousin). Root card of this thread.
3. **Early scalability successors** — Tsigas & Zhang 2001 (bounded CAS array); Ladan-Mozes & Shavit 2004 optimistic doubly-linked stores; Moir et al. 2005 elimination backoff; Hoffman/Shalev/Shavit 2007 Baskets Queue.
4. **Practical wait-freedom** — Kogan & Petrank 2011 wait-free MPMC via helping; 2012 fast-path/slow-path methodology that makes wait-freedom deployable.
5. **Industrial mutex-free rings** — Vyukov bounded MPMC and MPSC (1024cores, ~2010); LMAX Disruptor 2011 (SPSC/multicast ring, mechanical sympathy); cameron314 `concurrentqueue` 2014 as widely shipped MPMC engineering.
6. **FAA / ring academic line** — Morrison & Afek LCRQ 2013; Yang & Mellor-Crummey WFQueue 2016; Ramalhete & Correia FAAArrayQueue 2016; Nikolaev SCQ/LSCQ 2019; Romanov & Koval LPRQ 2023 (CAS2-free LCRQ).
7. **Modern wait-free / specialized** — Jiffy 2020 (wait-free MPSC); wCQ 2022 (wait-free SCQ with bounded memory); polylog step-complexity wait-free queue 2023; No Cords Attached 2025 (coordination-free framing). Scherer/Lea/Scott 2006 synchronous hand-off queues sit as a practical Java/`java.util.concurrent` cousin.

## Broadside cards in this thread

| Stem | Year | Role |
|------|------|------|
| `032-michael-scott-lock-free-queue` | 1996 | Root MS-queue |
| `501-tsigas-zhang-non-blocking-concurrent-fifo-queue` | 2001 | Early scalable CAS array FIFO |
| `502-ladan-mozes-shavit-optimistic-lock-free-fifo-queue` | 2004 | Optimistic doubly-linked MS alternative |
| `503-moir-elimination-backoff-lock-free-fifo-queues` | 2005 | Elimination backoff for FIFO |
| `438-scalable-synchronous-queues` | 2006 | Synchronous hand-off queues |
| `504-hoffman-shalev-shavit-baskets-queue` | 2007 | Baskets Queue |
| `508-vyukov-bounded-mpmc-queue` | 2010 | Vyukov bounded MPMC |
| `509-vyukov-non-intrusive-mpsc-queue` | 2010 | Vyukov MPSC |
| `505-kogan-petrank-wait-free-queues-multiple-enqueuers-dequeuers` | 2011 | Practical wait-free MPMC |
| `427-lmax-disruptor` | 2011 | LMAX Disruptor |
| `506-kogan-petrank-fast-path-slow-path-wait-free` | 2012 | Fast-path/slow-path methodology |
| `507-morrison-afek-lcrq-fast-concurrent-queues-x86` | 2013 | LCRQ |
| `413-cameron314-concurrentqueue-mpmc` | 2014 | cameron314 ConcurrentQueue |
| `510-yang-mellor-crummey-wait-free-queue-fetch-and-add` | 2016 | YMC/WFQueue |
| `511-ramalhete-correia-faaarrayqueue` | 2016 | FAAArrayQueue |
| `512-nikolaev-scq-scalable-portable-lock-free-fifo` | 2019 | SCQ / LSCQ |
| `327-jiffy-a-fast-memory-efficient-wait-free-multi-producers-sing` | 2020 | Jiffy wait-free MPSC |
| `313-wcq-a-fast-wait-free-queue-with-bounded-memory-usage` | 2022 | wCQ |
| `513-romanov-koval-lprq-portable-lcrq` | 2023 | LPRQ |
| `289-a-wait-free-queue-with-polylogarithmic-step-complexity` | 2023 | Polylog step-complexity wait-free queue |
| `276-no-cords-attached-coordination-free-concurrent-lock-free-que` | 2025 | Coordination-free lock-free queues |

### Correctness & memory-model spine (same lineage)

| Stem | Year | Role |
|------|------|------|
| `722-how-to-make-a-multiprocessor-computer-that-correctly-execute` | 1979 | Sequential consistency root (Lamport) |
| `260-linearizability-a-correctness-condition-for-concurrent-objec` | 1990 | Linearizability |
| `037-wait-free-synchronization` | 1991 | Progress taxonomy / wait-freedom |
| `497-release-consistency-versus-sequential-consistency` | 1993 | RC vs SC foil |
| `489-memory-ordering-in-modern-microprocessors` | 2005 | Practitioner memory-ordering |
| `736-a-better-x86-memory-model-x86-tso` | 2010 | x86-TSO |
| `141-the-art-of-multiprocessor-programming` | 2008 | Textbook carrier |

### Essential cites outside this lineage (do not steal `lineage`)

| Stem | Year | Why cited here |
|------|------|----------------|
| `373-safe-memory-reclamation-for-dynamic-lock-free-objects-using-` | 2002 | SMR precursor for unmanaged MS-style queues |
| `025-hazard-pointers-safe-memory-reclamation-for-lock-free-object` | 2004 | Practical reclamation paired with MS/LCRQ/FAAArray |


## Open frontiers / what Anoptic should watch

- **Bounded-memory wait-free MPMC** that stays SCQ/wCQ-fast under oversubscription (scheduler noise is the Anoptic reality).
- **Portable FAA rings** (LPRQ / SCQ) as the default academic-quality backend; Vyukov rings as the default craft backend.
- **Verification** of industrial variants (Vyukov, Disruptor, cameron314) against linearizability — many are intentionally weaker or blocking-on-full.
- **Reclamation co-design** (hazard eras, crystalline, universal wait-free SMR) without forcing every queue paper onto the reclamation lineage.
- **Relaxed / brokered queues** only when GRID COMMAND telemetry explicitly allows weaker ordering — keep them off this strict FIFO spine unless justified.

## Batch

Seed expansion batch: `lineage-concurrent-data-structures-2026-08-13` (queues 501–513; concurrent-data-structures shallow cards folded into this umbrella; existing thread cards patched with `lineage` + `cites`).
