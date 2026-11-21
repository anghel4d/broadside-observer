---
title: "PostgreSQL 19 Released"
authors:
  - "PostgreSQL Global Development Group"
year: 2026
venue: "PostgreSQL release announcement, 19 Nov 2026"
arxiv: null
doi: null
source: "https://www.postgresql.org/about/news/postgresql-19-released-3449/"
version_reviewed: "web 2026-11-19"
topics:
  - "postgresql"
  - "contemporary-databases"
  - "table-bloat"
  - "query-planning"
  - "plan-stability"
  - "asynchronous-io"
  - "logical-replication"
seed_rank: 2674
seed_batch: "craft-2026-11-21"
reviewed: "2026-11-21"
pool: "systems"
relevance_score: 7
lineage: contemporary-databases
see:
  - "850-serializable-snapshot-isolation-in-postgresql"
  - "874-duckdb-an-embeddable-analytical-database"
cites:
  - title: "PostgreSQL 19 Released"
    url: "https://www.postgresql.org/about/news/postgresql-19-released-3449/"
    year: 2026
    arxiv: null
    doi: null
---

# PostgreSQL 19 Released

## One-sentence takeaway

PostgreSQL 19 adds REPACK (CONCURRENTLY) to remove table bloat and re-cluster without blocking reads or writes, pg_plan_advice for pinning query plans, INSERT ... ON CONFLICT DO SELECT for get-or-create in one round trip, WAIT FOR LSN for read-your-writes on standbys, and planner changes such as eager aggregation before joins.

## Why it matters here

Postgres is the reference contemporary database that ano's relational side (joins, upserts, standing rules) gets compared against. Several 19 features map onto ano design questions: get-or-create as a single command, a small language for plan hints instead of letting the planner change plans silently, aggregating before joining, and compacting a live table without stopping writers (like compacting live ECS archetype columns).

## Key ideas

- **REPACK.** Reclaims bloat and can reorder a table to match an index; REPACK (CONCURRENTLY) does it without blocking reads or writes, replacing VACUUM FULL and CLUSTER.
- **Plan stability.** pg_plan_advice adds a 'plan advice' mini-language to fix or try plan choices; pg_stash_advice stores advice and applies it by query identifier, without changing the application.
- **Developer features.** INSERT ... ON CONFLICT DO SELECT returns existing conflicting rows (get-or-create); IGNORE NULLS for lead/lag/first_value/last_value/nth_value; COPY to JSON.
- **Planner and speed.** Faster foreign-key checks (nearly 2x on bulk inserts in their tests), NOT IN rewritten to anti-joins when no NULLs are present, eager aggregation before joins, self-tuning async I/O worker pool; JIT now off by default because its cost estimates were unreliable.
- **Replication and vacuum.** WAIT FOR LSN for read-your-writes on standbys; automatic logical WAL level; sequence replication; parallel index vacuuming in autovacuum and a new table-priority scoring.

## Caveats

Written from the release announcement only, not the full release notes or code. Speed figures are the project's own ('nearly 2x' in testing) without benchmark details. These are product features rather than new techniques; the useful part for us is the design choices, not the numbers.

## Links

- Release announcement: https://www.postgresql.org/about/news/postgresql-19-released-3449/
- Release notes: https://www.postgresql.org/docs/release/19.0/
