# Lineage: memory-reclamation

Charter: safe memory reclamation for unmanaged lock-free structures — RCU, Michael SMR → hazard pointers, Fraser EBR → DEBRA, Hazard Eras, IBR, Hyaline, and wait-free lines (Universal SMR, Crystalline). **Cite into queues; do not steal `lock-free-queues` lineage.**

## Ordered spine

1. **RCU (McKenney)** — epoch-flavored kernel read-side.
2. **Michael 2002 / Hazard Pointers 2004** — pointer-based SMR.
3. **Fraser EBR 2004** — epoch bags for lock-free DS.
4. **DEBRA 2015** — distributed/faster EBR (+ DEBRA+ fault notes).
5. **Hazard Eras 2017 / IBR 2018** — era/interval hybrids.
6. **Hyaline → Crystalline / Universal wait-free SMR** — modern robust/wait-free reclaimers.

## Essential cross-cites

- Michael & Scott queue, LCRQ, Vyukov rings — consumers of SMR, lineage remains `lock-free-queues`.

## Broadside cards in this thread

| Stem | Year | Title |
|------|------|-------|
| `380-read-copy-update` | 1998 | Read-Copy Update |
| `373-safe-memory-reclamation-for-dynamic-lock-free-objects-using-` | 2002 | Safe Memory Reclamation for Dynamic Lock-Free Objects Using Atomic Reads and Writes |
| `025-hazard-pointers-safe-memory-reclamation-for-lock-free-object` | 2004 | Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects |
| `369-epoch-based-reclamation-practical-lock-freedom` | 2004 | Epoch-Based Reclamation / Practical lock-freedom |
| `409-debra-distributed-epoch-based-reclamation` | 2015 | DEBRA: Distributed Epoch-Based Reclamation |
| `703-hazard-eras-non-blocking-memory-reclamation` | 2017 | Hazard Eras: Non-Blocking Memory Reclamation |
| `402-interval-based-memory-reclamation` | 2018 | Interval-Based Memory Reclamation |
| `704-hyaline-fast-and-transparent-lock-free-memory-reclamati` | 2019 | Hyaline: Fast and Transparent Lock-Free Memory Reclamation |
| `333-universal-wait-free-memory-reclamation` | 2020 | Universal Wait-Free Memory Reclamation |
| `315-crystalline-fast-and-memory-efficient-wait-free-reclamation` | 2021 | Crystalline: Fast and Memory Efficient Wait-Free Reclamation |
| `308-eemarq-efficient-lock-free-range-queries-with-memory-reclama` | 2022 | EEMARQ: Efficient Lock-Free Range Queries with Memory Reclamation |
| `299-releasing-memory-with-optimistic-access-a-hybrid-approach-to` | 2023 | Releasing Memory with Optimistic Access: A Hybrid Approach to Memory Reclamation and Allocation in Lock-Free Programs |

**12** cards. Batch `lineage-shallow-2026-08-13`.

## Batch

`lineage-shallow-2026-08-13`.
