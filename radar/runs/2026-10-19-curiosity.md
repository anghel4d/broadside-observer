# Radar run — Curiosity — 2026-10-19

- Fired 2026-10-19 00:20 Europe/Bucharest; odd date / 00:00 → Curiosity. Starting main `5b64f6e` (2343 cards, max rank 2343). Branch `radar/curiosity-2026-10-19`.
- arXiv: `/list/math.CO/new` still shows **Fri 16 Oct 2026**, which curiosity-2026-10-17 already harvested; no Sat/Sun announcements, so **0** new arXiv entries (next listing Mon 19 Oct, 03:00 local). Recency for Curiosity is flexible, so the sweep moved to non-arXiv venues.
- Sources polled (all 200): bioRxiv API `details/biorxiv/2026-10-16/2026-10-18` (540 records, 413 new v1 papers, all titles read); ECCC reports feed; Nature, Nature Physics, Nature Communications, Science, Science Advances, PNAS, eLife RSS; Quanta Magazine feed; Terence Tao, Gil Kalai and Scott Aaronson blogs. APS PRL/PRX feeds did not respond (timed out, no file).
- Window: bioRxiv posted 16–18 Oct; journals, ECCC and blogs dated 14–18 Oct (none of these venues had been swept by a Curiosity run before). Deduped against seen.json (titles, urls, near-keepers), card text and INDEX.

## Funnel
- Raw 951 → in window and fresh 655 (all titles read) → strict shortlist 38 (abstracts read; 4 full PDFs read: ECCC 256 and 257, both bioRxiv keepers) → keepers 5 (5/38 ≈ 0.13, under the 0.15 cap).

## Keepers
- 2344 ECCC TR26-256 Polynomial Block Lengths Are Necessary and Sufficient to Beat Insertion Sort — Chukhin, Kulikov, Levitskii, Mihajlin: cut blocks of length n^{o(1)} still need n − o(n) moves; n^α blocks give (1 − ε_α)n. Normal-form counting lower bound, exponent-recursion upper bound from Eriksson et al.'s 2n/3.
- 2345 ECCC TR26-257 Approximating Independent Sets Using Additive Combinatorics — Lovett: deterministic quasi-poly N/exp((log N)^{1/3}) approximation via Kelley–Meka spreadness/sifting and SDP pseudo-marginals; same shape as Khot–Ponnuswami hardness.
- 2346 bioRxiv 10.64898/2026.10.16.759554 Eco-Evolutionary Graph Theory: Regular Graphs can act as Amplifiers — Berry–Hauert: decoupled birth/death with vacant space unifies Bd and dB Moran; regular graphs and lattices amplify selection.
- 2347 bioRxiv 10.64898/2026.10.13.758973 Ice drives the emergence of functional protocells — slow freeze–thaw co-concentrates solutes and lipids, forms giant vesicles, and switches on a diluted PURE transcription–translation system inside them.
- 2348 Nature doi 10.1038/s41586-026-11163-6 Wave coarsening drives time crystallization in mechatronic metamaterials — vibrations coarsen into a synchronized classical time crystal; arresting it yields nonlinear chiral edge modes. (Card from abstract; full text paywalled.)

## Near misses (recorded in seen.json `curiosity_2026_10_19_near_keepers`)
- Simplified PARITY ∉ QAC0 (ECCC TR26-258) — a follow-up to card 2129; better as a `cites` addition there (human-gated).
- Wigderson's survey of Michael Rabin's work (ECCC TR26-259) — better as an Archive anchor.
- Work extraction from hidden degrees of freedom (Nature Physics); dynamic ruler for positional memory in zebrafish fin regeneration (Nature Physics; only a news summary was accessible); parasites evolving into host defence systems (bioRxiv); self-extending CRISPR DNA recording (bioRxiv); unconditional quantum PAC advantage (ECCC TR26-255); division of labour between two interacting public tasks (bioRxiv).
- Read and cut: blackworms in a maze (no control), breadboard neuroscience, meditation double-well model, newborn rhythm categorisation, Hox-fixed insect gonad counts, rodents lack neuromelanin because they die too young, cold-adapted deep-ocean Cas9, phage time continuum, limits on male mating, closed-loop trained cortical cultures, telomere-length Markov chain, average- vs worst-case PH and meta-complexity (ECCC TR26-253), early tetrapod necks, leap hour replaces leap second (news), AI-assisted amateur codebreaking (news), butterfly evasion, dendritic rule computation, winds and bird flight cost, macroscopic acoustic entanglement, Gaussian boson sampling emulator, transitive inference on a premotor mental line, Tao on formalizing all of mathematics, SAIR Open Math OS (Frontier material).

## Validation
- All five cards carry One-sentence takeaway, Why it's lovely, Key ideas, Caveats and `## Links` (`grep -L '^## Links'` empty); `see` stems exist; prefixes 2344–2348 new and dense.
- `seeds/app` `tsx scripts/pack-cards.ts` run locally: packed 2348 cards · 38 lineage docs with no errors.
