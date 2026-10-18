---
title: "Claude reveals ECDSA curve origins"
authors:
  - "John Wood"
  - "Henry de Valence"
  - "Ava Howell"
  - "Zack Voase"
  - "Lucy Sweet"
  - "Amir Omidi"
  - "Paul Crowley"
  - "Iain McGinniss"
  - "Nicholas Carlini"
  - "Steve Weis"
year: 2026
venue: "Anthropic Frontier Red Team (research post)"
arxiv: null
doi: null
source: "https://www.anthropic.com/research/ecdsa-curve-origins"
topics:
  - "agent-security"
  - "ai-assisted-research"
  - "cryptanalysis"
seed_rank: 2342
seed_batch: "frontier-2026-10-18"
reviewed: "2026-10-18"
pool: "agents"
relevance_score: 9
cites:
  - title: "Claude reveals ECDSA curve origins"
    url: "https://www.anthropic.com/research/ecdsa-curve-origins"
    year: 2026
    arxiv: null
    doi: null
  - title: "A Riddle Wrapped in an Enigma"
    url: "https://eprint.iacr.org/2015/1018"
    year: 2015
    arxiv: null
    doi: null
  - title: "FIPS 186-2 Digital Signature Standard"
    url: "https://csrc.nist.gov/pubs/fips/186-2/upd1/final"
    year: 2000
    arxiv: null
    doi: null
see: []
---

# Claude reveals ECDSA curve origins

## One-sentence takeaway

An internal Claude research model worked out in under half an hour that the NSA-supplied seeds behind the NIST P-192/224/256/384/521 curves (and the ANSI X9.62 prime examples and four binary curves) were never hashes of a phrase but raw output of the C library's `lrand48`, seeded with Unix timestamps from May 1997 to April 1998. It recovered the generator states with bit-pattern tests and LLL lattice reduction, which closes a 25-year provenance mystery and makes a deliberate backdoor much less plausible.

## Why it matters here

It is a crisp, checkable example of a frontier model doing original detective work: it rejected the human folklore lead (a humorous passphrase hash), guessed how 1990s software would have generated the seeds, and wrote its own scanners and solvers. The result is fully reproducible in a dozen lines of Python. We re-ran the published P-256 recipe (timestamp 1997-08-16 01:52:34 UTC, candidate 1,842) and it regenerates `C49D3608 86E70493 6A6678E1 139D26B7 819F7E90` exactly. That is the right evidence standard for agent research claims in Broadside: a short program anyone can run, not a model's say-so.

## Key ideas

- **Fingerprint the generator, not the message.** Claude slid along each seed testing 34 generator and output-slice combinations for consecutive outputs of 1990s PRNGs. Four of ten seeds had the top bit of all five 32-bit words clear (about 1 in 5,810 by chance), the signature of `lrand48`, which returns only the top 31 bits of a 48-bit LCG state.
- **State recovery.** For full 31-bit outputs it brute-forced the 17 hidden bits (2^17) and checked the next words. For the prime-curve seeds, which keep fewer bits (`lrand48() >> 23`), recovering a truncated LCG state is a textbook lattice problem solved with LLL, run over every candidate bit window.
- **Walk back to `srand48`.** The LCG runs backwards, so each state was stepped back to the `srand48` form (low 16 bits 0x330E). Every prime-curve start was a plausible 1997–98 Unix timestamp, and each recovered 48-bit state regenerates all 160 seed bits. The binary-curve starts read as 1984 unless the clock was halved, which gives 17 April 1998.
- **Bonus: base points.** The base points of six May-1997 curves (P-192 and five X9.62 examples) come from the FreeLIP / early NTL `zrandom` generator with small integer seeds (20000 for P-192), the first explanation of any NIST base point.
- **Model self-skepticism on record.** The published reasoning trace checks whether it is in a test environment, then accepts the result only after a 160-bit match from a 32-bit seed and small index, ten times over.

## Caveats

This is a blog post with code, not a peer-reviewed paper; the internal model is unnamed. Open questions remain: some viable candidate curves were skipped (P-256's run passed over candidate 876, which also gives a prime-order curve) for unknown reasons. The B-163 seed is unexplained, and so are the base points of P-224/256/384/521 and the binary curves. The authors argue that grinding timestamps to hide a weak curve is implausible but cannot rule it out from the numbers alone. It is not a cryptographic break. The $36,864 bounty is being donated to ISRG.

## Links

- Anthropic research post (with reproduction code): https://www.anthropic.com/research/ecdsa-curve-origins
- Koblitz–Menezes, "A Riddle Wrapped in an Enigma": https://eprint.iacr.org/2015/1018
- FIPS 186-2: https://csrc.nist.gov/pubs/fips/186-2/upd1/final
