---
title: "A Conversation with Arthur Whitney"
authors:
  - "Arthur Whitney"
  - "Bryan Cantrill"
year: 2009
venue: "ACM Queue"
arxiv: null
doi: "10.1145/1531243.1531242"
source: "https://queue.acm.org/detail.cfm?id=1531242"
topics:
  - array-programming-apl-bqn-q
  - relational-ecs-queries
seed_rank: 122
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
cites:
  - title: "A Decomposition Storage Model"
    url: "https://doi.org/10.1145/318898.318923"
    year: 1985
    arxiv: null
    doi: "10.1145/318898.318923"
  - title: "What You Always Wanted to Know About Datalog (And Never Dared to Ask)"
    url: "https://doi.org/10.1109/69.43410"
    year: 1989
    arxiv: null
    doi: "10.1109/69.43410"
  - title: "Notation as a Tool of Thought"
    url: "https://doi.org/10.1145/358896.358899"
    year: 1980
    arxiv: null
    doi: "10.1145/358896.358899"
see:
  - "153-a-decomposition-storage-model"
  - "039-what-you-always-wanted-to-know-about-datalog-and-never-dared"
  - "045-notation-as-a-tool-of-thought"
---

# A Conversation with Arthur Whitney

## One-sentence takeaway

Whitney tells Cantrill that k/q/kdb+ is a ~50-primitive array language with no libraries, column-oriented since 1974, and rewritten from scratch every few years so the notation itself is the comment.

## Why it matters here

ano’s stated q/kdb analogy is this interview in miniature: columns as first-class vectors, a tiny primitive set, hot working set in RAM, and sequential column I/O — the same bets GRID COMMAND’s ECS tables have to make.

## Key ideas

- The language is the database. K has no reserved words (ASCII punctuation only); Q rewrites the monadic cases as words for sales/readability but is the same 2000-K implementation plus a ~50-op table library written in K.
- Column stores are the default: “same data type, so of course you store it by column.” Intraday tables stay time-ordered in memory; at close they sort a billion rows by instrument then time and write sequential column files. A “all IBM activity that day” query is four seeks plus a sequential read of the needed columns.
- Hot data lives in DRAM (then 128 GB for ~1B × 20–30-byte records). Realtime analytics never aggregate the firehose; they maintain 10–20 smaller state tables (book, running calcs) for O(1) or binary-search lookup.
- Notation as a tool of thought: Iverson’s matrix products (`or . and`, `+ . min`) replace an hour of nested loops. Whitney rewrites a snippet 10–20 times until it cannot get shorter; customers’ comment-to-code ratio is often > 1, his is ~0.
- He throws the C implementation away every cycle (parser, tokenizer, printer included). Semantics stay ~95% the same; memory allocation, reference-count reuse of unique vectors, and code size change under the hood. `each` is the parallel operator; there are no control structures.

## Caveats

## Links

- ACM Queue: https://queue.acm.org/detail.cfm?id=1531242
- DOI: [10.1145/1531243.1531242](https://doi.org/10.1145/1531243.1531242)
- Wayback (full text): https://web.archive.org/web/20150906033131/http://queue.acm.org/detail.cfm?id=1531242
