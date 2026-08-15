---
title: "Communication Theory of Secrecy Systems"
authors:
  - "Claude E. Shannon"
year: 1949
venue: "Bell System Technical Journal"
arxiv: null
doi: "10.1002/j.1538-7305.1949.tb00928.x"
source: "https://doi.org/10.1002/j.1538-7305.1949.tb00928.x"
topics:
  - cryptography
  - information-theory
  - shannon
seed_rank: 555
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "A Mathematical Theory of Communication"
    url: "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x"
    year: 1948
    arxiv: null
    doi: "10.1002/j.1538-7305.1948.tb01338.x"
see:
  - "553-a-mathematical-theory-of-communication"
---

# Communication Theory of Secrecy Systems

## One-sentence takeaway

Shannon treats a cipher as a communication system with a secret key and proves that perfect secrecy requires the key to be at least as large as the message.

## Why it matters here

Agent-to-engine and observer channels in Broadside are secrecy systems in Shannon's sense: residual information after intercept is a first-class quantity, not a slogan.

## Key ideas

- A secrecy system is a family of invertible transformations indexed by a key with a known prior.
- Perfect secrecy means the ciphertext is statistically independent of the plaintext; the one-time pad meets the bound and is essentially unique at equality.
- Unicity distance estimates how much ciphertext a cryptanalyst needs before the key (and message) become determined.
- Equivocation \(H(K\mid E)\) and \(H(M\mid E)\) track how uncertainty about key and message falls as more cryptogram is seen.
- The paper declassifies wartime Bell Labs work and is the theoretical charter of modern cryptography.

## Caveats

## Links

- DOI: [10.1002/j.1538-7305.1949.tb00928.x](https://doi.org/10.1002/j.1538-7305.1949.tb00928.x)
- URL: https://doi.org/10.1002/j.1538-7305.1949.tb00928.x
