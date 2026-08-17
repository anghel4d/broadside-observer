export type Child = string | number | boolean | null | undefined | VNode | ReadonlyArray<Child>;

export type VNode = {
  readonly type: string | Component;
  readonly props: Record<string, unknown>;
  readonly children: ReadonlyArray<Child>;
};

export type Component = (props: Record<string, unknown>) => Child;

const SVG = new Set([
  "svg",
  "g",
  "path",
  "line",
  "polyline",
  "polygon",
  "circle",
  "ellipse",
  "rect",
  "text",
  "tspan",
  "defs",
  "marker",
  "clipPath",
  "use",
]);

function flatten(children: ReadonlyArray<Child>): Child[] {
  const out: Child[] = [];
  for (const child of children) {
    if (child === null || child === undefined || child === false || child === true) continue;
    if (Array.isArray(child)) out.push(...flatten(child));
    else out.push(child);
  }
  return out;
}

export function h(
  type: string | Component,
  props: Record<string, unknown> | null,
  ...children: Child[]
): Child {
  const incoming = props ?? {};
  const nested = flatten(children.length > 0 ? children : [incoming.children as Child]);
  if (typeof type === "function") return type({ ...incoming, children: nested });
  return { type, props: incoming, children: nested };
}

export function Fragment(props: { readonly children?: Child }): Child {
  return props.children ?? null;
}

/** CSS properties that accept a unitless number (React's isUnitlessNumber set). */
const UNITLESS = new Set([
  "animationIterationCount",
  "aspectRatio",
  "borderImageOutset",
  "borderImageSlice",
  "borderImageWidth",
  "boxFlex",
  "boxFlexGroup",
  "boxOrdinalGroup",
  "columnCount",
  "columns",
  "fillOpacity",
  "flex",
  "flexGrow",
  "flexNegative",
  "flexOrder",
  "flexPositive",
  "flexShrink",
  "floodOpacity",
  "fontWeight",
  "gridArea",
  "gridColumn",
  "gridColumnEnd",
  "gridColumnSpan",
  "gridColumnStart",
  "gridRow",
  "gridRowEnd",
  "gridRowSpan",
  "gridRowStart",
  "lineClamp",
  "lineHeight",
  "opacity",
  "order",
  "orphans",
  "scale",
  "stopOpacity",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "tabSize",
  "widows",
  "zIndex",
  "zoom",
]);

/** Serialize a style value. Numeric lengths become `px`; SVG attributes are not styles. */
export function cssStyleValue(property: string, value: unknown): string | undefined {
  if (value === null || value === undefined || typeof value === "boolean") return undefined;
  if (typeof value === "number") {
    if (!Number.isFinite(value)) return undefined;
    if (value === 0 || UNITLESS.has(property)) return String(value);
    return `${value}px`;
  }
  return String(value);
}

/** JSX camelCase style keys → CSS property names for `setProperty`. */
export function cssPropertyName(property: string): string {
  if (property.startsWith("--")) return property;
  return property.replace(/[A-Z]/g, (ch) => `-${ch.toLowerCase()}`);
}

/**
 * JSX camelCase → SVG attribute names. Entries that are already the SVG name
 * (viewBox, markerWidth, refX) are omitted and pass through.
 */
const SVG_ATTR: Record<string, string> = {
  accentHeight: "accent-height",
  alignmentBaseline: "alignment-baseline",
  clipPath: "clip-path",
  clipRule: "clip-rule",
  colorInterpolation: "color-interpolation",
  colorInterpolationFilters: "color-interpolation-filters",
  dominantBaseline: "dominant-baseline",
  fillOpacity: "fill-opacity",
  fillRule: "fill-rule",
  floodColor: "flood-color",
  floodOpacity: "flood-opacity",
  fontFamily: "font-family",
  fontSize: "font-size",
  fontSizeAdjust: "font-size-adjust",
  fontStretch: "font-stretch",
  fontStyle: "font-style",
  fontVariant: "font-variant",
  fontWeight: "font-weight",
  letterSpacing: "letter-spacing",
  lightingColor: "lighting-color",
  markerEnd: "marker-end",
  markerMid: "marker-mid",
  markerStart: "marker-start",
  paintOrder: "paint-order",
  pointerEvents: "pointer-events",
  shapeRendering: "shape-rendering",
  stopColor: "stop-color",
  stopOpacity: "stop-opacity",
  strokeDasharray: "stroke-dasharray",
  strokeDashoffset: "stroke-dashoffset",
  strokeLinecap: "stroke-linecap",
  strokeLinejoin: "stroke-linejoin",
  strokeMiterlimit: "stroke-miterlimit",
  strokeOpacity: "stroke-opacity",
  strokeWidth: "stroke-width",
  textAnchor: "text-anchor",
  textDecoration: "text-decoration",
  textRendering: "text-rendering",
  vectorEffect: "vector-effect",
  wordSpacing: "word-spacing",
  writingMode: "writing-mode",
  xlinkHref: "href",
};

export function svgAttributeName(name: string): string {
  return SVG_ATTR[name] ?? name;
}

/** Paint a style object onto a DOM node. Always `setProperty(kebab, value)` so `left`/`width` land as `24px` in the style attribute. */
export function applyStyle(
  el: { readonly style: { setProperty(property: string, value: string): void } },
  style: unknown,
): void {
  if (style === null || typeof style !== "object") return;
  const record = style as Record<string, unknown>;
  for (const [key, value] of Object.entries(record)) {
    const serialized = cssStyleValue(key, value);
    if (serialized === undefined) continue;
    el.style.setProperty(cssPropertyName(key), serialized);
  }
}

function applyProp(el: HTMLElement | SVGElement, key: string, value: unknown): void {
  if (key === "children" || key === "key" || value === null || value === undefined || value === false) return;
  if (key === "class" || key === "className") {
    el.setAttribute("class", String(value));
    return;
  }
  if (key === "style") {
    applyStyle(el, value);
    return;
  }
  if (key.startsWith("on") && typeof value === "function") {
    const event = key.slice(2).toLowerCase();
    el.addEventListener(event, value as EventListener);
    return;
  }
  const attr = svgAttributeName(key);
  if (value === true) {
    el.setAttribute(attr, "");
    return;
  }
  el.setAttribute(attr, String(value));
}

function toNodes(child: Child): Node[] {
  if (child === null || child === undefined || child === false || child === true) return [];
  if (typeof child === "string" || typeof child === "number") return [document.createTextNode(String(child))];
  if (Array.isArray(child)) return child.flatMap(toNodes);
  if (typeof child !== "object" || !("type" in child)) return [];
  if (typeof child.type === "function") {
    return toNodes(child.type({ ...child.props, children: child.children }));
  }
  const svg = SVG.has(child.type);
  const el = svg
    ? document.createElementNS("http://www.w3.org/2000/svg", child.type)
    : document.createElement(child.type);
  for (const [key, value] of Object.entries(child.props)) applyProp(el, key, value);
  for (const node of child.children.flatMap(toNodes)) el.appendChild(node);
  return [el];
}

export function mount(child: Child, host: Element): void {
  host.replaceChildren(...toNodes(child));
}
