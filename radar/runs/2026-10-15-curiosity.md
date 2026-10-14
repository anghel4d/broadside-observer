# Radar run — Curiosity — 2026-10-15

- Fired 2026-10-15 00:12 Europe/Bucharest; odd date / 00:00 → Curiosity. Starting main dc446a8 (2293 cards, max rank 2293).
- Feeds: arXiv `/list/<cat>/new` + `/list/<cat>/recent?show=2000` across 50 curiosity categories (maths incl. math.CT/CO/DS/HO/MG/GT, cs theory/CG/FL/LO/GR/PL/NE/SD, physics.flu-dyn/bio-ph/soc-ph/hist-ph, cond-mat.soft/stat-mech, nlin, q-bio). 89/100 listing pages 200 after retries (arXiv 429 rate limiting); physics.class-ph polled through the export API instead (60 newest). Still missing after retries: math.HO recent, physics.pop-ph recent, q-bio.NC/QM/TO recent, cs.CC recent, physics.flu-dyn new, math.GN recent, math.CT new (each category's other listing page did load).
- Window: ids ≥ 2610.14000 plus everything on the Wed 14 Oct `/new` pages; deduped against seen.json (ids, titles, near-keepers), card text, INDEX and summaries.

## Funnel
- Raw 6092 → unique 3779 → fresh 3736 → in window 2027 → keyword cream + fun-category title scan 743 → strict shortlist 38 (abstracts read; 7 full PDFs read) → keepers 5 (5/38 ≈ 0.132, under the 0.15 cap).

## Keepers
- 2294 2610.11823 Rank of 3×3 matrix multiplication over F2 is 23 (Laderman optimal over F2 / integers; Lean-kernel-checked certificates)
- 2295 2610.18713 Proof of the Erdős–Simonovits rational exponents conjecture (claimed by Epoch AI while benchmarking GPT-6 Astra; written up by Conlon et al.)
- 2296 2610.14380 Lattices with kissing number 2^Ω(√n) from exact locally dense lattices (beats Leech's 1964 bound)
- 2297 2610.15145 Game of Cycles parity conjecture fails on trees (hidden Nim heaps; smallest counterexample 15 vertices)
- 2298 2610.13986 Triangles and quadrilaterals suffice (Lang's circle-packed origami conjecture via the medial axis tree)

## Near misses (recorded in seen.json `curiosity_2026_10_15_near_keepers`)
- Big results cut for balance: r(4,t) = t³/(log t)^{2+o(1)} (2610.17891, 2610.15293), Szemerédi with random differences via arithmetic Kakeya (2610.18859, GPT 6 Astra suggestion), Rényi area-law conjecture false (2610.15199), translational tilings by axis-parallel polygonal sets decidable (2610.15785).
- Lovely but cut: permutation-fair dice (2610.15421), Hive is EXPTIME-complete (2610.15654), Kociemba's kaleidocycles (2610.13961), Uno round length (2610.14076), clean handshake gloves (2610.17602), synchronous tile self-assembly (2610.17112), 3D moving sofa (2610.14050), Blaschke–Lebesgue 0.41275 (2610.13964), rhombic dodecahedral conjecture (2610.13975), Reuleaux-polyhedra constant-width bodies (2610.16997), Period Piece (2610.16561), Hunters and Rabbit PSPACE (2610.18537), active foams (2610.15835).
- Held: Conway 99-graph nonexistence by SOS (2610.16266; a 6-page claim, waiting for the community to read it).
- Better as a Craft card: Hypergeometric Bridges for Multidimensional Grid Visibility (2610.16795; path-count meaning of interpolated grid visibility, fog-of-war relevant).

## Validation
- All five cards carry One-sentence takeaway, Why it's lovely, Key ideas, Caveats and `## Links` (`grep -L '^## Links'` empty); `see` stems exist; prefixes 2294–2298 new and dense.
- `seeds/app` `tsx scripts/pack-cards.ts` run locally: packed 2298 cards · 38 lineage docs with no errors.
