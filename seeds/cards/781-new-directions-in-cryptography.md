---
title: New Directions in Cryptography
authors:
- Whitfield Diffie
- Martin E. Hellman
year: 1976
venue: IEEE Transactions on Information Theory
arxiv: null
doi: 10.1109/TIT.1976.1055638
source: "https://doi.org/10.1109/TIT.1976.1055638"
topics:
- cryptography
- diffie-hellman
seed_rank: 781
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
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

# New Directions in Cryptography

## One-sentence takeaway

Diffie–Hellman separate encryption and decryption keys and give a public-key agreement: two parties publish $g^a$ and $g^b$ and share $g^{ab}$ without a prior secret.

## Why it matters here

This is the root of every TLS-style channel Anoptic, Broadside, or a GRID COMMAND matchmaker will ever open — public-key distribution instead of couriered shared secrets.

## Key ideas

- A public-key cryptosystem publishes an encryption transformation whose inverse stays private.
- The DH protocol works in a finite cyclic group: security is the discrete-logarithm / computational Diffie–Hellman assumption.
- Digital signatures are sketched as the dual of public-key encryption (authenticate by decrypting with the private key).
- The paper ends the “only shared-secret key distribution” era and sets the stage for RSA a year later.

## Caveats

## Links

- DOI: [10.1109/TIT.1976.1055638](https://doi.org/10.1109/TIT.1976.1055638)
- URL: https://doi.org/10.1109/TIT.1976.1055638
