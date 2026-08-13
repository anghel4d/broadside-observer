# unix-foundations

**Charter.** The Unix userland as a *foundational, unseen-usage* substrate — coreutils, sed, the architecture of Unix itself — and the modern attempt to swap that substrate (Rust rewrites, drop-in compatibility as a spec, differential testing, supply-chain leverage). Prefer this lineage for uutils/coreutils, Spinellis Unix/sed, Miller fuzzing of Unix utilities, and the testing/complexity/supply-chain papers the 2026 Rust-coreutils account sits on. Do **not** steal `type-safety` (RustBelt/Oxide/Stacked Borrows) or `foundations-of-computing` (Turing/Shannon); cite those instead.

This is Broadside's 'you can replace the floor' thread: P1 compatibility, multicall binaries, tests-as-spec, and the cost of crate leverage.

## Ordered spine

1. **Unix as an evolving architecture** — Spinellis–Avgeriou TSE 2021; Kernighan oral history (cite, no card); POSIX Issue 8 (cite, no card).
2. **Reliability of the utilities** — Miller–Fredriksen–So 1990 fuzzing CACM.
3. **Testing without a spec** — McKeeman 1998 differential testing → Lima et al. JS-engine differential testing → libFuzzer (Serebryany 2016) → OSS-Fuzz (Serebryany 2017).
4. **Complexity and leverage** — McCabe 1976; rust-code-analysis (Ardito et al. 2020); Massacci–Pashchenko technical leverage ICSE 2021; Ladisa et al. SoK supply-chain S&P 2023.
5. **Rewrites in Rust** — Spinellis IEEE Software 2025 (`sed`) → **Ledru–Tardieu–Zacchiroli 2026 (uutils coreutils)**.
6. **Engineering notes (cite, no card)** — Geiselhart IBM Redbooks multicall; GNU coreutils manual.

## Cards in this mint (`user-add-2026-08-13`)

| Rank | Year | Title | Stem |
|-----:|-----:|-------|------|
| 1226 | 2026 | Rust Coreutils: Rebuilding Unix Foundations in a Modern Language | `1226-rust-coreutils-rebuilding-unix-foundations` |
| 1227 | 2020 | rust-code-analysis: A Rust library to analyze and extract maintainability information from source codes | `1227-rust-code-analysis` |
| 1228 | 2023 | SoK: Taxonomy of Attacks on Open-Source Software Supply Chains | `1228-sok-taxonomy-of-attacks-on-oss-supply-chains` |
| 1229 | 2021 | Exposing bugs in JavaScript engines through test transplantation and differential testing | `1229-exposing-bugs-in-javascript-engines` |
| 1230 | 2021 | Technical Leverage in a Software Ecosystem: Development Opportunities and Security Risks | `1230-technical-leverage-in-a-software-ecosystem` |
| 1231 | 1976 | A Complexity Measure | `1231-a-complexity-measure` |
| 1232 | 1998 | Differential Testing for Software | `1232-differential-testing-for-software` |
| 1233 | 1990 | An Empirical Study of the Reliability of UNIX Utilities | `1233-an-empirical-study-of-the-reliability-of-unix-utilities` |
| 1234 | 2016 | Continuous Fuzzing with libFuzzer and AddressSanitizer | `1234-continuous-fuzzing-with-libfuzzer-and-addresssanitizer` |
| 1235 | 2017 | OSS-Fuzz: Google's Continuous Fuzzing Service for Open Source Software | `1235-oss-fuzz-continuous-fuzzing-for-open-source-software` |
| 1236 | 2025 | Rewriting the Unix Stream Editor in Rust | `1236-rewriting-the-unix-stream-editor-in-rust` |
| 1237 | 2021 | Evolution of the Unix System Architecture: An Exploratory Case Study | `1237-evolution-of-the-unix-system-architecture` |

## Cite-without-card (this batch)

- Geiselhart, *Creating a multi-call Linux binary*, IBM Redbooks 2022 — https://www.redbooks.ibm.com/abstracts/tips0092.html
- Kernighan on Unix / Bell Labs / Go, CoRecursive 2021 — https://corecursive.com/brian-kernighan-unix-bell-labs1/
- GNU coreutils manual — https://www.gnu.org/software/coreutils/manual/
- IEEE Std 1003.1-2024 (POSIX Issue 8) — https://pubs.opengroup.org/onlinepubs/9799919799/
