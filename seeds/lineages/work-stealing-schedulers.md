# Work stealing

Randomized **work stealing** is the default load-balancing contract for nested-parallel / fork–join job systems: each worker owns a deque, executes locally LIFO, and idle thieves steal oldest work FIFO from a random victim. Broadside tracks this thread because Anoptic / ano engine job pools, async task graphs, and HPC-style nested parallelism all converge on the same deque + steal protocol.

## Spine (classics → living successors)

Ordered by epistemological dependence, not strictly by year.

1. **Theory root** — Blumofe & Leiserson, *Scheduling Multithreaded Computations by Work Stealing* (FOCS 1994 → JACM 1999) — first provably good bounds for fully strict computations: expected T_P = T_1/P + O(T_∞), space S_P ≤ S_1 P, communication near-optimal vs work-sharing. Card: `200-scheduling-multithreaded-computations-by-work-stealing`.
2. **System root** — Blumofe et al., *Cilk: An Efficient Multithreaded Runtime System* (PPoPP 1995) — work/span programmer model + randomized stealing in a real runtime. Card: `430-cilk-an-efficient-multithreaded-runtime-system`.
3. **Cilk-5** — Frigo, Leiserson, Randall, *The Implementation of the Cilk-5 Multithreaded Language* (PLDI 1998) — cactus stacks, THE protocol, the industrial template for continuation stealing. Card: `305-the-implementation-of-the-cilk-5-multithreaded-language`.
4. **THE deque under multiprogramming** — Arora, Blumofe, Plaxton, *Thread Scheduling for Multiprogrammed Multiprocessors* (SPAA 1998) — non-blocking owner-bottom / thief-top deque surviving adversarial OS scheduling; structural parent of Chase–Lev. Card: `431-thread-scheduling-for-multiprogrammed-multiprocessors`.
5. **Java Fork/Join** — Doug Lea, *A Java Fork/Join Framework* (Java Grande 2000) — Cilk-style pools in the JVM; becomes `ForkJoinPool`. Card: `432-a-java-fork-join-framework`.
6. **Chase–Lev deque** — Chase & Lev, *Dynamic Circular Work-Stealing Deque* (SPAA 2005) — unbounded circular array, CAS mainly on steal / empty race; the deque almost every modern runtime copies. Card: `291-dynamic-circular-work-stealing-deque`.
7. **C++ industrial** — Reinders, *Intel Threading Building Blocks* (2007; now oneTBB) — child-stealing task scheduler that carried work stealing into mainstream C++. Card: `403-intel-threading-building-blocks`.
8. **Idempotent steals** — Michael, Vechev, Saraswat, *Idempotent Work Stealing* (PPoPP 2009) — at-least-once extraction removes owner fences when tasks tolerate repeats. Card: `433-idempotent-work-stealing`.
9. **Weak-memory Chase–Lev** — Lê, Pop, Cohen, Zappa Nardelli, *Correct and Efficient Work-Stealing for Weak Memory Models* (PPoPP 2013) — proven / barrier-tuned Chase–Lev for POWER, ARM, C11. Card: `434-correct-and-efficient-work-stealing-for-weak-memory-models`.
10. **Fence-free on TSO** — Morrison & Afek, *Fence-Free Work Stealing on Bounded TSO Processors* (ASPLOS 2014) — drop owner fences on bounded-TSO (x86) microarchitectures. Card: `435-fence-free-work-stealing-on-bounded-tso-processors`.
11. **Machine-checked deque** — Choi, *Formal Verification of Chase-Lev Deque in Concurrent Separation Logic* (2023) — strong spec, realistic implementation, small TCB. Card: `229-formal-verification-of-chase-lev-deque-in-concurrent-separat`.
12. **Bulk / specialized steals** — Kataru, Davarnia, Jannesari, *A Lock-Free Work-Stealing Algorithm for Bulk Operations* (2026) — native bulk ops under a restricted owner/stealer concurrency model. Card: `206-a-lock-free-work-stealing-algorithm-for-bulk-operations`.
13. **Portable continuation stealing** — Williams & Elliott, *Libfork: Portable Continuation-Stealing With Stackless Coroutines* (IEEE TPDS 2025; arXiv 2402.18480) — C++20 stackless coroutines + geometric segmented stacks, lock-free, NUMA-aware; continuation-stealing without a Cilk compiler. Card: `1556-libfork-portable-continuation-stealing-with-stackless-coroutines`.

## Cards in this thread

| Year | Card stem | Role |
|-----:|-----------|------|
| 1995 | `430-cilk-an-efficient-multithreaded-runtime-system` | Cilk runtime |
| 1998 | `305-the-implementation-of-the-cilk-5-multithreaded-language` | Cilk-5 / THE |
| 1998 | `431-thread-scheduling-for-multiprogrammed-multiprocessors` | ABP / THE deque |
| 1999 | `200-scheduling-multithreaded-computations-by-work-stealing` | Provable WS bounds |
| 2000 | `432-a-java-fork-join-framework` | Java Fork/Join |
| 2005 | `291-dynamic-circular-work-stealing-deque` | Chase–Lev deque |
| 2007 | `403-intel-threading-building-blocks` | Intel TBB / oneTBB |
| 2009 | `433-idempotent-work-stealing` | Idempotent WS |
| 2013 | `434-correct-and-efficient-work-stealing-for-weak-memory-models` | Weak-memory Chase–Lev |
| 2014 | `435-fence-free-work-stealing-on-bounded-tso-processors` | Fence-free TSO WS |
| 2023 | `229-formal-verification-of-chase-lev-deque-in-concurrent-separat` | Formal Chase–Lev |
| 2026 | `206-a-lock-free-work-stealing-algorithm-for-bulk-operations` | Bulk lock-free WS |
| 2025 | `1556-libfork-portable-continuation-stealing-with-stackless-coroutines` | Portable continuation stealing |

## Open frontiers / watch next

- **Steal vs help / continuation vs child stealing** tradeoffs in engine frame graphs (Cilk-style continuation stealing vs TBB child stealing). Libfork 1556 is the portable C++20 continuation-stealing datapoint; still watch whether Anoptic’s C core can afford coroutine-aware call chains.
- **Batch / leapfrogging steals** and NUMA-aware victim selection for large core counts.
- **Relaxed-memory + verification** of the exact C11/C++ atomics Anoptic will ship (build on Lê 2013 + Choi 2023).
- **Specialized deques** (single stealer, bulk transfer, bounded capacity) when the general Chase–Lev contract is overkill—see 2026 bulk ops.
- Peripheral but related: OpenMP tasking runtimes and heterogeneous schedulers (e.g. StarPU) that reuse steal ideas outside the strict nested-parallel spine—keep them out of this lineage unless a card is primarily about work stealing.
