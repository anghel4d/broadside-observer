---
title: "Functorial Data Migration"
authors:
  - "David I. Spivak"
year: 2012
venue: "Information and Computation 217:31-51 (arXiv 2010)"
arxiv: "1009.1166"
doi: "10.1016/j.ic.2012.05.001"
source: "https://arxiv.org/abs/1009.1166"
topics:
  - categorical-databases
  - schema-mappings
  - data-migration
  - applied-category-theory
seed_rank: 2426
seed_batch: "archive-2026-10-26"
reviewed: "2026-10-26"
pool: "maths-foundations"
relevance_score: 7
lineage: foundations-of-computing
see:
  - 094-seven-sketches-in-compositionality-an-invitation-to-applied-
  - 047-a-relational-model-of-data-for-large-shared-data-banks
cites:
  - title: "Functorial Data Migration"
    url: "https://doi.org/10.1016/j.ic.2012.05.001"
    year: 2012
    arxiv: "1009.1166"
    doi: "10.1016/j.ic.2012.05.001"
---

# Functorial Data Migration

## One-sentence takeaway

Spivak models a database schema as a small category (tables as objects, foreign keys as arrows, with declared path equivalences) and an instance as a set-valued functor on it, so that any schema translation F induces three canonical migration functors — pullback Δ_F and its left and right adjoints Σ_F and Π_F — which perform projections, unions and joins over all tables at once with provable round-trip properties.

## Why it matters here

ano's columnar ECS has a schema (components, relations between entities) that will change across versions of a game and across tools, and every save file, replay and mod is an instance of some schema version. The paper gives a principled vocabulary for those changes: describe the new schema's relation to the old as a functor and derive the migration (Δ to restrict or duplicate, Σ to merge with fresh ids, Π to join) instead of hand-writing converters. It also shows how to attach typed attribute columns through a functor to a category of types, which matches ano's typed columns, and its path equivalences are a declarative form of the invariants that ano's relational hops should respect.

## Key ideas

- **Schemas as categories.** A schema is a graph of tables and foreign keys plus a path-equivalence relation saying when two foreign-key paths must agree; the category of schemas is equivalent to Cat. An instance assigns a set of rows to each table and a function to each foreign key, satisfying the equivalences.
- **Translations.** A schema morphism F : C → D sends tables to tables and foreign keys to paths, preserving path equivalences.
- **Δ_F.** Pullback along F turns a D-instance into a C-instance; it covers renaming, deleting and duplicating tables and projecting out columns.
- **Π_F and Σ_F.** Right and left adjoints of Δ_F; Π_F computes joins (a fact table built from compatible tuples), while Σ_F computes unions and automatically Skolemizes unknown values with fresh identifiers.
- **Queries.** These functors parameterise projections, unions and joins over every table simultaneously and can replace conjunctive and disjunctive queries.
- **Types.** Attribute data types are handled by a functor from the schema to a category of types for a programming language, connecting databases to functional programming; a closing dictionary translates database notions into category-theoretic ones.

## Caveats

This is a foundations paper with no implementation or performance results; cost of computing Π (a limit) and Σ (a colimit, with Skolem ids) on large instances is not addressed. Deciding consequences of declared path equivalences is a general word problem the paper does not discuss; a practical language would need to restrict schemas (e.g. to finite ones). Follow-on tooling was not reviewed for this card. Read from arXiv v4 (2013), which postdates the journal version.

## Links

- Paper (arXiv): https://arxiv.org/abs/1009.1166
- Paper (DOI, Information and Computation): https://doi.org/10.1016/j.ic.2012.05.001
