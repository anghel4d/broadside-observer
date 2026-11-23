---
title: "Pattern Matching in Trees"
authors:
  - "Christoph M. Hoffmann"
  - "Michael J. O'Donnell"
year: 1982
venue: "Journal of the ACM 29(1), 68–95"
arxiv: null
doi: "10.1145/322290.322295"
source: "https://www.cs.purdue.edu/cgvlab/www/resources/papers/Hoffmann-Journal_of_ACM-1982-Pattern_matching_in_tree.pdf"
version_reviewed: "JACM, January 1982 (author-site scan)"
topics:
  - "tree-pattern-matching"
  - "term-rewriting"
  - "production-systems"
  - "bottom-up-automata"
  - "incremental-matching"
  - "interpreter-generation"
  - "bit-parallel"
seed_rank: 2698
seed_batch: "archive-2026-11-24"
reviewed: "2026-11-23"
pool: "languages"
relevance_score: 7
lineage: pattern-match-compilation
cites:
  - title: "Pattern Matching in Trees"
    url: "https://doi.org/10.1145/322290.322295"
    year: 1982
    arxiv: null
    doi: "10.1145/322290.322295"
  - title: "Efficient String Matching: An Aid to Bibliographic Search"
    url: "https://doi.org/10.1145/360825.360855"
    year: 1975
    arxiv: null
    doi: "10.1145/360825.360855"
  - title: "Fast Pattern Matching in Strings"
    url: "https://doi.org/10.1137/0206024"
    year: 1977
    arxiv: null
    doi: "10.1137/0206024"
see:
  - "753-efficient-string-matching-an-aid-to-bibliographic-search"
  - "751-fast-pattern-matching-in-strings"
  - "752-a-fast-string-searching-algorithm"
---

# Pattern Matching in Trees

## One-sentence takeaway

Hoffmann and O'Donnell give the many-patterns/one-subject tree-matching toolkit for rewrite-rule interpreters: a table-driven bottom-up automaton over "match sets" that matches in O(subsize + matches) and re-matches after a local edit by touching at most pattern-height ancestors, a restriction ("simple" pattern forests) that keeps its tables polynomial, and a cheaper top-down method that reduces tree patterns to path strings matched Aho–Corasick style with counters or bit strings.

## Why it matters here

This is the tree-shaped sibling of Rete (card 042): the same rules are matched against many subjects, the subject changes a little after every rewrite, and preprocessing the rules so matching is a table walk is the whole game. For ano it is the reference design for compiling pattern-based standing rules or rewrite passes over expression trees (and its query plans) into one postorder pass of array lookups, with a precise bound on how much must be re-matched after a command edits a node. The bit-string variant, one machine word per pattern set, fits a columnar engine that already thinks in masks.

## Key ideas

- **Problem.** Given a finite forest of patterns (terms with a wildcard v) and a subject tree, report every (node, pattern) pair where the pattern matches the subtree at that node; this is the inner loop of subtree-replacement systems, interpreter generation, code optimization and theorem proving.
- **Bottom-up matching.** At each node compute the *match set*, the set of pattern subtrees that match there, from the label and the children's match sets. Precompute all reachable match sets, number them, and build one q-dimensional table per q-ary symbol; matching becomes a postorder traversal with one array lookup per node, O(subsize + match). After a local change only the changed part and at most pattern-height ancestors need new codes. The authors compare this to LR(k) parsing tables.
- **The blow-up and the fix.** The number of match sets can grow exponentially with the forest (Theorem 4.4). A forest is *simple* if it has no independent subpatterns; then there are at most as many match sets as subpatterns, the immediate-subsumption graph is an inverted tree, and tables are built in O(patsize² + patsize^rank × ht); a faster construction exists for binary forests. Simplicity did not hinder their generators for LISP, LUCID and the combinator calculus.
- **Top-down matching.** Split each pattern into root-to-leaf path strings, run a KMP/Aho–Corasick automaton down the subject, and count path hits per node to detect full matches: O(patsize) preprocessing and no restrictions on patterns, but O(subsize × suf × patno) matching and worse update behaviour. With bit-string operations this drops to O(subsize × patno), practical when pattern height fits in a machine word.
- **Bit-string bottom-up.** Represent match sets as bit vectors and compute them at match time as Ua ∩ Father₁(M₁) ∩ … ∩ Fatherq(Mq) ∪ {v}, trading the table construction for per-node set operations, with hash tables of match sets as a middle ground.
- **No single winner.** The conclusion is explicitly "as with sorting": choose by pattern shape, number of subjects per pattern set, and memory; tables are fastest when they stay small.

## Caveats

Theory paper: complexity bounds and worked examples, no benchmarks beyond a remark that their interpreter generator uses the table-driven method. Patterns are linear first-order terms matched against subtrees (not unification, no non-linear variables or associative-commutative operators). The table approach still needs the simple-forest restriction or it can blow up. Read from the author-site scan of the JACM article.

## Links

- PDF (Purdue CGV lab): https://www.cs.purdue.edu/cgvlab/www/resources/papers/Hoffmann-Journal_of_ACM-1982-Pattern_matching_in_tree.pdf
- DOI (JACM): https://doi.org/10.1145/322290.322295
