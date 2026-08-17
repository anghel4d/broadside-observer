import {
  Callout,
  Divider,
  H1,
  H2,
  H3,
  Row,
  Stack,
  Stat,
  Table,
  Text,
  computeDAGLayout,
  useHostTheme,
} from "cursor/canvas";

const MONO = "ui-monospace, 'Cascadia Code', Consolas, monospace";

type FlowNode = {
  id: string;
  label: string;
  detail?: string;
  mono?: boolean;
  emphasis?: boolean;
};

type FlowEdge = { from: string; to: string; label?: string };

function FlowDiagram(props: {
  markerId: string;
  nodes: FlowNode[];
  edges: FlowEdge[];
  direction?: "vertical" | "horizontal";
  nodeWidth?: number;
  nodeHeight?: number;
  rankGap?: number;
  nodeGap?: number;
}) {
  const theme = useHostTheme();
  const nodeWidth = props.nodeWidth ?? 200;
  const nodeHeight = props.nodeHeight ?? 68;
  const layout = computeDAGLayout({
    nodes: props.nodes.map((n) => ({ id: n.id })),
    edges: props.edges.map((e) => ({ from: e.from, to: e.to })),
    direction: props.direction ?? "vertical",
    nodeWidth,
    nodeHeight,
    rankGap: props.rankGap ?? 56,
    nodeGap: props.nodeGap ?? 28,
  });
  const specById = new Map(props.nodes.map((n) => [n.id, n]));
  const labelFor = (from: string, to: string) =>
    props.edges.find((e) => e.from === from && e.to === to)?.label;

  return (
    <div style={{ overflowX: "auto" }}>
      <div
        style={{
          position: "relative",
          width: layout.width,
          height: layout.height,
        }}
      >
        <svg
          width={layout.width}
          height={layout.height}
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <marker
              id={props.markerId}
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
            >
              <path d="M0,0 L8,4 L0,8 Z" fill={theme.text.tertiary} />
            </marker>
          </defs>
          {layout.edges.map((e, i) => {
            const d =
              layout.direction === "horizontal"
                ? `M ${e.sourceX},${e.sourceY} C ${(e.sourceX + e.targetX) / 2},${e.sourceY} ${(e.sourceX + e.targetX) / 2},${e.targetY} ${e.targetX},${e.targetY}`
                : `M ${e.sourceX},${e.sourceY} C ${e.sourceX},${(e.sourceY + e.targetY) / 2} ${e.targetX},${(e.sourceY + e.targetY) / 2} ${e.targetX},${e.targetY}`;
            return (
              <path
                key={i}
                d={d}
                fill="none"
                stroke={e.isBackEdge ? theme.stroke.tertiary : theme.text.tertiary}
                strokeWidth={1.4}
                strokeDasharray={e.isBackEdge ? "4 3" : undefined}
                markerEnd={`url(#${props.markerId})`}
              />
            );
          })}
        </svg>
        {layout.edges.map((e, i) => {
          const label = labelFor(e.from, e.to);
          if (!label) return null;
          return (
            <div
              key={`label-${i}`}
              style={{
                position: "absolute",
                left: (e.sourceX + e.targetX) / 2,
                top: (e.sourceY + e.targetY) / 2,
                transform: "translate(-50%, -50%)",
                background: theme.bg.editor,
                color: theme.text.tertiary,
                fontSize: 11,
                lineHeight: "13px",
                padding: "2px 6px",
                borderRadius: 4,
                whiteSpace: "nowrap",
                fontFamily: MONO,
              }}
            >
              {label}
            </div>
          );
        })}
        {layout.nodes.map((n) => {
          const spec = specById.get(n.id);
          if (!spec) return null;
          return (
            <div
              key={n.id}
              style={{
                position: "absolute",
                left: n.x,
                top: n.y,
                width: nodeWidth,
                height: nodeHeight,
                boxSizing: "border-box",
                border: `1px solid ${spec.emphasis ? theme.accent.primary : theme.stroke.secondary}`,
                borderRadius: 6,
                background: theme.bg.elevated,
                padding: "10px 12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 4,
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: theme.text.primary,
                  lineHeight: "17px",
                  fontFamily: spec.mono ? MONO : undefined,
                }}
              >
                {spec.label}
              </span>
              {spec.detail ? (
                <span
                  style={{
                    fontSize: 12,
                    color: theme.text.secondary,
                    lineHeight: "15px",
                  }}
                >
                  {spec.detail}
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Eq({ children }: { children: string }) {
  const theme = useHostTheme();
  return (
    <div
      style={{
        fontFamily: MONO,
        fontSize: 13,
        lineHeight: "20px",
        color: theme.text.primary,
        padding: "8px 10px",
        background: theme.fill.tertiary,
        borderRadius: 6,
        overflowX: "auto",
        whiteSpace: "pre",
      }}
    >
      {children}
    </div>
  );
}

function CodeBlock({ children }: { children: string }) {
  const theme = useHostTheme();
  return (
    <pre
      style={{
        margin: 0,
        fontFamily: MONO,
        fontSize: 13,
        lineHeight: "20px",
        color: theme.text.primary,
        padding: "12px 14px",
        background: theme.bg.elevated,
        border: `1px solid ${theme.stroke.tertiary}`,
        borderRadius: 6,
        overflowX: "auto",
        whiteSpace: "pre",
      }}
    >
      {children}
    </pre>
  );
}

function Mark({ children }: { children: string }) {
  const theme = useHostTheme();
  return (
    <span
      style={{
        fontFamily: MONO,
        fontSize: 11,
        letterSpacing: "0.04em",
        color: theme.text.tertiary,
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}

const flowNodes: FlowNode[] = [
  { id: "habit", label: "C / C++ habits", detail: "status, out-param, null, or exception" },
  { id: "result", label: "Result(V, E)", detail: "one active alternative", mono: true, emphasis: true },
  { id: "function", label: "ResultMorphism", detail: "a Function whose call returns Result", mono: true },
  { id: "kleisli", label: "and_then", detail: "success feeds the next step", mono: true },
  { id: "pair", label: "pair", detail: "same input, first failure wins", mono: true },
  { id: "src", label: "the engine", detail: "the call actually runs here" },
];

const flowEdges: FlowEdge[] = [
  { from: "habit", to: "result", label: "both ways in one box" },
  { from: "result", to: "function" },
  { from: "function", to: "kleisli" },
  { from: "function", to: "pair" },
  { from: "kleisli", to: "src" },
  { from: "pair", to: "src" },
];

export default function ResultComposeSurface() {
  return (
    <Stack gap={22}>
      <Stack gap={8}>
        <H1>Anoptic API Algebra</H1>
        <Text>
          Welcome to the public language for fallible work in Anoptic. You
          already know the low-level C and C++ habits: a function returns a
          status while the real answer lives in an out-parameter, returns a
          null sentinel, or in C++ throws an exception. These are different
          control mechanisms for the same two-way outcome. The call can go two
          ways. Here both ways live in one value. Once you see that value,
          the rest of these headers is just how those values chain, map, and
          pair. This tour walks the pieces one at a time.
        </Text>
      </Stack>

      <FlowDiagram
        markerId="general-flow"
        nodes={flowNodes}
        edges={flowEdges}
        nodeWidth={220}
        nodeHeight={70}
        rankGap={54}
        nodeGap={28}
      />

      <Row gap={24} wrap>
        <Stat value="27" label="documented public entries" tone="success" />
        <Stat value="8" label="documented private helpers" />
        <Stat value="2" label="retired names" tone="warning" />
        <Stat value="26cec0f5" label="source snapshot" tone="success" />
      </Row>

      <Callout tone="info" title="Historical snapshot: anoptic-engine@26cec0f5">
        This tour describes commit 26cec0f5. It is the child of commit
        cc4696c0, which changed the proof notation to constructor order; it
        is not a claim about the current default branch.
      </Callout>

      <Divider />

      <H2>anoptic_results.h</H2>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>1 public</Mark>
          <H3>Result&lt;Value, Error&gt;</H3>
        </Row>
        <Text>
          The fallible carrier. People usually think of a failed call as a
          side channel: an errno, a bool return, an exception unwinding past
          the answer. Here the answer is the side channel. Exactly one
          alternative is active: success containing Value (or no payload when Value is void), or failure containing Error. Never both. Never neither.
        </Text>
        <Text>
          `ano::Result&lt;Value, Error&gt;` is a using-alias for
          `std::expected&lt;Value, Error&gt;`, not a wrapper with separate
          storage. Anoptic adds concepts, helpers, callable wrappers,
          composition nodes, and a separate Lean semantic model around that
          alias. Runtime representation is exactly the selected standard
          library implementation of `std::expected`; the extra admission
          rules live at compile time.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Tagged sum",
              "The box holds a value or an error. Like a C union with a tag, or Haskell Either. Not a pair. Not value-and-maybe-error.",
            ],
            [
              "Bind",
              "Feed a success into the next fallible step. An error skips the rest and comes out as the answer.",
            ],
            [
              "Map success",
              "Change the value. Keep the same error type. Failure is untouched.",
            ],
            [
              "Map error",
              "Change the error. Keep the same value. Success is untouched.",
            ],
            [
              "Fail-fast pair",
              "Two checks on one input. Left runs first. First failure wins. If both would fail, you see the left error.",
            ],
            [
              "Semantic associativity",
              "The Lean result model proves that regrouping bind preserves the extensional result. C++ callable construction, storage, and arbitrary side effects are outside that theorem.",
            ],
            [
              "Admitted Anoptic error",
              "Helpers and morphism concepts require ResultError; the bare Result alias does not.",
            ],
          ]}
        />
        <Text>
          Concretely, that means you can write a parse-then-cook-then-realize
          route and the first failure is the result. You do not write
          `if (!r) return r;` at each step. An error type that throws when
          moved is not admitted by the Anoptic helpers and composition
          concepts that require ResultError; the Result alias itself is still
          just `std::expected`. A function that returns a bare Texture is not
          a fallible step. The compiler says so before anything runs.
        </Text>
        <Eq>{`R_E(V) = E + V`}</Eq>
        <CodeBlock>{`ano::Result<Texture, ResourceError>`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>2 public</Mark>
          <H3>ResultError&lt;Error&gt;</H3>
        </Row>
        <Text>
          ResultError is the admission ticket for Anoptic helpers and
          composition concepts that require a safely movable error. It proves
          one mechanical fact: the stored error type is nothrow move
          constructible. Merely naming `ano::Result&lt;V, E&gt;` does not apply
          the concept.
        </Text>
        <Text>
          Why that, and not some grander "is an error" theory? Because the
          whole point of Result is that failure is data. If moving E throws,
          the failure path just became an exception. That is a third control
          path, which is exactly the C++ habit we refused. So this is a
          property of the error representation, not a second algebra.
        </Text>
        <Table
          headers={["If this holds", "Then"]}
          rows={[
            [
              "E is nothrow-movable",
              "The error meets ResultError and may enter the Anoptic surfaces that require it; individual helpers impose their own construction constraints.",
            ],
            [
              "E throws on move",
              "Rejected wherever ResultError is required; not rejected merely by naming ano::Result&lt;V, E&gt;.",
            ],
          ]}
        />
        <CodeBlock>{`static_assert(ano::ResultError<ResourceError>);`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>3 public</Mark>
          <H3>ResultCarrier&lt;Type&gt;</H3>
        </Row>
        <Text>
          Sometimes you are not holding `Result&lt;Texture, ResourceError&gt;`
          by that spelling. You have a typedef, a const reference, an alias
          that cooked down to expected. ResultCarrier answers one question:
          after you strip aliases, references, and cv-qualification, is this
          exactly a `std::expected` specialization, which is also what
          `ano::Result` aliases?
        </Text>
        <Text>
          It uses reflection to look at the template and its two arguments.
          You ask "is it?" You do not unpack Value and Error yourself. That
          unpacking is an implementation job.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Normalizes first",
              "Aliases, references, and const/volatile are stripped. The spelling does not matter.",
            ],
            [
              "Exact template",
              "After that, it must be expected of two types. Not a pair. Not optional.",
            ],
            [
              "Yes or no",
              "A concept. It does not hand you Value and Error. That is ResultSignature.",
            ],
          ]}
        />
        <CodeBlock>{`static_assert(ano::ResultCarrier<
    const ano::Result<Texture, ResourceError>&>);`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>private</Mark>
          <H3>detail::ResultSignature&lt;Type&gt;</H3>
        </Row>
        <Text>
          Formerly ResultAlgebra. The old name claimed this struct was the
          algebra. It is not. It is a reflected decomposition: here is the
          carrier, here is Value, here is Error. Like reading the fields of
          a struct with offsetof, not like proving how those fields compose.
        </Text>
        <Text>
          It becomes private because users ask whether something is a
          ResultCarrier. Implementation code performs the decomposition.
          Naming the unpack publicly invited people to treat a typedef sheet
          as a law.
        </Text>
        <Table
          headers={["Field", "In English"]}
          rows={[
            ["Carrier", "The expected type itself, after normalization."],
            ["Value", "The success inhabitant."],
            ["Error", "The failure inhabitant."],
          ]}
        />
        <CodeBlock>{`ResultAlgebra<Type>`}</CodeBlock>
        <CodeBlock>{`detail::ResultSignature<Type>`}</CodeBlock>
        <CodeBlock>{`using Carrier = std::expected<Value, Error>;
using Value   = ...;
using Error   = ...;`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>4 public</Mark>
          <H3>failure(error)</H3>
        </Row>
        <Text>
          You have an error in your hand and need the failure constructor.
          `failure` returns `std::unexpected&lt;StoredError&gt;`, not a Result.
          In a return or construction context expecting `Result&lt;V, E&gt;`,
          `std::expected` consumes that unexpected value and builds its error
          state. V comes from the destination type; `failure` never names or
          constructs it.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Injection",
              "E goes in. std::unexpected&lt;StoredError&gt; comes out. You did not construct a Value.",
            ],
            [
              "Contextual V",
              "A surrounding Result&lt;V, E&gt; context names V and converts the unexpected value. failure does not.",
            ],
            [
              "Nothrow construction",
              "StoredError is constructed from the forwarded argument without throwing; ResultError separately requires nothrow move construction.",
            ],
          ]}
        />
        <Eq>{`failure : E → unexpected(E)\nunexpected(E) ↪ Result(V, E) = E + V`}</Eq>
        <CodeBlock>{`return ano::failure(ResourceError::invalidFormat);`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>5 public</Mark>
          <H3>result_if(condition, error)</H3>
        </Row>
        <Text>
          Sometimes success has no payload. The header was valid. The magic
          matched. You just needed a yes. That is a unit-valued result:
          success is empty, failure still carries E. Think of it as a
          check modeled as E + 1 instead of aborting or setting errno.
        </Text>
        <Text>
          If the condition is true you get a void success. If it is false
          you get that error. Later `.and_then` will skip the rest of the
          route on the false path, same as any other failure.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Unit success",
              "True means empty success. There is no payload to unwrap.",
            ],
            [
              "Error on false",
              "False means that E. Same as failure(error), gated by a bool.",
            ],
            [
              "Binds like any Result",
              "A later and_then skips on false. The check is a real step in the route.",
            ],
          ]}
        />
        <Eq>{`result_if : Bool × E → E + 1`}</Eq>
        <CodeBlock>{`auto valid = ano::result_if(
    header.magic == glbMagic,
    ResourceError::invalidFormat);`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>6 public</Mark>
          <H3>result_if(condition, value, error)</H3>
        </Row>
        <Text>
          Same idea, now with a payload. True picks the value. False picks
          the error. And… wait. Both arguments are evaluated before the
          function runs. This is an ordinary C++ function, not a macro and
          not a lazy `?:` with a short-circuiting right-hand side.
        </Text>
        <Text>
          That is the trap. If `bytes[offset]` would be out of range, you
          cannot rely on the condition to save you from evaluating it. The
          condition decides which inhabitant is stored. It does not decide
          which argument is computed. Keep the expensive or unsafe work
          outside, or behind a branch you wrote yourself.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Selects a side",
              "True stores V. False stores E. Exactly one inhabitant.",
            ],
            [
              "Eager",
              "Both V and E are evaluated before entry. The bool does not short-circuit C++ argument passing.",
            ],
            [
              "Binds like any Result",
              "True then next(value). False then that error, and next does not run.",
            ],
          ]}
        />
        <Eq>{`result_if : Bool × V × E → E + V`}</Eq>
        <CodeBlock>{`return ano::result_if(
    offset < bytes.size(),
    bytes[offset],
    ParseError::outOfBounds);`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>7 public</Mark>
          <H3>has_error(result, error)</H3>
        </Row>
        <Text>
          Sometimes you do not want to open the success side at all. You
          just want to know whether this failure is the truncated-file
          case, so you can recover, and leave every other error alone.
          has_error looks at the error inhabitant and compares it.
        </Text>
        <Text>
          The comparison itself must be legal and nonthrowing. If `==`
          could throw, asking "which error?" would become another exception
          path. On success the answer is false. You did not touch the
          Texture.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Failure only",
              "Success is false. The value is not read.",
            ],
            [
              "Typed compare",
              "The error you pass must be comparable to the Result's E, without throwing.",
            ],
            [
              "No unwrap",
              "You did not take the error out. You asked whether it was this one.",
            ],
          ]}
        />
        <CodeBlock>{`if (ano::has_error(result, ParseError::truncated))
    recover();`}</CodeBlock>
      </Stack>

      <Divider />

      <H2>anoptic_compose.h</H2>
      <Text>
        results.h gave you the box. compose.h is about callables that return
        that box, and the ways those callables may be stuck together. Four
        words show up in the names. They are ordinary programming ideas with
        inherited vocabulary, not a second subject you were supposed to
        already know.
      </Text>
      <Table
        headers={["Word", "The C picture", "Here"]}
        rows={[
          [
            "Morphism",
            "A function from A to B.",
            "A function from A to Result of B. The box is part of the type.",
          ],
          [
            "Kleisli",
            "g(f(x)), when f returns exactly what g wants.",
            "g of the success inside f(x). If f failed, g never runs.",
          ],
          [
            "Map",
            "for each slot, write f(slot). The container shape stays.",
            "Run f on the value inside the box, or on the error. The box stays a Result.",
          ],
          [
            "Fold",
            "A for-loop with an accumulator. One running value, one answer.",
            "The loop body (state, item) to next state. We scan, we do not hide a reduce.",
          ],
        ]}
      />
      <Text>
        Each word gets its own section when the name that uses it appears.
        Before that, three private signatures do the unpacking. Reflection
        reads a function the way ResultCarrier reads a type.
      </Text>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>private</Mark>
          <H3>detail::OperationSignature&lt;Operation&gt;</H3>
        </Row>
        <Text>
          Formerly OperationAlgebra. Same lie as ResultAlgebra. This is the
          reflected shape of an ordinary callable: what it is, what it
          takes, what domain that parameter denotes, what it returns, and
          whether it takes no argument. Signature information. Not a law
          about composition.
        </Text>
        <Table
          headers={["Field", "In English"]}
          rows={[
            ["Operation", "The callable type we inspected."],
            ["Parameter", "The first argument as declared, or void."],
            ["Domain", "That parameter with references and cv stripped."],
            ["Return", "What the call returns. May or may not be a Result."],
            ["nullary", "True when there is no argument."],
          ]}
        />
        <CodeBlock>{`OperationAlgebra<Operation>`}</CodeBlock>
        <CodeBlock>{`detail::OperationSignature<Operation>`}</CodeBlock>
        <CodeBlock>{`Operation
Parameter
Domain
Return
nullary`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>private</Mark>
          <H3>detail::ResultOperationSignature&lt;Operation&gt;</H3>
        </Row>
        <Text>
          Formerly ResultOperationAlgebra. Now the return type is a Result,
          so the signature also names Carrier, Value, and Error. Internal
          code writes `using Signature = ...` and gets on with it. It no
          longer claims that each inspected function possesses its own
          algebra. The algebra is the composition laws. The function is just
          one arrow that was admitted.
        </Text>
        <Table
          headers={["Field", "In English"]}
          rows={[
            ["Carrier", "The Result return type."],
            ["Value", "The success inhabitant of that Result."],
            ["Error", "The failure inhabitant."],
            ["Domain", "The input, if any. The A in A to Result of B."],
          ]}
        />
        <Eq>{`A → Result(B, E)`}</Eq>
        <CodeBlock>{`ResultOperationAlgebra<Operation>`}</CodeBlock>
        <CodeBlock>{`detail::ResultOperationSignature<Operation>`}</CodeBlock>
        <CodeBlock>{`Operation
Parameter
Domain
Carrier
Value
Error
nullary`}</CodeBlock>
        <CodeBlock>{`using Signature =
    detail::ResultOperationSignature<Operation>;`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>private</Mark>
          <H3>detail::DirectOperation&lt;Operation&gt;</H3>
        </Row>
        <Text>
          Formerly PureOperation. The old name was false. Functional
          programmers hear "pure" and think: no IO, no mutation, same
          inputs same outputs. This concept proved none of that. It only
          proved that the operation's return type is not a Result; that return may be an object type or void.
        </Text>
        <Text>
          A mapper that publishes renderer state can satisfy it. That is
          direct. It is plainly not pure. It becomes private because callers
          ordinarily care about ResultTransformable or ErrorMappable, not
          the internal classification used to establish those concepts.
        </Text>
        <Table
          headers={["What it proves", "What it does not"]}
          rows={[
            ["Returns a non-Result type, possibly void", "No IO"],
            ["NonthrowingOperation already held", "No mutation"],
            ["A prerequisite classification for transform/error-map checks", "Same inputs, same outputs"],
          ]}
        />
        <CodeBlock>{`PureOperation<Operation>`}</CodeBlock>
        <CodeBlock>{`detail::DirectOperation<Operation>`}</CodeBlock>
        <CodeBlock>{`[](const Output& output) noexcept {
    publish_output(target, output);
}`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>8 public</Mark>
          <H3>NonthrowingOperation&lt;Operation&gt;</H3>
        </Row>
        <Text>
          The first public gate on a callable. Before we talk about
          morphisms or boxes, we need a function the compiler can actually
          see and call. Reflection finds a concrete declaration. The shape
          is supported: no argument, or one argument. The invocation is
          noexcept.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Visible declaration",
              "Not an overload set, not a template we cannot instantiate. One callable we can inspect.",
            ],
            [
              "Arity 0 or 1",
              "Either a thunk, or a function of one input. Two-argument callables are for fold steps, later.",
            ],
            [
              "noexcept",
              "The call itself cannot throw. Failure, if any, has to come back as data.",
            ],
            [
              "Silent on Result",
              "int qualifies. Result qualifies. This gate does not care which.",
            ],
          ]}
        />
        <Text>
          Concretely, this is "we can call this without a throw," not "this
          is a fallible step." A function that returns int can pass. So can
          one that returns Result. The next concept adds the box.
        </Text>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>9 public</Mark>
          <H3>ResultOperation&lt;Operation&gt;</H3>
        </Row>
        <Text>
          Now it is a fallible step, and this is the first place the word
          morphism earns its keep. In ordinary math a morphism is a
          structure-preserving map from A to B. In C the closest habit is just "a function from A to B." A familiar example is `FILE *fopen(filename, mode)`: the input pair maps to a pointer, with failure represented by a null pointer.
        </Text>
        <Text>
          A Result-morphism keeps the failure in the type. It is not A to
          B. It is A to Result of B. The structure it preserves is the box:
          a success can be fed to the next step, a failure is already an
          answer. People also say "arrow" for the same idea. Same picture,
          shorter word.
        </Text>
        <Table
          headers={["Habit", "Type of the step"]}
          rows={[
            ["C convention", "A to B at the type level; failure may be encoded by a sentinel, status/errno convention, or out-parameter protocol."],
            ["C++ exception", "A to B. Failure unwinds. The return type lies on the failure path."],
            ["Result-morphism", "A to Result of B. Both ways are in the return."],
          ]}
        />
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Admitted callable",
              "NonthrowingOperation already held: visible, arity 0 or 1, noexcept.",
            ],
            [
              "Returns a Result",
              "Reflection sees a std::expected carrier, modeled in Lean as E + V, not a bare B.",
            ],
            [
              "Admissible E",
              "ResultError holds. The failure side is data.",
            ],
            [
              "Domain A",
              "The input, if any. Nullary means no input: a thunk that still returns a box.",
            ],
          ]}
        />
        <Text>
          Concretely: this is a function we can see, we can call without
          throwing, and it returns a `std::expected` carrier whose E meets
          ResultError. That is the admission decision. Lean starts after this point and treats the
          callable as an arrow A → Result(B, E). C++ concepts decide who
          gets in. The proofs assume they already did.
        </Text>
        <Eq>{`A → Result(B, E)`}</Eq>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>private</Mark>
          <H3>detail::SameResultError&lt;Left, Right&gt;</H3>
        </Row>
        <Text>
          Two fallible steps can only chain or pair if they agree on E.
          Otherwise "the error" is ambiguous: whose failure is the answer?
          You cannot put a ParseError and a ResourceError in the same box
          without first mapping one onto the other.
        </Text>
        <Table
          headers={["If this holds", "Then"]}
          rows={[
            [
              "Both are ResultOperations, same E",
              "A chain or a pair has one failure type. The answer is that E.",
            ],
            [
              "The E types differ",
              "Rejected. map_error one of them first, or they are not the same route.",
            ],
          ]}
        />
        <Text>
          Formerly public. It is only one clause inside stronger names, so
          ordinary callers never write it.
        </Text>
        <CodeBlock>{`SameResultError<Left, Right>`}</CodeBlock>
        <Eq>{`E_left = E_right`}</Eq>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>10 public</Mark>
          <H3>KleisliComposable&lt;Left, Right&gt;</H3>
        </Row>
        <Text>
          Ordinary composition is the C habit you already have. If f returns
          exactly what g wants, then g(f(x)) is a function. The types line
          up on the nose: B out of f, B into g. That is it.
        </Text>
        <Text>
          A Result-morphism does not return B. It returns a box that might
          hold B. g cannot take the box. g wants the thing inside. So the
          usual g(f(x)) is a type error, and should be. You need a different
          composition: open the box, and only then call g.
        </Text>
        <Text>
          That composition is called Kleisli composition, after Heinrich
          Kleisli. You do not need the history. You need the rule. If f
          succeeded, feed that B into g. If f failed, skip g and that
          error is the answer. Same error type on both steps, or there is
          no single answer type.
        </Text>
        <Table
          headers={["Habit", "What composition does"]}
          rows={[
            [
              "Ordinary compose",
              "g(f(x)). f must return exactly g's input. No box.",
            ],
            [
              "Kleisli compose",
              "If f(x) is success b, run g(b). If f(x) is failure e, return e. g never sees e.",
            ],
            [
              "Pair, later",
              "Both read x. Not a chain. The second step does not need the first success.",
            ],
          ]}
        />
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Matching intermediate",
              "f's success type is g's input type. You cannot cook a Texture into a function that wanted a Scene.",
            ],
            [
              "Same error",
              "SameResultError. One E for the whole chain.",
            ],
            [
              "Nullary discipline",
              "A no-argument step can follow only a void success. You cannot feed a Texture into a thunk.",
            ],
            [
              "Left unit",
              "Lean proves that composing its semantic identity before g leaves the extensional arrow unchanged.",
            ],
            [
              "Right unit",
              "Lean proves that composing the semantic identity after f leaves the extensional arrow unchanged.",
            ],
            [
              "Associativity",
              "Lean proves extensional associativity of admitted Result arrows; it does not inspect arbitrary C++ construction side effects.",
            ],
            [
              "Failure short-circuit",
              "The first error is the result. Later steps do not run.",
            ],
          ]}
        />
        <Text>
          The C++ concept checks shape and type compatibility. The unit and
          associativity rows above are theorems of the extensional Lean model,
          not dynamic tests of arbitrary C++ callable objects.
        </Text>
        <Text>
          Concretely, if this concept holds, `.and_then` is legal. The
          compiler rejects a broken chain before anything executes. You
          write parse.and_then(cook).and_then(realize) and the types have
          to line up the way g(f(x)) would, except through the box.
        </Text>
        <Eq>{`f : A → Result(B, E)
g : B → Result(C, E)
g ★ f : A → Result(C, E)`}</Eq>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>11 public</Mark>
          <H3>ResultTransformable&lt;Operation, Mapper&gt;</H3>
        </Row>
        <Text>
          Map is the other everyday FP word, and it is older than Kleisli
          in most programmers' hands. You have a container. You have a
          function on the element. You want the same container, with the
          function applied inside. Arrays: map double over [1, 2, 3] and
          you still have an array, now [2, 4, 6]. Optional: map over a
          present value, or do nothing if it is empty. The shape of the
          box does not change.
        </Text>
        <Text>
          Result is a box with two sides. Mapping the success side means:
          if the box holds B, write C = m(B) and keep the same error type.
          If the box holds E, leave it alone. m never sees a failure. m
          itself returns an ordinary C, not a Result. That is the
          difference from Kleisli. Kleisli's next step can fail. A map
          step cannot introduce a new failure. It can only rewrite the
          value that was already there.
        </Text>
        <Text>
          Mappable, here, means "this operation plus this mapper is a
          legal map." ResultTransformable is that ticket for the success
          side. The spelling stays because `.transform()` is the method,
          and map would collide with map_error and with every other map
          in C++.
        </Text>
        <Table
          headers={["Habit", "What map does"]}
          rows={[
            ["Array map", "Same length. Each slot replaced. Still an array."],
            ["Result transform", "Same box. Success rewritten. Failure untouched. Still a Result of the same E."],
            ["Kleisli and_then", "Next step returns a Result. It can fail. Not a map."],
          ]}
        />
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Mapper is direct",
              "For non-void B, m : B to C; for void success it may be nullary. Its return is not a Result, and it may still mutate the world.",
            ],
            [
              "Error preserved",
              "E does not change. A failed parse is still that parse error.",
            ],
            [
              "Identity",
              "Lean proves that mapping the identity function preserves the extensional Result arrow.",
            ],
            [
              "Fusion",
              "Lean proves extensional equivalence to map (g after f). The C++ API still builds two composition nodes unless optimization removes them.",
            ],
          ]}
        />
        <Text>
          Concretely: you already have a Result of a Scene, and you want
          to publish it or wrap it or pick a field. `.transform(publish)`
          is legal when this concept holds. publish can write GPU state.
          That is still a map. Direct, not pure.
        </Text>
        <Eq>{`f : A → Result(B, E)
m : B → C
map(m, f) : A → Result(C, E)`}</Eq>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>12 public</Mark>
          <H3>ErrorMappable&lt;Operation, Mapper&gt;</H3>
        </Row>
        <Text>
          Same map idea, other side of the box. The container is still a
          Result. The function now runs on E, not on B. A successful B is
          left alone. A failure is rewritten to a new failure type F.
        </Text>
        <Text>
          This is how vocabularies meet. A parser speaks ParseError. The
          resource manager speaks ResourceError. You do not want the
          manager to import the parser's private enum. You map the error
          at the boundary. The scene, if it parsed, is untouched.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Mapper is direct",
              "m : E to F. Ordinary return. The new F must itself be ResultError.",
            ],
            [
              "Success preserved",
              "A good B is still that B. You did not rerun the parser.",
            ],
            [
              "Identity",
              "Lean proves that mapping error identity preserves the extensional Result arrow.",
            ],
            [
              "Fusion",
              "Lean proves extensional equivalence to one composed error mapper; the C++ surface does not promise physical node fusion.",
            ],
          ]}
        />
        <Text>
          Concretely: `.map_error(to_resource_error)` is legal when this
          holds. You are changing the failure type of the whole arrow, not
          patching a string onto errno.
        </Text>
        <Eq>{`f : A → Result(B, E)
m : E → F
mapError(m, f) : A → Result(B, F)`}</Eq>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>13 public</Mark>
          <H3>KleisliPairable&lt;Left, Right&gt;</H3>
        </Row>
        <Text>
          Kleisli composition is a chain: the second step needs the first
          step's success. Pair is the other way two Result-morphisms meet.
          Both read the same input. A file header. A shared witness. A
          blob of bytes. They produce two answers, or one error.
        </Text>
        <Text>
          The "Kleisli" in the name is there because both sides are still
          fallible arrows, same E, and failure is still data. It is not
          there because pair is a chain. It is not. Right does not receive
          left's Texture. Right receives the same W left received.
        </Text>
        <Table
          headers={["Machine", "Data flow"]}
          rows={[
            ["and_then", "x to f, success of f to g. Sequential."],
            ["pair", "x to f, and the same x to g. Independent reads, fail-fast."],
            ["transform", "x to f, then a direct function on the success. No second Result."],
          ]}
        />
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Shared domain",
              "Same input type W, or both nullary. That shared W is part of the constraint.",
            ],
            [
              "Same error",
              "SameResultError. One E.",
            ],
            [
              "Left first",
              "If left fails, right does not run. If both would fail, you see the left error.",
            ],
            [
              "Product of values",
              "Success is a pair (A, B), not a Boolean. Both answers are kept.",
            ],
            [
              "Object successes",
              "A and B are real objects, not void. There has to be something to pair.",
            ],
          ]}
        />
        <Text>
          Concretely, if this holds, `pair` is legal. read_width and
          read_height both look at the header. Width missing means height
          is not read.
        </Text>
        <Eq>{`f : W → Result(A, E)
g : W → Result(B, E)
W → Result(A × B, E)`}</Eq>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>14 public</Mark>
          <H3>FoldStep&lt;Step, State, Item&gt;</H3>
        </Row>
        <Text>
          Fold is the loop you have written a hundred times. You have a
          list. You have a running value, the accumulator. For each item
          you write accumulator = step(accumulator, item). At the end you
          have one value. Sum is a fold. Product is a fold. "Are any of
          these true?" is a fold. C# Aggregate, Python functools.reduce,
          Haskell foldl: same machine, different spelling.
        </Text>
        <Text>
          A scan is the same loop, except you keep every intermediate
          accumulator, not just the last one. Inclusive left scan: start
          from a seed, write the state after item 1, after item 2, after
          item 3. The seed itself is not in the output. C++
          std::inclusive_scan is the cousin. A running total of gold over
          a list of loot drops is a scan. The final total is the fold of
          the same step.
        </Text>
        <Text>
          compose.h does not give you a general-purpose fold. It gives you
          `.scan_into()`, later, and that scan needs a step function.
          FoldStep is that step: state and item in, new state out. No
          Result. No throw. The name stays because it describes the role.
          It does not pretend the header already grew a reduce.
        </Text>
        <Table
          headers={["Machine", "What you keep"]}
          rows={[
            ["Fold / reduce", "One final accumulator. The loop's last state."],
            ["Scan", "Every intermediate accumulator, in order."],
            ["FoldStep", "Just the loop body. Not the loop."],
          ]}
        />
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Two arguments",
              "State first, item second. That order is the running-total order.",
            ],
            [
              "Same state type in and out",
              "The accumulator does not change representation mid-loop.",
            ],
            [
              "Direct return",
              "New state is an ordinary value. This step cannot fail.",
            ],
            [
              "noexcept",
              "The loop body is not allowed to throw. Failure, if you want it, is the next concept.",
            ],
          ]}
        />
        <Text>
          Concretely: a noexcept function that takes a Total and a Drop
          and returns their gold sum is a FoldStep if the types line up.
          You still need scan_into to run it over a range. This concept
          only admits the body.
        </Text>
        <Eq>{`State × Item → State`}</Eq>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>15 public</Mark>
          <H3>KleisliFoldStep&lt;Step, State, Item, Error&gt;</H3>
        </Row>
        <Text>
          Same loop body, now a Result-morphism on the pair (state, item).
          The running state can fail to advance. First error stops the
          scan. That is Kleisli in the small: the next iteration only runs
          if this one succeeded.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Fallible step",
              "(state, item) to Result of state. Its Error must match the Error supplied by the enclosing scan constraint.",
            ],
            [
              "Short-circuit",
              "First error ends the walk. Later items are not visited.",
            ],
            [
              "Caller-buffer state",
              "States written before failure remain in the caller buffer, but the error result does not report the written count.",
            ],
            [
              "Still not a fold",
              "This is the body. scan_into is the loop.",
            ],
          ]}
        />
        <Text>
          Concretely: a step that parses the next record into the running
          builder, or returns truncated, is a KleisliFoldStep. The scan
          stops at the bad record. Earlier writes remain in the caller-owned
          buffer; identifying the exact prefix requires separate progress
          tracking.
        </Text>
        <Eq>{`State × Item → Result(State, Error)`}</Eq>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>16 public</Mark>
          <H3>ScanRange&lt;Range&gt;</H3>
        </Row>
        <Text>
          A fold in the abstract can walk any sequence: a linked list, an
          input iterator, a generator. This header does not. ScanRange is
          the concrete contract `.scan_into()` needs, because the
          implementation is a pointer and a count.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Object type",
              "Range must be an object type. This does not itself impose an lvalue lifetime; the source Result owns its successful Range object.",
            ],
            [
              "Contiguous",
              "Elements sit in one block. data() is a pointer.",
            ],
            [
              "Sized",
              "size() is known up front. The bound is the min of source length and output capacity.",
            ],
            [
              "noexcept observers",
              "data and size do not throw. Walking the range cannot become a third control path.",
            ],
          ]}
        />
        <Text>
          Concretely: a `std::span`, `std::vector`, or `std::array`.
          Not a `std::list`. Not an input stream. If you need those, you are in a
          different loop, and this concept will say so.
        </Text>
      </Stack>

      <Divider />

      <H2>The function value</H2>
      <Text>
        So far the names have been tickets and laws. Function is the thing
        you actually hold. A statically typed callable object. You build it,
        you compose it, you call it later. ResultMorphism is the same
        object, named as the arrow we just defined.
      </Text>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>17 public</Mark>
          <H3>Function&lt;Operation&gt;</H3>
        </Row>
        <Text>
          The concrete C++ object is a statically typed callable wrapper.
          It stores Operation as a `[[no_unique_address]]` member. An empty
          Operation may add no distinct member storage in a larger layout,
          but every standalone C++ object, including Function, has nonzero
          `sizeof`. Function itself adds no type-erasure or virtual-dispatch layer. Whether Operation performs virtual dispatch is a property of Operation itself; inlining remains an optimizer decision.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Statically typed",
              "The Operation is in the type. Function adds no type-erasure or virtual-dispatch layer.",
            ],
            [
              "Empty-friendly",
              "A lifted operation is empty; [[no_unique_address]] may remove member overhead. A standalone Function still has nonzero sizeof, and capturing lambdas retain capture state subject to ABI padding.",
            ],
            [
              "Private storage",
              "You do not brace-initialize one by hand. lift, function, and the composition methods are the doors.",
            ],
            [
              "Nothrow store",
              "Moving the operation into the Function cannot throw. Same rule as ResultError, now for the callable.",
            ],
          ]}
        />
        <Text>
          Concretely: `ano::Function&lt;ParseOperation&gt;` is a value you
          can pass around and call, and it can be `constexpr` when Operation
          and its construction permit constant evaluation. The constraints
          were checked when it was built.
        </Text>
        <CodeBlock>{`ano::Function<ParseOperation>`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>18 public</Mark>
          <H3>ResultMorphism&lt;Operation&gt;</H3>
        </Row>
        <Text>
          Two names, one object. Function is the struct in memory, the way
          FILE* is a pointer. ResultMorphism is the role: this value is an
          admitted fallible arrow A → Result(B, E). Same distinction as
          "this FILE*" versus "this is the handle I read with."
        </Text>
        <Text>
          We introduced morphism at ResultOperation as a property of a
          callable. Here it is a type alias, so prose and proofs can say
          morphism without pretending the C++ value is something other than
          Function. If Operation is a ResultOperation, the Function is a
          ResultMorphism. If it is only a DirectOperation, you still have a
          Function, but you should not call it a Result-morphism. There is
          no box.
        </Text>
        <Table
          headers={["Name", "What it is pointing at"]}
          rows={[
            ["Function", "The C++ object. Storage, call operator, methods."],
            ["ResultMorphism", "That object, viewed as an arrow into a Result."],
            ["ResultOperation", "The concept that admitted the underlying callable."],
          ]}
        />
        <CodeBlock>{`template<ResultOperation Operation>
using ResultMorphism = Function<Operation>;`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>19 public</Mark>
          <H3>Invocation</H3>
        </Row>
        <Text>
          You call it. That is the whole point of holding a Function as a
          value. Zero arguments, or one input. The return is the exact
          reflected Return type; for a ResultMorphism, that Return is the
          Result carrier. If the Function was a chain, this is when the chain
          runs.
        </Text>
        <Table
          headers={["Form", "When"]}
          rows={[
            ["operation()", "Nullary. A thunk. No witness."],
            ["operation(input)", "Unary. The shared witness, the bytes, the header."],
          ]}
        />
        <Text>
          Concretely: `load_scene(bytes)` is ordinary C++ call syntax. The
          C++ constraints were checked at compile time; the Lean laws were proved separately. The wrapped work runs now.
        </Text>
        <CodeBlock>{`auto result = load_scene(bytes);`}</CodeBlock>
        <CodeBlock>{`operation()
operation(input)`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>20 public</Mark>
          <H3>.and_then(next)</H3>
        </Row>
        <Text>
          This is Kleisli composition as a method. C++ already spells it
          `and_then` on `std::expected`. You attach the next fallible
          step. The wrapped operations are not invoked while the chain is
          built, although storing, copying, or moving callable objects can
          still run their constructors. The compiler checks
          KleisliComposable. You get a new Function. Call
          it later, and the route executes.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Declaration is construction",
              "The chain is a value. Wrapped operations are not invoked at assignment; callable construction itself is not required to be pure.",
            ],
            [
              "Short-circuit",
              "First error is the result. Later steps do not run.",
            ],
            [
              "Associativity",
              "Lean proves extensional associativity. The C++ object type and construction/storage layout can differ with grouping.",
            ],
            [
              "New Function",
              "The result is another morphism, not a Result. You still have to call it.",
            ],
          ]}
        />
        <Text>
          Concretely: parse fails, cook never sees the bytes. cook fails,
          realize never sees the scene. You do not write the
          `if (!r) return r;` ladder. The method is that ladder, checked.
        </Text>
        <CodeBlock>{`inline constexpr auto load_scene =
    ano::lift<^^parse_glb>
        .and_then(canonicalize_scene)
        .and_then(cook_scene)
        .and_then(realize_scene);`}</CodeBlock>
        <CodeBlock>{`auto scene = load_scene(bytes);`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>21 public</Mark>
          <H3>.transform(mapper)</H3>
        </Row>
        <Text>
          This is success-map as a method. The name matches
          `std::expected::transform` on purpose. You already met the
          concept as ResultTransformable. The method is what you write
          when that concept holds.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Success rewritten",
              "B becomes C. The box is still a Result.",
            ],
            [
              "Error untouched",
              "Same E. A failed prepare is still that failure.",
            ],
            [
              "Direct mapper",
              "publish_scene may write GPU state. Direct, not pure.",
            ],
            [
              "New Function",
              "Again a morphism. Call it to run.",
            ],
          ]}
        />
        <Eq>{`Result(B, E)  --map(m)-->  Result(C, E)`}</Eq>
        <CodeBlock>{`auto published =
    prepare_scene.transform(publish_scene);`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>22 public</Mark>
          <H3>.map_error(mapper)</H3>
        </Row>
        <Text>
          This is error-map as a method. The concept was ErrorMappable.
          The method is the boundary between two error vocabularies.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Failure rewritten",
              "E becomes F. ParseError becomes ResourceError.",
            ],
            [
              "Success untouched",
              "A good scene is still that scene.",
            ],
            [
              "Identity and fusion",
              "Lean proves identity and fusion extensionally; the C++ API does not promise that two stored nodes become one.",
            ],
          ]}
        />
        <Eq>{`Result(B, E)  --mapError(m)-->  Result(B, F)`}</Eq>
        <CodeBlock>{`auto resource_route =
    parse_route.map_error(to_resource_error);`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>23 public</Mark>
          <H3>.scan_into(initial, step, output)</H3>
        </Row>
        <Text>
          This attaches the loop to a source Function. FoldStep and
          KleisliFoldStep describe the body, and ScanRange constrains the
          source value. `scan_into` stores the seed, step, and output span in
          a new Function; no source traversal occurs until that Function is
          invoked.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Seeded",
              "s0 is the starting state. It is not written. The first output is step(s0, x1).",
            ],
            [
              "Inclusive left",
              "Each written slot is the state after that item, not before.",
            ],
            [
              "Bounded",
              "Stops at min(source length, output capacity). No unbounded walk.",
            ],
            [
              "Fallible buffer state",
              "A failing step stops the walk and prior writes remain in the caller buffer, but the error return does not report the written count or a prefix span.",
            ],
            [
              "Stored span lifetime",
              "The Function stores a std::span by value. Its backing buffer must outlive the later invocation.",
            ],
            [
              "Not fold",
              "A fold would return only the last state. This writes every intermediate.",
            ],
          ]}
        />
        <Text>
          At invocation, the source operation runs first. With either step
          kind, the resulting Function returns
          `Result&lt;std::span&lt;State&gt;, Error&gt;`: a direct FoldStep produces
          a span that `transform` rewraps, while a KleisliFoldStep already
          produces the Result consumed by `and_then`.
        </Text>
        <CodeBlock>{`input = [x₁, x₂, x₃]
seed  = s₀`}</CodeBlock>
        <CodeBlock>{`s₁ = step(s₀, x₁)
s₂ = step(s₁, x₂)
s₃ = step(s₂, x₃)

output = [s₁, s₂, s₃]`}</CodeBlock>
      </Stack>

      <Divider />

      <H2>Construction and products</H2>
      <Text>
        Two ways in. lift wraps a named declaration you can reflect.
        function wraps an object or a lambda you already have. pair is how
        independent checks share one input. The deleted names are the ones
        that lied about which of those they were.
      </Text>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>private</Mark>
          <H3>detail::Lifted&lt;Declaration&gt;</H3>
        </Row>
        <Text>
          Formerly public. It is the generated empty callable that splices a
          reflected declaration back into ordinary compiled code. Its call
          operator directly invokes `parse_glb(bytes)` without dynamic
          dispatch; whether that call is inlined is an optimizer decision.
          Users never need to name Lifted. They name `lift`.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Empty callable",
              "No captures. The operation is empty; [[no_unique_address]] may remove member overhead, but a standalone Function still has nonzero sizeof.",
            ],
            [
              "Splice, not dispatch",
              "The call becomes a direct call to the named function. Not a table lookup.",
            ],
            [
              "Private on purpose",
              "The public story is lift. Naming Lifted invited tests of the wrapper.",
            ],
          ]}
        />
        <CodeBlock>{`Lifted<Declaration>`}</CodeBlock>
        <CodeBlock>{`ano::lift<^^parse_glb>`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>24 public</Mark>
          <H3>lift&lt;^^declaration&gt;</H3>
        </Row>
        <Text>
          Take a named function the compiler can see and turn it into a
          Function containing an empty lifted callable. It is a
          ResultMorphism when the reflected return carrier's error satisfies
          ResultError. The `^^` is reflection: "the declaration named
          parse_glb," not a string and not a function pointer. The compiler
          checks the reflected shape at compile time.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Named only",
              "A declaration the compiler can reflect. Not a lambda. That is function(), next.",
            ],
            [
              "Admitted",
              "Reflected function, noexcept, arity 0 or 1, and a std::expected return. ResultError is checked only when ResultOperation/ResultMorphism is required.",
            ],
            [
              "Empty operation",
              "The lifted operation is empty. The standalone Function is still nonzero-sized; its direct call may inline to parse_glb.",
            ],
            [
              "Name stays",
              "lift does not collide here. It means: pick this declaration up into the Function world.",
            ],
          ]}
        />
        <Text>
          Concretely: `ano::lift&lt;^^parse_glb&gt;` is a constexpr Function.
          It can be chained as a ResultMorphism when `parse_glb`'s error type
          meets ResultError. You never construct Lifted yourself.
        </Text>
        <CodeBlock>{`inline constexpr auto parse =
    ano::lift<^^parse_glb>;`}</CodeBlock>
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>25 public</Mark>
          <H3>function(operation)</H3>
        </Row>
        <Text>
          The other door. lift needs a name the compiler can reflect. A
          lambda has no such name. An object that captures `target` has no
          such name. function stores that object inside a Function, under
          the same nothrow storage rules.
        </Text>
        <Table
          headers={["Door", "What you have"]}
          rows={[
            ["lift", "A named declaration. Empty lifted callable; direct spliced call."],
            ["function", "A value: lambda, functor, or other admitted callable object. May capture."],
          ]}
        />
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Nothrow store",
              "Moving the operation in cannot throw.",
            ],
            [
              "Admitted callable",
              "NonthrowingOperation at least. ResultOperation if you want a ResultMorphism.",
            ],
            [
              "Not composition",
              "One operation in, one Function out. and_then is how you compose.",
            ],
          ]}
        />
        <CodeBlock>{`auto publish = ano::function(
    [&](Scene scene) noexcept -> ano::Result<Handle, Error> {
        return publish_scene(scene, target);
    });`}</CodeBlock>
      </Stack>

      <Callout tone="warning" title="Retired in this snapshot: unary compose(operation)">
        Before removal, this unary wrapper only forwarded to
        function(operation); it did not compose two functions. At 26cec0f5
        the name is absent. Use function for one operation and and_then for a
        Result chain.
      </Callout>
      <CodeBlock>{`/* removed */ ano::compose(operation)`}</CodeBlock>
      <CodeBlock>{`ano::function(operation)`}</CodeBlock>
      <CodeBlock>{`ano::function(operation).and_then(next)`}</CodeBlock>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>26 public</Mark>
          <H3>pair(left, right, ...)</H3>
        </Row>
        <Text>
          This is KleisliPairable as a function. Two fallible checks, one
          shared witness. read_width and read_height both look at the same
          header. Left runs first. If width is missing, height is not
          read, and you get the width error. If both succeed you get both
          numbers. That is a product of answers, not a Boolean "did
          everything pass?"
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Shared witness",
              "Both morphisms read the same W. Right does not receive left's success.",
            ],
            [
              "Fail-fast, left first",
              "Left error wins, even if right would also have failed.",
            ],
            [
              "Product, not predicate",
              "Success is (A, B). You keep both answers.",
            ],
            [
              "Variadic is a left fold",
              "pair(a, b, c) is implemented as pair(pair(a, b), c), yielding std::pair<std::pair<A, B>, C>.",
            ],
            [
              "Evaluation order",
              "The left fold invokes a, then b, then c; the first failure stops the remainder.",
            ],
          ]}
        />
        <CodeBlock>{`auto dimensions =
    ano::pair(read_width, read_height);`}</CodeBlock>
        <CodeBlock>{`auto checks =
    ano::pair(check_format,
              check_extent,
              check_schema);`}</CodeBlock>
      </Stack>

      <Callout tone="warning" title="Retired in this snapshot: all(...)">
        Haskell all, Python all, LINQ .All, Elixir Enum.all? Those mean
        universal Boolean quantification: is every element true? Our
        operation constructs a product of fallible computations. Same
        spelling, different machine. The capability moves into variadic
        pair, which already said what it does.
      </Callout>
      <Table
        headers={["Surface", "What people hear", "What we actually did"]}
        rows={[
          [
            "all(check_a, check_b)",
            "Are they all true?",
            "Run both on one input. First failure wins. Product of values.",
          ],
          [
            "pair(check_a, check_b)",
            "A pair of answers",
            "The same machine, named as a product.",
          ],
        ]}
      />

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>private</Mark>
          <H3>detail::pairable_pack&lt;...&gt;</H3>
        </Row>
        <Text>
          The public AllPairable concept disappears with all. The
          implementation still has to prove that a whole parameter pack can be paired by the same left fold used by pair_impl. That predicate stays
          private. It is a requirement of pair, not an operation you name
          in user code.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Folded KleisliPairable",
              "pair(a, b) must hold, then pair of that result with c, and so on.",
            ],
            [
              "Private",
              "You write pair(...). You do not write AllPairable.",
            ],
          ]}
        />
      </Stack>

      <Stack gap={8}>
        <Row gap={8} align="center">
          <Mark>27 public</Mark>
          <H3>ANO_LET(name, ...)</H3>
        </Row>
        <Text>
          A thin declaration macro. It expands to `const auto name = ::ano::function(__VA_ARGS__)`; the surrounding scope determines where the name lives. The macro does not perform typechecking itself. Concepts, reflection, and Function do that.
        </Text>
        <Table
          headers={["Property", "In English"]}
          rows={[
            [
              "Grammar only",
              "It expands to a const auto. No new type. No new law.",
            ],
            [
              "Ordinary declaration",
              "The name lives wherever the macro expands. It is not a registry or string key.",
            ],
            [
              "Still checked",
              "function(...) still requires an admitted callable. The macro cannot smuggle a thrower.",
            ],
          ]}
        />
        <CodeBlock>{`ANO_LET(load_scene,
    ano::lift<^^parse_glb>
        .and_then(canonicalize_scene)
        .and_then(cook_scene)
        .and_then(realize_scene));`}</CodeBlock>
        <CodeBlock>{`const auto load_scene = ::ano::function(...);`}</CodeBlock>
      </Stack>

      <Divider />

      <H2>Glossary</H2>
      <Text>
        Blue is private. Green is public. compose and all are gone: one was
        a unary wrapper, the other borrowed a Boolean word for a product.
        They stay in the tour as deletions, not in this list.
      </Text>
      <Table
        stickyHeader
        striped
        headers={["Name", "Properties", "Visibility"]}
        rowTone={[
          "info",
          "info",
          "info",
          "info",
          "info",
          "info",
          "info",
          "info",
          "success",
          "success",
          "success",
          "success",
          "success",
          "success",
          "success",
          "success",
          "success",
        ]}
        rows={[
          ["detail::ResultSignature", "reflection, unpack, carrier", "Private"],
          ["detail::OperationSignature", "reflection, callable, arity", "Private"],
          ["detail::ResultOperationSignature", "reflection, fallible, unpack", "Private"],
          ["CarrierSignature / Signature", "local, alias, unpack", "Private"],
          ["detail::DirectOperation", "direct, mapper, not-pure", "Private"],
          ["detail::SameResultError", "same-error, clause", "Private"],
          ["detail::Lifted", "splice, empty, generated", "Private"],
          ["pair-pack predicate", "variadic, recursive, folded", "Private"],
          ["lift", "reflection, empty callable, direct call", "Public"],
          ["pair", "product, fail-fast, shared-witness", "Public"],
          ["and_then", "Kleisli, bind, short-circuit", "Public"],
          ["transform", "map, success, functor", "Public"],
          ["map_error", "map, failure, vocabulary", "Public"],
          ["scan_into", "scan, bounded, deferred, caller-buffer", "Public"],
          ["Function", "value, callable, storage", "Public"],
          ["ResultMorphism", "alias, arrow, role", "Public"],
          ["ANO_LET", "macro, local, grammar", "Public"],
        ]}
      />
    </Stack>
  );
}
