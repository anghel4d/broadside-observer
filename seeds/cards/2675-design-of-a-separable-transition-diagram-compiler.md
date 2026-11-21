---
title: "Design of a Separable Transition-Diagram Compiler"
authors:
  - "Melvin E. Conway"
year: 1963
venue: "Communications of the ACM 6(7), pp. 396-408"
arxiv: null
doi: "10.1145/366663.366704"
source: "https://www.melconway.com/Home/pdf/compiler.pdf"
version_reviewed: "CACM July 1963 scan (author site PDF, OCR text layer)"
topics:
  - "coroutines"
  - "compiler-construction"
  - "predictive-parsing"
  - "transition-diagrams"
  - "pipeline-stages"
  - "one-pass-compilation"
seed_rank: 2675
seed_batch: "archive-2026-11-22"
reviewed: "2026-11-22"
pool: "languages"
relevance_score: 8
lineage: programming-language-foundations
cites:
  - title: "Design of a Separable Transition-Diagram Compiler"
    url: "https://doi.org/10.1145/366663.366704"
    year: 1963
    arxiv: null
    doi: "10.1145/366663.366704"
  - title: "A Syntax Directed Compiler for ALGOL 60"
    url: "https://doi.org/10.1145/366062.366083"
    year: 1961
    arxiv: null
    doi: "10.1145/366062.366083"
---

# Design of a Separable Transition-Diagram Compiler

## One-sentence takeaway

The paper that introduced the word "coroutine": split the compiler into modules that pass discrete items along fixed one-way paths, so the same modules can run interleaved as coroutines (one pass) or one after another through tape (several passes) with only the read/write linkage changed, and parse with transition diagrams whose "No-Backup Condition" (disjoint first symbols at every node) means the parser never has to back up.

## Why it matters here

The "separable" condition is the contract for Anoptic's wait-free buses and job stages: if stages talk only through items flowing one way, a stage can run fused with its neighbour (pass one item at a time) or batched (fill a whole buffer, then hand it over) without changing the stage code. That is the streaming-vs-SoA-batch choice, written down in 1963. For ano, the No-Backup Condition is the simple test that keeps a Japanese-surface grammar predictive (one symbol of lookahead, no backtracking, early and precise error reports). The "Seventy-five Percent Rule" (make the lexer fast at the cost of space, everything else small) is a still-useful budget rule for a REPL-speed front end.

## Key ideas

- **Coroutines.** "Subroutines all at the same level, each acting as if it were the master program." On the Burroughs 220 a pair of subroutines becomes a pair of coroutines by giving each an isolated branch instruction, its *router*, and calling through the routers (`STP AROUTER; BUN BROUTER`). The router generalises the state switch a subroutine would need, shown with an asterisk-squasher example (`**` → one exponent symbol). Conway's footnote credits Joel Erdwinn with developing the idea at the same time.
- **Separability.** Modules communicate only by discrete items, along fixed one-way paths, laid out so every item moves left to right. Then A→B can run as coroutines, or A can write all its output to tape before B reads it. The compiler can therefore be split into many segment configurations: segments never come back into memory once they leave, only two working tapes are needed, and no sorting. The paper also notes that separable coroutines could run at the same time on parallel processors.
- **Lexing by character pairs.** Only 11 operationally different character classes, so the character-pair action matrix is 11×11 with 3-bit entries: eleven words on the 220.
- **Transition diagrams + linkage stack.** Each syntactic type is a diagram. The "Diagrammer" moves through it using a push-down linkage stack. The No-Backup Condition (no loops of blank paths, and disjoint sets of initial input symbols on the paths out of each node) makes the order of path tests irrelevant and removes input backup. This is recursive-descent predictive parsing in all but name.
- **One-pass code generation.** Parsing emits trailing-operator Polish. Data-name qualification is resolved with a tree table. IF/ELSE code uses TRUE/FALSE/AROUND stacks of pending branch locations and emits `FIXUP(location, target)` records that the loader patches: backpatching.
- **Evidence.** Verified on a 5,000-word Burroughs 220 at Case Institute of Technology (work done in 1961). The COBOL syntax checker ran at 140 fully punched cards per minute. A one-pass version on a 10,000-word machine is estimated, not measured, at well over 100 cards per minute.

## Caveats

This is a 1963 COBOL compiler for one machine. The coroutine linkage is self-modifying Burroughs 220 code, and the speed figures are for a syntax checker plus a projection, not a finished compiler (the project was stopped). The text was read from an OCR'd scan, so some table cells and figures were unreadable. The No-Backup Condition is stricter than it needs to be (the paper says so). Later LL(1) theory states it precisely.

## Links

- Author-hosted PDF (scan): https://www.melconway.com/Home/pdf/compiler.pdf
- DOI: https://doi.org/10.1145/366663.366704
