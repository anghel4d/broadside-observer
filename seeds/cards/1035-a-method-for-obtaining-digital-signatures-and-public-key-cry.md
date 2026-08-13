---
title: A Method for Obtaining Digital Signatures and Public-Key Cryptosystems
authors:
- R. L. Rivest
- A. Shamir
- L. Adleman
year: 1978
venue: Communications of the ACM
arxiv: null
doi: 10.1145/359340.359342
source: "https://doi.org/10.1145/359340.359342"
topics:
- cryptography
- rsa
seed_rank: 1035
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: New Directions in Cryptography
  url: "https://doi.org/10.1109/TIT.1976.1055638"
  year: 1976
  arxiv: null
  doi: 10.1109/TIT.1976.1055638
- title: How to Share a Secret
  url: "https://doi.org/10.1145/359168.359176"
  year: 1979
  arxiv: null
  doi: 10.1145/359168.359176
see:
- "1034-new-directions-in-cryptography"
- "1063-how-to-share-a-secret"
---

# A Method for Obtaining Digital Signatures and Public-Key Cryptosystems

## One-sentence takeaway

RSA — trapdoor permutation from factoring for encryption and signatures.

## Why it matters here

Most famous public-key scheme; still a compatibility bedrock.

## Key ideas

- n=pq modulus with exponents e,d.
- Encryption and signature duality.
- Relies on factoring/RSA problem hardness.
- Launched broad PKC deployment.

## Caveats

- Padding (OAEP/PSS) mandatory — raw RSA unsafe.
- Key sizes and side channels dominate real security.

## Links

- DOI: [10.1145/359340.359342](https://doi.org/10.1145/359340.359342)
- URL: https://doi.org/10.1145/359340.359342
