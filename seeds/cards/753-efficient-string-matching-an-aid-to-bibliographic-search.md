---
title: "Efficient String Matching: An Aid to Bibliographic Search"
authors:
- Alfred V. Aho
- Margaret J. Corasick
year: 1975
venue: Communications of the ACM
arxiv: null
doi: 10.1145/360825.360855
source: "https://doi.org/10.1145/360825.360855"
topics:
- string-matching
- aho-corasick
seed_rank: 753
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites: []
see: []
---

# Efficient String Matching: An Aid to Bibliographic Search

## One-sentence takeaway

Aho–Corasick builds a keyword trie with KMP-style failure links so a set of patterns is recognized in one left-to-right pass over the text, linear in text length plus pattern size plus reported matches.

## Why it matters here

Dictionary matching is the right primitive for GRID COMMAND multi-token orders, Broadside keyword radar, and engine content scanners that must hit many needles without one search per needle.

## Key ideas

- Patterns are inserted into a trie; a failure function on trie nodes plays the role of the KMP prefix table for the whole dictionary.
- Output links let a node report every pattern that ends at the current text position, including patterns that are suffixes of a longer match.
- After $O(\sum |p_i|)$ preprocessing, each text character causes a bounded number of automaton steps.
- The original motivation is bibliographic search: scan a document once against a large controlled vocabulary.

## Caveats

## Links

- DOI: [10.1145/360825.360855](https://doi.org/10.1145/360825.360855)
- URL: https://doi.org/10.1145/360825.360855
