---
title: "A Data Parallel Compiler Hosted on the GPU"
authors: ["Aaron W. Hsu"]
year: 2019
venue: "PhD dissertation, Indiana University (School of Informatics, Computing, and Engineering)"
arxiv: null
doi: null
source: "https://scholarworks.iu.edu/dspace/items/3ab772c9-92c9-4f59-bd95-40aff99e8c7a"
topics: [array-languages, apl, compilers, gpu, tree-transformations]
seed_rank: 1855
seed_batch: "craft-2026-10-07"
reviewed: "2026-10-07"
pool: "languages"
relevance_score: 10
lineage: array-languages
cites:
  - title: "Notation as a Tool of Thought"
    url: "https://www.jsoftware.com/papers/tot.htm"
    year: 1980
    arxiv: null
    doi: "10.1145/358896.358899"
  - title: "Co-dfns: Ancient Language, Modern Compiler"
    url: "https://doi.org/10.1145/2627373.2627384"
    year: 2014
    arxiv: null
    doi: "10.1145/2627373.2627384"
  - title: "The Key to a Data Parallel Compiler"
    url: "https://doi.org/10.1145/2935323.2935331"
    year: 2016
    arxiv: null
    doi: "10.1145/2935323.2935331"
  - title: "Single Assignment C: Efficient Support for High-Level Array Operations in a Functional Setting"
    url: "https://doi.org/10.1017/S0956796802004458"
    year: 2003
    arxiv: null
    doi: "10.1017/S0956796802004458"
see:
  - "045-notation-as-a-tool-of-thought"
  - "1044-single-assignment-c-efficient-support-for-high-level-array-operations"
---

# A Data Parallel Compiler Hosted on the GPU

## One-sentence takeaway

Hsu's dissertation shows a complete compiler (Co-dfns, for Dyalog APL dfns) written as branch-free bulk array operations over a flat tree encoding — about 17 lines of APL against roughly 1000 lines for the equivalent Nanopass compiler — that runs on CPU or GPU from one source and outperforms the traditional compiler by orders of magnitude in memory and time as inputs grow.

## Why it matters here

ano is an array language, and the array-language pocket has been an honest empty for two Craft runs because Hsu's ARRAY 2014/2016 papers sat behind ACM 403s. The dissertation is the open, complete account. It is the strongest existence proof that ano's own front end and rewrite passes can be written *in the array style ano is selling*: ASTs as parent/depth vectors, passes as whole-tree index arithmetic, no recursion or pattern matching. That is a direct design choice for ano's self-hosting and for running compiler passes on the GPU next to Anoptic.

## Key ideas

- **Trees as vectors.** The AST is a set of columns — depth vector, parent vector, node type/kind, names — so a tree pass is a handful of primitive array operations rather than a recursive walk.
- **Depth → parent by array idiom.** Parents are recovered from the depth vector with scans/outer-product comparisons (e.g. finding the nearest earlier node at depth d−1), the core trick that makes every later pass bulk-parallel.
- **No control flow.** The compiler source uses no branching, conditionals, pattern matching, ADTs, recursion or explicit loops — passes such as lexical resolution, expression lifting and expression wrapping are all whole-array transforms.
- **Concision.** About 17 lines of compiler core vs roughly 1000 lines in a Nanopass (Racket/Chez) reference compiler, with tables of tokens, unique names and AST nodes to back it.
- **Scaling.** On the GPU, memory-heavy passes (expression wrapping, more than 17× over CPU) win quickly; search-heavy passes (lexical resolution) need larger inputs, but every pass reaches at least 3× over the CPU at scale, and both beat the Nanopass compilers by orders of magnitude.

## Caveats

A dissertation by the Co-dfns author, with the evaluation done by him; the target language (a dfns-style, lexically scoped functional subset of Dyalog APL) and its runtime are specific. The 17-line figure counts dense APL — the cost moves into idiom knowledge, not away. The IU ScholarWorks PDF lacks a text layer; the gwern.net copy is text-extractable. Cite the ARRAY 2014/2016 papers but do not mint them separately; do not remint APL since 1978 (091), APL/? (1046), Notation 045, Futhark 1002, SaC 1044, or the array-language bakeoff 1622.

## Links

- IU ScholarWorks record: https://scholarworks.iu.edu/dspace/items/3ab772c9-92c9-4f59-bd95-40aff99e8c7a
- PDF (IU): https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/dcbd5240-8454-4533-bc0c-ac3ee7628b8e/content
- PDF (text-searchable mirror): https://gwern.net/doc/cs/algorithm/2019-hsu-3.pdf
- Co-dfns compiler source: https://github.com/Co-dfns/Co-dfns
