---
title: "Storing a Sparse Table"
authors:
  - "Robert Endre Tarjan"
  - "Andrew Chi-Chih Yao"
year: 1979
venue: "Communications of the ACM 22(11)"
arxiv: null
doi: "10.1145/359168.359175"
source: "https://doi.org/10.1145/359168.359175"
topics:
  - "unicode-text-shaping"
  - "custom-allocators-runtime"
seed_rank: 2540
seed_batch: "archive-2026-11-10"
reviewed: "2026-11-10"
pool: "systems"
relevance_score: 8
lineage: algorithms-and-complexity
cites:
  - title: "Storing a Sparse Table"
    url: "https://doi.org/10.1145/359168.359175"
    year: 1979
    arxiv: null
    doi: "10.1145/359168.359175"
see: ["1494-cuckoo-hashing", "1463-ideal-hash-trees"]
---

# Storing a Sparse Table

## One-sentence takeaway

Tarjan and Yao store a static table of n keys drawn from 0..N−1 in O(n) words with worst-case O(log_n N) lookup by combining a trie with double displacement: rows of a square array are shifted so their nonzeros interleave into one flat array, and a first pass of column shifts makes that row packing provably work.

## Why it matters here

Row displacement is the trick behind compressed LR parse tables, and the same idea shows up in Unicode property tables and in packed tries such as Liang's hyphenation patterns (2529). For Anoptic's text stack and for ano's static lookup tables (glyph maps, command keywords), it gives a branch-light, hash-free, worst-case-bounded layout: lookup is one subtraction, one add, one load and one compare. The paper also explains why the simple first-fit heuristic everyone uses for parse tables works so well.

## Key ideas

- **Single displacement.** View keys as positions (i, j) in an m×m array and give each row a shift r(i), so (i, j) lands at C[r(i)+j]; each slot records which key owns it, so a miss is detected in O(1).
- **Finding shifts.** Minimizing the packed size is NP-complete even to approximate within less than a factor of 2; they use first-fit decreasing, placing the densest rows first.
- **Double displacement.** First apply column displacements to spread out dense rows, then row displacements; this provably keeps C at O(n) for static tables.
- **Tries for large N.** Repeating the scheme level by level in a trie gives O(log_n N) access for any key universe.

## Caveats

The table must be static (all inserts before lookups), and the authors call the full method "a little complicated to use in practice". This card is built from the CACM abstract and excerpted sections, not a full read of the analysis; the Stanford tech report CS-TR-78-683 is the free version.

## Links

- DOI: https://doi.org/10.1145/359168.359175
- Stanford tech report CS-TR-78-683 (PDF): http://i.stanford.edu/pub/cstr/reports/cs/tr/78/683/CS-TR-78-683.pdf
