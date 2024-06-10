import { KeyDown } from "./key-down.js";

type JSXBase = JSX.IntrinsicElements extends {
  span: unknown;
}
  ? JSX.IntrinsicElements
  : Record<string, Record<string, unknown>>;
declare global {
  interface Window {
    KeyDown: typeof KeyDown;
  }
  interface HTMLElementTagNameMap {
    "key-down": KeyDown;
  }
  namespace JSX {
    interface IntrinsicElements {
      ["key-down"]: JSXBase["span"] & Partial<Omit<KeyDown, keyof HTMLElement>>;
    }
  }
}

export default KeyDown;
export * from "./key-down.js";
