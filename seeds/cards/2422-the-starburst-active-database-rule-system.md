---
title: "The Starburst Active Database Rule System"
authors:
  - "Jennifer Widom"
year: 1996
venue: "IEEE Transactions on Knowledge and Data Engineering 8(4):583-595"
arxiv: null
doi: "10.1109/69.536251"
source: "https://web.archive.org/web/2023id_/https://cs.ulb.ac.be/public/_media/teaching/infoh415/widom.pdf"
topics:
  - active-databases
  - production-systems
  - set-oriented-rules
  - transition-tables
seed_rank: 2422
seed_batch: "archive-2026-10-26"
reviewed: "2026-10-26"
pool: "languages"
relevance_score: 8
lineage: production-systems
see:
  - 042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte
  - 155-ops5-user-s-manual
  - 2399-the-synchronous-data-flow-programming-language-lustre
cites:
  - title: "The Starburst Active Database Rule System"
    url: "https://doi.org/10.1109/69.536251"
    year: 1996
    arxiv: null
    doi: "10.1109/69.536251"
---

# The Starburst Active Database Rule System

## One-sentence takeaway

Widom's retrospective on the Starburst rule system describes set-oriented production rules over a relational database whose triggers are the *net effect* of a whole state transition, exposed to conditions and actions as four transition tables (inserted, deleted, new-updated, old-updated), evaluated in a simple iterative loop at transaction end with a user-declared partial order of priorities.

## Why it matters here

ano's standing rules fire against changes to columnar entity tables each tick, which is the same problem Starburst solved for SQL tables. Starburst's answers are directly reusable: rules see a set of changes, not one row event at a time; changes are compacted to their net effect before rules look at them (insert then delete vanishes, so a spawned-and-killed entity never triggers anything); transition tables are just tables, so rule bodies are ordinary queries; and the rule loop is iterative with a cycle limit rather than recursive. Its own regrets (no way to pass data from condition to action; no rules triggered across several tables) are a checklist of features ano should design in from the start.

## Key ideas

- **Rules.** `create rule … on table when inserted/deleted/updated(columns) if <SQL condition> then <SQL actions> precedes/follows …`; actions may also `rollback`.
- **Net effect.** A rule considers the composite change since it was last considered: an insert followed by updates counts as an insert of the updated tuple; updates followed by a delete count as a delete of the original; an insert followed by a delete disappears; repeated updates compose.
- **Transition tables.** `inserted`, `deleted`, `new-updated` and `old-updated` are queryable in conditions and actions; they are implemented as table functions over a transition log rather than materialised.
- **Execution.** Rules are processed at the end of each transaction (or on demand with `process rules`, `process ruleset`, `process rule`); the loop repeatedly picks a highest-priority triggered rule, evaluates its condition and runs its action, whose changes may trigger further rules.
- **Priorities and errors.** `precedes`/`follows` give a partial order (no cycles allowed); the system extends it deterministically to a total order, breaking ties by rule creation time. An error in a condition or action aborts the transaction, and a "timeout" (more than an administrator-set number n of rule considerations) stops runaway triggering and aborts too.
- **Retrospective claims.** Simple declared priorities proved more usable than OPS5- or Ariel-style conflict-resolution strategies, and an iterative loop more understandable than the recursive rule processing of POSTGRES and HiPAC; the main lacks were passing bindings from condition to action and multi-table triggering.

## Caveats

This is a design retrospective on a research prototype layered on Starburst; there are no performance numbers to transfer. Widom notes that for very simple tasks tuple- or statement-level triggering can be more natural and more efficient, and that transition semantics rule out a natural `before` trigger. Net-effect semantics need a transition log per rule since its last consideration, which is cheap in a transaction-bounded DBMS but has to be costed carefully in a per-tick game loop. Read from a Wayback copy of a course mirror of the TKDE paper (the course host returned 502); the DOI version was not read separately.

## Links

- Paper (Wayback copy of ULB course mirror, PDF): https://web.archive.org/web/2023id_/https://cs.ulb.ac.be/public/_media/teaching/infoh415/widom.pdf
- Paper (DOI, IEEE TKDE): https://doi.org/10.1109/69.536251
