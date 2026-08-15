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
seed_rank: 810
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
- "782-a-method-for-obtaining-digital-signatures-and-public-key-cry"
- "781-new-directions-in-cryptography"
---

# How to Share a Secret

## One-sentence takeaway

Shamir splits a secret into n field elements on a random degree-(t−1) polynomial so that any t shares interpolate the secret and any t−1 shares are information-theoretically independent of it.

## Why it matters here

Threshold custody for signing keys, shared world-seed material, and “any k of n operators can unlock this GRID COMMAND capability” are this construction. It is the simplest information-theoretic primitive sitting next to Diffie–Hellman / RSA in the Broadside crypto shelf.

## Key ideas

- Encode the secret as the constant term of a random polynomial over a finite field larger than both the secret and n.
- Distribute evaluations at n distinct nonzero points; Lagrange interpolation at 0 recovers the secret from any t points.
- Security is information-theoretic: t−1 points are consistent with every possible secret.
- No computational assumption is required, unlike the public-key papers this note sits beside.

## Caveats

## Links

- DOI: [10.1145/359168.359176](https://doi.org/10.1145/359168.359176)
- URL: https://doi.org/10.1145/359168.359176
