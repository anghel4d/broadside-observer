---
title: "Incremental Construction of Minimal Acyclic Finite-State Automata"
authors:
  - "Jan Daciuk"
  - "Stoyan Mihov"
  - "Bruce W. Watson"
  - "Richard E. Watson"
year: 2000
venue: "Computational Linguistics 26(1), pp. 3–16"
arxiv: null
doi: "10.1162/089120100561601"
source: "https://aclanthology.org/J00-1002.pdf"
topics:
  - finite-state-dictionaries
  - minimal-dfa
  - lexicon-compression
  - computational-linguistics-interfaces
  - japanese-surface
seed_rank: 2238
seed_batch: "archive-2026-10-08"
reviewed: "2026-10-08"
pool: "languages"
relevance_score: 8
lineage: finite-state-dictionaries
cites:
  - title: "Incremental Construction of Minimal Acyclic Finite State Automata and Transducers"
    url: "https://doi.org/10.3115/1611533.1611538"
    year: 1998
    arxiv: null
    doi: "10.3115/1611533.1611538"
  - title: "Minimisation of Acyclic Deterministic Automata in Linear Time"
    url: "https://doi.org/10.1016/0304-3975(92)90142-3"
    year: 1992
    arxiv: null
    doi: "10.1016/0304-3975(92)90142-3"
---

# Incremental Construction of Minimal Acyclic Finite-State Automata

## One-sentence takeaway

Build the minimal deterministic automaton for a word list in a single pass. Add words one at a time in lexicographic order, and as soon as a suffix path can no longer change, either replace each of its states with an equivalent state already in a "register" or register it as new. The working set never exceeds the final minimal automaton plus one word's path.

## Why it matters here

A Japanese-informed ano surface, a console autocompleter, or an identifier and asset-name interner all need a large, static, fast-lookup lexicon. The classic method builds a trie and then minimises it, and the intermediate trie can be far larger than memory. This algorithm skips the trie, runs in about O(l log n) time over l input letters (near-linear with a hashed register), and produces the canonical minimal DFA, which is also the basis for perfect hashing and morphological dictionaries. It is the construction-side companion to two-level morphology 1073 and the MeCab CRF analyser 1074.

## Key ideas

- **Minimality by right-language equivalence.** By Myhill–Nerode there is a unique minimal DFA, and two states can be merged iff they are equally final, have the same outgoing labels, and lead to the same targets. Processing children before parents (postorder) turns this into a simple test against already-registered states.
- **Register.** A hash set of pairwise-inequivalent states that are known to be final parts of the result. Every state is either in the register or on the path of the most recently added word.
- **Sorted-input algorithm.** For each new word, find the common prefix with the automaton. Call `replace_or_register` on the last child of the prefix's end state, which with sorted input is exactly the previous word's now-frozen suffix. Then append the new suffix as a fresh chain. Each letter costs a constant-time step plus at most one register lookup and insert.
- **Memory bound.** The temporary automaton has fewer states than the final one plus the length of the longest word, so memory is O(n) in the minimal automaton's states for a fixed alphabet. This is the paper's main practical advantage over trie-then-minimise.
- **Unsorted input.** Also supported, at higher cost. Before adding a suffix, any *confluence state* (a state with more than one incoming transition) on the common-prefix path must be cloned, and states whose right language changes must be removed from and re-entered into the register, taking care not to create cycles.

## Caveats

This applies to finite (acyclic) languages only. Annotations such as readings, parts of speech or IDs need the transducer or perfect-hashing variants, which the paper mentions but does not develop. Minimal DFAs minimise states, not bytes or cache misses: pointer-chasing lookups may lose to a double-array trie (Aoe 1989) or a succinct trie for hot paths. The unsorted algorithm's cloning bookkeeping is noticeably harder to get right than the sorted one.

## Links

- ACL Anthology PDF: https://aclanthology.org/J00-1002.pdf
- ACL Anthology page: https://aclanthology.org/J00-1002/
- DOI: https://doi.org/10.1162/089120100561601
