---
title: "An O(ND) Difference Algorithm and Its Variations"
authors:
  - "Eugene W. Myers"
year: 1986
venue: "Algorithmica 1(1–4), 251–266"
arxiv: null
doi: "10.1007/BF01840446"
source: "http://www.xmailserver.org/diff2.pdf"
topics:
  - diff
  - longest-common-subsequence
  - edit-scripts
  - text-editing
seed_rank: 2354
seed_batch: "archive-2026-10-20"
reviewed: "2026-10-20"
pool: "languages"
relevance_score: 8
lineage: text-layout
see:
  - 1462-ropes-an-alternative-to-strings
  - 755-suffix-arrays-a-new-method-for-on-line-string-searches
  - 1441-finger-trees-a-simple-general-purpose-data-structure
cites:
  - title: "An O(ND) Difference Algorithm and Its Variations"
    url: "https://doi.org/10.1007/BF01840446"
    year: 1986
    arxiv: null
    doi: "10.1007/BF01840446"
---

# An O(ND) Difference Algorithm and Its Variations

## One-sentence takeaway

Myers recasts longest-common-subsequence and shortest-edit-script as shortest path in an edit graph where matching diagonals are free, then finds that path greedily by extending the furthest-reaching D-path on each diagonal for D = 0, 1, 2, …, giving O(ND) worst-case time, O(N + D²) expected time, a linear-space divide-and-conquer refinement via the "middle snake", and the algorithm behind GNU diff and git's default diff.

## Why it matters here

Anything in Anoptic or ano that compares two versions of a sequence — script hot-reload deciding which functions changed, an editor showing changes to a level or rule file, replay or save-game deltas, test-output comparison in the agent harness — wants exactly this algorithm, because real edits are small and the cost scales with the number of differences D, not with file length squared. The V array indexed by diagonal is also a compact, cache-friendly pattern worth knowing for any wavefront-style dynamic program.

## Key ideas

- **Edit graph.** Grid points (x, y) for prefixes of A and B; horizontal and vertical edges cost 1 (delete/insert), diagonal edges exist where a_x = b_y and cost 0. LCS = path with most diagonals; SES = path with fewest non-diagonals; D + 2L = M + N.
- **Snakes and diagonals.** A D-path is a (D−1)-path, one non-diagonal edge, then a maximal run of diagonals (a snake). Diagonal k = x − y; a D-path must end on a diagonal in {−D, −D+2, …, D} (Lemma 1).
- **Greedy furthest reach.** The furthest-reaching D-path on diagonal k extends the better of the furthest (D−1)-paths on k−1 and k+1 by one edge plus the longest snake (Lemma 2), so one integer array V[k] holding x suffices; y = x − k.
- **Costs.** O((M+N)D) time worst case; under a simple stochastic model O(M + N + D²) expected time; with suffix trees for constant-time snake extension, O(N lg N + D²) worst case.
- **Linear space.** Run the greedy search forward from (0,0) and backward from (N,M) at the same time; where they overlap is the middle snake of an optimal path; recurse on both halves (Hirschberg-style), using O(N) space at roughly twice the time.
- **Practice.** Myers reports that a UNIX diff built on the basic algorithm ran two to four times faster than the System V Hunt–Szymanski diff, slower only when files are almost entirely different, and that the linear-space version compared two 1.5 MB sequences with more than 500 differences in under two minutes on a VAX 785.

## Caveats

The algorithm minimizes edit count, not human readability: it can align on frequent trivial lines (blank lines, braces), which is why later tools add heuristics such as patience or histogram diff and post-passes that slide hunks. Worst-case cost is quadratic when the inputs share little. Substitutions are not a primitive, so "replace" is reported as delete plus insert. The PDF read for this card is the widely mirrored author preprint; page numbers follow the Algorithmica version.

## Links

- Paper (DOI, Algorithmica): https://doi.org/10.1007/BF01840446
- Author preprint (PDF mirror): http://www.xmailserver.org/diff2.pdf
