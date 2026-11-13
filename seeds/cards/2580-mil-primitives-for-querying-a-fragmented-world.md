---
title: "MIL Primitives for Querying a Fragmented World"
authors:
  - "Peter A. Boncz"
  - "Martin L. Kersten"
year: 1999
venue: "The VLDB Journal 8:101-119"
arxiv: null
doi: "10.1007/s007780050076"
source: "https://ir.cwi.nl/pub/11183/11183B.pdf"
topics:
  - "column-stores"
  - "relational-algebra"
  - "binary-association-tables"
  - "query-processing"
  - "relational-ecs-queries"
seed_rank: 2580
seed_batch: "archive-2026-11-14"
reviewed: "2026-11-14"
pool: "languages"
relevance_score: 9
lineage: data-layout
cites:
  - title: "A Decomposition Storage Model"
    url: "https://doi.org/10.1145/318898.318923"
    year: 1985
    arxiv: null
    doi: "10.1145/318898.318923"
see:
  - "153-a-decomposition-storage-model"
---

# MIL Primitives for Querying a Fragmented World

## One-sentence takeaway

Monet's intermediate language MIL makes every table a set of two-column BATs (head oid, tail value) and gives them a closed, side-effect-free algebra in which many operators (reverse, mirror, mark, range-select on sorted data) cost nothing because they return views. Run-time column properties (dense, sorted, key, aligned) let each operator choose its own algorithm, leaving the front-end to decide only the logical plan.

## Why it matters here

This is the closest published ancestor of what ano is: a columnar query language whose single bulk type is a key-to-value column, where an entity table is a bundle of columns joined on a shared id. Several MIL ideas map directly onto ano and Anoptic's SoA store. A `void` column is a dense id range stored only as a base number, which is what an ECS archetype's implicit row index is. `select` returns a set of ids rather than rows, close to ano's selection-as-reference. The `[f]()` multi-join map lifts any scalar function over aligned columns, and the `{f}()` pump turns any aggregate into a grouped aggregate. The library already has the DSM (153) and MonetDB/X100 (129), but not the language layer between them.

## Key ideas

- **Binary tables only.** A BAT is a bag of [head, tail] pairs; relations are split by column, with an oid head on each column BAT, and N-ary results are never materialized inside the kernel.
- **Closed algebra.** `select`, `join`, `reverse`, `mirror`, `mark`, and the operator constructors `[f]()` (multi-join map over head-aligned BATs) and `{f}()` (pump: grouped aggregate) all take BATs and return BATs, with algebraic definitions and no side effects, so rewrite-based optimization is possible.
- **Zero-cost views.** `reverse` swaps descriptor pointers, `mirror` points both columns at the head, `mark` makes a virtual `void` column of ascending oids, and a range-select on a sorted column returns a slice of the same heap.
- **Void columns.** Dense ascending oids are computed from a stored seqbase plus array position, so they take no storage, and looking up an oid is a subtraction. The paper says this cuts BAT sizes by more than half.
- **Tactical versus strategic optimization.** The front-end fixes operator order (strategy), using intermediate-tuple counts as its target; each MIL operator then chooses its algorithm at run time (tactics) from properties kept on each column: type, dense, sorted, constant, key, align id, hash or T-tree present, plus BAT-level set and count.

## Caveats

This is the 1999 Monet design. MonetDB's later MAL and the X100/Vectorwise pipeline (card 129) replaced full materialization of every intermediate, which this paper does not address. The paper itself is mostly design: its one headline number (more than an order of magnitude faster than a commercial RDBMS on a data-mining benchmark) is cited from other Monet work, not measured here. Its single-assignment, bulk-at-a-time style assumes analytic loads, not the per-tick small updates ano also needs. I read the abstract, the introduction, the MIL language and BAT algebra sections, and the data-structure and tactical-optimization parts of the implementation section in the CWI author PDF.

## Links

- PDF: https://ir.cwi.nl/pub/11183/11183B.pdf
- DOI: https://doi.org/10.1007/s007780050076
- CWI repository page: https://ir.cwi.nl/pub/11183
