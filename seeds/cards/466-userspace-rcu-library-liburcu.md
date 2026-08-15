---
title: "Userspace RCU Library (liburcu)"
authors:
  - "Mathieu Desnoyers"
  - "Paul E. McKenney"
year: 2009
venue: "liburcu / LTTng"
arxiv: null
doi: null
source: "https://liburcu.org/"
topics:
  - rcu
  - reclamation
seed_rank: 466
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: memory-reclamation
cites:
  - title: "Read-Copy Update"
    url: "https://www.rdrop.com/~paulmck/RCU/"
    year: 1998
  - title: "What is RCU, Fundamentally?"
    url: "https://lwn.net/Articles/262464/"
    year: 2007
see:
  - "304-read-copy-update"
---

# Userspace RCU Library (liburcu)

## One-sentence takeaway

liburcu ports kernel RCU to userspace as an LGPL library with several grace-period flavors so readers scale linearly while writers publish a new pointer and wait out a grace period before freeing the old object.

## Why it matters here

Practical QSBR/memb/signal RCU for Anoptic readers that want epoch-style reclamation without rolling their own quiescent-state protocol.

## Key ideas

- `rcu_read_lock`/`unlock` plus `rcu_dereference` on the read side; `rcu_assign_pointer` then `synchronize_rcu` (or deferred callbacks) on the write side.
- Flavors trade intrusiveness for speed: memb (sys_membarrier when available), QSBR (fastest reads, requires `rcu_quiescent_state`), mb, signal, and bulletproof (for tracers that cannot register threads).
- `liburcu-cds` ships lock-free hash tables, queues, stacks, and lists on top of the same grace periods.
- First motivated by the LTTng userspace tracer (2009); now used by Knot, BIND, Gluster, xfsprogs, and others.

## Caveats

## Links

- Project: https://liburcu.org/
- Git: https://git.liburcu.org/userspace-rcu.git
