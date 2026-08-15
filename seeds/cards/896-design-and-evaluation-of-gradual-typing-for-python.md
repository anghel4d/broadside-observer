---
title: Design and Evaluation of Gradual Typing for Python
authors:
- Michael M. Vitousek
- Andrew Kent
- Jeremy G. Siek
- Jim Baker
year: 2014
venue: DLS
arxiv: null
doi: 10.1145/2661088.2661101
source: "https://doi.org/10.1145/2661088.2661101"
topics:
- gradual-typing
- python
- type-safety
seed_rank: 896
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Gradual Typing for Functional Languages"
    url: "https://scheme2006.cs.uchicago.edu/13-siek.pdf"
    year: 2006
    arxiv: null
    doi: null
see:
  - "886-gradual-typing-for-functional-languages"
---

# Design and Evaluation of Gradual Typing for Python

## One-sentence takeaway

Reticulated Python is a source-to-source gradual type system for CPython that implements both guarded (proxy) and transient (use-site) casts and measures them on real Python idioms.

## Why it matters here

Engineering lessons for putting gradual types on a messy dynamic host — identity-sensitive objects, C extensions, and an FFI. The host-language analogue of "type Anoptic's Python-shaped config without forking CPython."

## Key ideas

- Two enforcement strategies in one translator: guarded wraps values in proxies; transient leaves identity alone and checks at operations.
- Must interoperate with unmodified CPython objects and C-extension modules; proxies break `is` and some C APIs, which is why transient exists.
- Type language includes functions, objects, tuples, and `Dyn`; consistency follows Siek–Taha.
- Microbenchmarks and case studies quantify the proxy vs transient tradeoff well before the 2016/2017 open-world papers.
- DLS 2014, DOI 10.1145/2661088.2661101. Followed by the open-world TR/POPL development (card 897).

## Caveats

## Links

- DOI: [10.1145/2661088.2661101](https://doi.org/10.1145/2661088.2661101)
