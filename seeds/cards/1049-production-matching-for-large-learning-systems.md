---
title: "Production Matching for Large Learning Systems"
authors: ["Robert B. Doorenbos"]
year: 1995
venue: "PhD thesis, Carnegie Mellon University"
arxiv: null
doi: null
source: "http://reports-archive.adm.cs.cmu.edu/anon/1995/CMU-CS-95-113.pdf"
topics: [rete-ul, production-systems, soar, grid-command]
seed_rank: 1049
seed_batch: "archive-2026-08-16"
reviewed: "2026-08-16"
pool: "languages"
relevance_score: 9
lineage: rete-ul
cites:
  - title: "Rete: A Fast Algorithm for the Many Pattern/Many Object Pattern Match Problem"
    url: "https://doi.org/10.1016/0004-3702(82)90020-0"
    year: 1982
    arxiv: null
    doi: "10.1016/0004-3702(82)90020-0"
  - title: "TREAT: A Better Match Algorithm for AI Production Systems"
    url: "https://cdn.aaai.org/AAAI/1987/AAAI87-008.pdf"
    year: 1987
    arxiv: null
    doi: null
  - title: "OPS5 User's Manual"
    url: "https://doi.org/10.1184/R1/6608309.v1"
    year: 1981
    arxiv: null
    doi: null
see:
  - "042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte"
  - "1004-treat-a-better-match-algorithm-for-ai-production-systems"
  - "155-ops5-user-s-manual"
---

# Production Matching for Large Learning Systems

## One-sentence takeaway

Rete (and TREAT) go linear in the number of rules once a learner mints 10⁵ productions; Rete/UL removes the two dominant causes so match cost stays flat.

## Why it matters here

GRID COMMAND is NL soldier orders over a production/trigger matcher. Last Archive minted TREAT (1004) on top of Rete (042) and OPS5 (155). Doorenbos 1995 is the missing scale paper: Soar-class systems that *learn* rules until the matcher is the utility problem. Rete/UL is a general extension of Rete, not a SOAR-only hack — the right next card after TREAT.

## Key ideas

- Utility problem: machine learning adds productions until match time dominates, so "learning" slows the system.
- On diverse testbeds with ≥100,000 rules, best-then matchers (Rete, TREAT) cost linear in rule count.
- Two dominant linear causes are identified and eliminated; a third remains in one testbed and is much weaker.
- Rete/UL = Rete + those changes. Empirically, linear slowdown disappears in all but one system and is reduced there.
- CMU-CS-95-113, advised by Jill Fain Lehman; chapter 2 is the standard modern exposition of Rete internals (the one CLIPS implementers still point at).

## Caveats

- A thesis, not a 12-page conference paper; the algorithm is the contribution, the Soar framing is context.
- Last cycle already rejected SOAR (Laird/Newell) as architecture; this is the *matcher*, not the cognitive architecture.
- CLIPS NASA manuals are banned as manuals; Doorenbos is the paper-shaped production-system gem instead.

## Links

- CMU TR: http://reports-archive.adm.cs.cmu.edu/anon/1995/CMU-CS-95-113.pdf
- CMU CSD: https://csd.cmu.edu/academics/doctoral/degrees-conferred/robert-b-doorenbos
