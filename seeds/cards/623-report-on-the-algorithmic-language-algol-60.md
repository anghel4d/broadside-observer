---
title: "Report on the Algorithmic Language ALGOL 60"
authors:
  - "J. W. Backus"
  - "F. L. Bauer"
  - "J. Green"
  - "C. Katz"
  - "J. McCarthy"
  - "P. Naur"
  - "A. J. Perlis"
  - "H. Rutishauser"
  - "K. Samelson"
  - "B. Vauquois"
  - "J. H. Wegstein"
  - "A. van Wijngaarden"
  - "M. Woodger"
year: 1960
venue: "Communications of the ACM / Numerische Mathematik"
arxiv: null
doi: "10.1145/367236.367262"
source: "https://doi.org/10.1145/367236.367262"
topics:
  - algol60
  - bnf
  - backus-naur
  - language-design
seed_rank: 623
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: foundations-of-computing
cites:
  - title: "The Syntax and Semantics of the Proposed International Algebraic Language of the Zurich ACM-GAMM Conference"
    url: "https://www.softwarepreservation.org/projects/ALGOL/paper/Backus-Syntax_and_Semantics_of_Proposed_IAL.pdf"
    year: 1959
    arxiv: null
    doi: null
  - title: "The FORTRAN Automatic Coding System"
    url: "https://doi.org/10.1145/1455567.1455599"
    year: 1957
    arxiv: null
    doi: "10.1145/1455567.1455599"
see:
  - "624-the-syntax-and-semantics-of-the-proposed-international-algeb"
  - "622-the-fortran-automatic-coding-system"
---

# Report on the Algorithmic Language ALGOL 60

## One-sentence takeaway

The Algol 60 report defines a block-structured, recursive language *and* the metalanguage (BNF) used to define it, becoming the template for every later language definition.

## Why it matters here

Mother language of PL design. Ano’s nested scopes, call-by-name-vs-value debates, and any grammar we write down in BNF/EBNF are Algol 60 descendants; Naur’s editorial shaping is why the report is readable.

## Key ideas

- Backus–Naur Form as the official syntax notation (refining Backus’s 1959 IAL metalanguage).
- Block structure, nested scopes, and recursive procedures as standard features.
- Call by name (thunks) as the default parameter mechanism — the feature Landin and later Plotkin have to explain.
- Joint CACM 3(5) / *Numerische Mathematik* 2 publication, 1960; Peter Naur editor.

## Caveats

## Links

- DOI: [10.1145/367236.367262](https://doi.org/10.1145/367236.367262)
