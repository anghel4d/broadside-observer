---
title: "The Zipper"
authors:
  - "Gérard Huet"
year: 1997
venue: "J. Funct. Program."
arxiv: null
doi: "10.1017/S0956796897002864"
source: "https://doi.org/10.1017/S0956796897002864"
topics:
  - "zipper"
  - "persistent-trees"
  - "embedded-scripting-dsls"
  - "typed-programming-systems"
seed_rank: 1101
seed_batch: "archive-2026-08-20"
reviewed: "2026-08-20"
pool: "languages"
relevance_score: 10
lineage: huet-zipper
cites:
  - title: "The Derivative of a Regular Type is its Type of One-Hole Contexts"
    url: "http://strictlypositive.org/diff.pdf"
    year: 2001
    arxiv: null
    doi: null
  - title: "Definitional Interpreters for Higher-Order Programming Languages"
    url: "https://doi.org/10.1145/800194.805852"
    year: 1972
    arxiv: null
    doi: "10.1145/800194.805852"
  - title: "Finally Tagless, Partially Evaluated"
    url: "https://doi.org/10.1017/S0956796809007205"
    year: 2009
    arxiv: null
    doi: "10.1017/S0956796809007205"
  - title: "ML for the Working Programmer"
    url: "https://doi.org/10.1017/CBO9780511811326"
    year: 1996
    arxiv: null
    doi: "10.1017/CBO9780511811326"
see:
  - "630-definitional-interpreters-for-higher-order-programming-langu"
  - "1003-finally-tagless-partially-evaluated"
  - "643-defunctionalization-at-work"
  - "033-the-essence-of-functional-programming"
---

# The Zipper

## One-sentence takeaway

Turn the tree inside-out like a glove: the focus is a subtree plus a path of sibling lists, so local edits and up/down/left/right are *O(1)* without mutation.

## Why it matters here

ano's AST, GRID COMMAND's order-tree, and any editor buffer are "a tree plus a cursor." Naïve persistent update copies the root-to-focus path; Huet 1997 makes the path *be* the data structure. `location = (focus, path)` where `path = Top | Node(left_siblings, parent, right_siblings)` — go down by pushing the other children onto the path, go up by reassembling a `Section`. That is the cursor for a purely functional ano interpreter, a structure editor, and a proof-assistant buffer (Huet's original use). McBride's one-hole contexts later typed this as "the derivative of the regular type."

## Key ideas

- `tree = Item of item | Section of tree list`. `path = Top | Node of tree list * path * tree list`. A location is the current tree plus its path.
- Navigation (`go_left`, `go_right`, `go_up`, `go_down`) and edit (`change`, `insert`, `delete`) are local. Zipper-as-clothing: opening/closing the zipper *is* moving the focus.
- No mutation, no whole-tree copy. Sibling lists are reversed so the nearest sibling is at the head.
- Folklore that had not been written down; the pearl exists so we stop re-inventing it.

## Caveats

- Variadic-arity lists are the simple case; binary trees, rose trees with named fields, and cyclic graphs each need their own derivative.
- Left-sibling lists are stored reversed — easy to get the order wrong when flattening.
- Random-access zippers (2016) exist if you need logarithmic jump; Huet is sequential navigation.

## Links

- DOI: [10.1017/S0956796897002864](https://doi.org/10.1017/S0956796897002864)
- Author PDF (seminar scan): [https://www.st.cs.uni-saarland.de/edu/seminare/2005/advanced-fp/docs/huet-zipper.pdf](https://www.st.cs.uni-saarland.de/edu/seminare/2005/advanced-fp/docs/huet-zipper.pdf)
- Cambridge Core: [https://www.cambridge.org/core/journals/journal-of-functional-programming/article/zipper/0C058890B8A9B588F26E6D68CF0CE204](https://www.cambridge.org/core/journals/journal-of-functional-programming/article/zipper/0C058890B8A9B588F26E6D68CF0CE204)
