---
title: "The ZINC Experiment: An Economical Implementation of the ML Language"
authors:
  - "Xavier Leroy"
year: 1990
venue: "INRIA Technical Report 117"
arxiv: null
doi: null
source: "https://xavierleroy.org/publi/ZINC.pdf"
topics:
  - zinc
  - caml
  - abstract-machines
  - leroy
  - ml
seed_rank: 706
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "The Mechanical Evaluation of Expressions"
    url: "https://doi.org/10.1093/comjnl/6.4.308"
    year: 1964
    arxiv: null
    doi: "10.1093/comjnl/6.4.308"
  - title: "Control Operators, the SECD Machine, and the λ-Calculus"
    url: "https://www2.ccs.neu.edu/racket/pubs/fdpc3-ff.pdf"
    year: 1986
    arxiv: null
    doi: null
  - title: "The Categorical Abstract Machine"
    url: "https://doi.org/10.1016/0167-6423(87)90020-7"
    year: 1987
    arxiv: null
    doi: "10.1016/0167-6423(87)90020-7"
see:
  - "617-the-mechanical-evaluation-of-expressions"
  - "665-control-operators-the-secd-machine-and-the-calculus"
---

# The ZINC Experiment: An Economical Implementation of the ML Language

## One-sentence takeaway

ZINC compiles ML to a compact bytecode abstract machine whose closure and application conventions made Caml Light — and later OCaml’s runtime — cheap enough to ship.

## Why it matters here

Anoptic already lives in a C + data-oriented world; when a typed functional IR needs a bytecode or closure convention, ZINC is the economical ML machine to steal from, not a tracing JIT and not Landin’s SECD left unmodified.

## Key ideas

- The ZINC machine is a CAM descendant tuned for curried application: cheap partial applications, shared environments, and a compact instruction set.
- Closures are represented to keep allocation down; the report measures the representation choices, not just the semantics.
- Separate compilation, a simple module system, and a C runtime are part of the experiment, not afterthoughts.
- The 1990 INRIA report (RT-0117, ~100 pages) is the design document behind Caml Light’s bytecode and the ancestor of ocamlc.
- Landin SECD and the Categorical Abstract Machine are the cited machines being specialized.

## Caveats

## Links

- PDF: https://xavierleroy.org/publi/ZINC.pdf
- HAL: https://hal.science/inria-00070049
