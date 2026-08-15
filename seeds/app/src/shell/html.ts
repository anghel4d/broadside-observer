export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export const attr = escapeHtml;

/** DOM `nodeType`: 1 = Element, 3 = Text. */
export type Eventish = {
  readonly nodeType?: number;
  readonly parentElement?: Eventish | null;
  closest?: (selector: string) => Eventish | null;
};

/**
 * `event.target` is often a Text node (the label inside `<button>Cards</button>`).
 * Text is not an Element, so `target instanceof Element` is false and
 * `closest()` is never called — the click looks dead.
 */
export function resolveEventNode<T extends Eventish>(target: T | null | undefined): T | null {
  if (target == null) return null;
  if (target.nodeType === 3) return (target.parentElement as T | null) ?? null;
  return target;
}

/** Resolve a control from a click that may have landed on a text node or child. */
export function closestFromTarget<T extends Eventish>(
  target: T | null | undefined,
  selector: string,
): T | null {
  const el = resolveEventNode(target);
  if (el == null || typeof el.closest !== "function") return null;
  return (el.closest(selector) as T | null) ?? null;
}

export function closestControl(target: EventTarget | null, selector: string): Element | null {
  const hit = closestFromTarget(target as Eventish | null, selector);
  if (hit == null) return null;
  if (typeof Element !== "undefined" && hit instanceof Element) return hit;
  return null;
}

export function syncAriaChecked(
  root: ParentNode,
  selector: string,
  dataKey: string,
  value: string,
): void {
  for (const node of root.querySelectorAll(selector)) {
    if (!(node instanceof HTMLElement)) continue;
    node.setAttribute("aria-checked", node.dataset[dataKey] === value ? "true" : "false");
  }
}
