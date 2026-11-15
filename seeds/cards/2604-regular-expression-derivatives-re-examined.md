---
title: "Regular-expression derivatives re-examined"
authors:
  - "Scott Owens"
  - "John Reppy"
  - "Aaron Turon"
year: 2009
venue: "Journal of Functional Programming 19(2):173-190"
arxiv: null
doi: "10.1017/S0956796808007090"
source: "https://www.ccs.neu.edu/home/turon/re-deriv.pdf"
topics:
  - "regular-expressions"
  - "lexer-generators"
  - "brzozowski-derivatives"
  - "dfa-construction"
  - "unicode"
seed_rank: 2604
seed_batch: "archive-2026-11-16"
reviewed: "2026-11-16"
pool: "languages"
relevance_score: 8
lineage: text-layout
see:
  - "2488-structural-regular-expressions"
---

# Regular-expression derivatives re-examined

## One-sentence takeaway

Brzozowski's 1964 derivatives (strip a leading symbol from a regular expression, symbolically) build a DFA directly from an extended regular expression with intersection and complement, and with three additions (canonicalizing "similarity" rules, character-class derivative classes for huge alphabets like Unicode, and regular vectors for whole scanner specs) they yield scanner generators whose DFAs are usually already minimal.

## Why it matters here

ano has a Japanese surface syntax and Anoptic does its own text handling, so lexing over full Unicode, not ASCII, is part of the build. This paper is the short, practical route: a lexer generator that is a few pages of pattern matching over RE terms, supports `&` and `¬` for free (handy for "identifier but not keyword" or "anything except a closing delimiter"), and handles over a million code points by computing transitions per character class rather than per symbol. It is the standard reference behind derivative-based lexers since.

## Key ideas

- **Derivative.** ∂ₐr is the RE matching {w | aw ∈ L(r)}; nullability ν(r) decides acceptance. States are REs, transitions are derivatives, and a state accepts if its RE is nullable.
- **Similarity.** Rewrite rules (associativity, commutativity and idempotence of +, ∅ and ε laws, and others) canonicalize REs so equal-looking derivatives merge; a marked subset is enough to guarantee finitely many dissimilar derivatives, and the full set gives far smaller machines.
- **Character sets.** Treat sets as atoms and compute, per state, a partition of Σ into derivative classes whose members all give the same derivative, so the work is per class, not per code point.
- **Regular vectors.** A scanner spec of n rules becomes a vector (r₁,…,rₙ) differentiated componentwise; a state accepts for the first nullable component, which gives longest-match, first-rule lexing.
- **Evidence.** On 17 lexer specs (Table 1), ml-ulex never produced more states than ml-lex and hit the minimal DFA on all but two: Russo (3017 vs minimal 2892, ml-lex 4803) and L2 (147 vs 106; no ml-lex figure reported). Scheme dropped from 324 to 194 states.

## Caveats

Read from the author PDF of the JFP article. It is a pedagogical and experience paper; there is no throughput benchmark of the generated scanners against table-driven or SIMD lexers, and it predates later work on derivatives for submatching and POSIX disambiguation. Similarity rules must be applied carefully or state counts blow up.

## Links

- Author PDF: https://www.ccs.neu.edu/home/turon/re-deriv.pdf
- DOI: https://doi.org/10.1017/S0956796808007090
- Brzozowski 1964, Derivatives of Regular Expressions: https://doi.org/10.1145/321239.321249
