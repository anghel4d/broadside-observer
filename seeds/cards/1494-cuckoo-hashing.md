---
title: "Cuckoo Hashing"
authors: ["Rasmus Pagh", "Flemming Friche Rodler"]
year: 2001
venue: "BRICS RS-01-32 (ESA 2001; J. Algorithms 2004)"
arxiv: null
doi: "10.1016/j.jalgor.2003.12.002"
source: "https://www.brics.dk/RS/01/32/BRICS-RS-01-32.pdf"
topics: [lockfree, engine]
seed_rank: 1494
seed_batch: "archive-2026-09-02"
reviewed: "2026-09-02"
pool: "engines"
relevance_score: 10
lineage: concurrent-data-structures
cites:
  - title: "Hopscotch Hashing"
    url: "https://doi.org/10.1007/978-3-540-87779-0_24"
    year: 2008
    arxiv: null
    doi: "10.1007/978-3-540-87779-0_24"
  - title: "The Adaptive Radix Tree: ARTful Indexing for Main-Memory Databases"
    url: "https://doi.org/10.1109/ICDE.2013.6544812"
    year: 2013
    arxiv: null
    doi: "10.1109/ICDE.2013.6544812"
  - title: "Storing a Sparse Table with O(1) Worst Case Access Time"
    url: "https://doi.org/10.1145/828.1884"
    year: 1984
    arxiv: null
    doi: "10.1145/828.1884"
  - title: "Ideal Hash Trees"
    url: "https://lampwww.epfl.ch/papers/idealhashtrees.pdf"
    year: 2001
    arxiv: null
    doi: null
see:
  - "400-hopscotch-hashing"
  - "836-the-adaptive-radix-tree-artful-indexing-for-main-memory-data"
---

# Cuckoo Hashing

## One-sentence takeaway

Give every key two candidate slots in two tables; on insert, displace the occupant ("cuckoo") along a path until a hole appears — lookups inspect at most two locations, worst-case O(1).

## Why it matters here

ano maps and Anoptic entity indexes want open addressing that does not degrade to a probe sequence. Hopscotch (400) keeps keys in a neighbourhood bitmap; ART (836) is the ordered radix leftover; Swiss tables SIMD the hopscotch idea. Cuckoo is the *two-choice displacement* leftover: a `contains` is two loads, full stop. Use it when the hot path is lookup-heavy (intern tables, GRID COMMAND unit-id maps) and you can live with a ~50% load factor or a stash.

## Key ideas

- **Two tables, two hashes.** Key `x` lives in `T1[h1(x)]` or `T2[h2(x)]`. Lookup is two probes; delete is the same plus a tombstone-free overwrite.
- **Insert by displacement.** If both slots are full, kick one occupant to its alternate table and repeat. A cycle (or a max-kick bound) triggers a rehash with new hash functions.
- **Load and space.** With two tables the analysis needs load below 1/2 for expected O(1) insert; later d-ary / stash variants raise that. FKS perfect hashing (1984) is the information-theoretic ancestor, not the practical algorithm.
- **Evidence.** BRICS RS-01-32 (2001), ESA 2001, *Journal of Algorithms* 51(2) 2004, doi `10.1016/j.jalgor.2003.12.002`. Author PDF at BRICS. Hopscotch 2008 cites this paper as the open-addressing rival.

## Caveats

Concurrent cuckoo (NSW, MemC3, libcuckoo) is a later cell — this paper is sequential. Insert tails and rehash pauses are the cost of O(1) lookup; hopscotch and Swiss tables win at 80–90% load. Two poor hashes make displacement chains explode. Not a remint of hopscotch 400, ART 836, or Bagwell HAMT 1463 (trie, not open addressing).

## Links

- PDF: https://www.brics.dk/RS/01/32/BRICS-RS-01-32.pdf
- DOI: https://doi.org/10.1016/j.jalgor.2003.12.002
