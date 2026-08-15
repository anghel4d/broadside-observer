---
title: Protocols for Public Key Cryptosystems
authors:
- Ralph C. Merkle
year: 1980
venue: IEEE Symposium on Security and Privacy
arxiv: null
doi: 10.1109/SP.1980.10006
source: "https://doi.org/10.1109/SP.1980.10006"
topics:
- cryptography
- merkle-tree
seed_rank: 784
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: Secure Communications Over Insecure Channels
  url: "https://doi.org/10.1145/359460.359473"
  year: 1978
  arxiv: null
  doi: 10.1145/359460.359473
see:
- "783-secure-communications-over-insecure-channels"
---

# Protocols for Public Key Cryptosystems

## One-sentence takeaway

Merkle hash trees commit to $n$ leaves with a single root so an inclusion proof is the $O(\log n)$ sibling hashes along the path, verified by recomputing the root.

## Why it matters here

This is the authenticated-data-structure primitive behind git, package indexes, replay manifests, and any Broadside/Anoptic artifact that must prove “this blob was in that tree” without shipping the whole tree.

## Key ideas

- Interior nodes store $H(\text{left}\Vert\text{right})$; the published root binds every leaf.
- An authentication path is the missing sibling at each level; the verifier hashes upward and checks the root.
- The same tree authenticates one-time signatures (Lamport/Merkle signatures) by committing to a large public-key list.
- Collision resistance of $H$ is the only cryptographic assumption for the commitment.

## Caveats

## Links

- DOI: [10.1109/SP.1980.10006](https://doi.org/10.1109/SP.1980.10006)
- URL: https://doi.org/10.1109/SP.1980.10006
