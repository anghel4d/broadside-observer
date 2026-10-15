---
title: "PHastR: Faster Minimal Perfect Hashing with Rotated Layouts"
authors:
  - "Sebastiano Vigna"
year: 2026
venue: "arXiv"
arxiv: "2610.17833"
doi: null
source: "https://arxiv.org/abs/2610.17833"
topics:
  - "minimal-perfect-hashing"
  - "bit-parallel"
  - "data-structures"
seed_rank: 2299
seed_batch: "craft-2026-10-15"
reviewed: "2026-10-15"
pool: "systems"
relevance_score: 8
lineage: perfect-hashing
cites:
  - title: "PHastR: Faster Minimal Perfect Hashing with Rotated Layouts"
    url: "https://arxiv.org/abs/2610.17833"
    year: 2026
    arxiv: "2610.17833"
    doi: null
see:
  - "1494-cuckoo-hashing"
  - "416-robin-hood-hashing"
  - "2233-a-new-hashing-method-with-application-for-game-playing"
---

# PHastR: Faster Minimal Perfect Hashing with Rotated Layouts

## One-sentence takeaway

Splitting each bucket seed into a few independent "layouts" plus a bit-parallel "rotation" keeps PHast+'s fast word-shift seed search while killing its self-collisions, giving ~1.9 bits/key MPHFs that build in 37% of PHast+'s time and query 28% faster on 10^9 keys.

## Why it matters here

Static key→dense-index maps are everywhere in an engine and toolchain: asset/string IDs, interned symbols, shader/permutation tables, ECS archetype lookups, baked level data. PHastR is a near-one-memory-access query with under 2 bits/key of overhead, a shipping Rust implementation (`sux` crate), parallel build and a one-pass offline build — a direct drop-in for build-time-baked lookup tables.

## Key ideas

- **Bucket placement with fixed-width seeds.** Keys hash to buckets; each bucket stores an 8-bit (or wider) seed in a plain array, and the seed places every key of the bucket into a small slice/ring of slots. Unplaceable buckets are bumped to a next level, so search never backtracks (PHast scheme).
- **Layout × rotation seeds.** The low seed bits pick one of a few independent layouts (per-key offsets obtained for free, two shifts); the high bits pick a rotation moving all keys of the bucket together around their rings.
- **Bit-parallel search.** For each key, a word records which slots of its ring are already used; cyclically shifting these words and OR-ing them evaluates *all rotations of a layout at once*, like PHast+.
- **Self-collision immunity.** In PHast+'s purely additive scheme two keys that collide for one seed collide for nearly all seeds; over a third of its bumped buckets contain such a pair. With layouts, a pair must collide in every layout, so PHastR bumps 0.5% of keys instead of 3.9%.
- **Numbers (48-core Xeon, 10^9 keys).** 1.94 bits/key with 8-bit seeds (1.90 with larger buckets, within 0.02 of PHast); queries faster than PHast and about as fast as PtrHash, which uses >1 more bit/key; parallel build ~3× faster than PHast+.
- **Lower bound.** If each key may only land within W slots, any placement of n random keys must bump ≈0.1/W of keys (best ≈1/2W) — so a bump-free first level is impossible, and PHastR still has ~10× headroom.

## Caveats

Static key sets only (rebuild on change). Wins are measured against the PHast/PtrHash family on uniform 64-bit hashes; tiny key sets and non-x86 targets are not the focus. Single-author preprint (v2 2026-10-14).

## Links

- arXiv abstract: https://arxiv.org/abs/2610.17833
- PDF: https://arxiv.org/pdf/2610.17833
- Implementation (Rust `sux` crate): https://crates.io/crates/sux
