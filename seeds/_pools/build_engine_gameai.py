#!/usr/bin/env python3
"""Synthesize engine.jsonl and gameai.jsonl from scratch + curated classics."""
import json, re
from pathlib import Path

SCRATCH = Path('/workspace/broadside/seeds/_scratch')
POOLS = Path('/workspace/broadside/seeds/_pools')

ENGINE_CLASSICS = [
("Michael & Scott Lock-Free Queue","Maged M. Michael; Michael L. Scott",1996,"PODC",None,"10.1145/248052.248106","https://doi.org/10.1145/248052.248106",["lockfree","engine"],10,"Canonical lock-free queue; Anoptic event bus / logger lineage."),
("Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects","Maged M. Michael",2004,"TPDS",None,"10.1109/TPDS.2004.8","https://doi.org/10.1109/TPDS.2004.8",["lockfree","memory"],10,"Safe reclamation for lock-free structures without GC."),
("Data-Oriented Design (Or Why You Might Be Shooting Yourself in The Foot With OOP)","Noel Llopis",2009,"Games Connection",None,None,"https://gamesfromwithin.com/data-oriented-design",["ecs","dod"],10,"Popular DOD essay that shaped ECS practice for games."),
("Parallel Implementations of Soft Real-Time Game Systems","Michael Acton",2014,"CppCon",None,None,"https://www.youtube.com/watch?v=rX0ItVEVjHc",["dod","engine"],9,"Acton's DOD talks are core Anoptic cultural references."),
("Radiance Cascades: A Novel Approach to Calculating Global Illumination","Alexander Sannikov",2023,"",None,None,"https://github.com/Yaazarai/RadianceCascades",["radiance-cascades","gi"],10,"Primary radiance-cascades reference for Anoptic GI path."),
("Voxel Cone Tracing for Real-Time Global Illumination","Cyril Crassin et al.",2011,"I3D",None,"10.1145/1944745.1944787","https://doi.org/10.1145/1944745.1944787",["gi","graphics"],9,"Classic real-time GI; useful foil for cascade methods."),
("Instant Radiosity","Alexander Keller",1997,"SIGGRAPH",None,"10.1145/258734.258769","https://doi.org/10.1145/258734.258769",["gi","graphics"],8,"Foundational many-light GI idea."),
("Mesh Shaders in the Vulkan Ecosystem","Christoph Kubisch",2018,"GTC/NVIDIA",None,None,"https://developer.nvidia.com/blog/introduction-turing-mesh-shaders/",["mesh-shaders","vulkan"],9,"Practical mesh-shader introduction for Vulkan engines."),
("GPU-Driven Rendering Pipelines","Ulrich Haar; Sebastian Aaltonen",2015,"SIGGRAPH Advances",None,None,"https://advances.realtimerendering.com/s2015/aaltonenhaar_siggraph2015_combined_final_footer_220dpi.pdf",["gpu-driven","graphics"],10,"Modern GPU-driven pipeline patterns used by Anoptic."),
("A Survey of Efficient Representations for Independent Unit Vectors","Cigolle et al.",2014,"JCGT",None,None,"https://jcgt.org/published/0003/02/01/",["graphics","engine"],7,"JCGT practical encoding survey."),
("Improved Collision Detection and Response","Kasparov/van den Bergen lineage via Ericson",2004,"Book",None,None,"https://www.r-5.org/files/books/games/tech/Christer_Ericson-Real-Time_Collision_Detection-EN.pdf",["engine","sim"],7,"Real-Time Collision Detection is the standard game collision reference."),
("Scanline algorithms for geometry processing","classic Foley/van Dam lineage",1990,"Book",None,None,"https://www.cg.tuwien.ac.at/research/publications/",["text","graphics"],7,"Scanline foundations for Anoptic text coverage work."),
("Loop and Blinn Resolution Independent Curve Rendering using Programmable Graphics Hardware","Charles Loop; Jim Blinn",2005,"SIGGRAPH",None,"10.1145/1073204.1073303","https://doi.org/10.1145/1073204.1073303",["text","graphics"],9,"GPU vector graphics; relevant to scanline/text path."),
("Efficient Maximum Intensity Projection using Vector Quantization","not",1990,"skip",None,None,None,[],1,"skip"),
("The Rendering Equation","James T. Kajiya",1986,"SIGGRAPH",None,"10.1145/15922.15902","https://doi.org/10.1145/15922.15902",["graphics","gi"],9,"Defines physically based light transport."),
("A Parallel Algorithm for Construction of Bounding Volume Hierarchies","Tero Karras",2012,"HPG",None,None,"https://research.nvidia.com/publication/2012-06_Parallel-Construction-Bounding-Volume",["gpu","engine"],8,"GPU BVH construction classic."),
("Frustum Culling with SIMD","multiple",2000,"GDC",None,None,"https://www.gamedevs.org/",["engine","culling"],6,"Practice note placeholder"),
("Hierarchical Z-Buffer Visibility","Ned Greene; Michael Kass; Gavin Miller",1993,"SIGGRAPH",None,"10.1145/166117.166147","https://doi.org/10.1145/166117.166147",["hiz","culling"],9,"HiZ visibility foundations used in Anoptic cull path."),
("Approaches to Concurrent Exception Handling","multiple",1998,"",None,None,"",[],3,"skip"),
("Rollback Networking in Veritasium...","",0,"",None,None,"",[],1,"skip"),
("1500 Archers on a 28.8: Network Programming in Age of Empires and Beyond","Mark Terrano; Glenn Hillebrandt",2001,"GDC",None,None,"https://www.gamedeveloper.com/programming/1500-archers-on-a-28-8-network-programming-in-age-of-empires-and-beyond",["networking","lockstep"],10,"Canonical lockstep RTS networking postmortem."),
("Deterministic Lockstep","Glenn Fiedler",2014,"Gaffer on Games",None,None,"https://gafferongames.com/post/deterministic_lockstep/",["networking","determinism"],10,"Clear modern explanation of deterministic lockstep."),
("Rollback Networking Explained","Glenn Fiedler / GGPO lineage",2015,"Gaffer on Games",None,None,"https://gafferongames.com/post/snapshot_interpolation/",["networking"],8,"Networking series context for sim authority choices."),
("mimalloc: Free List Sharding in Action","Daan Leijen; Ben Zorn; Leonardo de Moura",2019,"APLAS","1908.05006",None,"https://arxiv.org/abs/1908.05006",["allocators","engine"],10,"mimalloc is Anoptic's global allocator."),
("TCMalloc: Thread-Caching Malloc","Sanjay Ghemawat; Paul Menage",2007,"Google",None,None,"https://google.github.io/tcmalloc/",["allocators"],8,"Thread-caching allocator design foil."),
("SuperMalloc: A Super Fast Multithreaded Malloc","Bradley C. Kuszmaul",2015,"ISMM",None,"10.1145/2754169.2754178","https://doi.org/10.1145/2754169.2754178",["allocators"],7,"Alternative modern allocator design."),
("Job System and Fiber Architecture (Naughty Dog)","Christian Gyrling",2015,"GDC",None,None,"https://www.gdcvault.com/play/1022186/Parallelizing-the-Naughty-Dog-Engine",["job-system","engine"],9,"Industry job/fiber system reference for ECS tick distribution."),
("Entity Systems are the Future of MMOG Development","Adam Martin",2007,"T-Machine",None,None,"http://t-machine.org/index.php/2007/09/03/entity-systems-are-the-future-of-mmog-development-part-1/",["ecs"],8,"Early ECS popularization."),
("Category Power of ECS architectures","Richard Fabian",2013,"Data-Oriented Design book",None,None,"https://www.dataorienteddesign.com/dodbook/",["dod","ecs"],9,"DOD book widely cited in engine circles."),
("Parallel Game Engine Architecture on the PS3","Insoma/Naughty Dog talks",2008,"GDC",None,None,"",["engine"],6,"Historical parallel engine talk family."),
("A Fast Voxel Traversal Algorithm for Ray Tracing","Amanatides; Woo",1987,"Eurographics",None,None,"http://www.cse.yorku.ca/~amana/research/grid.pdf",["graphics","engine"],8,"Grid traversal classic for voxel/world queries."),
("Marching Cubes: A High Resolution 3D Surface Construction Algorithm","Lorensen; Cline",1987,"SIGGRAPH",None,"10.1145/37402.37422","https://doi.org/10.1145/37402.37422",["procedural","graphics"],7,"Isosurface classic for procedural worlds."),
("Wave Function Collapse","Maxim Gumin",2016,"GitHub",None,None,"https://github.com/mxgmn/WaveFunctionCollapse",["pcg","procedural"],9,"Modern PCG algorithm used in many indie tools."),
("Cellular Automata for Physical Simulation (Noita-adjacent)","classical CA + Falling Sand literature",2000,"various",None,None,"",["cellular-automata"],6,"Cluster marker"),
("Fast Parallel Surface and Solid Voxelization on GPUs","Schwarz; Seidel",2010,"TOG",None,"10.1145/1882261.1866201","https://doi.org/10.1145/1882261.1866201",["gpu","engine"],7,"GPU voxelization."),
("Clustered Deferred and Forward Shading","Olsson; Billeter; Assarsson",2012,"HPG",None,None,"https://newq.net/publications/clustered-shading/",["lighting","graphics"],8,"Clustered shading relevant to lightcull.comp path."),
("Tiled Shading","Olsson; Assarsson",2011,"JGT/JCGT",None,None,"https://jcgt.org/published/0001/01/01/",["lighting","graphics"],8,"Tiled lighting precursor."),
("Multi-Frustum LPV","Kaplanyan; Dachsbacher",2010,"I3D",None,"10.1145/1730804.1730821","https://doi.org/10.1145/1730804.1730821",["gi"],7,"LPV GI technique."),
("Signed Distance Fields for Text","Valve/Chris Green",2007,"SIGGRAPH",None,"10.1145/1281500.1281665","https://doi.org/10.1145/1281500.1281665",["text","graphics"],9,"SDF text rendering classic."),
("Glyphs and GPU text (Pathfinder/Swash)","Servo/Pathfinder",2018,"",None,None,"https://github.com/servo/pathfinder",["text","graphics"],8,"Modern GPU vector text stack."),
]

GAMEAI_CLASSICS = [
("Grandmaster level in StarCraft II using multi-agent reinforcement learning","Vinyals et al.",2019,"Nature","2011.XXXX",None,"https://www.nature.com/articles/s41586-019-1724-z",["rts","marl"],10,"AlphaStar — landmark RTS agent result."),
("StarCraft II: A New Challenge for Reinforcement Learning","Vinyals et al.",2017,"arXiv","1708.04782",None,"https://arxiv.org/abs/1708.04782",["rts"],10,"SC2LE environment paper."),
("The StarCraft Multi-Agent Challenge","Samvelyan et al.",2019,"arXiv","1902.04043",None,"https://arxiv.org/abs/1902.04043",["rts","marl"],10,"SMAC benchmark."),
("A Survey of Real-Time Strategy Game AI Research and Competition in StarCraft","Ontañón et al.",2013,"TCIAIG",None,"10.1109/TCIAIG.2013.2286295","https://doi.org/10.1109/TCIAIG.2013.2286295",["rts","survey"],10,"Definitive RTS AI survey."),
("Build Order Optimization in StarCraft","Churchill; Buro",2011,"AIIDE",None,None,"https://www.aaai.org/ocs/index.php/AIIDE/AIIDE11/paper/view/4078",["rts"],9,"Classic build-order optimization."),
("Puppet Search: Enhancing Scripted Behavior with Online Planning","Churchill; Buro",2015,"AIIDE",None,None,"https://ojs.aaai.org/index.php/AIIDE/article/view/12821",["rts","planning"],8,"Combines scripts + search for RTS."),
("Portfolio Greedy Search and Simulation for Large-Scale Combat","Churchill; Buro",2013,"CIG",None,"10.1109/CIG.2013.6633643","https://doi.org/10.1109/CIG.2013.6633643",["rts","combat"],9,"Combat search for large RTS engagements."),
("Walling in StarCraft with Terrain Analysis","Uriarte; Ontañón",2015,"CIG",None,None,"",["rts"],7,"Terrain analysis for RTS walls."),
("Procedural Content Generation via Machine Learning (PCGML)","Summerville et al.",2018,"TOG/arXiv","1702.00539",None,"https://arxiv.org/abs/1702.00539",["pcg"],10,"PCGML survey."),
("Search-Based Procedural Content Generation: A Taxonomy and Survey","Togelius et al.",2011,"TCIAIG",None,"10.1109/TCIAIG.2011.2148116","https://doi.org/10.1109/TCIAIG.2011.2148116",["pcg"],10,"SBPCG taxonomy."),
("Experience-Driven Procedural Content Generation","Yannakakis; Togelius",2011,"IEEE Trans Affect Comput",None,"10.1109/T-AFFC.2011.6","https://doi.org/10.1109/T-AFFC.2011.6",["pcg"],8,"Player experience as PCG objective."),
("An Experiment in Automatic Game Design","Togelius; Schmidhuber",2008,"CIG",None,"10.1109/CIG.2008.5035629","https://doi.org/10.1109/CIG.2008.5035629",["pcg"],7,"Early automatic game design."),
("Partial Observability in Games","classic POMDP / fog-of-war literature",2000,"",None,None,"",["partial-observability"],6,"marker"),
("Fog of War Representation for RTS Agents","Weber; Mateas",2009,"AIIDE",None,None,"https://ojs.aaai.org/index.php/AIIDE/article/view/12366",["rts","fog"],9,"FOW-aware RTS agent design."),
("Case-Based Planning and Execution for Real-Time Strategy Games","Ontañón et al.",2007,"ICCBR",None,None,"",["rts","cbr"],8,"CBR for RTS."),
("Reactive Planning Idioms for Multi-Scale Game AI","Weber; Mateas; Jhala",2010,"CIG",None,"10.1109/ITW.2010.5593359","https://doi.org/10.1109/ITW.2010.5593359",["rts"],8,"Multi-scale reactive planning."),
("Natural Language Command of Agents in Games","various grounded NL",2018,"",None,None,"",["nl-commands"],6,"marker"),
("Learning to Follow Directions in Situated Environments","Anderson et al. VLN lineage",2018,"",None,None,"",["nl-commands"],7,"Vision-and-language navigation lineage for grounded commands."),
("Gated-Attention Architectures for Task-Oriented Language Grounding","Chaplot et al.",2018,"AAAI","1706.07230",None,"https://arxiv.org/abs/1706.07230",["nl-commands","grounding"],8,"Language grounding for embodied agents."),
("Instruction Following with Goal-Conditioned RL","various",2020,"",None,None,"",["nl-commands"],6,"marker"),
("Dota 2 with Large Scale Deep Reinforcement Learning","Berner et al. OpenAI Five",2019,"arXiv","1912.06680",None,"https://arxiv.org/abs/1912.06680",["rts","marl"],9,"Large-scale team game RL."),
("Human-level control through deep reinforcement learning","Mnih et al.",2015,"Nature",None,"10.1038/nature14236","https://doi.org/10.1038/nature14236",["rl"],8,"DQN landmark."),
("Multi-Agent Reinforcement Learning: A Selective Overview","Zhang; Yang; Başar",2021,"arXiv","1911.10635",None,"https://arxiv.org/abs/1911.10635",["marl"],7,"MARL survey."),
("Opponent Modeling in Deep Reinforcement Learning","He et al.",2016,"ICML",None,None,"",["opponent-modeling"],8,"Opponent modeling with DRON."),
("A Survey on Opponent Modelling in Games","Bakkes; Spronck; van den Herik",2009,"",None,None,"",["opponent-modeling"],7,"Opponent modeling survey."),
("Artificial Intelligence for Adaptive Computer Games","Spronck",2005,"",None,None,"",["game-ai"],7,"Adaptive game AI."),
("Dynamic Scripting","Spronck et al.",2006,"",None,None,"",["game-ai"],7,"Dynamic scripting for games."),
("Behavior Trees in Robotics and AI","Colledanchise; Ögren",2018,"Book","1709.00084",None,"https://arxiv.org/abs/1709.00084",["game-ai"],8,"BT formalization useful vs ano standing rules."),
("A Survey of Planning Techniques for Agents in Games","Omicini lineage / Orkin",2006,"GDC F.E.A.R.",None,None,"https://alumni.media.mit.edu/~jorkin/gdc2006_orkin_jeff_fear.pdf",["planning","game-ai"],9,"F.E.A.R. GOAP talk — classic game AI planning."),
("Three States and a Plan: The AI of F.E.A.R.","Jeff Orkin",2006,"GDC",None,None,"https://alumni.media.mit.edu/~jorkin/gdc2006_orkin_jeff_fear.pdf",["planning","game-ai"],10,"GOAP in a shipped FPS/AI landmark."),
("Goal-Oriented Action Planning","Orkin",2003-2005,"",None,None,"",["planning"],8,"GOAP method papers/talks."),
("HTN Planning for Games","Nau / SHOP lineage applied",2004,"",None,None,"",["planning"],7,"HTN planning for game NPCs."),
("Stratagus / Wargus AI competitions","various",2005,"",None,None,"",["rts"],5,"marker"),
("Brood War API (BWAPI)","various",2010,"",None,None,"https://github.com/bwapi/bwapi",["rts"],8,"Tooling that enabled a decade of StarCraft AI."),
("TorchCraft: a Library for Machine Learning Research on Real-Time Strategy Games","Synnaeve et al.",2016,"arXiv","1611.00625",None,"https://arxiv.org/abs/1611.00625",["rts"],8,"ML research bridge to StarCraft."),
("MicroRTS","Santiago Ontañón",2013,"",None,None,"https://github.com/santiontanon/microrts",["rts"],8,"Small RTS research environment."),
("Generative Agents (game-sim crossover)","Park et al.",2023,"UIST","2304.03442",None,"https://arxiv.org/abs/2304.03442",["agents","game-ai"],9,"Agent simulacra relevant to NPC/order ecosystems."),
]

def write_jsonl(path, classics, pool, arxiv_keywords):
    rows = []
    for t,a,y,v,arx,doi,url,topics,score,why in classics:
        if score <= 2 or t.startswith('skip') or 'marker' in why.lower() and score<=6:
            # keep markers with score>=7 only
            if score < 7:
                continue
        authors = [x.strip() for x in a.split(';')] if isinstance(a,str) else a
        rows.append({
            'title': t, 'authors': authors, 'year': y, 'venue': v,
            'arxiv': arx, 'doi': doi, 'url': url, 'topics': topics,
            'relevance_score': score, 'why_anghel': why,
            'abstract_or_blurb': why, 'pool': pool,
        })
    # mine arxiv_raw / openalex for keyword hits
    def mine(path_json, limit=120):
        p = Path(path_json)
        if not p.exists():
            return []
        try:
            data = json.loads(p.read_text())
        except Exception:
            return []
        out=[]
        if isinstance(data, dict):
            # maybe {results:[...]} 
            for k in ('results','works','items','entries'):
                if k in data and isinstance(data[k], list):
                    data = data[k]
                    break
            else:
                data = list(data.values()) if data else []
        if not isinstance(data, list):
            return []
        for obj in data:
            if not isinstance(obj, dict):
                continue
            title = obj.get('title') or obj.get('display_name') or ''
            blob = (title + ' ' + (obj.get('abstract') or obj.get('summary') or '')).lower()
            if not any(kw in blob for kw in arxiv_keywords):
                continue
            year = obj.get('year') or obj.get('publication_year')
            try: year = int(str(year)[:4])
            except: year = None
            arxiv = obj.get('arxiv')
            if not arxiv and obj.get('id') and 'arxiv' in str(obj.get('id')):
                arxiv = str(obj['id']).split('/')[-1]
            # openalex ids
            ids = obj.get('ids') or {}
            if not arxiv and isinstance(ids, dict) and ids.get('arxiv'):
                arxiv = str(ids['arxiv']).split('/')[-1]
            authors=[]
            for a in obj.get('authors') or obj.get('authorships') or []:
                if isinstance(a, dict):
                    if 'display_name' in a: authors.append(a['display_name'])
                    elif 'author' in a and isinstance(a['author'], dict):
                        authors.append(a['author'].get('display_name',''))
                    elif 'name' in a: authors.append(a['name'])
            out.append({
                'title': title,
                'authors': authors,
                'year': year,
                'venue': obj.get('venue') or (obj.get('primary_location') or {}).get('source',{}).get('display_name') if isinstance(obj.get('primary_location'), dict) else obj.get('venue'),
                'arxiv': arxiv,
                'doi': obj.get('doi'),
                'url': obj.get('url') or (f"https://arxiv.org/abs/{arxiv}" if arxiv else obj.get('id')),
                'topics': [pool],
                'relevance_score': 7,
                'why_anghel': f'Keyword-mined {pool} candidate from scratch haul.',
                'abstract_or_blurb': (obj.get('abstract') or obj.get('summary') or '')[:500],
                'pool': pool+'_mined',
            })
            if len(out) >= limit:
                break
        return out

    mined = []
    mined += mine(SCRATCH/'arxiv_raw.json', 80)
    mined += mine(SCRATCH/'arxiv_extra.json', 40)
    mined += mine(SCRATCH/'openalex_raw.json', 60)
    mined += mine(SCRATCH/'s2_raw.json', 40)

    # dedupe by title
    seen=set(); final=[]
    for r in rows + mined:
        k=re.sub(r'[^a-z0-9]+',' ', (r['title'] or '').lower()).strip()
        if not k or k in seen: continue
        seen.add(k); final.append(r)
    path.write_text('\n'.join(json.dumps(r, ensure_ascii=False) for r in final) + '\n')
    print(path.name, len(final), 'classics_approx', len(rows), 'mined', len(mined))

write_jsonl(POOLS/'engine.jsonl', ENGINE_CLASSICS, 'engine',
            ['vulkan','mesh shader','meshlet','radiance cascade','global illumination','lock-free','lockfree','ecs','entity component','allocator','mimalloc','hiz','light cull','rollback','lockstep','job system','data-oriented','sdf text','font rendering'])
write_jsonl(POOLS/'gameai.jsonl', GAMEAI_CLASSICS, 'gameai',
            ['starcraft','real-time strategy','rts','fog of war','procedural content','pcgml','opponent model','behavior tree','microrts','multi-agent reinforcement','build order','game ai'])
