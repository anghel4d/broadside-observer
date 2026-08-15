---
title: "A Structural Approach to Operational Semantics"
authors:
  - "Gordon D. Plotkin"
year: 1981
venue: "DAIMI FN-19 / JLAP 2004 reprint"
arxiv: null
doi: "10.1016/j.jlap.2004.05.001"
source: "https://doi.org/10.1016/j.jlap.2004.05.001"
topics:
  - sos
  - plotkin
  - operational-semantics
  - structural-semantics
seed_rank: 658
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Call-by-Name, Call-by-Value and the λ-Calculus"
    url: "https://doi.org/10.1016/0304-3975(75)90017-1"
    year: 1975
    arxiv: null
    doi: "10.1016/0304-3975(75)90017-1"
  - title: "LCF Considered as a Programming Language"
    url: "https://doi.org/10.1016/0304-3975(77)90044-5"
    year: 1977
    arxiv: null
    doi: "10.1016/0304-3975(77)90044-5"
  - title: "The Mechanical Evaluation of Expressions"
    url: "https://doi.org/10.1093/comjnl/6.4.308"
    year: 1964
    arxiv: null
    doi: "10.1093/comjnl/6.4.308"
see:
  - "627-call-by-name-call-by-value-and-the-lambda-calculus"
  - "657-lcf-considered-as-a-programming-language"
  - "617-the-mechanical-evaluation-of-expressions"
---

# A Structural Approach to Operational Semantics

## One-sentence takeaway

SOS specifies a language by syntax-directed inference rules on configurations: a transition is an instance of a rule whose premises are transitions of immediate subphrases.

## Why it matters here

Every later type-safety proof Anoptic would write for ano, and every GRID COMMAND DSL interpreter, is an SOS plus progress/preservation — these Aarhus notes are the root, not Kahn's big-step cousin.

## Key ideas

- A transition system is configurations plus a relation; a *structural* one inducts on abstract syntax so each construct has a handful of rules.
- Worked through expressions, commands, declarations, functions/procedures, and a first cut at classes; stores and environments are extra configuration components, not a denotational detour.
- Distinguishes internal steps from observable behaviour; terminal configurations are those with no successor.
- DAIMI FN-19 (Aarhus, 1981); the citable archival reprint is JLAP 60 (2004), DOI 10.1016/j.jlap.2004.05.001. Plotkin's own PDF is the 2004 preprint.

## Caveats

## Links

- DOI: [10.1016/j.jlap.2004.05.001](https://doi.org/10.1016/j.jlap.2004.05.001)
- Author PDF: https://homepages.inf.ed.ac.uk/gdp/publications/sos_jlap.pdf
