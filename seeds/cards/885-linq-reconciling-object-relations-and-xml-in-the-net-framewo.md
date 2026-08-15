---
title: "LINQ: Reconciling Object, Relations and XML in the .NET Framework"
authors:
- Erik Meijer
- Brian Beckman
- Gavin Bierman
year: 2006
venue: SIGMOD
arxiv: null
doi: 10.1145/1142473.1142552
source: "https://doi.org/10.1145/1142473.1142552"
topics:
- linq
- typed-sql
- language-integrated-query
- type-safety
seed_rank: 885
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites: []
---

# LINQ: Reconciling Object, Relations and XML in the .NET Framework

## One-sentence takeaway

LINQ reifies C# comprehensions as expression trees so the same query syntax can execute in-process or be translated by a provider into SQL or XQuery, with types flowing across the boundary.

## Why it matters here

Canonical typed embedding of query into a general-purpose language — the pattern Broadside would copy if GRID COMMAND grew a typed query DSL that sometimes runs locally and sometimes becomes SQL/DataFusion.

## Key ideas

- Query comprehensions desugar to standard monadic operators (`Select`, `Where`, `SelectMany`, `GroupBy`) over `IEnumerable` / `IQueryable`.
- `Expression<T>` trees are the AST the provider inspects; this is what makes the same lambda a delegate *or* a remote plan.
- Provider model: LINQ to Objects, LINQ to SQL, LINQ to XML share the surface and swap the back end.
- Standard sequence operators plus deferred execution mean composition is just function composition until enumeration.
- SIGMOD 2006 (DOI 10.1145/1142473.1142552), not OOPSLA; a related OOPSLA companion is Meijer's VB9 talk.

## Caveats

## Links

- DOI: [10.1145/1142473.1142552](https://doi.org/10.1145/1142473.1142552)
