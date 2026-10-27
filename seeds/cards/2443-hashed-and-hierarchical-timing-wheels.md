---
title: "Hashed and Hierarchical Timing Wheels: Data Structures for the Efficient Implementation of a Timer Facility"
authors:
  - "George Varghese"
  - "Tony Lauck"
year: 1987
venue: "SOSP '87 (11th ACM Symposium on Operating Systems Principles)"
arxiv: null
doi: "10.1145/41457.37504"
source: "https://www.cs.columbia.edu/~nahum/w6998/papers/sosp87-timing-wheels.pdf"
topics:
  - timers
  - event-scheduling
  - discrete-event-simulation
  - data-structures
seed_rank: 2443
seed_batch: "archive-2026-10-28"
reviewed: "2026-10-28"
pool: "systems"
relevance_score: 8
lineage: realtime-scheduling
see:
  - 465-virtual-time-time-warp-optimistic-distributed-simulation
  - 027-1500-archers-on-a-28-8-network-programming-in-age-of-empires
cites:
  - title: "Hashed and Hierarchical Timing Wheels: Data Structures for the Efficient Implementation of a Timer Facility"
    url: "https://doi.org/10.1145/41457.37504"
    year: 1987
    doi: "10.1145/41457.37504"
---

# Hashed and Hierarchical Timing Wheels

## One-sentence takeaway

Varghese and Lauck frame a timer module as four routines (start, stop, per-tick bookkeeping, expiry) and show that a circular array indexed by "now plus interval" gives O(1) start and stop within the wheel's range, then extend it two ways: hash larger intervals into the wheel (Scheme 6, unsorted per-slot lists) or stack wheels of coarser granularity like days, hours, minutes and seconds (Scheme 7), migrating timers down a level as they approach expiry.

## Why it matters here

An RTS sim has thousands of "in N ticks" events: build timers, cooldowns, buff expiries, ano なる-style delayed rules, network retransmits. A sorted queue or per-entity countdown costs O(log n) or O(n) per tick; a timing wheel makes scheduling and cancellation constant-time and per-tick work proportional to what actually fires, which suits a fixed-step deterministic tick. The hierarchical variant maps cleanly onto a columnar layout (one slot array per level) and on Wick Nichols' remark that coarse timers can simply fire at reduced precision without migrating, which is often fine for gameplay timers.

## Key ideas

- **Model.** START_TIMER, STOP_TIMER, PER_TICK_BOOKKEEPING and EXPIRY_PROCESSING; choose a scheme by which latencies matter to the client (average versus worst case, start versus tick).
- **Baselines.** Schemes 1–3 (unordered list with per-tick decrement, ordered list, tree or heap) cost O(n) or O(log n) to start or maintain timers; the paper ties these to time-flow mechanisms in discrete-event simulation and to sorting.
- **Scheme 4, the basic wheel.** An array of MaxInterval slots, a current-time pointer, and a list per slot: O(1) start, stop and per-tick work for intervals inside the wheel, borrowed from logic-simulator timing wheels.
- **Scheme 6, hashed wheel.** Hash the expiry time into a power-of-two table by its low bits and keep the high bits with the timer in an unsorted list; each tick decrements entries in the current slot, so average per-tick work is n/TableSize, and the hash choice mainly affects burstiness, not the average.
- **Scheme 7, hierarchy.** Several wheels of increasing granularity cover a 32-bit range with small memory; a timer is placed in the coarsest fitting wheel and cascades down as coarser slots come due, trading O(m) start cost (m levels) for cheap per-tick work.
- **Measured cost.** A VAX MACRO-11 implementation of Scheme 6 took 13 cheap instructions to insert, 7 to delete, 4 per tick to skip an empty slot and 6 to decrement and advance per queued timer.

## Caveats

The analysis targets kernel timers with hardware-clock interrupts on 1987 machines; cache behaviour of linked per-slot lists is not considered, and modern implementations (Linux timer wheel, Kafka, Netty) differ in bucket layout and in giving up exact expiry. Worst-case per-tick work is still O(n) when everything expires together. A determinism-sensitive game sim must also fix the order of expiries within a slot, which the paper leaves unspecified. Read from the SOSP '87 PDF; the 1997 IEEE/ACM ToN journal version was not reviewed.

## Links

- Paper (PDF, SOSP '87): https://www.cs.columbia.edu/~nahum/w6998/papers/sosp87-timing-wheels.pdf
- Paper (DOI): https://doi.org/10.1145/41457.37504
