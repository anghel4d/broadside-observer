#!/usr/bin/env python3
from __future__ import annotations
import json, re, time, urllib.parse, urllib.request, xml.etree.ElementTree as ET
from collections import OrderedDict
from pathlib import Path

OUT = Path("/workspace/broadside/seeds/_pools/agents.jsonl")
NS = {"a":"http://www.w3.org/2005/Atom","arxiv":"http://arxiv.org/schemas/atom","o":"http://a9.com/-/spec/opensearch/1.1/"}
SKIP = {"2607.29678","2607.29377","2607.28802","2608.03874","2607.27687","2608.07855","2608.04278","2608.04828"}
CURATED = [
"1706.03762","1810.04805","2005.14165","1901.02860","2001.08361","2203.15556","2204.02311","2302.13971","2307.09288","2407.21783",
"2104.09864","2108.12409","2203.08913","2004.05150","2007.14062","2307.03172","2309.00071","2205.14135","2307.08691","2407.08608",
"1701.06538","2006.16668","2101.03961","2202.08906","2211.15841","2401.04088","2212.05055","2305.14705",
"2005.11401","2004.04906","2002.08909","2007.01282","2112.04426","2201.11903","2203.11171","2210.03629","2305.10601","2211.10435",
"2205.00445","2302.04761","2112.09332","2204.01691","2207.01206","2303.11366","2304.03442","2305.16291","2310.08560","2305.15334",
"2303.17580","2305.15325","2307.16789","2308.03688","2310.06770","2405.15793","2308.00352","2307.07924","2303.17760","2308.08155",
"2401.15884","2310.11511","2305.06983","2212.09597","2301.12652","2208.03299","2405.14831","2401.15391","2305.14283","2002.12327",
"2104.08663","2212.14024","1911.00172","1410.3916","1503.08895","1410.5401","2304.05128","2305.10250","2308.11432","2309.07864",
"2402.01801","2309.06180","2211.17192","2401.09670","2312.11444","2403.02310","2312.07104","2403.19708","2405.04434","2401.18059",
"2306.14048","2309.17453","2404.14469","2406.02069","2407.11550","2402.10517","2407.18003","2401.18058","2405.14366","2303.06865",
"2307.13854","2402.08191","2311.12983","2310.02170","2308.10141","2409.07429","2305.17144","2404.06474","2310.03040","2306.06070",
"2401.13649","2403.07718","2402.17553","2401.00812","2310.04406","2305.14322","2309.02427","2406.04692","2309.00986","2402.12275",
"2401.07324","2311.10751","2406.01607","2409.11340","2205.10625","2305.14992","2309.12288","2303.17491","2210.11610","2305.11595",
"2307.11989","2305.16209","2305.15021","2304.09842","2306.14898","2307.05300","2309.17288","2310.02124","2401.03428","2402.14762",
"2406.18518","2306.13304","2304.08354","2205.12255","2305.14625","2210.08726","2305.14627","2404.16130","2404.13501","2402.04247",
"2308.09516","2305.16335","1312.5602","1707.06347","1912.06680","1802.09464","1703.01988","2107.03374","2112.00114","2205.11916",
"2305.17118","2402.05136","2310.06694","2404.07143","2306.05432","2310.07521","2404.11483","2406.14979","2403.08299","2404.07972",
"2410.03672","2410.08164","2410.02694","2407.01489","2309.10621","2401.13178","2405.15254","2305.16322","2402.03247","2403.00827",
"2406.20053","2407.06153","2409.12186","2409.16299","2410.02009","2302.01318","2208.07339","2311.18778","2405.12954","2311.10748",
"2310.10196","2404.15185","2402.14034","2308.05960","2407.16741","2405.11107","2306.08568","2402.03367","2305.14251","2406.05317",
"2406.11430","2405.18009","2403.09054","2406.11473","2407.10627","2405.19547","2401.06201","2305.11811","2305.04091","2402.11163",
"2406.08414","2406.20094","2312.04737","1805.09692","1612.00796","1507.04296","1803.10122","2309.00267","2305.18290","2203.02155",
"2204.05862","2212.08073","2404.03648","2406.11912","2407.15743","2411.01747","2412.01253","2501.07523","2501.09674","2502.05111",
"2502.09696","2406.17255","2407.00072","2402.02750","2402.02244","2406.00045","2403.12968","2407.01476","2312.08914","2406.18521",
"2305.05658","2308.10848","2311.05199","2312.04511","2402.01030","2311.10537","2310.12823","2310.05915","2402.12366","2404.03648",
"2005.14165","1706.03762","2210.03629","2310.08560","2304.03442","2305.16291","2405.15793","2005.11401","2302.04761","2309.06180",
]
QUERIES = [
('all:"LLM agent" AND all:memory', 80),
('all:"LLM agent" AND all:tool', 60),
('all:"language agent" AND (all:tool OR all:memory OR all:planning)', 50),
('all:ReAct AND all:"language model"', 30),
('all:"tool use" AND all:"language model" AND all:agent', 40),
('all:"function calling" AND all:LLM', 30),
('(all:"prefix caching" OR all:"KV cache") AND (all:agent OR all:LLM)', 60),
('all:"paged attention" OR all:vLLM OR all:"continuous batching"', 30),
('all:"speculative decoding" AND all:LLM', 25),
('all:"mixture of experts" AND (all:serving OR all:inference OR all:routing)', 35),
('all:"retrieval-augmented" AND (all:agent OR all:provenance OR all:citation OR all:attribution)', 40),
('all:"agent memory" AND all:LLM', 40),
('all:"skill library" OR all:"skill evolution" OR (all:"continual learning" AND all:"LLM agent")', 40),
('all:MemGPT OR all:"generative agents" OR all:Voyager', 20),
('all:"SWE-agent" OR all:"SWE-bench" OR all:"software engineering agent"', 35),
('all:"agent harness" OR all:scaffolding OR (all:"agent framework" AND all:LLM)', 30),
('all:WebArena OR all:GAIA OR all:OSWorld OR all:Mind2Web', 25),
('all:"multi-agent" AND all:LLM AND (all:collaboration OR all:debate OR all:society)', 40),
('all:"Tree of Thoughts" OR all:Reflexion OR (all:"chain of thought" AND all:agent)', 30),
('all:"long-term memory" AND all:"language model"', 35),
('all:GraphRAG OR all:HippoRAG OR all:"Self-RAG" OR all:RAPTOR', 25),
('all:"agentic RAG" OR all:"retrieval agent"', 25),
('all:"flashattention" OR all:"attention sink" OR all:StreamingLLM', 20),
('all:DistServe OR all:Sarathi OR all:SGLang OR all:Splitwise OR all:LoongServe', 25),
('all:"KV cache" AND (all:compression OR all:eviction OR all:quantization)', 50),
('all:"tool-augmented" OR all:Toolformer OR all:ToolLLM', 25),
('all:"open-ended" AND all:agent AND all:Minecraft', 15),
('all:"autonomous agent" AND all:"large language"', 40),
('all:"planning" AND all:"LLM agent" AND all:environment', 35),
('(all:"computer use" OR all:"GUI agent" OR all:"web agent") AND all:LLM', 40),
('all:"Agent Workflow Memory" OR all:ExpeL OR all:CLIN OR all:Voyager', 20),
('all:"failure" AND all:"LLM agent" AND (all:taxonomy OR all:evaluation OR all:benchmark)', 30),
('all:"provenance" AND (all:retrieval OR all:RAG OR all:citation) AND all:LLM', 25),
('all:"neural Turing" OR all:"memory network" OR all:"differentiable neural computer"', 15),
('all:"Decision Transformer" OR (all:"world model" AND all:agent)', 20),
('(all:"radix attention" OR all:"prompt cache" OR all:CacheBlend)', 20),
('all:"mixture-of-experts" AND all:transformer', 30),
('all:"agent computer interface" OR all:"coding agent"', 25),
('all:"self-improving" AND all:"LLM agent"', 25),
('all:"episodic memory" AND all:"language model"', 25),
('all:"working memory" AND all:LLM AND all:agent', 20),
('all:AutoGen OR all:MetaGPT OR all:CAMEL OR all:ChatDev', 20),
('all:OpenHands OR all:OpenDevin', 15),
('all:"test-time compute" OR all:"inference-time scaling"', 20),
('all:RAG AND all:survey AND all:"large language"', 15),
('all:"LLM-based agents" AND all:survey', 15),
('all:prefill AND all:decode AND all:disaggregation', 20),
('all:"long context" AND all:agent AND all:LLM', 30),
('all:"dense passage retrieval" OR all:REALM OR all:RETRO', 15),
('all:"speculative decoding" OR all:Medusa OR all:"lookahead decoding"', 20),
]
def norm_id(arxiv_id: str) -> str:
    arxiv_id = arxiv_id.strip()
    arxiv_id = re.sub(r"^https?://arxiv\.org/(abs|pdf)/", "", arxiv_id)
    arxiv_id = arxiv_id.replace(".pdf", "")
    arxiv_id = arxiv_id.split("v")[0]
    return arxiv_id

def fetch_url(url: str, retries: int = 5) -> bytes:
    last = None
    for i in range(retries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "BroadsideObserver/1.0 (research; anghel4d)"})
            with urllib.request.urlopen(req, timeout=90) as r:
                return r.read()
        except Exception as e:
            last = e
            time.sleep(3 + i * 2)
    raise RuntimeError(f"fetch failed {url}: {last}")

def parse_entries(xml_bytes: bytes) -> list:
    root = ET.fromstring(xml_bytes)
    out = []
    for entry in root.findall("a:entry", NS):
        eid = entry.findtext("a:id", default="", namespaces=NS)
        m = re.search(r"arxiv\.org/abs/([^/?#]+)", eid)
        if not m:
            continue
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
        comment = entry.findtext("arxiv:comment", default="", namespaces=NS) or ""
        cl = comment.lower()
        for marker, name in [
            ("iclr","ICLR"),("neurips","NeurIPS"),("nips","NeurIPS"),("icml","ICML"),
            ("emnlp","EMNLP"),("naacl","NAACL"),("acl","ACL"),("aaai","AAAI"),
            ("osdi","OSDI"),("sosp","SOSP"),("mlsys","MLSys"),("eurosys","EuroSys"),
            ("asplos","ASPLOS"),("icse","ICSE"),("corl","CoRL"),("aistats","AISTATS"),
            ("tacl","TACL"),("jmlr","JMLR"),("chi ","CHI"),("uist","UIST"),
        ]:
            if marker in cl:
                venue = name
                break
        doi = entry.findtext("arxiv:doi", default="", namespaces=NS) or None
        out.append({
            "arxiv": aid, "title": title, "authors": authors, "year": year,
            "venue": venue, "doi": doi, "url": f"https://arxiv.org/abs/{aid}",
            "abstract_or_blurb": summary, "categories": cats, "comment": comment,
        })
    return out

def fetch_by_ids(ids):
    results = []
    for i in range(0, len(ids), 40):
        batch = ids[i:i+40]
        url = "http://export.arxiv.org/api/query?" + urllib.parse.urlencode({"id_list": ",".join(batch), "max_results": len(batch)})
        results.extend(parse_entries(fetch_url(url)))
        time.sleep(3.2)
        print(f"  id_list batch {i//40+1}: cumulative {len(results)}", flush=True)
    return results

def search_query(q, max_results):
    results = []
    start = 0
    page = 50
    while start < max_results:
        n = min(page, max_results - start)
        url = "http://export.arxiv.org/api/query?" + urllib.parse.urlencode({
            "search_query": q, "start": start, "max_results": n,
            "sortBy": "relevance", "sortOrder": "descending",
        })
        batch = parse_entries(fetch_url(url))
        if not batch:
            break
        results.extend(batch)
        start += n
        time.sleep(3.2)
        if len(batch) < n:
            break
    return results
TOPIC_RULES = [
(["react","tool use","tool-use","function call","toolformer","toolllm","api-bank","gorilla"],["tool-use","react"],2),
(["rag","retrieval-augmented","retrieval augmented","dense passage","realm","fusion-in-decoder","retro","self-rag","graphrag","hipporag","raptor"],["rag","retrieval"],2),
(["provenance","citation","attribut","faithful","grounding","verifiab","evidence"],["provenance","rag"],2),
(["kv cache","kv-cache","prefix cache","paged attention","flashattention","speculative decoding","continuous batching","prefill","decode disaggreg"],["kv-serving","inference-systems"],2),
(["mixture of experts","mixture-of-experts"," mixtral","gshard","switch transformer"],["moe","serving"],1),
(["memgpt","memory network","agent memory","long-term memory","episodic memory","working memory","memorizing transformer","memorybank"],["agent-memory"],2),
(["skill library","skill evolution","continual","lifelong","voyager","expel","workflow memory"],["skills","continual-agents"],2),
(["swe-agent","swe-bench","software engineering","coding agent","opendevin","openhands","autocoderover","agentless"],["coding-agents","harness"],2),
]
TOPIC_RULES += [
(["webarena","osworld","gaia","mind2web","agentbench","browsergym","workarena","androidworld"],["agent-eval","harness"],1),
(["generative agents","multi-agent","autogen","metagpt","camel","chatdev","agentverse"],["multi-agent","agent-architecture"],1),
(["transformer","attention is all","self-attention","rotary position","alibi"],["transformer","foundations"],1),
(["chain-of-thought","tree of thoughts","reflexion","scratchpad","self-consistency","plan-and-solve"],["reasoning","planning"],1),
(["sglang","vllm","distserve","sarathi","splitwise","loongserve","mooncake","radixattention","radix attention"],["llm-serving","kv-serving"],2),
(["harness","scaffold","agent-computer interface","observation space"],["harness"],2),
(["neural turing","differentiable neural computer","memory networks"],["memory-foundations"],1),
(["gui agent","computer use","web agent","seeact"],["computer-use-agents"],1),
]
ICONIC = json.load(open("/workspace/broadside/seeds/_pools/iconic.json"))

def score_paper(p):
    text = " ".join([
        p.get("title") or "",
        p.get("abstract_or_blurb") or "",
        " ".join(p.get("categories") or []),
        p.get("comment") or "",
    ]).lower()
    topics = []
    score = 3
    for kws, tops, bump in TOPIC_RULES:
        if any(k in text for k in kws):
            for t in tops:
                if t not in topics:
                    topics.append(t)
            score += bump
    title = (p.get("title") or "").lower()
    for frag, s in ICONIC.items():
        if frag and frag in title:
            score = max(score, s)
    if (p.get("year") or 2024) <= 2017 and "memory" in title:
        score = max(score, 8)
    if any(x in text for x in ["protein folding", "histopath", "covid-19 vaccine"]) and "agent" not in text:
        score = min(score, 3)
    score = max(1, min(10, score))
    if not topics:
        if "agent" in text:
            topics = ["agents"]
        elif "retriev" in text:
            topics = ["rag"]
        elif "kv" in text or "serving" in text:
            topics = ["llm-serving"]
        else:
            topics = ["llm-systems"]
    return score, topics, why_anghel(p, topics)

def why_anghel(p, topics):
    title = p.get("title") or ""
    tset = set(topics)
    bits = []
    if tset & {"kv-serving", "llm-serving", "inference-systems", "moe"}:
        bits.append("informs agent serving, KV reuse, and long-horizon tool trajectories")
    if tset & {"agent-memory", "memory-foundations"}:
        bits.append("memory hierarchy/paging maps to provenance-first agent memory and ECS state")
    if tset & {"rag", "retrieval", "provenance"}:
        bits.append("retrieval+evidence trails matter for Broadside provenance-rich digests")
    if tset & {"tool-use", "react", "harness", "coding-agents"}:
        bits.append("shapes harness/ACI design and model-vs-harness failure localization")
    if tset & {"skills", "continual-agents"}:
        bits.append("skill libraries and continual evolution match standing research loops")
    if tset & {"multi-agent", "agent-architecture", "computer-use-agents"}:
        bits.append("architecture patterns for long-running observers and interactive agents")
    if tset & {"reasoning", "planning"}:
        bits.append("planning/reasoning loops underlie autoresearch experiment selection")
    if tset & {"transformer", "foundations"}:
        bits.append("foundational substrate for every LLM agent stack")
    if tset & {"agent-eval"}:
        bits.append("evaluation harnesses useful for Broadside cheap-filter discipline")
    if not bits:
        bits.append("in-cluster systems/agents paper for historical shortlist coverage")
    return "; ".join(bits[:2]) + " (" + title[:90] + ")"

def main():
    papers = OrderedDict()
    curated_ids = []
    seen = set()
    for i in CURATED:
        ni = norm_id(i)
        if ni and ni not in seen and ni not in SKIP:
            seen.add(ni)
            curated_ids.append(ni)
    print("Fetching %d curated IDs..." % len(curated_ids), flush=True)
    for p in fetch_by_ids(curated_ids):
        papers[p["arxiv"]] = p

    for qi, (q, n) in enumerate(QUERIES):
        print("Query %d/%d n=%d: %s" % (qi+1, len(QUERIES), n, q[:70]), flush=True)
        try:
            found = search_query(q, n)
        except Exception as e:
            print("  FAIL:", e, flush=True)
            time.sleep(5)
            continue
        added = 0
        for p in found:
            aid = p["arxiv"]
            if aid in SKIP:
                continue
            if aid not in papers:
                papers[aid] = p
                added += 1
            else:
                if str(papers[aid].get("venue","")).startswith("arXiv") and not str(p.get("venue","")).startswith("arXiv"):
                    papers[aid]["venue"] = p["venue"]
        print("  got %d, new %d, total %d" % (len(found), added, len(papers)), flush=True)
        if len(papers) >= 450:
            print("Reached soft cap", flush=True)
            break

    scored = []
    for p in papers.values():
        if not p.get("title") or not p.get("year"):
            continue
        if len(p.get("abstract_or_blurb") or "") < 40:
            continue
        s, topics, why = score_paper(p)
        if s < 4 and not (set(topics) & {"transformer", "foundations", "memory-foundations", "moe"}):
            continue
        scored.append({
            "title": p["title"],
            "authors": p["authors"],
            "year": p["year"],
            "venue": p["venue"],
            "arxiv": p["arxiv"],
            "doi": p.get("doi"),
            "url": p["url"],
            "topics": topics,
            "relevance_score": s,
            "why_anghel": why,
            "abstract_or_blurb": (p["abstract_or_blurb"] or "")[:1200],
        })

    scored.sort(key=lambda r: (-r["relevance_score"], r["year"], r["title"]))

    keep = []
    have = set()
    for r in scored:
        if r["relevance_score"] >= 7:
            keep.append(r)
            have.add(r["arxiv"])

    # diversify mid scores by topic/year buckets
    buckets = {}
    for r in scored:
        if r["arxiv"] in have:
            continue
        key = ((r["topics"][0] if r["topics"] else "other"), (r["year"] or 0) // 2)
        buckets.setdefault(key, []).append(r)
    for key in sorted(buckets):
        for r in buckets[key][:3]:
            if r["arxiv"] not in have:
                keep.append(r)
                have.add(r["arxiv"])

    if len(keep) < 220:
        for r in scored:
            if r["arxiv"] not in have:
                keep.append(r)
                have.add(r["arxiv"])
            if len(keep) >= 250:
                break

    if len(keep) > 280:
        keep.sort(key=lambda r: (-r["relevance_score"], r["year"], r["title"]))
        keep = keep[:280]

    keep.sort(key=lambda r: (-r["relevance_score"], r["year"], r["title"]))
    OUT.parent.mkdir(parents=True, exist_ok=True)
    with OUT.open("w", encoding="utf-8") as f:
        for r in keep:
            f.write(json.dumps(r, ensure_ascii=False) + "\n")
    print("WROTE", len(keep), "to", OUT)
    print("TOP20:")
    for r in keep[:20]:
        print("  %2d | %s | %s | %s" % (r["relevance_score"], r["year"], r["arxiv"], r["title"][:90]))

if __name__ == "__main__":
    main()
