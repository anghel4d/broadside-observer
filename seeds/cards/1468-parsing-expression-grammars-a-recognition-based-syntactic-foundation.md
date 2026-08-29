---
title: "Parsing Expression Grammars: A Recognition-Based Syntactic Foundation"
authors: ["Bryan Ford"]
year: 2004
venue: "POPL"
arxiv: null
doi: "10.1145/964001.964011"
source: "https://doi.org/10.1145/964001.964011"
topics: [computational-linguistics-interfaces, nl-game-commands, embedded-scripting-dsls]
seed_rank: 1468
seed_batch: "archive-2026-08-30"
reviewed: "2026-08-30"
pool: "languages"
relevance_score: 10
lineage: packrat-peg
cites:
  - title: "Packrat Parsing: Simple, Powerful, Lazy, Linear Time"
    url: "https://doi.org/10.1145/581478.581483"
    year: 2002
    arxiv: null
    doi: "10.1145/581478.581483"
  - title: "An Efficient Context-Free Parsing Algorithm"
    url: "https://doi.org/10.1145/362007.362035"
    year: 1970
    arxiv: null
    doi: "10.1145/362007.362035"
  - title: "Two-Level Morphology: A General Computational Model for Word-Form Recognition and Production"
    url: "http://www.ling.helsinki.fi/~koskenniemi/doc/Two-LevelMorphology.pdf"
    year: 1983
    arxiv: null
    doi: null
see:
  - "1467-packrat-parsing-simple-powerful-lazy-linear-time"
  - "1102-an-efficient-context-free-parsing-algorithm"
  - "1073-two-level-morphology"
---

# Parsing Expression Grammars: A Recognition-Based Syntactic Foundation

## One-sentence takeaway

Replace CFG unordered choice with *prioritized* choice and you get an unambiguous recognition grammar — lexer and parser unified, packrat-linear for every PEG, composition without shift/reduce fights.

## Why it matters here

CFGs model natural-language ambiguity; ano and GRID COMMAND need machine-oriented orders that parse one way. Ford's PEGs are the formalism under packrat (1467): `/` is first-match, `*` is greedy, `.` is any byte, and the grammar *is* the scanner. That is how you compose "move" + Japanese morphology (Koskenniemi 1073) + a unit name without maintaining two grammars. Earley (1102) stays the tool when the input really is ambiguous English; PEG is the tool when the language is yours.

## Key ideas

- **Recognition, not generation.** A PEG describes how to *recognize* a string, not how to generate a language. Ambiguity is refused at the formalism: prioritized choice never branches both ways.
- **Unified lexicon.** Character-level PEGs absorb what used to be a regex lexer; syntactic predicates (`&`, `!`) are first-class.
- **Linear-time for all PEGs.** Packrat parsing implements any PEG in linear time; no LR table-generator fickleness, no Earley cubic default.
- **TDPL heritage.** Reduces to Birman–Ullman TS/TDPL and GTDPL (~1970), here proved equivalent in effective recognition power.
- **Evidence.** POPL 2004. Became the theory under PEG.js, nom, pest, many combinator libraries, and a pile of protocol parsers.

## Caveats

PEG ≠ CFG: some CFLs are not PEGs and vice versa; greed and priority can silently eat a production you thought was there. Left recursion still needs a later extension. Unbounded PEG backtracking *without* packrat memo is exponential — the algorithm (1467) is not optional. Natural-language soldier orders with real ambiguity still want Earley/GLL; use PEG for the command language you specify, not the English you wish for.

## Links

- DOI: https://doi.org/10.1145/964001.964011
- Author PDF: https://bford.info/pub/lang/peg.pdf
