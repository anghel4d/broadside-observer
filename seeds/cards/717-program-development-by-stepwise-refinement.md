---
title: "Program Development by Stepwise Refinement"
authors:
  - "Niklaus Wirth"
year: 1971
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/362575.362577"
source: "https://doi.org/10.1145/362575.362577"
topics:
  - wirth
  - stepwise-refinement
  - structured-programming
  - methodology
seed_rank: 717
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Notes on Structured Programming"
    url: "https://www.cs.utexas.edu/users/EWD/ewd02xx/EWD249.PDF"
    year: 1970
    arxiv: null
    doi: null
  - title: "An Axiomatic Basis for Computer Programming"
    url: "https://doi.org/10.1145/363235.363259"
    year: 1969
    arxiv: null
    doi: "10.1145/363235.363259"
  - title: "Assigning Meanings to Programs"
    url: "https://doi.org/10.1090/psapm/019/0235771"
    year: 1967
    arxiv: null
    doi: "10.1090/psapm/019/0235771"
see:
  - "589-notes-on-structured-programming"
  - "592-an-axiomatic-basis-for-computer-programming"
  - "626-assigning-meanings-to-programs"
---

# Program Development by Stepwise Refinement

## One-sentence takeaway

A program is developed by successive refinement of both control structure and data, each step replacing a named action by a more detailed one until the text is executable.

## Why it matters here

GRID COMMAND, agent scripts, and engine subsystems are written the same way Wirth demonstrates: start from a named intention (“resolve visibility”, “plan a path”), refine the data and the steps, and keep the structure visible. This is the methodology card beside Dijkstra’s structured-programming notes and Hoare’s axioms.

## Key ideas

- Refinement is simultaneous on algorithms and data representations, not a later “optimize the structs” pass.
- Each refinement step should be small enough that its correctness is locally obvious; the 8-queens development is the worked example.
- Clarity of structure is an engineering goal, not a comment style — the program text *is* the design history.
- The paper sits in the structured-programming moment with Dijkstra EWD249 and Hoare/Floyd meanings of programs.
- CACM 14(4), April 1971, pp. 221–227.

## Caveats

## Links

- DOI: [10.1145/362575.362577](https://doi.org/10.1145/362575.362577)
- ACM: https://dl.acm.org/doi/10.1145/362575.362577
