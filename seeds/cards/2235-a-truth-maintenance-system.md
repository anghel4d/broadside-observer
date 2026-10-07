---
title: "A Truth Maintenance System"
authors:
  - "Jon Doyle"
year: 1979
venue: "Artificial Intelligence 12(3), pp. 231–272 (also MIT AI Lab Memo AIM-521)"
arxiv: null
doi: "10.1016/0004-3702(79)90008-0"
source: "https://dspace.mit.edu/handle/1721.1/5733"
topics:
  - truth-maintenance
  - belief-revision
  - dependency-directed-backtracking
  - provenance-first-agent-memory
  - production-systems
seed_rank: 2235
seed_batch: "archive-2026-10-08"
reviewed: "2026-10-08"
pool: "agents"
relevance_score: 9
lineage: production-systems
cites:
  - title: "Forward Reasoning and Dependency-Directed Backtracking in a System for Computer-Aided Circuit Analysis"
    url: "https://doi.org/10.1016/0004-3702(77)90029-7"
    year: 1977
    arxiv: null
    doi: "10.1016/0004-3702(77)90029-7"
  - title: "An Assumption-Based TMS"
    url: "https://doi.org/10.1016/0004-3702(86)90080-9"
    year: 1986
    arxiv: null
    doi: "10.1016/0004-3702(86)90080-9"
---

# A Truth Maintenance System

## One-sentence takeaway

Keep beliefs together with the *reasons* for them: a TMS records a justification for every belief, works out which beliefs are currently supported, retracts consequences automatically when a premise changes, and on a contradiction traces the dependencies back to the assumptions responsible.

## Why it matters here

This is the classic design for provenance-first memory. An agent's memory (Broadside's own retrieval) or a GRID COMMAND AI's belief state under fog of war ("enemy armour is at the ford" because "scout saw tracks" and *not* "scout report is stale") needs the same three things. Every belief points to its support, so it can be explained. Beliefs vanish when their support does, so nothing stale lingers. And contradictions blame specific assumptions instead of forcing a full re-derivation. It is the reasoning-side sibling of incremental view maintenance (counting/DRed 1841) and of Rete's retraction path (042).

## Key ideas

- **Per the abstract:** reasoning programs must make assumptions and revise beliefs when discoveries contradict them. The TMS is a problem-solver subsystem that records and maintains the reasons for program beliefs, and uses those reasons to build explanations and guide the problem solver.
- **Covered mechanisms (abstract's list):** (1) the representation and structure of the TMS; (2) revising the current set of beliefs; (3) dependency-directed backtracking to change the current set of assumptions; (4) summarising explanations of beliefs; (5) organising problem solvers into "dialectically arguing" modules; (6) revising models of other agents' belief systems; (7) embedding control structures in patterns of assumptions.
- **Non-monotonic justifications (as standardly summarised).** A node is IN (believed) or OUT. A support-list justification makes a node IN when every node on its in-list is IN *and* every node on its out-list is OUT. The out-list is what lets a belief rest on the *absence* of contrary evidence, i.e. an assumption. Conditional-proof justifications are also provided.
- **Dependency-directed backtracking.** When a contradiction node becomes IN, the TMS follows justifications back to the assumptions involved, retracts one by justifying a node on its out-list, and records the result so the same combination is not tried again. This extends the dependency-directed backtracking of Stallman and Sussman's 1977 circuit-analysis system.
- **Choosing what to believe, want and do.** The paper closes by sketching how a problem solver can use rules to choose between alternative belief systems.

## Caveats

The full AIM-521 PDF is behind a bot check from the box and the ScienceDirect copy timed out. This card is therefore written from the DSpace abstract plus standard secondary descriptions of SL/CP justifications and dependency-directed backtracking; check details against the paper before implementing. Single-context, justification-based TMSs can relabel heavily and can thrash between alternatives; de Kleer's ATMS (1986) tracks all assumption environments at once to avoid this, at a memory cost. Well-founded labelling with out-lists is subtle: odd loops through out-lists can have no consistent labelling.

## Links

- MIT DSpace record (AIM-521, abstract and PDF): https://dspace.mit.edu/handle/1721.1/5733
- Journal DOI (Artificial Intelligence 12(3), 1979): https://doi.org/10.1016/0004-3702(79)90008-0
- Successor, de Kleer's ATMS: https://doi.org/10.1016/0004-3702(86)90080-9
