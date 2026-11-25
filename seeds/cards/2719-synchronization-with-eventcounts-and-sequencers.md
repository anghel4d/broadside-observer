---
title: "Synchronization with Eventcounts and Sequencers"
authors:
  - "David P. Reed"
  - "Rajendra K. Kanodia"
year: 1979
venue: "Communications of the ACM 22(2), 115–123 (version presented at SOSP 1977)"
arxiv: null
doi: "10.1145/359060.359076"
source: "https://dl.acm.org/doi/pdf/10.1145/359060.359076"
version_reviewed: "CACM February 1979 journal PDF (ACM, read via the Internet Archive snapshot of 2025-06-09)"
topics:
  - "eventcounts"
  - "sequencers"
  - "ticket-locks"
  - "producer-consumer"
  - "ring-buffers"
  - "synchronization-without-mutual-exclusion"
  - "information-flow"
  - "timeline-semaphores"
seed_rank: 2719
seed_batch: "archive-2026-11-26"
reviewed: "2026-11-26"
pool: "systems"
relevance_score: 8
lineage: concurrent-data-structures
cites:
  - title: "Synchronization with Eventcounts and Sequencers"
    url: "https://doi.org/10.1145/359060.359076"
    year: 1979
    arxiv: null
    doi: "10.1145/359060.359076"
  - title: "Synchronization with eventcounts and sequencers (Extended Abstract)"
    url: "https://doi.org/10.1145/1067625.806550"
    year: 1977
    arxiv: null
    doi: "10.1145/1067625.806550"
  - title: "Time, Clocks, and the Ordering of Events in a Distributed System"
    url: "https://doi.org/10.1145/359545.359563"
    year: 1978
    arxiv: null
    doi: "10.1145/359545.359563"
  - title: "Concurrent Reading and Writing"
    url: "https://doi.org/10.1145/359863.359878"
    year: 1977
    arxiv: null
    doi: "10.1145/359863.359878"
see:
  - "785-time-clocks-and-the-ordering-of-events-in-a-distributed-syst"
  - "1837-concurrent-reading-and-writing"
  - "1857-can-seqlocks-get-along-with-programming-language-memory-models"
---

# Synchronization with Eventcounts and Sequencers

## One-sentence takeaway

Reed and Kanodia replace mutual exclusion with two monotone counters — an *eventcount* (`advance`, `read`, `await(E, v)` until at least v advances have happened) and a *sequencer* (`ticket`, a totally ordered take-a-number) — and show that ring buffers, semaphores, deadlock-free multi-resource P, and confinement-safe readers/writers all fall out of observing event order rather than locking shared state.

## Why it matters here

This is the lost ancestor of several things Anoptic already uses under other names. An eventcount is exactly the shape of a Vulkan timeline semaphore (a 64-bit payload that only increases, waited on "until it reaches a value"); a sequencer plus an eventcount is the ticket lock; the secure readers–writers program is a seqlock (read a version, read the data, retry if the version moved); the multi-manipulator eventcount — one single-writer counter per processor, read by summing — is the sharded counter. Seeing them as one mechanism gives Anoptic's wait-free buses and frame pipeline a single vocabulary: every stage owns the eventcounts it advances (one writer each, which the authors note makes proofs easier), consumers `await` positions, and a ring slot is free when `OUT ≥ i − N`. For ano's standing rules and command queues, it suggests modelling "has rule R seen tick t?" as a per-rule monotone counter rather than a flag, which composes and can be observed without writing.

## Key ideas

- **Eventcount semantics.** A non-decreasing integer, initially 0. `advance(E)` signals one event; `read(E)` returns a value that is a lower bound on E after the read and an upper bound before it; `await(E, v)` returns once at least v advances precede or are concurrent with it. Defined with axioms (D1–D8) on a Lamport-style partial order modified for non-instantaneous events and shared-memory transmission.
- **Ring buffer with no shared writes.** Producer: `await(OUT, i − N); buffer[i mod N] := produce(); advance(IN)`. Consumer: `await(IN, i); consume(buffer[i mod N]); advance(OUT)`. Each eventcount has one writer; when the producer runs ahead at equal speed neither side ever waits on the other's bookkeeping, unlike a lock-protected buffer.
- **Sequencers for arbitration.** `ticket(S)` returns distinct, time-ordered integers (bakery ticket machine). Multiple producers: `t := ticket(T); await(IN, t); ... advance(IN)` totally orders deposits; one `advance(IN)` wakes both the next producer and the consumer (broadcast).
- **Semaphores and simultaneous-P.** A semaphore is a sequencer plus an eventcount: `P` = take a ticket then await it, `V` = advance. Splitting enqueue from wait gives a deadlock-free simultaneous-P over several semaphores (a global sequencer guards only ticket-taking, never waiting), which solves the dining philosophers; the paper flags the hazard of a process dying while holding an unredeemed ticket.
- **Information flow.** `advance` is a pure signal and `read`/`await` are pure observations, so access rights can be split into signaler and observer permissions (P on a semaphore both observes and modifies, so it leaks through delay). Secure readers–writers: readers only observe S and C, read, and retry if S changed; writers advance S, take a ticket, await C, update, advance C — related, the authors say, to Easton's version numbers and to Lamport's and Schaefer's solutions.
- **Implementation without interlocks.** A multi-writer eventcount is N single-manipulator eventcounts summed on read (also the distributed design: advance at the home site, read by querying all sites). A single-manipulator eventcount can be built from single-bit loads and stores by storing it in Gray code, so each advance flips one bit; the reader scans high→low then low→high and repairs the value at the first changed bit (algorithm credited to Lamport, simplifying Scholten). `ticket` still needs some mutual exclusion.

## Caveats

The paper ignores liveness ("no axiom that says when an await will eventually complete") and leaves `await` to the OS (a Multics implementation is in Reed's 1976 MIT thesis). Counters are treated as unbounded with bounds chosen later, which on a real bus means wrap-around and its comparison rules are the implementer's problem. Sequencers are not wait-free: `ticket` needs an atomic fetch-and-increment or a mutual-exclusion algorithm. Secure readers can starve under frequent writes; the authors note that no algorithm can both guarantee readers finish and stop readers from signalling writers. The model predates relaxed hardware and language memory models; the 1857 card on seqlocks shows how much care the version-number pattern needs under modern language memory models. The links between eventcounts and timeline semaphores, ticket locks, seqlocks, and sharded counters above are this card's reading, not claims the 1979 paper makes.

## Links

- DOI: https://doi.org/10.1145/359060.359076
- ACM PDF: https://dl.acm.org/doi/pdf/10.1145/359060.359076
- Archived copy of the ACM PDF (as read): https://web.archive.org/web/20250609011514/https://dl.acm.org/doi/pdf/10.1145/359060.359076
- SOSP 1977 extended abstract: https://doi.org/10.1145/1067625.806550
- Vulkan timeline semaphore type (modern analogue): https://registry.khronos.org/vulkan/specs/latest/man/html/VkSemaphoreType.html
