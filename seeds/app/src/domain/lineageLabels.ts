/**
 * Human titles for lineage (and pool) slugs packed from cards.json.
 * Filter values and data keys stay the raw slug; this is display-only.
 */

export const LINEAGE_TITLES: Readonly<Record<string, string>> = {
  "concurrent-data-structures": "Concurrent data structures",
  "work-stealing-schedulers": "Work-stealing schedulers",
  "memory-allocators": "Memory allocators",
  "ecs-data-oriented": "ECS & data-oriented design",
  "radiance-cascades": "Radiance Cascades & real-time GI",
  pathfinding: "Pathfinding",
  "memory-reclamation": "Safe memory reclamation",
  "game-networking": "Game networking",
  "game-ai-planning": "Behavior trees & GOAP",
  "gpu-driven-rendering": "GPU-driven rendering",
  "procedural-generation": "Procedural generation",
  "crowd-steering": "Crowd steering & ORCA",
  "algebraic-effects": "Algebraic effects",
  "particle-fluids": "Particle fluids",
  "open-addressing": "Open-addressing hash tables",
  "realtime-scheduling": "Real-time scheduling",
  "ambient-occlusion": "Ambient occlusion",
  "contemporary-databases": "Contemporary databases",
  "type-safety": "Type safety",
  "foundations-of-computing": "Foundations of computing",
  "programming-language-foundations": "Programming language foundations",
  "algorithms-and-complexity": "Algorithms & complexity",
  deepseek: "DeepSeek",
};

export const POOL_TITLES: Readonly<Record<string, string>> = {
  systems: "Systems",
  engines: "Engines",
  "game-ai": "Game AI",
  languages: "Languages",
  "maths-foundations": "Maths foundations",
  agents: "Agents",
  graphics: "Graphics",
  realtime: "Real-time",
};

/** Hyphens/underscores → spaces; capitalize the first letter. */
export function prettifySlug(slug: string): string {
  const spaced = slug.replace(/[_-]+/gu, " ").replace(/\s+/gu, " ").trim();
  if (spaced.length === 0) return slug;
  return spaced.slice(0, 1).toUpperCase() + spaced.slice(1);
}

export function labelForLineage(slug: string): string {
  return LINEAGE_TITLES[slug] ?? prettifySlug(slug);
}

export function labelForPool(slug: string): string {
  return POOL_TITLES[slug] ?? prettifySlug(slug);
}
