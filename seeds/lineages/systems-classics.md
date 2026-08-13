# Lineage: systems-classics

Charter: medium spine for **canonical systems / databases / networking / OS / architecture** classics that Broadside was missing—research papers and a few textbook carriers that every engine/tools reader should be able to deep-link. Graphics rendering classics from the same haul live primarily on `gpu-driven-rendering` (with cites back here where relevant). Bakery/Peterson sit on `concurrent-data-structures`.

**Not stolen:** Codd relational model already `048`; Kajiya rendering equation `169`; Reinhard tone mapping `492`; Lamport Time Clocks `1060`; Chandy–Lamport snapshots `1063`; Dijkstra THE `1290`; Cooperating Sequential Processes `839`; GFS/MapReduce/Paxos in the algorithms perfects block.

## Ordered spine

1. **Relational DB core** — Date textbook carrier → System R → Selinger optimizer → INGRES/Postgres → ARIES recovery; concurrency via Eswaran 2PL, Kung–Robinson OCC, Gray transactions, Bernstein survey.
2. **Consistency tradeoffs** — Brewer CAP keynote → Gilbert–Lynch formalization → Pritchett BASE.
3. **Unix / OS design** — Multics overview → UNIX CACM → Lions commentary → Saltzer end-to-end → Lampson hints → Hoare monitors; kernels Mach → L4 → Xen/Disco; FFS, Exokernel, scheduler activations, Ousterhout OS-speed, NFS.
4. **Internet** — Ethernet → Cerf–Kahn → RFC 791/793 → Jacobson congestion → Clark design philosophy → Birrell RPC → Floyd RED.
5. **Storage** — RAID → Log-structured FS.
6. **Architecture & SE** — Tomasulo, Amdahl, Hennessy–Patterson textbook; Brooks Mythical Man-Month; Conway's law.
7. **Distributed impossibility (this haul)** — FLP consensus impossibility (Time Clocks / Paxos / snapshots already elsewhere).

## Broadside cards in this lineage (this batch)

| Stem | Year | Title |
|------|------|-------|
| `1088-an-introduction-to-database-systems` | 1975 | An Introduction to Database Systems |
| `1089-system-r-relational-approach-to-database-management` | 1976 | System R: Relational Approach to Database Management |
| `1090-access-path-selection-in-a-relational-database-management-sy` | 1979 | Access Path Selection in a Relational Database Management System |
| `1091-the-design-and-implementation-of-ingres` | 1976 | The Design and Implementation of INGRES |
| `1092-the-design-of-postgres` | 1986 | The Design of POSTGRES |
| `1093-aries-a-transaction-recovery-method-supporting-fine-granular` | 1992 | ARIES: A Transaction Recovery Method Supporting Fine-Granularity Locking and Par |
| `1094-the-notions-of-consistency-and-predicate-locks-in-a-database` | 1976 | The Notions of Consistency and Predicate Locks in a Database System |
| `1095-on-optimistic-methods-for-concurrency-control` | 1981 | On Optimistic Methods for Concurrency Control |
| `1096-the-transaction-concept-virtues-and-limitations` | 1981 | The Transaction Concept: Virtues and Limitations |
| `1097-concurrency-control-in-distributed-database-systems` | 1981 | Concurrency Control in Distributed Database Systems |
| `1098-towards-robust-distributed-systems-podc-keynote` | 2000 | Towards Robust Distributed Systems (PODC Keynote) |
| `1099-brewer-s-conjecture-and-the-feasibility-of-consistent-availa` | 2002 | Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tole |
| `1100-base-an-acid-alternative` | 2008 | BASE: An Acid Alternative |
| `1101-the-unix-time-sharing-system` | 1974 | The UNIX Time-Sharing System |
| `1102-a-commentary-on-the-sixth-edition-unix-operating-system` | 1977 | A Commentary on the Sixth Edition UNIX Operating System |
| `1103-end-to-end-arguments-in-system-design` | 1984 | End-to-End Arguments in System Design |
| `1104-hints-for-computer-system-design` | 1983 | Hints for Computer System Design |
| `1105-introduction-and-overview-of-the-multics-system` | 1965 | Introduction and Overview of the Multics System |
| `1106-monitors-an-operating-system-structuring-concept` | 1974 | Monitors: An Operating System Structuring Concept |
| `1107-mach-a-new-kernel-foundation-for-unix-development` | 1986 | Mach: A New Kernel Foundation for UNIX Development |
| `1108-on-micro-kernel-construction` | 1995 | On Micro-Kernel Construction |
| `1109-xen-and-the-art-of-virtualization` | 2003 | Xen and the Art of Virtualization |
| `1110-a-fast-file-system-for-unix` | 1984 | A Fast File System for UNIX |
| `1111-exokernel-an-operating-system-architecture-for-application-l` | 1995 | Exokernel: An Operating System Architecture for Application-Level Resource Manag |
| `1112-scheduler-activations-effective-kernel-support-for-the-user-` | 1991 | Scheduler Activations: Effective Kernel Support for the User-Level Management of |
| `1113-disco-running-commodity-operating-systems-on-scalable-multip` | 1997 | Disco: Running Commodity Operating Systems on Scalable Multiprocessors |
| `1114-ethernet-distributed-packet-switching-for-local-computer-net` | 1976 | Ethernet: Distributed Packet Switching for Local Computer Networks |
| `1115-a-protocol-for-packet-network-intercommunication` | 1974 | A Protocol for Packet Network Intercommunication |
| `1116-internet-protocol-rfc-791` | 1981 | Internet Protocol (RFC 791) |
| `1117-transmission-control-protocol-rfc-793` | 1981 | Transmission Control Protocol (RFC 793) |
| `1118-congestion-avoidance-and-control` | 1988 | Congestion Avoidance and Control |
| `1119-the-design-philosophy-of-the-darpa-internet-protocols` | 1988 | The Design Philosophy of the DARPA Internet Protocols |
| `1120-implementing-remote-procedure-calls` | 1984 | Implementing Remote Procedure Calls |
| `1121-random-early-detection-gateways-for-congestion-avoidance` | 1993 | Random Early Detection Gateways for Congestion Avoidance |
| `1122-a-case-for-redundant-arrays-of-inexpensive-disks-raid` | 1988 | A Case for Redundant Arrays of Inexpensive Disks (RAID) |
| `1123-the-design-and-implementation-of-a-log-structured-file-syste` | 1992 | The Design and Implementation of a Log-Structured File System |
| `1126-impossibility-of-distributed-consensus-with-one-faulty-proce` | 1985 | Impossibility of Distributed Consensus with One Faulty Process |
| `1127-why-aren-t-operating-systems-getting-faster-as-fast-as-hardw` | 1990 | Why Aren't Operating Systems Getting Faster As Fast As Hardware? |
| `1128-design-and-implementation-of-the-sun-network-filesystem` | 1985 | Design and Implementation of the Sun Network Filesystem |
| `1129-system-deadlocks` | 1971 | System Deadlocks |
| `1130-the-working-set-model-for-program-behavior` | 1968 | The Working Set Model for Program Behavior |
| `1131-a-study-of-replacement-algorithms-for-a-virtual-storage-comp` | 1966 | A Study of Replacement Algorithms for a Virtual-Storage Computer |
| `1132-computer-architecture-a-quantitative-approach` | 1990 | Computer Architecture: A Quantitative Approach |
| `1133-an-efficient-algorithm-for-exploiting-multiple-arithmetic-un` | 1967 | An Efficient Algorithm for Exploiting Multiple Arithmetic Units |
| `1134-validity-of-the-single-processor-approach-to-achieving-large` | 1967 | Validity of the Single Processor Approach to Achieving Large Scale Computing Cap |
| `1135-the-mythical-man-month-essays-on-software-engineering` | 1975 | The Mythical Man-Month: Essays on Software Engineering |
| `1136-how-do-committees-invent` | 1968 | How Do Committees Invent? |

## Also minted in this batch (other lineages)

### `concurrent-data-structures`
- `1124-a-new-solution-of-dijkstra-s-concurrent-programming-problem` (1974) — A New Solution of Dijkstra's Concurrent Programming Problem
- `1125-myths-about-the-mutual-exclusion-problem` (1981) — Myths About the Mutual Exclusion Problem

### `gpu-driven-rendering` (graphics classics haul)
- `1137-sketchpad-a-man-machine-graphical-communication-system` (1963) — Sketchpad: A Man-Machine Graphical Communication System
- `1138-the-ultimate-display` (1965) — The Ultimate Display
- `1139-a-head-mounted-three-dimensional-display` (1968) — A Head-Mounted Three Dimensional Display
- `1140-computer-graphics-principles-and-practice` (1990) — Computer Graphics: Principles and Practice
- `1141-algorithm-for-computer-control-of-a-digital-plotter` (1965) — Algorithm for Computer Control of a Digital Plotter
- `1142-reentrant-polygon-clipping` (1974) — Reentrant Polygon Clipping
- `1143-a-hidden-surface-algorithm-for-computer-generated-halftone-p` (1969) — A Hidden Surface Algorithm for Computer Generated Halftone Pictures
- `1144-a-characterization-of-ten-hidden-surface-algorithms` (1974) — A Characterization of Ten Hidden-Surface Algorithms
- `1145-a-subdivision-algorithm-for-computer-display-of-curved-surfa` (1974) — A Subdivision Algorithm for Computer Display of Curved Surfaces
- `1146-recursively-generated-b-spline-surfaces-on-arbitrary-topolog` (1978) — Recursively Generated B-Spline Surfaces on Arbitrary Topological Meshe
- `1147-smooth-subdivision-surfaces-based-on-triangles` (1987) — Smooth Subdivision Surfaces Based on Triangles
- `1148-behaviour-of-recursive-division-surfaces-near-extraordinary-` (1978) — Behaviour of Recursive Division Surfaces Near Extraordinary Points
- `1149-models-of-light-reflection-for-computer-synthesized-pictures` (1977) — Models of Light Reflection for Computer Synthesized Pictures
- `1150-texture-and-reflection-in-computer-generated-images` (1976) — Texture and Reflection in Computer Generated Images
- `1151-continuous-shading-of-curved-surfaces` (1971) — Continuous Shading of Curved Surfaces
- `1152-illumination-for-computer-generated-pictures` (1975) — Illumination for Computer Generated Pictures
- `1153-an-improved-illumination-model-for-shaded-display` (1980) — An Improved Illumination Model for Shaded Display
- `1154-a-reflectance-model-for-computer-graphics` (1982) — A Reflectance Model for Computer Graphics
- `1155-distributed-ray-tracing` (1984) — Distributed Ray Tracing
- `1156-the-reyes-image-rendering-architecture` (1987) — The Reyes Image Rendering Architecture
- `1157-compositing-digital-images` (1984) — Compositing Digital Images
- `1158-image-compositing-fundamentals` (1995) — Image Compositing Fundamentals
- `1159-survey-of-texture-mapping` (1986) — Survey of Texture Mapping
- `1160-display-of-surfaces-from-volume-data` (1988) — Display of Surfaces from Volume Data
- `1161-marching-cubes-a-high-resolution-3d-surface-construction-alg` (1987) — Marching Cubes: A High Resolution 3D Surface Construction Algorithm
- `1162-casting-curved-shadows-on-curved-surfaces` (1978) — Casting Curved Shadows on Curved Surfaces
- `1163-shadow-algorithms-for-computer-graphics` (1977) — Shadow Algorithms for Computer Graphics
- `1164-some-techniques-for-shading-machine-renderings-of-solids` (1968) — Some Techniques for Shading Machine Renderings of Solids
- `1165-the-geometry-engine-a-vlsi-geometry-system-for-graphics` (1982) — The Geometry Engine: A VLSI Geometry System for Graphics
- `1166-the-a-buffer-an-antialiased-hidden-surface-method` (1984) — The A-buffer, an Antialiased Hidden Surface Method

## Open frontiers / what Anoptic should watch

- Durable local stores: ARIES-style WAL discipline vs LFS/LSM append designs for replay and asset pipelines.
- Explicit CAP/BASE choices for any GRID COMMAND multi-node state—not accidental consistency.
- End-to-end arguments when adding reliability in the middle of tool RPCs or netcode.
- Graphics: Whitted → Cook–Torrance → Reyes as literacy under Nanite/meshlet/`gpu-driven-rendering` craft cards.

## Batch

Seed batch: `perfects-systems-2026-08-13` (cards **1088–1166**, 79 minted).
