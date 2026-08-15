---
title: An Algorithm for the Organization of Information
authors:
- G. M. Adelson-Velsky
- E. M. Landis
year: 1962
venue: Doklady Akademii Nauk SSSR
arxiv: null
doi: null
source: "https://www.mathnet.ru/eng/dan26964"
topics:
- balanced-trees
- avl
seed_rank: 763
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: algorithms-and-complexity
cites: []
see: []
---

# An Algorithm for the Organization of Information

## One-sentence takeaway

AVL trees keep every node’s two subtrees within height one, so search, insert, and delete stay $O(\log n)$ via single and double rotations on the unbalanced ancestor.

## Why it matters here

This is the first balanced BST, still the right ordered map when Anoptic / ano need stricter height than red-black and can pay a few extra rotations on update.

## Key ideas

- The balance factor of a node is $h_\text{right}-h_\text{left}\in\{-1,0,+1\}$; a $\pm 2$ triggers a rotation.
- Single rotation fixes a same-side insert; double rotation fixes a zigzag.
- Height is at most $\approx 1.44\log_2 n$, tighter than red-black’s $2\log_2 n$.
- Original: *Dokl. Akad. Nauk SSSR* 146:2 (1962), 263–266; English in *Soviet Mathematics — Doklady* 3 (1962), 1259–1263.

## Caveats

## Links

- Math-Net.Ru: [dan26964](https://www.mathnet.ru/eng/dan26964)
- English overview: https://en.wikipedia.org/wiki/AVL_tree
