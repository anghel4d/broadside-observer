# Radar run — Curiosity — 2026-11-01

- Fired 2026-11-01 00:15 Europe/Bucharest; odd date / 00:00 → Curiosity (31 Oct and 1 Nov are both odd, so Curiosity runs twice in a row). Starting main `7cf3440` (2480 cards, max rank 2480). Branch `radar/curiosity-2026-11-01`.
- Window: arXiv had no new listing since Fri 30 Oct 2026 (already swept by the 2026-10-31 Curiosity run; `/list/math.CO/pastweek` still tops out at Fri 30 Oct). So this run polled Quanta Magazine RSS (feed pages 1–2, 24 items from 14 Sep to 30 Oct 2026) and the primary papers each article links, plus openai/math commits (only a 29 Oct comparator alignment, nothing new).

## Funnel
- 24 Quanta items → 4 not yet checked by an earlier run plus 20 older ones opened for their primary sources → about 35 linked papers, 33 not in seen/cards/summaries → strict shortlist 13 → first six pages read for 1 → keepers 1 (1/13 ≈ 0.077, under the 0.15 cap).

## Keepers
- 2481 The Non-Orientable Topology of Condorcet's Paradox — Livson, Pritam, Prokopenko (2601.07283, v6): Baryshnikov's nerve-complex model of three-alternative rankings extended with cycle simplices; contradictory cycles glue with a twist to a Klein bottle (unrealised) or RP² (realised), valid intransitive cycles give an annulus or sphere, and Arrow's theorem becomes a statement about orientability. Via Quanta, 26 Oct.

## Near misses (recorded in seen.json `curiosity_2026_11_01_near_keepers`)
- Graham's 1971 rearrangement conjecture resolved for large primes (Pham–Sauermann, 2602.15797) and over F₂ⁿ (Bedert et al., 2508.18254); colour refinement canonically labels random regular graphs (2602.17567; near card 1989); first 3D map of thermal phases in the local ISM, ~41% of neutral mass thermally unstable (2607.15352); spider-silk dope condensates (PNAS 2523198122); brine-shrimp swarms and turbulence (Sci. Adv. adv0956); quantum-like bits from Hermitian weighted graphs (2604.23991); complex cortical waves (Nat. Commun. 2026); Waddington landscape (PLOS Biol.); ctenophores (Sci. Adv. aea8399); Golowich Grassmannian HDX (2305.02512); attention article references.

## Suggestions (human-gated, not applied)
- The rotation gives Curiosity on two consecutive midnights when an odd date follows an odd date (31 → 1), and the weekend leaves no new arXiv listing for it. Consider letting the 00:00 slot after a 31st fall to Archive, or giving weekend Curiosity runs a standing non-arXiv source list (Quanta, journal TOCs).
- Add Quanta Magazine as a registered Curiosity source in `radar/sources.yaml`; it is now used ad hoc on several runs.
- Graham's rearrangement (2602.15797) is the strongest near miss and a good pick for the next Curiosity run if its pool is thin.
- Carry-over: add math.DG, math.AP, math.SG, math.GT, math.MG and cond-mat.soft to Curiosity's categories; add an "ai-assisted-proof" topic slug.

## Validation
- Card 2481 has every required section including `## Links`.
- `seeds/app` `tsx scripts/pack-cards.ts` packed 2481 cards cleanly.
