    ('              "Real object",\n              "The range is stored, not a temporary expression we cannot name.",',
     '              "Object type",\n              "Range must be an object type. This does not itself impose an lvalue lifetime; the source Result owns its successful Range object.",'),
    (
        """          Concretely: a std::span, a std::vector, a C array. Not a
          std::list.""",
        """          Concretely: a `std::span`, `std::vector`, or `std::array`.
          Not a `std::list`.""",
    ),
    (
        """          The concrete C++ object. In C you would hold a function pointer.
          Here the "pointer" can be empty: a reflected wrapper with no
          captures, stored with `[[no_unique_address]]`. After inlining
          there is no payload. The call is just the call.""",
        """          The concrete C++ object is a statically typed callable wrapper.
          It stores Operation as a `[[no_unique_address]]` member. An empty
          Operation may add no distinct member storage in a larger layout,
          but every standalone C++ object, including Function, has nonzero
          `sizeof`. There is no type erasure or vtable; a direct call and
          inlining are optimization opportunities, not size guarantees.""",
    ),
    ('              "A lift of a named function can be zero bytes. A capturing lambda is as big as its captures.",',
     '              "A lifted operation is empty; [[no_unique_address]] may remove member overhead. A standalone Function still has nonzero sizeof, and capturing lambdas retain capture state subject to ABI padding.",'),
    (
        """          Concretely: `ano::Function&lt;ParseOperation&gt;` is a value you
          can put in a constexpr variable, pass around, and call. The
          constraints were already checked when it was built.""",
        """          Concretely: `ano::Function&lt;ParseOperation&gt;` is a value you
          can pass around and call, and it can be `constexpr` when Operation
          and its construction permit constant evaluation. The constraints
          were checked when it was built.""",
    ),
    (
        """          You call it. That is the whole point of holding a morphism as a
          value. Zero arguments, or one input. The return is the exact
          reflected Result, not a decayed status code and not a thrown
          exception. If the Function was a chain, this is when the chain
          runs.""",
        """          You call it. That is the whole point of holding a Function as a
          value. Zero arguments, or one input. The return is the exact
          reflected Return type; for a ResultMorphism, that Return is the
          Result carrier. If the Function was a chain, this is when the chain
          runs.""",
    ),
    ('        <CodeBlock>{`auto result = parse_file(bytes);`}</CodeBlock>',
     '        <CodeBlock>{`auto result = load_scene(bytes);`}</CodeBlock>'),
    (
        """          step. Nothing runs while the value is being declared. The
          compiler checks KleisliComposable.""",
        """          step. The wrapped operations are not invoked while the chain is
          built, although storing, copying, or moving callable objects can
          still run their constructors. The compiler checks
          KleisliComposable.""",
    ),
    ('              "The chain is a value. No I/O happens at the assignment.",',
     '              "The chain is a value. Wrapped operations are not invoked at assignment; callable construction itself is not required to be pure.",'),
    ('              "Three and_then calls in a row are one route. Parentheses do not change the work.",',
     '              "Lean proves extensional associativity. The C++ object type and construction/storage layout can differ with grouping.",'),
    ('              "Do-nothing mapper is a no-op. Two maps fuse into one.",',
     '              "Lean proves identity and fusion extensionally; the C++ API does not promise that two stored nodes become one.",'),
    (
        """          This is the loop. FoldStep and KleisliFoldStep were the body.
          ScanRange was the source. scan_into is the walk: bounded, seeded,
          inclusive, left to right, into a buffer you already own.""",
        """          This attaches the loop to a source Function. FoldStep and
          KleisliFoldStep describe the body, and ScanRange constrains the
          source value. `scan_into` stores the seed, step, and output span in
          a new Function; no source traversal occurs until that Function is
          invoked.""",
    ),
    ('              "Fallible prefix",\n              "A failing step stops the walk. Already written slots stay. You can see how far it got.",',
     '              "Fallible buffer state",\n              "A failing step stops the walk and prior writes remain in the caller buffer, but the error return does not report the written count or a prefix span.",'),
    (
        '            [\n              "Not fold",\n              "A fold would return only the last state. This writes every intermediate.",\n            ],',
        '            [\n              "Stored span lifetime",\n              "The Function stores a std::span by value. Its backing buffer must outlive the later invocation.",\n            ],\n            [\n              "Not fold",\n              "A fold would return only the last state. This writes every intermediate.",\n            ],',
    ),
    (
        """          Concretely: you hand it a seed, a step, and a span. It fills the
          span. If the step is a KleisliFoldStep, the return is a Result of
          that span. If the step is a FoldStep, the return is the span.""",
        """          At invocation, the source operation runs first. With either step
          kind, the resulting Function returns
          `Result&lt;std::span&lt;State&gt;, Error&gt;`: a direct FoldStep produces
          a span that `transform` rewraps, while a KleisliFoldStep already
          produces the Result consumed by `and_then`.""",
    ),
    (
        """          Formerly public. It is the generated empty callable that splices a
          reflected declaration back into ordinary compiled code. After
          optimization the call is just `parse_glb(bytes)`. Users never need
          to name Lifted. They name `lift`. Tests that inspected Lifted
          itself can disappear.""",
        """          Formerly public. It is the generated empty callable that splices a
          reflected declaration back into ordinary compiled code. Its call
          operator directly invokes `parse_glb(bytes)` without dynamic
          dispatch; whether that call is inlined is an optimizer decision.
          Users never need to name Lifted. They name `lift`.""",
    ),
    ('              "No captures. no_unique_address. The Function wrapping it can be zero bytes.",',
     '              "No captures. The operation is empty; [[no_unique_address]] may remove member overhead, but a standalone Function still has nonzero sizeof.",'),
    (
        """          Take a named function the compiler can see. Turn it into a
          zero-storage ResultMorphism. The `^^` is reflection: "the
          declaration named parse_glb," not a string, not a pointer. The
          compiler checks the shape at compile time.""",
        """          Take a named function the compiler can see and turn it into a
          Function containing an empty lifted callable. It is a
          ResultMorphism when the reflected return carrier's error satisfies
          ResultError. The `^^` is reflection: "the declaration named
          parse_glb," not a string and not a function pointer. The compiler
          checks the reflected shape at compile time.""",
    ),
    ('              "Fallible, noexcept, arity 0 or 1. Same gates as ResultOperation.",',
     '              "Reflected function, noexcept, arity 0 or 1, and a std::expected return. ResultError is checked only when ResultOperation/ResultMorphism is required.",'),
    ('              "The resulting Function can be empty. After inlining it is parse_glb.",',
     '              "The lifted operation is empty. The standalone Function is still nonzero-sized; its direct call may inline to parse_glb.",'),
    (
        """          Concretely: `ano::lift&lt;^^parse_glb&gt;` is a constexpr morphism
          you can chain. You never construct Lifted yourself.""",
        """          Concretely: `ano::lift&lt;^^parse_glb&gt;` is a constexpr Function.
          It can be chained as a ResultMorphism when `parse_glb`'s error type
          meets ResultError. You never construct Lifted yourself.""",
    ),
    ('            ["lift", "A named declaration. Zero storage. Spliced call."],',
     '            ["lift", "A named declaration. Empty lifted callable; direct spliced call."],'),
    ('            ["function", "A value: lambda, functor, already-built Function. May capture."],',
     '            ["function", "A value: lambda, functor, or other admitted callable object. May capture."],'),
    ('      <Callout tone="warning" title="Deleted: unary compose(operation)">',
     '      <Callout tone="warning" title="Retired in this snapshot: unary compose(operation)">'),
    (
        """        Current behavior does not compose anything. It forwards to
        function(operation). That collides with what every programmer means
        by compose: stick two functions together. A unary wrapper is not
        that. Use function for one operation. Use and_then for a chain.""",
        """        Before removal, this unary wrapper only forwarded to
        function(operation); it did not compose two functions. At 26cec0f5
        the name is absent. Use function for one operation and and_then for a
        Result chain.""",
    ),
    ('      <CodeBlock>{`ano::compose(operation)`}</CodeBlock>',
     '      <CodeBlock>{`/* removed */ ano::compose(operation)`}</CodeBlock>'),
    ('              "Associativity",\n              "Parentheses on the tuples change the nesting, not which checks run.",',
     '              "Concrete variadic order",\n              "The implementation left-nests pair(a, b, c) as ((A, B), C) and invokes a, b, then c. Different nesting changes the tuple type.",'),
    ('      <Callout tone="warning" title="Deleted: all(...)">',
     '      <Callout tone="warning" title="Retired in this snapshot: all(...)">'),
    ('          <H3>pair-pack compatibility</H3>',
     '          <H3>detail::pairable_pack&lt;...&gt;</H3>'),
    ('          ["lift", "reflection, splice, zero-storage", "Public"],',
     '          ["lift", "reflection, empty callable, direct call", "Public"],'),
    ('          ["scan_into", "scan, bounded, prefix", "Public"],',
     '          ["scan_into", "scan, bounded, deferred, caller-buffer", "Public"],'),
]

for old, new in replacements:
    replace_exact(old, new)

# Constructor-order notation used by the cited Lean snapshot.
for old, new in [("V + E", "E + V"), ("1 + E", "E + 1"), ("resultIf", "result_if")]:
    count = text.count(old)
    if count:
        replace_exact(old, new, count)

banned = [
    "zero bytes",
    "zero-storage",
    "cc4696c0 is still an active work in progress",
    "Current behavior does not compose anything",
    "If the step is a FoldStep, the return is the span",
    "Value / Return",
]
for phrase in banned:
    if phrase in text:
        raise SystemExit(f"stale factual phrase remains: {phrase!r}")

if text == original:
    raise SystemExit("patch made no changes")

path.write_text(text, encoding="utf-8")
print(f"updated {path}: {len(original)} -> {len(text)} bytes")
