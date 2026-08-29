---
title: "Packrat Parsing: Simple, Powerful, Lazy, Linear Time"
authors: ["Bryan Ford"]
year: 2002
venue: "ICFP"
arxiv: null
doi: "10.1145/581478.581483"
source: "https://doi.org/10.1145/581478.581483"
topics: [computational-linguistics-interfaces, nl-game-commands, embedded-scripting-dsls]
seed_rank: 1467
seed_batch: "archive-2026-08-30"
reviewed: "2026-08-30"
pool: "languages"
relevance_score: 10
lineage: packrat-peg
cites:
  - title: "An Efficient Context-Free Parsing Algorithm"
    url: "https://doi.org/10.1145/362007.362035"
    year: 1970
    arxiv: null
    doi: "10.1145/362007.362035"
  - title: "Parsing Expression Grammars: A Recognition-Based Syntactic Foundation"
    url: "https://doi.org/10.1145/964001.964011"
    year: 2004
    arxiv: null
    doi: "10.1145/964001.964011"
  - title: "Monadic Parsing in Haskell"
    url: "https://doi.org/10.1017/S0956796898003050"
    year: 1998
    arxiv: null
    doi: "10.1017/S0956796898003050"
see:
  - "1102-an-efficient-context-free-parsing-algorithm"
---

# Packrat Parsing: Simple, Powerful, Lazy, Linear Time

## One-sentence takeaway

Memoize every recursive-descent call by input position and you get backtracking's power — unlimited lookahead, longest-match, scannerless grammars — with a linear-time guarantee, implemented lazily without a hash table.

## Why it matters here

GRID COMMAND's NL soldier orders and ano's surface syntax want parser combinators, not a fragile yacc split between lexer and grammar. Earley (1102) is the CFG generalist; packrat is the linear-time *recognition* engine for the machine-oriented languages we actually write (PEG 1468). Longest-match, syntactic predicates, and unified lexing are the idioms that make "take cover behind the ridge" compose instead of shift/reduce-conflict. Start here before inventing a new combinator library.

## Key ideas

- **Memoized recursive descent.** Save every (nonterminal, position) result; never evaluate twice. Theoretical roots in 1970s TDPL; 2002 is the first practical linear-time packrat on modern memories.
- **Lazy functional fit.** In Haskell the memo table is a lazy data structure indexed by position — no explicit hashmap in the inner loop.
- **Power above LL/LR.** Any LL(k)/LR(k) language, plus many that those linear algorithms reject; longest-match and semantic predicates fall out of backtracking plus memoization.
- **Evidence.** ICFP 2002 functional pearl; MIT. PEG (POPL 2004) is the grammar formalism this algorithm implements.

## Caveats

Space is Θ(n × nonterminals) — the reason 1970s machines could not ship this. Left recursion does not terminate (Warth et al. later; do not pretend Ford solved it). A well-tuned Earley/GLL may beat packrat on highly ambiguous *natural* language; packrat assumes a machine grammar with prioritized choice. Not a remint of Earley (1102).

## Links

- DOI: https://doi.org/10.1145/581478.581483
- Author PDF: https://bford.info/pub/lang/packrat-icfp02.pdf
- Project: https://bford.info/pub/lang/packrat-icfp02/
