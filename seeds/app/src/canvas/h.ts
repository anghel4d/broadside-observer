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

export function flatten(children: ReadonlyArray<Child>): Child[] {
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

function applyStyle(el: HTMLElement | SVGElement, style: unknown): void {
  if (style === null || typeof style !== "object") return;
  const record = style as Record<string, unknown>;
  for (const [key, value] of Object.entries(record)) {
    if (value === null || value === undefined) continue;
    (el.style as unknown as Record<string, unknown>)[key] = String(value);
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
  if (value === true) {
    el.setAttribute(key, "");
    return;
  }
  el.setAttribute(key, String(value));
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
