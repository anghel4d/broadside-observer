# algorithms-and-complexity

**Charter.** Canonical classics of algorithms, computational complexity, information theory, automata, coding, cryptography foundations, and closely related distributed/systems papers (Paxos, BFT, MapReduce/GFS) that every Broadside systems reader should be able to walk.

Dijkstra shortest paths already exists as `310-a-note-on-two-problems-in-connexion-with-graphs-dijkstra` (pathfinding lineage) — **cite only, do not remint**. A* exists as `205-…`. Shannon was **not** yet minted in `foundations-of-computing` at claim time, so it is minted here.

## Ordered spine (compressed)

1. **Information & coding** — Shannon → Hamming → Huffman → LZ77/LZ78/LZW.
2. **Automata & languages** — Kleene / Chomsky → Rabin–Scott NFA → Myhill–Nerode → Hopcroft–Ullman.
3. **Complexity** — Hartmanis–Stearns / Blum → Cook–Levin / Karp / Levin → Garey&Johnson → Savitch → Immerman–Szelepcsényi → PH / relativization / Ladner → PCP / IP=PSPACE.
4. **Graph algorithms** — (Dijkstra@310) → Bellman–Ford / Floyd–Warshall → Kruskal / Prim → Ford–Fulkerson → Edmonds–Karp / Dinic / push-relabel → Tarjan DFS → Johnson APSP; matching via Edmonds blossoms.
5. **Strings** — Aho–Corasick / KMP / Boyer–Moore / Rabin–Karp → suffix arrays/trees.
6. **Algebraic** — Cooley–Tukey FFT → Karatsuba / Schönhage–Strassen → Strassen MM.
7. **Data structures** — AVL / B-tree / red-black / splay / Fibonacci heap / skip list / Bloom / union-find.
8. **Hashing & DHT** — Bloom → consistent hashing (Karger) → Chord / Pastry / Kademlia.
9. **IR & sequences** — PageRank / HITS; Viterbi / Baum–Welch; PCA / Fisher LDA.
10. **Learning & randomized lower bounds** — Yao minimax; Valiant PAC; #P permanent.
11. **Crypto foundations** — Diffie–Hellman / Merkle / RSA / Shamir sharing / AKS.
12. **Distributed** — Lamport clocks → vector clocks → Chandy–Lamport → Paxos → Byzantine generals → PBFT / Raft.
13. **Datacenter** — GFS → MapReduce.
14. **Textbooks (≤1 each)** — CLRS; Sedgewick; AHU; TAOCP vol.1; Garey&Johnson (complexity book, above).

## Cards in this lineage (this batch)

- `553-a-mathematical-theory-of-communication` — 1948 — A Mathematical Theory of Communication
- `568-error-detecting-and-error-correcting-codes` — 1950 — Error Detecting and Error Correcting Codes
- `570-a-method-for-the-construction-of-minimum-redundancy-codes` — 1952 — A Method for the Construction of Minimum-Redundancy Codes
- `721-a-universal-algorithm-for-sequential-data-compression` — 1977 — A Universal Algorithm for Sequential Data Compression
- `722-compression-of-individual-sequences-via-variable-rate-coding` — 1978 — Compression of Individual Sequences via Variable-Rate Coding
- `723-a-technique-for-high-performance-data-compression` — 1984 — A Technique for High-Performance Data Compression
- `724-the-complexity-of-theorem-proving-procedures` — 1971 — The Complexity of Theorem-Proving Procedures
- `725-reducibility-among-combinatorial-problems` — 1972 — Reducibility Among Combinatorial Problems
- `726-universal-sequential-search-problems` — 1973 — Universal Sequential Search Problems
- `727-computers-and-intractability-a-guide-to-the-theory-of-np-com` — 1979 — Computers and Intractability: A Guide to the Theory of NP-Completeness
- `728-on-the-computational-complexity-of-algorithms` — 1965 — On the Computational Complexity of Algorithms
- `729-a-machine-independent-theory-of-the-complexity-of-recursive-` — 1967 — A Machine-Independent Theory of the Complexity of Recursive Functions
- `730-relationships-between-nondeterministic-and-deterministic-tap` — 1970 — Relationships Between Nondeterministic and Deterministic Tape Complexities
- `731-nondeterministic-space-is-closed-under-complement` — 1988 — Nondeterministic Space is Closed Under Complement
- `732-the-method-of-forced-enumeration-for-nondeterministic-automa` — 1988 — The Method of Forced Enumeration for Nondeterministic Automata
- `733-the-polynomial-time-hierarchy` — 1976 — The Polynomial-Time Hierarchy
- `734-relativizations-of-the-p-np-question` — 1975 — Relativizations of the P =? NP Question
- `735-on-the-structure-of-polynomial-time-reducibility` — 1975 — On the Structure of Polynomial Time Reducibility
- `619-finite-automata-and-their-decision-problems` — 1959 — Finite Automata and Their Decision Problems
- `736-myhill-nerode-theorem-myhill-technical-notes` — 1957 — Myhill–Nerode Theorem (Myhill technical notes)
- `737-linear-automaton-transformations-nerode-congruence` — 1958 — Linear Automaton Transformations (Nerode congruence)
- `738-introduction-to-automata-theory-languages-and-computation` — 1979 — Introduction to Automata Theory, Languages, and Computation
- `599-three-models-for-the-description-of-language` — 1956 — Three Models for the Description of Language
- `530-representation-of-events-in-nerve-nets-and-finite-automata` — 1956 — Representation of Events in Nerve Nets and Finite Automata
- `739-on-a-routing-problem` — 1958 — On a Routing Problem
- `740-algorithm-97-shortest-path` — 1962 — Algorithm 97: Shortest Path
- `741-a-theorem-on-boolean-matrices` — 1962 — A Theorem on Boolean Matrices
- `742-on-the-shortest-spanning-subtree-of-a-graph-and-the-travelin` — 1956 — On the Shortest Spanning Subtree of a Graph and the Traveling Salesman Problem
- `743-shortest-connection-networks-and-some-generalizations` — 1957 — Shortest Connection Networks and Some Generalizations
- `744-maximal-flow-through-a-network` — 1956 — Maximal Flow Through a Network
- `745-theoretical-improvements-in-algorithmic-efficiency-for-netwo` — 1972 — Theoretical Improvements in Algorithmic Efficiency for Network Flow Problems
- `746-algorithm-for-solution-of-a-problem-of-maximum-flow-in-a-net` — 1970 — Algorithm for Solution of a Problem of Maximum Flow in a Network with Power Estimation
- `747-a-new-approach-to-the-maximum-flow-problem` — 1988 — A New Approach to the Maximum-Flow Problem
- `748-depth-first-search-and-linear-graph-algorithms` — 1972 — Depth-First Search and Linear Graph Algorithms
- `749-efficient-algorithms-for-graph-manipulation` — 1973 — Efficient Algorithms for Graph Manipulation
- `750-efficient-algorithms-for-shortest-paths-in-sparse-networks` — 1977 — Efficient Algorithms for Shortest Paths in Sparse Networks
- `751-fast-pattern-matching-in-strings` — 1977 — Fast Pattern Matching in Strings
- `752-a-fast-string-searching-algorithm` — 1977 — A Fast String Searching Algorithm
- `753-efficient-string-matching-an-aid-to-bibliographic-search` — 1975 — Efficient String Matching: An Aid to Bibliographic Search
- `754-efficient-randomized-pattern-matching-algorithms` — 1987 — Efficient Randomized Pattern-Matching Algorithms
- `755-suffix-arrays-a-new-method-for-on-line-string-searches` — 1993 — Suffix Arrays: A New Method for On-Line String Searches
- `756-on-line-construction-of-suffix-trees` — 1995 — On-Line Construction of Suffix Trees
- `757-an-algorithm-for-the-machine-calculation-of-complex-fourier-` — 1965 — An Algorithm for the Machine Calculation of Complex Fourier Series
- `758-gaussian-elimination-is-not-optimal` — 1969 — Gaussian Elimination is Not Optimal
- `759-multiplication-of-multidigit-numbers-on-automata` — 1962 — Multiplication of Multidigit Numbers on Automata
- `760-schnelle-multiplikation-grosser-zahlen` — 1971 — Schnelle Multiplikation grosser Zahlen
- `761-quicksort` — 1962 — Quicksort
- `762-algorithm-232-heapsort` — 1964 — Algorithm 232: Heapsort
- `1036-a-high-speed-sorting-procedure` — 1959 — A High-Speed Sorting Procedure
- `763-an-algorithm-for-the-organization-of-information` — 1962 — An Algorithm for the Organization of Information
- `764-organization-and-maintenance-of-large-ordered-indices` — 1972 — Organization and Maintenance of Large Ordered Indices
- `765-a-dichromatic-framework-for-balanced-trees` — 1978 — A Dichromatic Framework for Balanced Trees
- `766-self-adjusting-binary-search-trees` — 1985 — Self-Adjusting Binary Search Trees
- `767-fibonacci-heaps-and-their-uses-in-improved-network-optimizat` — 1987 — Fibonacci Heaps and Their Uses in Improved Network Optimization Algorithms
- `768-skip-lists-a-probabilistic-alternative-to-balanced-trees` — 1990 — Skip Lists: A Probabilistic Alternative to Balanced Trees
- `769-space-time-trade-offs-in-hash-coding-with-allowable-errors` — 1970 — Space/Time Trade-offs in Hash Coding with Allowable Errors
- `770-consistent-hashing-and-random-trees-distributed-caching-prot` — 1997 — Consistent Hashing and Random Trees: Distributed Caching Protocols for Relieving Hot Spots on the World Wide Web
- `771-chord-a-scalable-peer-to-peer-lookup-service-for-internet-ap` — 2001 — Chord: A Scalable Peer-to-peer Lookup Service for Internet Applications
- `772-pastry-scalable-decentralized-object-location-and-routing-fo` — 2001 — Pastry: Scalable, Decentralized Object Location and Routing for Large-Scale Peer-to-Peer Systems
- `773-kademlia-a-peer-to-peer-information-system-based-on-the-xor-` — 2002 — Kademlia: A Peer-to-peer Information System Based on the XOR Metric
- `774-the-pagerank-citation-ranking-bringing-order-to-the-web` — 1999 — The PageRank Citation Ranking: Bringing Order to the Web
- `775-authoritative-sources-in-a-hyperlinked-environment` — 1999 — Authoritative Sources in a Hyperlinked Environment
- `776-error-bounds-for-convolutional-codes-and-an-asymptotically-o` — 1967 — Error Bounds for Convolutional Codes and an Asymptotically Optimum Decoding Algorithm
- `777-a-maximization-technique-occurring-in-the-statistical-analys` — 1970 — A Maximization Technique Occurring in the Statistical Analysis of Probabilistic Functions of Markov Chains
- `778-analysis-of-a-complex-of-statistical-variables-into-principa` — 1933 — Analysis of a Complex of Statistical Variables into Principal Components
- `1053-the-use-of-multiple-measurements-in-taxonomic-problems` — 1936 — The Use of Multiple Measurements in Taxonomic Problems
- `779-probabilistic-computations-toward-a-unified-measure-of-compl` — 1977 — Probabilistic Computations: Toward a Unified Measure of Complexity
- `780-a-theory-of-the-learnable` — 1984 — A Theory of the Learnable
- `781-new-directions-in-cryptography` — 1976 — New Directions in Cryptography
- `782-a-method-for-obtaining-digital-signatures-and-public-key-cry` — 1978 — A Method for Obtaining Digital Signatures and Public-Key Cryptosystems
- `783-secure-communications-over-insecure-channels` — 1978 — Secure Communications Over Insecure Channels
- `784-protocols-for-public-key-cryptosystems` — 1980 — Protocols for Public Key Cryptosystems
- `785-time-clocks-and-the-ordering-of-events-in-a-distributed-syst` — 1978 — Time, Clocks, and the Ordering of Events in a Distributed System
- `786-timestamps-in-message-passing-systems-that-preserve-the-part` — 1988 — Timestamps in Message-Passing Systems That Preserve the Partial Ordering
- `787-virtual-time-and-global-states-of-distributed-systems` — 1989 — Virtual Time and Global States of Distributed Systems
- `788-distributed-snapshots-determining-global-states-of-distribut` — 1985 — Distributed Snapshots: Determining Global States of Distributed Systems
- `789-the-part-time-parliament` — 1998 — The Part-Time Parliament
- `790-paxos-made-simple` — 2001 — Paxos Made Simple
- `791-the-byzantine-generals-problem` — 1982 — The Byzantine Generals Problem
- `792-reaching-agreement-in-the-presence-of-faults` — 1980 — Reaching Agreement in the Presence of Faults
- `793-practical-byzantine-fault-tolerance` — 1999 — Practical Byzantine Fault Tolerance
- `794-in-search-of-an-understandable-consensus-algorithm` — 2014 — In Search of an Understandable Consensus Algorithm
- `795-the-google-file-system` — 2003 — The Google File System
- `796-mapreduce-simplified-data-processing-on-large-clusters` — 2004 — MapReduce: Simplified Data Processing on Large Clusters
- `797-introduction-to-algorithms` — 1990 — Introduction to Algorithms
- `798-algorithms` — 1983 — Algorithms
- `799-the-design-and-analysis-of-computer-algorithms` — 1974 — The Design and Analysis of Computer Algorithms
- `595-the-art-of-computer-programming-volume-1-fundamental-algorit` — 1968 — The Art of Computer Programming, Volume 1: Fundamental Algorithms
- `800-approximation-algorithms-for-combinatorial-problems` — 1974 — Approximation Algorithms for Combinatorial Problems
- `801-proof-verification-and-the-hardness-of-approximation-problem` — 1998 — Proof Verification and the Hardness of Approximation Problems
- `802-ip-pspace` — 1992 — IP = PSPACE
- `803-a-machine-program-for-theorem-proving` — 1962 — A Machine Program for Theorem-Proving
- `804-a-computing-procedure-for-quantification-theory` — 1960 — A Computing Procedure for Quantification Theory
- `805-dynamic-programming` — 1957 — Dynamic Programming
- `806-a-dynamic-programming-approach-to-sequencing-problems` — 1962 — A Dynamic Programming Approach to Sequencing Problems
- `807-paths-trees-and-flowers` — 1965 — Paths, Trees, and Flowers
- `808-efficiency-of-a-good-but-not-linear-set-union-algorithm` — 1975 — Efficiency of a Good But Not Linear Set Union Algorithm
- `809-the-complexity-of-computing-the-permanent` — 1979 — The Complexity of Computing the Permanent
- `810-how-to-share-a-secret` — 1979 — How to Share a Secret
- `811-primes-is-in-p` — 2004 — PRIMES is in P

### Essential cites outside this lineage

| Stem | Why |
|------|-----|
| `310-a-note-on-two-problems-in-connexion-with-graphs-dijkstra` | Shortest paths root (pathfinding) |
| `205-a-formal-basis-for-the-heuristic-determination-of-minimum-co` | A* successor to Dijkstra |
| `472-how-to-make-a-multiprocessor-computer-that-correctly-execute` | Lamport sequential consistency (concurrent-data-structures) |
| `223-lock-free-computation-of-pagerank-in-dynamic-graphs` | Dynamic/lock-free PageRank variant — not the original ranking report |

## Batch

**seed_batch:** `perfects-algorithms-2026-08-13` · claimed block **737–834** (`perfects-algorithms`) · pool mix `systems` / `maths-foundations`.
