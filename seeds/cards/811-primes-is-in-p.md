---
title: PRIMES is in P
authors:
- Manindra Agrawal
- Neeraj Kayal
- Nitin Saxena
year: 2004
venue: Annals of Mathematics
arxiv: null
doi: 10.4007/annals.2004.160.781
source: "https://doi.org/10.4007/annals.2004.160.781"
topics:
- primality
- aks
- complexity
seed_rank: 811
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: A Method for Obtaining Digital Signatures and Public-Key Cryptosystems
  url: "https://doi.org/10.1145/359340.359342"
  year: 1978
  arxiv: null
  doi: 10.1145/359340.359342
see:
- "782-a-method-for-obtaining-digital-signatures-and-public-key-cry"
---

# PRIMES is in P

## One-sentence takeaway

Agrawal, Kayal, and Saxena give a deterministic polynomial-time primality test: n is prime iff (X + a)ⁿ ≡ Xⁿ + a (mod Xʳ − 1, n) for a short explicit range of a and a suitably chosen r, with no appeal to unproven hypotheses.

## Why it matters here

RSA-style public-key machinery (and any Anoptic/GRID COMMAND identity layer that samples primes) already used Miller–Rabin in practice; AKS is the complexity-theoretic full stop that PRIMES is unconditionally in P, not merely in coRP or in P under ERH.

## Key ideas

- The identity (X + a)ⁿ = Xⁿ + a in characteristic n characterizes prime n; working modulo a cyclotomic Xʳ − 1 keeps the polynomials small enough to evaluate in poly(log n) time.
- r is chosen so that the order of n modulo r is large, which makes the polynomial identity imply n is a prime power (then a perfect-power check finishes).
- The original paper’s exponent is high (roughly Õ(log¹² n)); later Lenstra–Pomerance variants improve the exponent, but the unconditional membership is already here.
- Miller–Rabin remains the engineering test; AKS is the derandomization landmark.

## Caveats

## Links

- DOI: [10.4007/annals.2004.160.781](https://doi.org/10.4007/annals.2004.160.781)
- URL: https://doi.org/10.4007/annals.2004.160.781
