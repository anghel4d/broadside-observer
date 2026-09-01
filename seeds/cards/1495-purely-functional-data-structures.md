---
title: "Purely Functional Data Structures"
authors: ["Chris Okasaki"]
year: 1996
venue: "CMU-CS-96-177 PhD thesis (CUP book 1998)"
arxiv: null
doi: "10.1017/CBO9780511530104"
source: "https://www.cs.cmu.edu/~rwh/students/okasaki.pdf"
topics: [array-programming-apl-bqn-q, embedded-scripting-dsls, typed-programming-systems]
seed_rank: 1495
seed_batch: "archive-2026-09-02"
reviewed: "2026-09-02"
pool: "languages"
relevance_score: 10
lineage: persistent-data-structures
cites:
  - title: "Making Data Structures Persistent"
    url: "https://doi.org/10.1016/0022-0000(89)90034-2"
    year: 1989
    arxiv: null
    doi: "10.1016/0022-0000(89)90034-2"
  - title: "Finger Trees: A Simple General-purpose Data Structure"
    url: "https://doi.org/10.1017/S0956796805005769"
    year: 2006
    arxiv: null
    doi: "10.1017/S0956796805005769"
  - title: "Ropes: An Alternative to Strings"
    url: "https://doi.org/10.1002/spe.4380251203"
    year: 1995
    arxiv: null
    doi: "10.1002/spe.4380251203"
  - title: "Ideal Hash Trees"
    url: "https://lampwww.epfl.ch/papers/idealhashtrees.pdf"
    year: 2001
    arxiv: null
    doi: null
see:
  - "1461-making-data-structures-persistent"
  - "1462-ropes-an-alternative-to-strings"
  - "1463-ideal-hash-trees"
  - "1441-finger-trees-a-simple-general-purpose-data-structure"
---

# Purely Functional Data Structures

## One-sentence takeaway

Lazy rebuilding and numerical representations (binary, skew binary, lazy binomial) turn ephemeral amortised structures into persistent ones whose debit is paid even when old versions stay live — the bag of tricks Finger Trees, HAMTs, and ropes specialise.

## Why it matters here

ano immutable columns need this vocabulary before picking a spine. Driscoll (1461) is the pointer-machine theorem (fat nodes / path copying). Okasaki is the *functional* engineering manual: how to keep amortised bounds honest under persistence, how to schedule suspensions so a queue is worst-case, how a number system picks a tree shape. Finger Trees (1441) are the measured-sequence specialisation; ropes (1462) the string specialisation; HAMTs (1463) the map specialisation. Do not invent a fourth ad-hoc persistent vector without this language.

## Key ideas

- **Persistence breaks naive amortisation.** A debit left on a node can be forced many times if that version is shared. The banker's and physicist's methods have to be restated so unpaid work is not duplicated across versions.
- **Lazy rebuilding.** Rebuild in the background (a stream of suspensions) instead of a stop-the-world copy; real-time queues/deques follow once the schedule is forced at a matching rate.
- **Numerical representations.** Complete binary trees ↔ binary numbers, skew-binary random-access lists, lazy binomial heaps — increment/decrement of the number is cons/tail of the structure. Pick the number system for the bound you need.
- **Evidence.** CMU-CS-96-177 PhD thesis, 1996; Cambridge University Press book 1998 (doi `10.1017/CBO9780511530104`). Author PDF via CMU. Still the standard first citation for "persistent amortised."

## Caveats

The thesis is lazy-ML/Haskell-shaped; a strict C ECS pays for thunks you do not have — schedule explicitly or use a strict analogue (batched rebuilding, chunked ropes). Confluent persistence (Kaplan–Okasaki–Tarjan deques) is a later cell. Not a remint of Driscoll 1461, ropes 1462, HAMT 1463, or Finger Trees 1441; those papers instantiate this toolkit.

## Links

- PDF: https://www.cs.cmu.edu/~rwh/students/okasaki.pdf
- DOI (CUP book): https://doi.org/10.1017/CBO9780511530104
- CMU tech report: https://www.cs.cmu.edu/afs/cs/project/pscico-guyb/realworld/www/okasaki96.html
