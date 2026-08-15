---
title: "Eff: Algebraic Effect Handlers Language"
authors:
  - "Andrej Bauer"
  - "Matija Pretnar"
year: 2015
venue: "JLAMP / eff-lang.org"
arxiv: "1203.1539"
doi: "10.1016/j.jlamp.2014.02.001"
source: "https://arxiv.org/abs/1203.1539"
topics:
  - effects
  - handlers
seed_rank: 474
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
lineage: algebraic-effects
cites:
  - title: "Handlers of Algebraic Effects"
    url: "https://doi.org/10.1007/978-3-642-00590-9_7"
    year: 2009
    doi: "10.1007/978-3-642-00590-9_7"
  - title: "Handling Algebraic Effects"
    url: "https://doi.org/10.2168/LMCS-9(4:23)2013"
    year: 2013
    doi: "10.2168/LMCS-9(4:23)2013"
see:
  - "021-handlers-of-algebraic-effects"
  - "112-handling-algebraic-effects"
---

# Eff: Algebraic Effect Handlers Language

## One-sentence takeaway

Eff is a research language where effects are algebraic operations and handlers are first-class interpreters, so the same `choose` or `print` can mean depth-first search, a list of results, or real I/O depending on the enclosing handler.

## Why it matters here

Executable companion to Plotkin/Pretnar theory and the Koka/OCaml 5 line: Anoptic effect sketches can be tried in a small language before committing a runtime.

## Key ideas

- An operation does not implement itself; a handler maps the free computation into a model (exceptions, state, nondeterminism, cooperative threads, delimited continuations).
- Effects and handlers are first-class values and can be nested; the paper gives a denotational semantics plus a prototype.
- Journal version is JLAMP 84(1):108–123 (2015), received 2012; the 2012 arXiv draft is the stable open text.
- Same Pretnar lineage as *Handling Algebraic Effects*; the public language lives at eff-lang.org.

## Caveats

## Links

- arXiv: [1203.1539](https://arxiv.org/abs/1203.1539)
- DOI: [10.1016/j.jlamp.2014.02.001](https://doi.org/10.1016/j.jlamp.2014.02.001)
- Language: https://www.eff-lang.org/
