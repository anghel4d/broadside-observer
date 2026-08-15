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
seed_rank: 782
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
- "781-new-directions-in-cryptography"
- "810-how-to-share-a-secret"
---

# A Method for Obtaining Digital Signatures and Public-Key Cryptosystems

## One-sentence takeaway

RSA is the trapdoor permutation $x\mapsto x^e\bmod n$ on $n=pq$: encrypt with public $(n,e)$, invert with $d$ where $ed\equiv 1\pmod{\varphi(n)}$, and sign by applying $d$ first.

## Why it matters here

This is still the compatibility bedrock for certificates, package signatures, and any Anoptic/Broadside artifact that has to verify on a machine that only speaks RSA.

## Key ideas

- Keygen: pick primes $p,q$, publish $n=pq$ and exponent $e$, keep $d=e^{-1}\bmod\varphi(n)$.
- Encryption and signature are the same permutation run in opposite directions.
- Security is argued from the difficulty of factoring $n$ (and the RSA problem of taking $e$-th roots modulo $n$).
- The paper launched public-key deployment; later work added OAEP/PSS padding because raw RSA is not CCA-safe.

## Caveats

## Links

- DOI: [10.1145/359340.359342](https://doi.org/10.1145/359340.359342)
- URL: https://doi.org/10.1145/359340.359342
