---
title: "Notes on Structured Programming"
authors:
  - "Edsger W. Dijkstra"
year: 1970
venue: "T.H. Eindhoven report / later in Structured Programming (Academic Press 1972)"
arxiv: null
doi: null
source: "https://www.cs.utexas.edu/users/EWD/ewd02xx/EWD249.PDF"
topics:
  - structured-programming
  - dijkstra
  - methodology
seed_rank: 589
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "Go To Statement Considered Harmful"
    url: "https://doi.org/10.1145/362929.362947"
    year: 1968
    arxiv: null
    doi: "10.1145/362929.362947"
  - title: "A Discipline of Programming"
    url: "https://research.tue.nl/en/publications/a-discipline-of-programming/"
    year: 1976
    arxiv: null
    doi: null
see:
  - "585-go-to-statement-considered-harmful"
  - "590-a-discipline-of-programming"
---

# Notes on Structured Programming

## One-sentence takeaway

EWD249 turns the goto letter into a constructive discipline: stepwise refinement, program families, and structure as the way we keep programs in our heads.

## Why it matters here

Broadside language craft — small, refinable units with a clear coordinate system — is this methodology, not only the 1968 slogan.

## Key ideas

- A program is developed as a sequence of refinements from a problem statement, each step leaving a still-correct abstract program.
- Structure (sequencing, selection, repetition, procedures) is chosen so the text remains the understanding coordinate.
- Program families: one designs a set of related programs, not a single brittle artifact.
- Circulated 1970 as EWD249; printed with Dahl and Hoare in *Structured Programming* (Academic Press, 1972).
- *A Discipline of Programming* later supplies the predicate-transformer calculus behind the same craft.

## Caveats

## Links

- URL: https://www.cs.utexas.edu/users/EWD/ewd02xx/EWD249.PDF
