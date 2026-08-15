---
title: "Guarded Commands, Nondeterminacy and Formal Derivation of Programs"
authors:
  - "Edsger W. Dijkstra"
year: 1975
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/360933.360975"
source: "https://doi.org/10.1145/360933.360975"
topics:
  - guarded-commands
  - nondeterminism
  - dijkstra
seed_rank: 591
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "A Discipline of Programming"
    url: "https://research.tue.nl/en/publications/a-discipline-of-programming/"
    year: 1976
    arxiv: null
    doi: null
  - title: "An Axiomatic Basis for Computer Programming"
    url: "https://doi.org/10.1145/363235.363259"
    year: 1969
    arxiv: null
    doi: "10.1145/363235.363259"
see:
  - "590-a-discipline-of-programming"
  - "592-an-axiomatic-basis-for-computer-programming"
---

# Guarded Commands, Nondeterminacy and Formal Derivation of Programs

## One-sentence takeaway

Dijkstra introduces `if`/`do` with guarded alternatives so nondeterminacy becomes a structured control form with weakest-precondition semantics.

## Why it matters here

Nondeterministic choice in planners and concurrent engines is not chaos if each guard has a calculus. This 1975 CACM paper is that notation.

## Key ideas

- A guarded command is `B → S`: `S` may be executed only when Boolean `B` holds.
- `if B0 → S0  □  B1 → S1  fi` fails if no guard is true; if several are, one is chosen.
- `do … od` repeats as long as some guard holds; termination is proved, not hoped.
- Weakest preconditions for these constructs are given explicitly; programs are derived from postconditions.
- Manuscript EWD472 (27 Jan 1975); printed CACM 18(8):453–457. The 1976 book expands the same system.

## Caveats

## Links

- DOI: [10.1145/360933.360975](https://doi.org/10.1145/360933.360975)
- URL: https://doi.org/10.1145/360933.360975
