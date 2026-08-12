#!/usr/bin/env python3
"""Apply shallow lineage scan: mint, patch cites, log, update INDEX/ranges."""
from __future__ import annotations
import json, re
from pathlib import Path
from typing import Any, Dict, List, Optional

ROOT = Path("/workspace/broadside/seeds")
CARDS = ROOT / "cards"
POOLS = ROOT / "_pools"
DATA = POOLS / "shallow_pass"
BATCH = "lineage-shallow-2026-08-13"
REVIEWED = "2026-08-13"
DEEP = {"lock-free-queues","work-stealing","slab-allocators","ecs-data-oriented","radiance-cascades"}

def slugify(title: str, n: int = 55) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")
    return s[:n].rstrip("-")

def yaml_escape(s: str) -> str:
    return s.replace('"', "'")

def yaml_cites(cites: List[Dict[str, Any]]) -> str:
    lines = ["cites:"]
    for c in cites:
        lines.append(f'  - title: "{yaml_escape(c["title"])}"')
        lines.append(f'    url: "{c["url"]}"')
        lines.append(f'    year: {c["year"]}')
        lines.append(f'    arxiv: {("null" if not c.get("arxiv") else "\""+c["arxiv"]+"\"")}')
        lines.append(f'    doi: {("null" if not c.get("doi") else "\""+c["doi"]+"\"")}')
        lines.append(f'    card: {("null" if not c.get("card") else "\""+c["card"]+"\"")}')
    return "\n".join(lines)

def strip_lineage_cites(front: str) -> str:
    front = re.sub(r"^cites:\n(?:  .*\n)*", "", front, flags=re.M)
    front = re.sub(r"^lineage:\s*.*\n?", "", front, flags=re.M)
    return front.rstrip() + "\n"

def get_scalar(front: str, key: str) -> Optional[str]:
    m = re.search(rf"^{re.escape(key)}:\s*(.*)$", front, re.M)
    if not m: return None
    v = m.group(1).strip()
    if v in ("null","~",""): return None
    if (v[0]==v[-1]) and v[0] in "\"'": v = v[1:-1]
    return v

def fix_known_fields(front: str, stem: str) -> str:
    # JPS DOI + source
    if stem.startswith("253-online-graph-pruning"):
        front = re.sub(r"^doi:.*$", 'doi: "10.1609/aaai.v25i1.7994"', front, count=1, flags=re.M)
        front = re.sub(r"^source:.*$", 'source: "https://doi.org/10.1609/aaai.v25i1.7994"', front, count=1, flags=re.M)
    if stem.startswith("409-debra"):
        front = re.sub(r"^venue:.*$", 'venue: "PODC"', front, count=1, flags=re.M)
        front = re.sub(r"^doi:.*$", 'doi: "10.1145/2767386.2767436"', front, count=1, flags=re.M)
        front = re.sub(r"^source:.*$", 'source: "https://doi.org/10.1145/2767386.2767436"', front, count=1, flags=re.M)
    if stem.startswith("342-improving-jump"):
        front = re.sub(r"^source:.*$", 'source: "https://ojs.aaai.org/index.php/ICAPS/article/view/13620"', front, count=1, flags=re.M)
    return front

def main():
    stems = json.loads((DATA/"stems.json").read_text())
    membership = json.loads((DATA/"membership.json").read_text())
    mints = json.loads((DATA/"mints.json").read_text())
    extras = json.loads((DATA/"cites_extra.json").read_text())

    # merge cite graphs
    cites_by_key: Dict[str, List[Dict[str, Any]]] = {}
    for name in ["cites_grid.json","cites_rollback.json","cites_smr.json","cites_steering.json","cites_gpu.json","cites_bt.json","cites_pcg.json"]:
        cites_by_key.update(json.loads((DATA/name).read_text()))

    # resolve mint keys -> stems
    key_to_stem = dict(stems)
    minted_paths = []
    for m in mints:
        stem = f"{m['num']:03d}-{slugify(m['title'])}"
        key_to_stem[m["key"]] = stem
        # write card
        authors = "\n".join(f'  - "{a}"' for a in m["authors"])
        topics = "\n".join(f"  - {t}" for t in m["topics"])
        arx = "null" if not m.get("arxiv") else f'"{m["arxiv"]}"'
        doi = "null" if not m.get("doi") else f'"{m["doi"]}"'
        ideas = "\n".join(f"- {i}" for i in m["ideas"])
        caveats = "\n".join(f"- {c}" for c in m["caveats"])
        links = [f'- URL: {m["source"]}']
        if m.get("doi"):
            links.insert(0, f'- DOI: [{m["doi"]}](https://doi.org/{m["doi"]})')
        if m.get("arxiv"):
            links.append(f'- arXiv: [{m["arxiv"]}](https://arxiv.org/abs/{m["arxiv"]})')
        for el in m.get("extra_links") or []:
            links.append(f"- {el}")
        # cites filled after resolve
        body = f"""
# {m['title']}

## One-sentence takeaway

{m['takeaway']}

## Why it matters here

{m['why']}

## Key ideas

{ideas}

## Caveats

{caveats}
- Seed card from shallow lineage pass; promote before relying on fine-grained claims.

## Links

{chr(10).join(links)}
"""
        front = f'''title: "{yaml_escape(m['title'])}"
authors:
{authors}
year: {m['year']}
venue: "{yaml_escape(m['venue'])}"
arxiv: {arx}
doi: {doi}
source: "{m['source']}"
topics:
{topics}
seed_rank: {m['num']}
seed_batch: "{BATCH}"
reviewed: "{REVIEWED}"
pool: "{m['pool']}"
relevance_score: {m['rel']}
lineage: {m['lineage']}
'''
        path = CARDS / f"{stem}.md"
        # temporary write without cites; patched below
        path.write_text("---\n" + front + "---" + body)
        minted_paths.append((m["key"], stem, m))

    def resolve_cite(c: Dict[str, Any]) -> Dict[str, Any]:
        ck = c.get("card_key")
        card = None
        if ck:
            if ck.startswith("ABS:"):
                card = ck[4:]
            else:
                card = key_to_stem.get(ck)
        return {
            "title": c["title"],
            "url": c["url"],
            "year": c["year"],
            "arxiv": c.get("arxiv"),
            "doi": c.get("doi"),
            "card": card,
        }

    # lineage of each key
    key_lineage = {}
    for lin, keys in membership.items():
        for k in keys:
            key_lineage[k] = lin

    log = []
    patched = 0
    skipped_deep = 0

    # Patch all membership cards (existing + minted)
    for lin, keys in membership.items():
        for key in keys:
            stem = key_to_stem[key]
            path = CARDS / f"{stem}.md"
            if not path.exists():
                log.append({"decision": "missing-card", "key": key, "stem": stem, "lineage": lin})
                continue
            text = path.read_text(errors="replace")
            pre, front, body = text.split("---", 2)
            existing_lin = get_scalar(front, "lineage")
            if existing_lin in DEEP:
                skipped_deep += 1
                log.append({"decision": "skip-deep-lineage", "stem": stem, "lineage": existing_lin})
                continue
            raw_cites = cites_by_key.get(key, [])
            cites = [resolve_cite(c) for c in raw_cites]
            front = strip_lineage_cites(front)
            front = fix_known_fields(front, stem)
            front = front.rstrip() + "\n"
            front += f"lineage: {lin}\n"
            if cites:
                front += yaml_cites(cites) + "\n"
            path.write_text("---\n" + front + "---" + body)
            patched += 1
            log.append({
                "decision": "patch-lineage-cites" if key in stems else "mint",
                "stem": stem,
                "lineage": lin,
                "n_cites": len(cites),
                "seed_batch": BATCH if key not in stems else get_scalar(front, "seed_batch"),
            })

    # Extra cites-only (no lineage) — skip if already has lineage (including just set)
    extra_patched = 0
    for stem, raw in extras.items():
        path = CARDS / f"{stem}.md"
        if not path.exists():
            # try prefix
            hits = list(CARDS.glob(stem[:40] + "*.md"))
            if not hits:
                log.append({"decision": "extra-missing", "stem": stem})
                continue
            path = hits[0]
            stem = path.stem
        text = path.read_text(errors="replace")
        pre, front, body = text.split("---", 2)
        existing_lin = get_scalar(front, "lineage")
        if existing_lin:
            # if already in a medium/deep lineage, skip overwrite; optionally merge only if no cites
            log.append({"decision": "extra-skip-has-lineage", "stem": stem, "lineage": existing_lin})
            continue
        cites = [resolve_cite(c) for c in raw]
        # if already has cites, skip
        if re.search(r"^cites:", front, re.M):
            log.append({"decision": "extra-skip-has-cites", "stem": stem})
            continue
        front = strip_lineage_cites(front)
        front = front.rstrip() + "\n" + yaml_cites(cites) + "\n"
        path.write_text("---\n" + front + "---" + body)
        extra_patched += 1
        log.append({"decision": "patch-cites-only", "stem": stem, "n_cites": len(cites)})

    # decision log
    log_path = POOLS / "lineage_shallow_scan.jsonl"
    with log_path.open("w") as f:
        for row in log:
            f.write(json.dumps(row) + "\n")
        f.write(json.dumps({
            "decision": "summary",
            "patched_with_lineage": patched,
            "minted": len(mints),
            "extra_cites_only": extra_patched,
            "skipped_deep": skipped_deep,
            "medium_lineages": list(membership.keys()),
            "seed_batch": BATCH,
            "card_range": "701-850",
        }) + "\n")

    # update lineage_ranges.json
    ranges_path = POOLS / "lineage_ranges.json"
    ranges = json.loads(ranges_path.read_text())
    ranges["shallow-scan"] = {
        "start": 701,
        "end": 850,
        "claimed": REVIEWED,
        "seed_batch": BATCH,
        "note": "Medium-thread shallow lineage scan; mints + cites patches",
        "minted": [m["num"] for m in mints],
        "lineages": list(membership.keys()),
    }
    ranges_path.write_text(json.dumps(ranges, indent=2) + "\n")

    # INDEX append
    index_path = ROOT / "INDEX.md"
    idx = index_path.read_text()
    if "## Shallow lineage scan" not in idx:
        section = ["", f"## Shallow lineage scan (`{BATCH}`)", "",
                   "Medium threads (depth 2–3) over non-deep cards. New mints use reserved block **701–850**.",
                   "Narratives: " + ", ".join(f"[`lineages/{x}.md`](lineages/{x}.md)" for x in membership),
                   "",
                   "| # | Score | Year | Title | Lineage | Pool |",
                   "|---|------:|-----:|-------|---------|------|"]
        for m in sorted(mints, key=lambda x: x["num"]):
            stem = key_to_stem[m["key"]]
            section.append(f"| {m['num']} | {m['rel']} | {m['year']} | {m['title']} | `{m['lineage']}` | {m['pool']} |")
        section.append("")
        section.append(f"Patched **{patched}** cards with `lineage` + `cites`; **{extra_patched}** additional cites-only edges; decision log `_pools/lineage_shallow_scan.jsonl`.")
        section.append("")
        index_path.write_text(idx.rstrip() + "\n" + "\n".join(section) + "\n")

    print(json.dumps({
        "patched_with_lineage": patched,
        "minted": len(mints),
        "extra_cites_only": extra_patched,
        "skipped_deep": skipped_deep,
        "log": str(log_path),
        "mint_stems": [key_to_stem[m["key"]] for m in mints],
    }, indent=2))

if __name__ == "__main__":
    main()
