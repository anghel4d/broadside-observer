---
title: "SHOP: Simple Hierarchical Ordered Planner"
authors:
  - "Dana Nau"
  - "Yue Cao"
  - "Amnon Lotem"
  - "Hector Muñoz-Avila"
year: 1999
venue: "IJCAI"
arxiv: null
doi: null
source: "https://www.ijcai.org/Proceedings/99-2/Papers/043.pdf"
topics:
  - htn-planning
  - ordered-task-decomposition
  - game-ai
seed_rank: 1629
seed_batch: "archive-2026-09-08"
reviewed: "2026-09-08"
pool: "agents"
relevance_score: 9
lineage: htn-planning
cites:
  - title: "UMCP: A Sound and Complete Procedure for Hierarchical Task-Network Planning"
    url: "https://www.aaai.org/Papers/AIPS/1994/AIPS94-028.pdf"
    year: 1994
    arxiv: null
    doi: null
  - title: "Control Strategies in HTN Planning: Theory versus Practice"
    url: "https://www.aaai.org/Papers/AAAI/1998/AAAI98-160.pdf"
    year: 1998
    arxiv: null
    doi: null
see:
  - "296-shop2-an-htn-planning-system"
  - "042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte"
  - "155-ops5-user-s-manual"
---

# SHOP: Simple Hierarchical Ordered Planner

## One-sentence takeaway

SHOP plans HTN tasks in the same total order they will execute, so the planner always knows the full world state and can embed Horn inference, numeric computation, and external calls inside method preconditions — yielding a simpler, sound/complete core that beat Blackbox and TLplan by orders of magnitude on blocks-world and logistics despite being Lisp.

## Why it matters here

GRID COMMAND and any RTS/4X with hierarchical unit orders want HTN-style method expansion more than classical STRIPS search. SHOP is the ordered-task-decomposition ancestor of live SHOP2 (296): steal the “plan in execution order → full state at every step → expressive methods” contract for soldier/platoon AI, not the Lisp runtime. Complements production-system matching (Rete 042 / OPS5 155) rather than replacing it.

## Key ideas

- **Ordered task decomposition.** Unlike NONLIN / SIPE-2 / O-PLAN / UMCP, SHOP never leaves partially ordered unfinished tasks floating; it always expands the next task in the order it will run. That eliminates many threat/interaction cases and makes soundness/completeness arguments tractable.
- **Full state ⇒ expressive domains.** Because the world state is complete at each step, method preconditions can call Horn-clause inference, do numeric math, and talk to external agents/info sources — not just propositional literals.
- **Efficiency from representation, not language.** On standard blocks-world and logistics suites SHOP (Lisp) was several orders of magnitude faster than Blackbox and several times faster than TLplan (both C), by encoding domain knowledge as methods rather than brute-force planning-graph / TL search.
- **Open GPL system.** Authors released SHOP under GPL; SHOP2 (296) later added partial-order subtasks and won IPC-2002 — this 1999 IJCAI paper is the ordered core those extensions sit on.

## Caveats

- Totally ordered planning is less flexible than partial-order HTN when true concurrency of subtasks matters; SHOP2 exists for that. Do not remint SHOP2 296, GOAP/F.E.A.R. live cards, or STRIPS 309.
- Domain methods are hand-authored expertise — the win is expressivity and speed once methods exist, not autonomous discovery of hierarchy.
- IJCAI proceedings PDF has no DOI/arXiv; cite the IJCAI-99 pages 968–973 entry.

## Links

- IJCAI PDF: https://www.ijcai.org/Proceedings/99-2/Papers/043.pdf
- IJCAI-99 proceedings (vol. 2): https://www.ijcai.org/proceedings/1999-2
