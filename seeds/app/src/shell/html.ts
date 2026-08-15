export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function attr(value: string): string {
  return escapeHtml(value);
}

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

export function eventElement(target: EventTarget | null): Element | null {
  const node = resolveEventNode(target as Eventish | null);
  if (node == null) return null;
  if (typeof Element !== "undefined" && node instanceof Element) return node;
  return null;
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
