// @ts-self-types="./key-down.d.ts"
class KeyDown extends HTMLElement {
	static tagName = "key-down";
	static actions = {
		click: "click",
		focus: "focus",
	};

	static register(
		tagName = KeyDown.tagName,
		registry = globalThis.customElements,
	) {
		registry?.define(tagName, KeyDown);
	}

	connectedCallback() {
		const key = this.getAttribute("data-key");
		const action = this.getAttribute("data-action");
		const scroll = this.getAttrBool("data-scroll");
		const rules = {
			altKey: this.getAttrBool("data-altKey"),
			ctrlKey: this.getAttrBool("data-ctrlKey"),
			metaKey: this.getAttrBool("data-metaKey"),
			shiftKey: this.getAttrBool("data-shiftKey"),
		};
		this.listener = (e) => {
			const target = e.target;
			const targetType = target?.tagName?.toLowerCase();
			const contentEditableAttr = target?.getAttribute("contenteditable");
			if (
				targetType === "input" ||
				targetType === "textarea" ||
				contentEditableAttr === "" ||
				contentEditableAttr === "true" ||
				contentEditableAttr === "plaintext-only" ||
				!this.checkRules(e, rules)
			) {
				return;
			}
			if (e.key === key) {
				e.preventDefault();
				for (const child of this.children) {
					if (scroll) {
						child?.scrollIntoView({
							behavior: "smooth",
							block: "center",
						});
					}
					switch (action) {
						case KeyDown.actions.focus:
							child?.focus();
							break;
						default:
							child?.click();
					}
				}
			}
		};
		window.addEventListener("keydown", this.listener);
	}

	disconnectedCallback() {
		window.removeEventListener("keydown", this.listener);
	}

	getAttrBool(d) {
		const value = this.getAttribute(d);
		return value === "true" ? true : value === "false" ? false : undefined;
	}

	checkRules(e, definedRules) {
		const currentModifiers = {
			altKey: e.altKey,
			ctrlKey: e.ctrlKey,
			metaKey: e.metaKey,
			shiftKey: e.shiftKey,
		};
		return Object.entries(definedRules).every(
			([ruleName, currentRuleValue]) => {
				if (currentRuleValue !== undefined) {
					const currentModifierValue = currentModifiers[ruleName];
					return currentRuleValue === currentModifierValue;
				}
				return true;
			},
		);
	}
}
KeyDown.register();

export { KeyDown };
