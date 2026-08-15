---
title: "Go To Statement Considered Harmful"
authors:
  - "Edsger W. Dijkstra"
year: 1968
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/362929.362947"
source: "https://doi.org/10.1145/362929.362947"
topics:
  - structured-programming
  - dijkstra
  - control-flow
seed_rank: 585
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: foundations-of-computing
cites:
  - title: "Flow Diagrams, Turing Machines and Languages with Only Two Formation Rules"
    url: "https://doi.org/10.1145/355592.365646"
    year: 1966
    arxiv: null
    doi: "10.1145/355592.365646"
  - title: "Notes on Structured Programming"
    url: "https://www.cs.utexas.edu/users/EWD/ewd02xx/EWD249.PDF"
    year: 1970
    arxiv: null
    doi: null
see:
  - "625-flow-diagrams-turing-machines-and-languages-with-only-two-fo"
  - "589-notes-on-structured-programming"
---

# Go To Statement Considered Harmful

## One-sentence takeaway

Dijkstra's letter argues that unrestrained `goto` makes a program's progress unrelatable to a static textual index, wrecking human understanding.

## Why it matters here

ano and engine control flow are readable only when the coordinate system is the text. This March 1968 CACM letter is why that is treated as a moral fact.

## Key ideas

- A programmer's understanding needs a discrete coordinate: textual position plus a bounded set of indices (loop counters, call stack).
- `goto` lets the dynamic instruction pointer wander off that coordinate system; the more gotos, the worse the mismatch.
- Böhm–Jacopini already showed sequence, selection, and iteration suffice; the letter is about epistemology, not computability.
- Published as a letter to the editor (CACM 11(3):147–148), titled by Niklaus Wirth, not by Dijkstra.
- Knuth's 1974 survey is the measured reply; Dijkstra's own *Notes* develop the constructive alternative.

## Caveats

## Links

- DOI: [10.1145/362929.362947](https://doi.org/10.1145/362929.362947)
- URL: https://doi.org/10.1145/362929.362947
