---
title: How to Share a Secret
authors:
- Adi Shamir
year: 1979
venue: Communications of the ACM
arxiv: null
doi: 10.1145/359168.359176
source: "https://doi.org/10.1145/359168.359176"
topics:
- secret-sharing
- shamir
- cryptography
seed_rank: 1063
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: A Method for Obtaining Digital Signatures and Public-Key Cryptosystems
  url: "https://doi.org/10.1145/359340.359342"
  year: 1978
  arxiv: null
  doi: 10.1145/359340.359342
- title: New Directions in Cryptography
  url: "https://doi.org/10.1109/TIT.1976.1055638"
  year: 1976
  arxiv: null
  doi: 10.1109/TIT.1976.1055638
see:
- "1035-a-method-for-obtaining-digital-signatures-and-public-key-cry"
- "1034-new-directions-in-cryptography"
---

# How to Share a Secret

## One-sentence takeaway

Shamir secret sharing via polynomial interpolation thresholds.

## Why it matters here

Threshold custody for keys and distributed trust designs.

## Key ideas

- Degree-(t-1) polynomial over a finite field.
- Any t shares reconstruct; t-1 reveal nothing.
- Information-theoretic security.
- Simple and widely deployed.

## Caveats

- Share authenticity needs MAC/signatures.
- Field/size choices matter.

## Links

- DOI: [10.1145/359168.359176](https://doi.org/10.1145/359168.359176)
- URL: https://doi.org/10.1145/359168.359176
