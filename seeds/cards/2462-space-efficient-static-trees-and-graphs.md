---
title: "Space-efficient Static Trees and Graphs"
authors:
  - "Guy Jacobson"
year: 1989
venue: "30th Annual Symposium on Foundations of Computer Science (FOCS 1989), pp. 549–554"
arxiv: null
doi: "10.1109/SFCS.1989.63533"
source: "https://gwern.net/doc/cs/algorithm/information/compression/1989-jacobson.pdf"
topics:
  - succinct-data-structures
  - rank-select
  - louds
  - trees
  - planar-graphs
seed_rank: 2462
seed_batch: "archive-2026-10-30"
reviewed: "2026-10-30"
pool: "systems"
relevance_score: 8
lineage: algorithms-and-complexity
see:
  - 1463-ideal-hash-trees
  - 1033-towards-efficient-hash-maps-in-functional-array-languages
  - 2460-word-hy-phen-a-tion-by-com-put-er
cites:
  - title: "Space-efficient Static Trees and Graphs"
    url: "https://doi.org/10.1109/SFCS.1989.63533"
    year: 1989
    doi: "10.1109/SFCS.1989.63533"
---

# Space-efficient Static Trees and Graphs

## One-sentence takeaway

Jacobson founded succinct data structures by showing that a bit vector with a small rank/select directory lets a tree be stored in about 2 bits per node, the information-theoretic minimum, while still supporting child, sibling and parent moves in O(log n) bit probes, and that planar graphs fit in linear space with fast adjacency tests.

## Why it matters here

ano is a columnar ECS language, and relational hops over hierarchies (scene graphs, parent/child, region trees) are exactly what LOUDS-style columns make cheap: the hierarchy becomes one bit column plus a tiny index, with navigation as rank and select, which are array operations. It's the root of the rank/select machinery behind modern compressed indexes, tries and column stores.

## Key ideas

- **Rank and select.** rank(m) counts set bits up to m, select(m) finds the m-th set bit; a two-level directory in the spirit of Tarjan and Yao adds only O(n log log n / log n) bits, so space stays asymptotically n bits, with O(log n) bit-probe time.
- **Binary trees in 2n+1 bits.** Mark internal nodes 1 and added external nodes 0, read the marks in level order, and the children of node m sit at 2·rank(m) and 2·rank(m)+1, with parent(m) = select(⌊m/2⌋), the same arithmetic as an implicit heap but without the balance requirement.
- **Level-order unary degree sequence (LOUDS).** Write each node's degree in unary in level order, with a super-root, for 2n+1 bits; first-child, next-sibling and parent become one rank or select on the bit string or its complement.
- **Parenthesis matching in linear space.** A directory over 'pioneer' parentheses, bounded via an outerplanarity argument, finds the matching parenthesis of any position.
- **Bounded-pagenumber graphs.** Graphs with a k-page book embedding are stored in O(kn) bits using one parenthesis string per page, supporting traversal and adjacency; planar graphs need at most 4 pages (Yannakakis), giving linear space.

## Caveats

Static only: any update means a rebuild. The time bounds are in bit probes, and the full rank/select directory construction is deferred to the thesis; practical implementations (popcount-based, cache-aware) came much later and differ in constants. Labels and payloads are out of scope and must live in parallel arrays indexed by rank.

## Links

- Paper (PDF, gwern mirror): https://gwern.net/doc/cs/algorithm/information/compression/1989-jacobson.pdf
- Paper (DOI, FOCS 1989): https://doi.org/10.1109/SFCS.1989.63533
