---
title: "Assigning Meanings to Programs"
authors:
  - "Robert W. Floyd"
year: 1967
venue: "In Mathematical Aspects of Computer Science (AMS)"
arxiv: null
doi: null
source: "https://people.eecs.berkeley.edu/~necula/Papers/FloydMeaning.pdf"
topics:
  - floyd-hoare
  - verification
  - assertions
seed_rank: 626
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: foundations-of-computing
cites:
  - title: "Checking a Large Routine"
    url: "https://www.turingarchive.org/browse.php/b/8"
    year: 1949
    arxiv: null
    doi: null
  - title: "Towards a Mathematical Science of Computation"
    url: "https://www-formal.stanford.edu/jmc/towards.html"
    year: 1962
    arxiv: null
    doi: null
see:
  - "523-checking-a-large-routine"
  - "578-towards-a-mathematical-science-of-computation"
---

# Assigning Meanings to Programs

## One-sentence takeaway

Floyd annotates flowchart commands with inductive assertions so that a program’s partial correctness is a finite set of verification conditions on those assertions.

## Why it matters here

Direct predecessor of Hoare 1969 and of every “assert in the engine / ano IR” story. Turing 1949 already wanted this; Floyd makes the method a proof system on flowcharts.

## Key ideas

- Attach a predicate to each flowchart arc; the command between two arcs must make the outgoing assertion follow from the incoming one.
- Assignment, branching, and loops each have a local verification condition (the loop needs an invariant).
- Partial correctness: if the program terminates, the postcondition holds; termination is a separate argument.
- AMS *Mathematical Aspects of Computer Science* (1967). Necula’s scan is the usual open PDF.

## Caveats

## Links

- PDF: https://people.eecs.berkeley.edu/~necula/Papers/FloydMeaning.pdf
