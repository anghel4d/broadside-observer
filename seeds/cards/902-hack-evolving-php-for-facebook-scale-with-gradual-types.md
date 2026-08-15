---
title: "Hack: a new programming language for HHVM"
authors:
- Julien Verlaguet
- Alok Menghrajani
year: 2014
venue: Engineering at Meta
arxiv: null
doi: null
source: "https://engineering.fb.com/2014/03/20/developer-tools/hack-a-new-programming-language-for-hhvm/"
topics:
- hack
- gradual-typing
- php
- type-safety
seed_rank: 902
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  []
---

# Hack: a new programming language for HHVM

## One-sentence takeaway

Hack is a gradually typed PHP dialect on HHVM: annotate incrementally, keep untyped interop, and get a filesystem-watching checker that usually answers in under 200 ms.

## Why it matters here

This is the migratory-typing playbook at the scale Anoptic would hit if ano or a PHP/JS service grew a types layer: mixed files, runtime enforcement of leftover annotations, and a resident checker so twice-a-day deploys do not wait on a batch typecheck.

## Key ideas

- Gradual typing: function signatures and class members take annotations; the rest is inferred; unannotated values are dynamically typed and interoperate with typed code.
- Features layered on PHP: generics, nullable types, aliases, constraints, collections (`map`/`filter`), lambdas that close over enclosing variables without an explicit `use` list.
- Runtime enforcement of parameter and return types (including scalars) both catches migration holes and lets HHVM’s JIT trust annotations.
- The checker is a local server that keeps the program in memory and updates on filesystem events; typical runs are under 200 ms.
- Facebook migrated nearly its entire PHP tree in about a year with organic adoption plus automated refactoring tools shipped with Hack; HHVM still runs unmodified PHP-5.

## Caveats

## Links

- Announcement: https://engineering.fb.com/2014/03/20/developer-tools/hack-a-new-programming-language-for-hhvm/
- Language site: https://hacklang.org/
