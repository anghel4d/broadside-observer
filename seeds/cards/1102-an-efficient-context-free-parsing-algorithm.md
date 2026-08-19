---
title: "An Efficient Context-Free Parsing Algorithm"
authors:
  - "Jay Earley"
year: 1970
venue: "Commun. ACM"
arxiv: null
doi: "10.1145/362007.362035"
source: "https://doi.org/10.1145/362007.362035"
topics:
  - "earley"
  - "parsing"
  - "nl-game-commands"
  - "computational-linguistics-interfaces"
seed_rank: 1102
seed_batch: "archive-2026-08-20"
reviewed: "2026-08-20"
pool: "languages"
relevance_score: 10
lineage: earley-parser
cites:
  - title: "Understanding Natural Language"
    url: "https://doi.org/10.1016/0010-0285(72)90002-3"
    year: 1972
    arxiv: null
    doi: "10.1016/0010-0285(72)90002-3"
  - title: "On the Translation of Languages from Left to Right"
    url: "https://doi.org/10.1016/S0019-9958(65)90426-2"
    year: 1965
    arxiv: null
    doi: "10.1016/S0019-9958(65)90426-2"
  - title: "Transition Network Grammars for Natural Language Analysis"
    url: "https://doi.org/10.1145/355598.362773"
    year: 1970
    arxiv: null
    doi: "10.1145/355598.362773"
  - title: "Two-Level Morphology: A General Computational Model for Word-Form Recognition and Production"
    url: "http://www.ling.helsinki.fi/~koskenniemi/doc/Two-LevelMorphology.pdf"
    year: 1983
    arxiv: null
    doi: null
see:
  - "1076-understanding-natural-language"
  - "1073-two-level-morphology"
  - "1074-applying-conditional-random-fields-to-japanese-morphological-analysis"
  - "042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte"
---

# An Efficient Context-Free Parsing Algorithm

## One-sentence takeaway

One dynamic-programming chart parses *any* CFG in *O(n³)*, unambiguous grammars in *O(n²)*, and the practical programming-language subclass in linear time — no LR-table generator required.

## Why it matters here

SHRDLU (1076) is the grounded NL-*command* system; this is the parser algorithm GRID COMMAND still wants under the command grammar. Earley 1970 sits between Knuth LR(*k*) (needs a generator, fails on ambiguous / left-recursive command dialects) and naïve top-down (blows up). Items are dotted productions plus an origin origin; predictor / scanner / completer fill chart[*k*]. Japanese orders (1073/1074) produce a lattice of morphemes; Earley (or its chart descendants) is how those lattices become a command tree without training a seq2seq. Rete (042) matches many patterns against many facts; Earley matches one grammar against one string — complementary.

## Key ideas

- State: *(A → α • β, j)* in set *Sᵢ* means "we have parsed α from *j* to *i* and still need β."
- Predictor: if •B, add *B*'s productions at origin *i*. Scanner: if •a and *a* is the next token, advance into *Sᵢ₊₁*. Completer: if a production is finished, advance every waiting item that expected that nonterminal.
- *O(n³)* general (the cubic is the completer looking up completed *A* spanning *j..i*); *O(n²)* unambiguous; linear on a large class that includes "most practical CFG programming-language grammars."
- Empirical win vs Griffiths–Petrick top-down / bottom-up. The 1968 CMU thesis is the long form.

## Caveats

- Naïve completer is the bottleneck; modern Earley (Leo right-recursion, Marpa, Earley+Leo) plus packed forests is what you actually ship.
- Not a replacement for a linear-time lexer; morphology (1073/1074) still sits in front.
- Woods ATN (cited from 1076) is the NL-specific cousin; Earley is the CFG-general one. Last Archive rejected ATN as SHRDLU's parser sibling — this is the algorithm paper, not the grammar formalism.

## Links

- DOI: [10.1145/362007.362035](https://doi.org/10.1145/362007.362035)
- CACM February 1970, 13(2):94–102
- ACM DL: [https://dl.acm.org/doi/10.1145/362007.362035](https://dl.acm.org/doi/10.1145/362007.362035)
