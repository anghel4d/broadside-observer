#!/usr/bin/env python3
"""Broadside Observer seed pass 2 collector."""
from __future__ import annotations
import json, re, time, urllib.parse, urllib.request, xml.etree.ElementTree as ET
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path("/workspace/broadside/seeds/_pools/pass2")
CARDS = Path("/workspace/broadside/seeds/cards")
NS = {"a":"http://www.w3.org/2005/Atom","arxiv":"http://arxiv.org/schemas/atom"}

BAN = re.compile(
    r"\b(LLM|large language|transformer|ChatGPT|GPT-[0-9]|BERT|RAG\b|neural radiance|NeRF|"
    r"Gaussian splat|diffusion model|reinforcement learning|deep RL|multi-agent RL|AlphaStar|"
    r"language model|foundation model|vision-language|VLM|CLIP|Stable Diffusion|agentic|"
    r"PagedAttention|MemGPT|Voyager|SWE-agent|Toolformer|Self-RAG|GraphRAG|"
    r"decision transformer|proximal policy|deep Q-?network|\bDQN\b|\bPPO\b|\bA3C\b|"
    r"neural network|deep learning|machine learning agent|LLM-based|pretrain(?:ed|ing)|"
    r"chatbot|prompt engineering|gaussian splatting|\b3dgs\b|attention is all)\b",
    re.I,
)

QUERIES = [
('all:"lock-free" OR all:lockfree OR all:"wait-free"', 40),
('all:"hazard pointer" OR all:"memory reclamation" OR all:QSBR OR all:DEBRA', 30),
('all:"work stealing" OR all:"work-stealing-schedulers" OR all:"Chase-Lev"', 30),
('all:"task graph" AND (all:scheduling OR all:parallel)', 25),
('all:slab AND all:allocator', 25),
('all:jemalloc OR all:tcmalloc OR all:mimalloc OR all:snmalloc OR all:Hoard', 30),
('all:"memory allocator" AND (all:multiprocessor OR all:scalable OR all:game OR all:concurrent)', 40),
('all:"region-based" AND all:memory', 25),
('all:"arena allocator" OR all:"linear allocator" OR all:"stack allocator"', 20),
('all:NUMA AND (all:allocator OR all:scheduling OR all:memory)', 25),
('all:SIMD AND (all:cache OR all:parallel OR all:game)', 25),
('all:"cache oblivious" OR all:"cache-oblivious"', 20),
('all:"parallel prefix" OR all:"prefix sum" OR (all:scan AND all:parallel)', 20),
('all:OpenMP AND all:task', 20),
('all:"lock-free" AND all:queue', 25),
('all:RCU AND (all:reclamation OR all:concurrent)', 20),
('all:"false sharing" OR all:"cache line"', 15),
('all:Vulkan AND (all:meshlet OR all:"mesh shader" OR all:"GPU-driven")', 30),
('all:"global illumination" AND (all:real-time OR all:realtime OR all:interactive)', 40),
('all:"radiance cascades" OR all:"voxel cone" OR all:"instant radiosity" OR all:LPV', 25),
('all:"clustered shading" OR all:"tiled shading" OR all:"deferred shading"', 30),
('all:"temporal antialiasing" OR all:TAA OR all:"visibility buffer"', 25),
('all:"order-independent transparency" OR all:OIT', 15),
('all:"cascaded shadow" OR all:"variance shadow"', 15),
('all:"signed distance" AND (all:rendering OR all:font OR all:scene)', 20),
('all:meshlet OR all:"mesh shaders"', 25),
('all:"bounding volume hierarchy" AND all:GPU', 20),
('all:DDGI OR all:"irradiance probe" OR (all:"light probe" AND all:real-time)', 20),
('all:"render graph" OR all:"frame graph"', 15),
('all:Vulkan AND (all:synchronization OR all:barrier OR all:bindless)', 20),
('all:lockstep OR (all:rollback AND (all:game OR all:network OR all:deterministic))', 30),
('all:"deterministic simulation" OR all:"deterministic lockstep"', 20),
('all:netcode OR all:"client-side prediction" OR all:"lag compensation"', 25),
('all:"job system" OR (all:fiber AND all:game AND all:parallel)', 20),
('all:"real-time scheduling" AND (all:soft OR all:game OR all:multimedia)', 25),
('all:"entity component" OR all:"entity-component" OR (all:ECS AND all:game)', 40),
('all:"data-oriented design" AND (all:entity OR all:component OR all:game)', 30),
('all:archetype AND (all:ECS OR all:component)', 25),
('all:"structure of arrays" OR (all:SoA AND (all:game OR all:simulation))', 20),
('all:GJK OR all:"position based dynamics" OR all:XPBD', 25),
('all:"physics engine" AND (all:constraint OR all:rigid OR all:game)', 25),
('all:"navigation mesh" OR all:navmesh', 20),
('all:"collision detection" AND all:real-time', 25),
('all:"jump point search" OR all:JPS OR all:"hierarchical pathfinding" OR all:"HPA*"', 25),
('all:"behavior tree" AND (all:game OR all:robot OR all:NPC)', 25),
('all:GOAP OR all:"goal-oriented action" OR (all:"HTN planning" AND all:game)', 25),
('all:"utility AI" OR all:"influence map" OR all:flocking OR all:boids', 25),
('all:"real-time strategy" AND (all:pathfinding OR all:planning OR all:"build order") AND NOT all:reinforcement', 30),
('all:MCTS OR all:"Monte Carlo tree search" AND (all:game OR all:Go OR all:chess) AND NOT all:deep', 30),
('all:ORCA OR all:"reciprocal velocity" OR all:"continuum crowds"', 20),
('all:"any-angle" AND all:pathfinding', 15),
('all:steering AND all:behavior AND all:autonomous', 15),
('all:"combat search" OR all:"portfolio greedy"', 15),
('all:"segregated fit" OR all:TLSF OR (all:buddy AND all:allocator)', 20),
('all:"memory pool" OR all:"object pool"', 20),
('all:"work stealing" AND all:deque', 15),
('all:blackboard AND (all:game OR all:AI)', 10),
]

POOL_KW = {
 "hpc": r"\b(lock[- ]?free|wait[- ]?free|hazard|reclamation|RCU|work[- ]?steal|NUMA|SIMD|allocator|malloc|jemalloc|mimalloc|tcmalloc|snmalloc|Hoard|OpenMP|MPI|cache[- ]?oblivious|prefix|parallel scan|task graph|false sharing|MPMC|SPSC|epoch|slab|multipool|arena|hashtable|hash table)\b",
 "graphics": r"\b(global illumination|radiance|voxel cone|LPV|meshlet|mesh shader|Vulkan|deferred|clustered|tiled shading|TAA|temporal anti|visibility buffer|OIT|shadow map|PBR|SDF|BVH|SSAO|render graph|GPU[- ]driven|ray trac|denois|probe|irradiance|photon|BRDF|tonemap|shading)\b",
 "realtime": r"\b(lockstep|rollback|netcode|determinis|job system|fiber|frame pac|latency|real[- ]time schedul|client[- ]side prediction|lag compensation|timestep|soft real[- ]time|EDF|rate monotonic)\b",
 "engine": r"\b(entity[- ]?component|ECS\b|data[- ]oriented|archetype|sparse set|physics|GJK|XPBD|PBD|constraint solver|animation|motion matching|asset pipeline|game engine|SoA|object pool)\b",
 "gameai": r"\b(pathfind|A\*|jump point|JPS|behavior tree|GOAP|HTN|utility AI|influence map|flocking|boids|steering|MCTS|Monte[- ]Carlo tree|ORCA|RVO|navmesh|build[- ]order|RTS|real[- ]time strategy|blackboard|STRIPS|any[- ]angle|combat search)\b",
}

def load_excludes():
    ax = {l.strip() for l in (ROOT/"exclude_arxiv.txt").read_text().splitlines() if l.strip()}
    titles = {l.strip().lower() for l in (ROOT/"exclude_titles.txt").read_text().splitlines() if l.strip()}
    for p in CARDS.glob("*.md"):
        try:
            text = p.read_text(errors="ignore")
            m = re.search(r'^title:\s*"(.*)"\s*$', text, re.M)
            if m: titles.add(m.group(1).strip().lower())
            m = re.search(r'^arxiv:\s*"?([0-9]+\.[0-9]+)"?', text, re.M)
            if m: ax.add(m.group(1))
        except Exception:
            pass
    return ax, titles

def norm_id(a):
    a = re.sub(r"^https?://arxiv\.org/(abs|pdf)/", "", a.strip()).replace(".pdf","")
    return a.split("v")[0]

def norm_title(t):
    t = re.sub(r"\s+", " ", (t or "").lower()).strip()
    return re.sub(r"[^\w\s\-\+:/\.]", "", t)

def banned(title, abstract=""):
    return bool(BAN.search(f"{title} {abstract}"))

def fetch_url(url, retries=5):
    last=None
    for i in range(retries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent":"BroadsideObserver/1.0 (research; anghel4d)"})
            with urllib.request.urlopen(req, timeout=90) as r:
                return r.read()
        except Exception as e:
            last=e; time.sleep(3+i*2)
    raise RuntimeError(f"fetch failed {url}: {last}")

def parse_entries(xml_bytes):
    root = ET.fromstring(xml_bytes)
    out=[]
    for entry in root.findall("a:entry", NS):
        eid = entry.findtext("a:id", default="", namespaces=NS)
        m = re.search(r"arxiv\.org/abs/([^/?#]+)", eid)
        if not m: continue
        aid = norm_id(m.group(1))
        title = " ".join((entry.findtext("a:title", default="", namespaces=NS) or "").split())
        summary = " ".join((entry.findtext("a:summary", default="", namespaces=NS) or "").split())
        published = entry.findtext("a:published", default="", namespaces=NS) or ""
        year = int(published[:4]) if published[:4].isdigit() else None
        authors = [a.findtext("a:name", default="", namespaces=NS) for a in entry.findall("a:author", NS)]
        authors = [a for a in authors if a]
        primary = entry.find("arxiv:primary_category", NS)
        cats = [c.get("term") for c in entry.findall("a:category", NS) if c.get("term")]
        venue = "arXiv"
        if primary is not None and primary.get("term"):
            venue = f"arXiv:{primary.get('term')}"
        elif cats:
            venue = f"arXiv:{cats[0]}"
        doi = entry.findtext("arxiv:doi", default="", namespaces=NS) or None
        out.append({"arxiv":aid,"title":title,"authors":authors,"year":year,"venue":venue,"doi":doi,
                    "url":f"https://arxiv.org/abs/{aid}","abstract_or_blurb":summary,"categories":cats})
    return out

def arxiv_query(q, max_results):
    params = urllib.parse.urlencode({"search_query":q,"start":0,"max_results":max_results,"sortBy":"relevance","sortOrder":"descending"})
    return parse_entries(fetch_url(f"http://export.arxiv.org/api/query?{params}"))

def guess_pool(title, abstract, cats=None):
    blob = f"{title} {abstract}".lower()
    scores = {p: (1 if re.search(pat, blob, re.I) else 0) for p,pat in POOL_KW.items()}
    cat_s = " ".join(cats or []).lower()
    if "cs.gr" in cat_s or "cs.cg" in cat_s: scores["graphics"] += 2
    if any(x in cat_s for x in ("cs.dc","cs.pf","cs.os","cs.ds")): scores["hpc"] += 2
    if "cs.mm" in cat_s: scores["realtime"] += 1; scores["graphics"] += 1
    if "cs.ai" in cat_s or "cs.ro" in cat_s: scores["gameai"] += 1
    best = max(scores, key=scores.get)
    return best if scores[best] else "engine"

def score_row(r):
    if r.get("_floor") or r.get("_curated"):
        return int(r.get("relevance_score") or 7)
    title = r.get("title") or ""; abs_ = r.get("abstract_or_blurb") or ""
    blob = f"{title} {abs_}".lower()
    if banned(title, abs_): return 0
    score = 5
    for val, pat in [
        (10, r"\b(radiance cascades|meshlet|mesh shader|gpu[- ]driven|lock[- ]?free|wait[- ]?free|work[- ]steal|mimalloc|jemalloc|slab allocator|entity[- ]?component|data[- ]oriented|jump point|GOAP|behavior tree|rollback|lockstep|XPBD|GJK)\b"),
        (9, r"\b(global illumination|clustered shading|visibility buffer|hazard pointer|epoch|RCU|arena|multipool|archetype|navmesh|ORCA|boids|MCTS|UCT|utility AI|influence map|fiber|job system|vulkan|allocator)\b"),
        (8, r"\b(SIMD|NUMA|OpenMP|task graph|deferred|TAA|shadow|physics|constraint|pathfind|steering|flocking|blackboard|STRIPS|HTN|determinis|netcode|SoA|sparse set)\b"),
        (7, r"\b(malloc|BVH|SSAO|PBR|animation|collision|scheduling|cache|parallel|real[- ]time|memory pool)\b"),
    ]:
        if re.search(pat, blob, re.I):
            score = max(score, val); break
    if re.search(r"\b(medical|biology|sentiment|translation|protein|climate|finance|nlp\b)\b", blob, re.I):
        score = min(score, 4)
    topics = r.get("topics") or []
    if "memory-allocation" in topics or "ecs" in topics:
        score = max(score, int(r.get("relevance_score") or score))
    return int(score)

def why_for(r):
    if r.get("why_anghel"): return r["why_anghel"]
    pool = r.get("pool"); t = r.get("title") or ""
    hints = {
        "hpc": f"Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing ({t[:80]}).",
        "graphics": f"Real-time graphics technique relevant to Anoptic Vulkan/meshlet/GI path ({t[:80]}).",
        "realtime": f"Realtime/sim/netcode discipline for deterministic or low-latency games ({t[:80]}).",
        "engine": f"Engine architecture / simulation structure useful for Anoptic ECS craft ({t[:80]}).",
        "gameai": f"Classical game/RTS AI technique (non-LLM) for GRID COMMAND lineage ({t[:80]}).",
    }
    return hints.get(pool, f"Relevant Broadside systems seed ({t[:80]}).")

def topics_for(r):
    if r.get("topics"): return r["topics"]
    blob = f"{r.get('title','')} {r.get('abstract_or_blurb','')}".lower()
    topics=[]
    mapping = [
        ("memory-allocation", r"\b(allocator|malloc|slab|jemalloc|mimalloc|tcmalloc|snmalloc|hoard|arena|multipool|reclamation|hazard|RCU|epoch)\b"),
        ("ecs", r"\b(entity[- ]?component|ECS\b|archetype|sparse set|data[- ]oriented)\b"),
        ("lockfree", r"\b(lock[- ]?free|wait[- ]?free)\b"),
        ("work-stealing-schedulers", r"\bwork[- ]?steal"),
        ("gi", r"\b(global illumination|radiance|voxel cone|LPV|DDGI|photon)\b"),
        ("meshlets", r"\b(meshlet|mesh shader)\b"),
        ("pathfinding", r"\b(pathfind|jump point|navmesh|A\*)\b"),
        ("netcode", r"\b(lockstep|rollback|netcode|lag compensation)\b"),
        ("physics", r"\b(physics|GJK|XPBD|PBD|collision)\b"),
        ("mcts", r"\b(MCTS|Monte[- ]Carlo tree|UCT)\b"),
        ("vulkan", r"\bvulkan\b"),
        ("simd", r"\bSIMD\b"),
    ]
    for name, pat in mapping:
        if re.search(pat, blob, re.I): topics.append(name)
    return topics or [r.get("pool") or "systems"]

def curated_to_row(t):
    title, authors, year, venue, arxiv, doi, url, topics, pool, score, why = t
    if isinstance(authors, str): authors = [authors]
    return {
        "title": title, "authors": authors, "year": year, "venue": venue,
        "arxiv": arxiv, "doi": doi, "url": url, "topics": topics,
        "relevance_score": score, "why_anghel": why,
        "abstract_or_blurb": why, "pool": pool, "_curated": True,
    }

def write_jsonl(path, rows):
    with open(path, "w") as f:
        for r in rows:
            rr = {k:v for k,v in r.items() if not k.startswith("_")}
            f.write(json.dumps(rr, ensure_ascii=False) + "\n")

def is_allocator(r):
    topics = r.get("topics") or []
    if "memory-allocation" in topics: return True
    blob = f"{r.get('title','')} {r.get('abstract_or_blurb','')}".lower()
    return bool(re.search(r"\b(allocator|malloc|jemalloc|mimalloc|tcmalloc|snmalloc|hoard|slab|multipool|memory reclamation|hazard pointer|arena allocator|object pool|TLSF|segregated fit)\b", blob))

def is_ecs(r):
    topics = r.get("topics") or []
    if "ecs" in topics: return True
    blob = f"{r.get('title','')} {r.get('abstract_or_blurb','')}".lower()
    return bool(re.search(r"\b(entity[- ]?component|ECS\b|archetype|sparse[- ]set|data[- ]oriented design|data oriented design)\b", blob))

def main():
    ex_ax, ex_titles = load_excludes()
    print(f"excludes: {len(ex_ax)} arxiv, {len(ex_titles)} titles")
    seen_ax, seen_titles = set(), set()
    merged = []

    def try_add(r, tag=""):
        title = (r.get("title") or "").strip()
        if not title: return False
        nt = title.lower().strip()
        ax = r.get("arxiv")
        if ax:
            ax = norm_id(str(ax))
            r["arxiv"] = ax
            if ax in ex_ax or ax in seen_ax: return False
        if nt in ex_titles or nt in seen_titles: return False
        # fuzzy: exclude if normalized title matches
        nt2 = norm_title(title)
        for e in ex_titles:
            if len(e) > 20 and (e == nt2 or e in nt2 or nt2 in e):
                return False
        if banned(title, r.get("abstract_or_blurb") or ""): return False
        if ax: seen_ax.add(ax)
        seen_titles.add(nt)
        if not r.get("pool"):
            r["pool"] = guess_pool(title, r.get("abstract_or_blurb") or "", r.get("categories"))
        r["topics"] = topics_for(r)
        r["relevance_score"] = score_row(r)
        r["why_anghel"] = why_for(r)
        if not r.get("url"):
            if ax: r["url"] = f"https://arxiv.org/abs/{ax}"
            elif r.get("doi"): r["url"] = f"https://doi.org/{r['doi']}"
        merged.append(r)
        return True

    # 1) floors first
    floors = [json.loads(l) for l in (ROOT/"floors_curated.jsonl").read_text().splitlines() if l.strip()]
    for r in floors:
        r["_floor"] = True
        try_add(r, "floor")
    print("after floors", len(merged))

    # 2) curated classics
    curated = json.loads((ROOT/"curated_all.json").read_text())
    for t in curated:
        try_add(curated_to_row(t), "curated")
    print("after curated", len(merged))

    # 3) arxiv queries
    fetch_count = 0
    for qi, (q, n) in enumerate(QUERIES):
        try:
            entries = arxiv_query(q, n)
        except Exception as e:
            print("query fail", qi, e)
            time.sleep(5)
            continue
        kept = 0
        for e in entries:
            fetch_count += 1
            e["_arxiv"] = True
            if try_add(e, "arxiv"):
                kept += 1
        print(f"Q{qi+1}/{len(QUERIES)} kept={kept} total={len(merged)} | {q[:60]}")
        time.sleep(3.0)
        if len(merged) >= 1200:
            print("cap reached"); break

    print("merged unique", len(merged), "arxiv fetched entries", fetch_count)

    # pool files
    by_pool = defaultdict(list)
    for r in merged:
        by_pool[r["pool"]].append(r)
    for pool in ["hpc","graphics","realtime","engine","gameai"]:
        rows = sorted(by_pool.get(pool, []), key=lambda r: (-(r.get("relevance_score") or 0), -(r.get("year") or 0)))
        write_jsonl(ROOT/f"{pool}.jsonl", rows)
        print(pool, len(rows))

    write_jsonl(ROOT/"merged.jsonl", merged)

    # ranking with diversification + floors
    targets = {"graphics":55, "hpc":50, "engine":50, "realtime":45, "gameai":50}
    # ensure floors for alloc/ecs
    alloc = [r for r in merged if is_allocator(r)]
    ecs = [r for r in merged if is_ecs(r)]
    alloc.sort(key=lambda r: (-(r.get("relevance_score") or 0), -(r.get("year") or 0)))
    ecs.sort(key=lambda r: (-(r.get("relevance_score") or 0), -(r.get("year") or 0)))

    top = []
    used = set()
    def key_of(r):
        return (r.get("arxiv") or "") + "||" + (r.get("title") or "").lower()

    def take(r):
        k = key_of(r)
        if k in used: return False
        used.add(k); top.append(r); return True

    # force >=10 alloc and >=10 ecs (prefer floors/curated)
    for r in alloc:
        if sum(1 for x in top if is_allocator(x)) >= 12: break
        take(r)
    for r in ecs:
        if sum(1 for x in top if is_ecs(x)) >= 12: break
        take(r)

    # fill by pool targets
    pool_lists = {p: sorted(by_pool.get(p, []), key=lambda r: (-(r.get("relevance_score") or 0), -(r.get("year") or 0), r.get("title") or "")) for p in targets}
    # round-robin until targets roughly met or 250
    changed = True
    while len(top) < 250 and changed:
        changed = False
        for p, tgt in targets.items():
            cur = sum(1 for x in top if x.get("pool")==p)
            if cur >= tgt: continue
            for r in pool_lists[p]:
                if (r.get("relevance_score") or 0) < 6: continue
                if take(r):
                    changed = True
                    break
        if not changed:
            break

    # fill remainder with best remaining score>=7
    rest = sorted(merged, key=lambda r: (-(r.get("relevance_score") or 0), -(r.get("year") or 0)))
    for r in rest:
        if len(top) >= 250: break
        if (r.get("relevance_score") or 0) < 6: continue
        take(r)

    # if still short, lower bar
    for r in rest:
        if len(top) >= 250: break
        take(r)

    top = top[:250]
    # final sort for presentation: score desc, year desc, title
    top_sorted = sorted(top, key=lambda r: (-(r.get("relevance_score") or 0), -(r.get("year") or 0), (r.get("title") or "").lower()))
    # but keep floor alloc/ecs guaranteed — already in set
    write_jsonl(ROOT/"top250.jsonl", top_sorted)

    pc = Counter(r.get("pool") for r in top_sorted)
    n_alloc = sum(1 for r in top_sorted if is_allocator(r))
    n_ecs = sum(1 for r in top_sorted if is_ecs(r))
    print("TOP250 pools", dict(pc))
    print("allocator seeds", n_alloc)
    print("ecs seeds", n_ecs)
    print("score dist", Counter(r.get("relevance_score") for r in top_sorted))
    # dump floor titles
    print("--- ALLOCATORS ---")
    for r in top_sorted:
        if is_allocator(r): print(r["relevance_score"], r["title"][:90])
    print("--- ECS ---")
    for r in top_sorted:
        if is_ecs(r): print(r["relevance_score"], r["title"][:90])

    (ROOT/"collect_stats.json").write_text(json.dumps({
        "merged": len(merged), "top250": len(top_sorted), "pools": dict(pc),
        "allocators": n_alloc, "ecs": n_ecs,
        "alloc_titles": [r["title"] for r in top_sorted if is_allocator(r)],
        "ecs_titles": [r["title"] for r in top_sorted if is_ecs(r)],
    }, indent=2))

if __name__ == "__main__":
    main()
