---
title: "Stream Fusion: From Lists to Streams to Nothing at All"
authors:
  - "Duncan Coutts"
  - "Roman Leshchinskiy"
  - "Don Stewart"
year: 2007
venue: "ICFP"
arxiv: null
doi: "10.1145/1291151.1291199"
source: "https://doi.org/10.1145/1291151.1291199"
topics:
  - "stream-fusion"
  - "deforestation"
  - "array-compilation"
  - "shortcut-fusion"
seed_rank: 1075
seed_batch: "archive-2026-08-18"
reviewed: "2026-08-18"
pool: "languages"
relevance_score: 10
lineage: stream-fusion
cites:
  - title: "Deforestation: transforming programs to eliminate trees"
    url: "https://doi.org/10.1016/0020-0190(90)90147-A"
    year: 1990
    arxiv: null
    doi: "10.1016/0020-0190(90)90147-A"
  - title: "A Short Cut to Deforestation"
    url: "https://doi.org/10.1145/165180.165214"
    year: 1993
    arxiv: null
    doi: "10.1145/165180.165214"
  - title: "Futhark: Purely Functional GPU-Programming with Nested Parallelism and In-Place Array Updates"
    url: "https://doi.org/10.1145/3062341.3062354"
    year: 2017
    arxiv: null
    doi: "10.1145/3062341.3062354"
  - title: "Single Assignment C: Efficient Support for High-Level Array Operations in a Functional Setting"
    url: "https://doi.org/10.1017/S0956796802004458"
    year: 2003
    arxiv: null
    doi: "10.1017/S0956796802004458"
  - title: "An APL Machine"
    url: "https://doi.org/10.2172/1453880"
    year: 1970
    arxiv: null
    doi: "10.2172/1453880"
see:
  - "1002-futhark-purely-functional-gpu-programming"
  - "1044-single-assignment-c-efficient-support-for-high-level-array-operations"
  - "1072-an-apl-machine"
  - "141-nesl-a-nested-data-parallel-language-version-3-1"
  - "666-the-essence-of-compiling-with-continuations"
  - "1003-finally-tagless-partially-evaluated"
---

# Stream Fusion: From Lists to Streams to Nothing at All

## One-sentence takeaway

Turn lists into non-recursive `Stream` steppers (`Done` / `Yield` / `Skip`), cancel `stream ∘ unstream` by a rewrite rule, and let the ordinary inliner + case-of-case + constructor specialization erase the pipeline into a tight loop.

## Why it matters here

SAC (1044) and Futhark (1002) are the array-language cards; Abrams (1072) is beating/drag-along. Stream fusion is the 2007 *compiler* recipe ano can actually steal: fusible zips, left folds, `concatMap`, and list comprehensions, which build/foldr and destroy/unfoldr could not all take. ano's array pipelines and GRID COMMAND's "filter then zip then prefix" queries should compile to nothing-at-all, not a chain of temps.

## Key ideas

- `Stream` is an existential unfold with an explicit `Skip` so every stepper can be non-recursive (filter does not loop in `next`).
- The only rewrite rule is `stream (unstream s) → s`; actual fusion is GHC's general optimiser on the resulting non-recursive pipeline.
- `Skip` + sum-typed state encode control flow (append, zip, concatMap) without nested recursion in steppers.
- Nested lists / comprehensions become concatMap pipelines; constructor specialization + static-argument / PAP specialization flatten them.
- Full Haskell List library reimplemented; more fusion sites than build/foldr, especially left folds and zips.

## Caveats

- Correctness is modulo `Skip` and a carefully unlifted `Stream` (they do not export bottoms). Not a paper with a full proof.
- Deeply nested concatMap needed GHC optimiser extensions; 2007 results still leave Step residue on some nofib programs.
- "Stream Fusion, to Completeness" (2016, 1612.06668) is the later "always fuses" follow-on — not reminted.

## Links

- DOI: [10.1145/1291151.1291199](https://doi.org/10.1145/1291151.1291199)
- PDF: https://www.cs.tufts.edu/~nr/cs257/archive/duncan-coutts/stream-fusion.pdf
