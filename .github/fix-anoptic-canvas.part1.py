from pathlib import Path

path = Path("seeds/canvases/anoptic-api-algebra-2026-08-17.tsx")
text = path.read_text(encoding="utf-8")
original = text


def replace_exact(old: str, new: str, expected: int = 1) -> None:
    global text
    observed = text.count(old)
    if observed != expected:
        raise SystemExit(
            f"replacement precondition failed: expected {expected}, "
            f"found {observed} for {old[:140]!r}"
        )
    text = text.replace(old, new)


replacements = [
    (
        '  { id: "habit", label: "C habit", detail: "status + out-param, or throw" },',
        '  { id: "habit", label: "C / C++ habits", detail: "status, out-param, null, or exception" },',
    ),
    (
        """          already know the C habit: a function returns a status, and the real
          answer lives in an out-parameter. Or it returns null. Or it throws.
          Those are three machines for the same idea.""",
        """          already know the low-level C and C++ habits: a function returns a
          status while the real answer lives in an out-parameter, returns a
          null sentinel, or in C++ throws an exception. These are different
          control mechanisms for the same two-way outcome.""",
    ),
    ('<Stat value="27" label="public names" tone="success" />',
     '<Stat value="27" label="documented public entries" tone="success" />'),
    ('<Stat value="8" label="private signatures" />',
     '<Stat value="8" label="documented private helpers" />'),
    ('<Stat value="2" label="deleted collisions" tone="warning" />',
     '<Stat value="2" label="retired names" tone="warning" />'),
    ('<Stat value="26cec0f5" label="rename landed" tone="success" />',
     '<Stat value="26cec0f5" label="source snapshot" tone="success" />'),
    (
        """      <Callout tone="info" title="cc4696c0 is still an active work in progress">
        Algebraic traits, topologies, and API are all subject to change.
      </Callout>""",
        """      <Callout tone="info" title="Historical snapshot: anoptic-engine@26cec0f5">
        This tour describes commit 26cec0f5. It is the child of commit
        cc4696c0, which changed the proof notation to constructor order; it
        is not a claim about the current default branch.
      </Callout>""",
    ),
    (
        """          The core data structure is a wrapper for
          `std::expected&lt;Value, Error&gt;`. If that were the whole story we
          would stop at the using-alias. What we add is a closed set of
          laws about how those values may be built and chained, plus
          compile-time admission for which types and callables may
          participate. The bits in memory are still expected. The algebra is
          the part that lets you write a route and have the compiler reject
          a broken one.""",
        """          `ano::Result&lt;Value, Error&gt;` is a using-alias for
          `std::expected&lt;Value, Error&gt;`, not a wrapper with separate
          storage. Anoptic adds concepts, helpers, callable wrappers,
          composition nodes, and a separate Lean semantic model around that
          alias. Runtime representation is exactly the selected standard
          library implementation of `std::expected`; the extra admission
          rules live at compile time.""",
    ),
    (
        '              "Associativity",\n              "Grouping a chain does not change what runs. (f then g) then h is the same work as f then (g then h).",',
        '              "Semantic associativity",\n              "The Lean result model proves that regrouping bind preserves the extensional result. C++ callable construction, storage, and arbitrary side effects are outside that theorem.",',
    ),
    (
        """          `if (!r) return r;` at each step. A type that throws when moved is
          not a legal error. A function that returns a bare Texture is not a
          fallible step. The compiler says so before anything runs.""",
        """          `if (!r) return r;` at each step. An error type that throws when
          moved is not admitted by the Anoptic helpers and composition
          concepts that require ResultError; the Result alias itself is still
          just `std::expected`. A function that returns a bare Texture is not
          a fallible step. The compiler says so before anything runs.""",
    ),
    ('        <Eq>{`Result(V, E) = V + E`}</Eq>',
     '        <Eq>{`R_E(V) = E + V`}</Eq>'),
    (
        """          Not every type is allowed to sit on the failure side. ResultError
          is the admission ticket. It currently proves one mechanical fact:
          the error can be moved into the box without throwing.""",
        """          ResultError is the admission ticket for Anoptic helpers and
          composition concepts that require a safely movable error. It proves
          one mechanical fact: the stored error type is nothrow move
          constructible. Merely naming `ano::Result&lt;V, E&gt;` does not apply
          the concept.""",
    ),
    ('              "A failed Result can be returned, stored, and forwarded as ordinary data.",',
     '              "The error meets ResultError and may enter the Anoptic surfaces that require it; individual helpers impose their own construction constraints.",'),
    ('              "The type is rejected. You cannot hide a throw inside the error side.",',
     '              "Rejected wherever ResultError is required; not rejected merely by naming ano::Result&lt;V, E&gt;.",'),
    (
        """          after you strip aliases, references, and cv-qualification, is this
          exactly a Result?""",
        """          after you strip aliases, references, and cv-qualification, is this
          exactly a `std::expected` specialization, which is also what
          `ano::Result` aliases?""",
    ),
    (
        """          You have an error in your hand and you need a Result. failure is
          the injection into the error side. In C you would write
          `return EINVAL;` and hope the caller treats it as a status. Here
          the return type is already V + E, so the destination Result
          supplies V through contextual conversion. You do not name Texture
          just to fail at making one.""",
        """          You have an error in your hand and need the failure constructor.
          `failure` returns `std::unexpected&lt;StoredError&gt;`, not a Result.
          In a return or construction context expecting `Result&lt;V, E&gt;`,
          `std::expected` consumes that unexpected value and builds its error
          state. V comes from the destination type; `failure` never names or
          constructs it.""",
    ),
    ('              "E goes in. A Result comes out. You did not construct a Value.",',
     '              "E goes in. std::unexpected&lt;StoredError&gt; comes out. You did not construct a Value.",'),
    ('              "The return slot names V. failure does not.",',
     '              "A surrounding Result&lt;V, E&gt; context names V and converts the unexpected value. failure does not.",'),
    ('        <Eq>{`E  →  V + E`}</Eq>',
     '        <Eq>{`failure : E → unexpected(E)\\nunexpected(E) ↪ Result(V, E) = E + V`}</Eq>'),
    ('          check that returns 1 + E instead of aborting or setting errno.',
     '          check modeled as E + 1 instead of aborting or setting errno.'),
    ('        <Eq>{`resultIf : Bool × E → 1 + E`}</Eq>',
     '        <Eq>{`result_if : Bool × E → E + 1`}</Eq>'),
    ('        <Eq>{`resultIf : Bool × V × E → V + E`}</Eq>',
     '        <Eq>{`result_if : Bool × V × E → E + V`}</Eq>'),
    ('            ["Value / Return", "What the call returns. May or may not be a Result."],',
     '            ["Return", "What the call returns. May or may not be a Result."],'),
    ('        <CodeBlock>{`Operation\nParameter\nDomain\nValue\nnullary`}</CodeBlock>',
     '        <CodeBlock>{`Operation\nParameter\nDomain\nReturn\nnullary`}</CodeBlock>'),
    ('            ["Usable as a transform or error mapper", "Same inputs, same outputs"],',
     '            ["A prerequisite classification for transform/error-map checks", "Same inputs, same outputs"],'),
    ('              "Reflection sees V + E, not a bare B.",',
     '              "Reflection sees a std::expected carrier, modeled in Lean as E + V, not a bare B.",'),
    (
        """          throwing, and it returns V + E for a legal E. That is the
          admission decision.""",
        """          throwing, and it returns a `std::expected` carrier whose E meets
          ResultError. That is the admission decision.""",
    ),
    ('              "A step that just wraps its input as success, then g, is the same as g.",',
     '              "Lean proves that composing its semantic identity before g leaves the extensional arrow unchanged.",'),
    ('              "f, then a step that just wraps its input as success, is the same as f.",',
     '              "Lean proves that composing the semantic identity after f leaves the extensional arrow unchanged.",'),
    ('              "(f then g) then h runs the same steps as f then (g then h).",',
     '              "Lean proves extensional associativity of admitted Result arrows; it does not inspect arbitrary C++ construction side effects.",'),
    (
        """        <Text>
          Concretely, if this concept holds, `.and_then` is legal. The
          compiler rejects a broken chain before anything executes.""",
        """        <Text>
          The C++ concept checks shape and type compatibility. The unit and
          associativity rows above are theorems of the extensional Lean model,
          not dynamic tests of arbitrary C++ callable objects.
        </Text>
        <Text>
          Concretely, if this concept holds, `.and_then` is legal. The
          compiler rejects a broken chain before anything executes.""",
    ),
    ('              "Mapping with the do-nothing function leaves the Result alone.",',
     '              "Lean proves that mapping the identity function preserves the extensional Result arrow.",'),
    ('              "Map f, then map g, is the same as map (g after f). Two walks become one.",',
     '              "Lean proves extensional equivalence to map (g after f). The C++ API still builds two composition nodes unless optimization removes them.",'),
    ('              "Mapping errors with the do-nothing function leaves the Result alone.",',
     '              "Lean proves that mapping error identity preserves the extensional Result arrow.",'),
    ('              "Map errors with f, then with g, is map errors with (g after f).",',
     '              "Lean proves extensional equivalence to one composed error mapper; the C++ surface does not promise physical node fusion.",'),
    ('              "Prefix remains",\n              "States already written stay written. A failed scan is still observable.",',
     '              "Caller-buffer state",\n              "States written before failure remain in the caller buffer, but the error result does not report the written count.",'),
    (
        """          stops at the bad record. You can still see the records that
          landed.""",
        """          stops at the bad record. Earlier writes remain in the caller-owned
          buffer; identifying the exact prefix requires separate progress
          tracking.""",
    ),
