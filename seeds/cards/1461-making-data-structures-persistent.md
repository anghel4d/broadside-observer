---
title: "Making Data Structures Persistent"
authors: ["James R. Driscoll", "Neil Sarnak", "Daniel D. Sleator", "Robert E. Tarjan"]
year: 1989
venue: "Journal of Computer and System Sciences"
arxiv: null
doi: "10.1016/0022-0000(89)90034-2"
source: "https://doi.org/10.1016/0022-0000(89)90034-2"
topics: [array-programming-apl-bqn-q, embedded-scripting-dsls, typed-programming-systems]
seed_rank: 1461
seed_batch: "archive-2026-08-30"
reviewed: "2026-08-30"
pool: "languages"
relevance_score: 10
lineage: persistent-data-structures
cites:
  - title: "Making Data Structures Persistent"
    url: "https://doi.org/10.1145/12130.12142"
    year: 1986
    arxiv: null
    doi: "10.1145/12130.12142"
  - title: "Finger Trees: A Simple General-purpose Data Structure"
    url: "https://doi.org/10.1017/S0956796805005769"
    year: 2006
    arxiv: null
    doi: "10.1017/S0956796805005769"
  - title: "Self-Adjusting Binary Search Trees"
    url: "https://doi.org/10.1145/3828.3835"
    year: 1985
    arxiv: null
    doi: "10.1145/3828.3835"
see:
  - "1441-finger-trees-a-simple-general-purpose-data-structure"
  - "1101-the-zipper"
  - "766-self-adjusting-binary-search-trees"
---

# Making Data Structures Persistent

## One-sentence takeaway

Fat nodes and path copying turn ephemeral pointer structures into persistent ones — every version stays queryable, updates share structure, and the slowdown is O(1) or O(log n) rather than a full copy.

## Why it matters here

ano wants immutable columnar values with undo, forks, and cheap edits. Finger Trees (1441) and the Zipper (1101) are the sequence/cursor APIs; this JCSS paper is the theorem those APIs sit on. Partial persistence (old versions read-only), full persistence (any version updatable), and the later confluence story are the vocabulary for ano maps, ropes, and ECS snapshots. Do not copy the world on every script write.

## Key ideas

- **Ephemeral vs persistent.** Ordinary structures destroy the old version on update. Persistent ones keep every version; fully persistent ones allow updates to any version.
- **Fat nodes.** Store a bounded log of field values per node, timestamped; access walks the log. Amortized O(1) slowdown for partial persistence of pointer machines.
- **Path copying.** Copy the nodes on the update path (plus parents); siblings are shared. The method everyone actually ships in functional maps and HAMTs.
- **Evidence.** STOC 1986, JCSS 38(1) 1989. Planar point location is the classic application. Finger trees, ropes, and HAMTs are instances, not competitors.

## Caveats

Confluent persistence (combining versions) is a harder, later cell — Kaplan–Okasaki–Tarjan deques, not this paper. Fat nodes have worse constants in practice than path copying on modern heaps. Persistence is not free on a mutating C ECS: you still choose which columns are versioned. Not a remint of splay trees (766) or Finger Trees (1441).

## Links

- DOI (JCSS 1989): https://doi.org/10.1016/0022-0000(89)90034-2
- STOC 1986: https://doi.org/10.1145/12130.12142
