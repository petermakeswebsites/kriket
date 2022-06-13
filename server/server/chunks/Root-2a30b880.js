var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { d as getContext, s as setContext, c as create_ssr_component, b as subscribe, l as escape, q as set_store_value, v as validate_component, t as each, k as add_attribute, u as null_to_empty, m as missing_component } from "./index-e1d5e562.js";
import { w as writable, r as readable } from "./index-4037f9b1.js";
const STATE = {};
function useState(newState, opts) {
  const currentState = getContext(STATE);
  const _newState = typeof newState === "function" ? newState(currentState) : newState;
  const nextState = __spreadValues(__spreadValues({}, currentState), _newState);
  if (opts == null ? void 0 : opts.expandable)
    nextState.isParentExpanded = nextState.expanded;
  setContext(STATE, nextState);
  return currentState;
}
var JSONArrow_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".container.svelte-1qd6nto{display:inline-block;transform:translate(calc(0px - var(--li-identation)), -50%);position:absolute;top:50%;padding-right:100%}.arrow.svelte-1qd6nto{transform-origin:25% 50%;position:relative;line-height:1.1em;font-size:0.75em;margin-left:0;transition:150ms;color:var(--arrow-color);user-select:none;font-family:'Courier New', Courier, monospace;display:block}.expanded.svelte-1qd6nto{transform:rotateZ(90deg) translateX(-3px)}")();
const css$8 = {
  code: ".container.svelte-1qd6nto{display:inline-block;transform:translate(calc(0px - var(--li-identation)), -50%);position:absolute;top:50%;padding-right:100%}.arrow.svelte-1qd6nto{transform-origin:25% 50%;position:relative;line-height:1.1em;font-size:0.75em;margin-left:0;transition:150ms;color:var(--arrow-color);user-select:none;font-family:'Courier New', Courier, monospace;display:block}.expanded.svelte-1qd6nto{transform:rotateZ(90deg) translateX(-3px)}",
  map: null
};
const JSONArrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $expandable, $$unsubscribe_expandable;
  let $expanded, $$unsubscribe_expanded;
  const { expanded: _expanded, expandable } = useState();
  $$unsubscribe_expandable = subscribe(expandable, (value) => $expandable = value);
  let { expanded = _expanded } = $$props;
  $$unsubscribe_expanded = subscribe(expanded, (value) => $expanded = value);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  $$result.css.add(css$8);
  $$unsubscribe_expandable();
  $$unsubscribe_expanded();
  return `${$expandable ? `<span class="${"container svelte-1qd6nto"}"><span class="${["arrow svelte-1qd6nto", $expanded ? "expanded" : ""].join(" ").trim()}">${escape("\u25B6")}</span></span>` : ``}`;
});
const Summary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  useState({ displayMode: "summary" });
  return `${slots.default ? slots.default({}) : ``}`;
});
const Expandable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { expanded } = $$props;
  let { key } = $$props;
  const expandable = writable(false);
  useState(({ keyPath, level }) => {
    if (key !== "[[Entries]]") {
      keyPath = [...keyPath, key];
      level = level + 1;
    }
    return { keyPath, level, expanded, expandable };
  });
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  return `${slots.default ? slots.default({}) : ``}`;
});
var JSONNested_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".root.svelte-19drypg{display:inline-block;position:relative}.indent.svelte-19drypg{padding-left:var(--li-identation)}.label.svelte-19drypg{position:relative}")();
const css$7 = {
  code: ".root.svelte-19drypg{display:inline-block;position:relative}.indent.svelte-19drypg{padding-left:var(--li-identation)}.label.svelte-19drypg{position:relative}",
  map: null
};
const JSONNested = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let child_expanded;
  let $expanded, $$unsubscribe_expanded;
  let $expandable, $$unsubscribe_expandable;
  let { keys } = $$props;
  let { shouldShowColon = void 0 } = $$props;
  let { expandKey = (key) => key } = $$props;
  let { defaultExpanded = false } = $$props;
  const { isParentExpanded, displayMode, root, expanded, expandable, keyPath, level, shouldExpandNode } = useState({ root: false }, { expandable: true });
  $$unsubscribe_expanded = subscribe(expanded, (value) => $expanded = value);
  $$unsubscribe_expandable = subscribe(expandable, (value) => $expandable = value);
  set_store_value(expandable, $expandable = true, $expandable);
  if (displayMode !== "summary") {
    if (!defaultExpanded) {
      const controlled = shouldExpandNode({ keyPath, level });
      if (controlled !== void 0) {
        defaultExpanded = controlled;
      }
    }
  }
  if ($$props.keys === void 0 && $$bindings.keys && keys !== void 0)
    $$bindings.keys(keys);
  if ($$props.shouldShowColon === void 0 && $$bindings.shouldShowColon && shouldShowColon !== void 0)
    $$bindings.shouldShowColon(shouldShowColon);
  if ($$props.expandKey === void 0 && $$bindings.expandKey && expandKey !== void 0)
    $$bindings.expandKey(expandKey);
  if ($$props.defaultExpanded === void 0 && $$bindings.defaultExpanded && defaultExpanded !== void 0)
    $$bindings.defaultExpanded(defaultExpanded);
  $$result.css.add(css$7);
  child_expanded = keys.map(() => writable(false));
  $$unsubscribe_expanded();
  $$unsubscribe_expandable();
  return `${displayMode === "summary" ? `${slots.summary ? slots.summary({}) : ``}` : `<span class="${"root svelte-19drypg"}">${root ? `${validate_component(JSONArrow, "JSONArrow").$$render($$result, { expanded }, {}, {})}` : ``}
    ${validate_component(Summary, "Summary").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.preview ? slots.preview({}) : ``}`;
    }
  })}</span>

  ${$expanded ? `<ul>${each(keys, (key, index) => {
    return `<li class="${["svelte-19drypg", $expanded ? "indent" : ""].join(" ").trim()}">${validate_component(Expandable, "Expandable").$$render($$result, {
      key: expandKey(key),
      expanded: child_expanded[index]
    }, {}, {
      default: () => {
        return `<span class="${"label svelte-19drypg"}">${validate_component(JSONArrow, "JSONArrow").$$render($$result, {}, {}, {})}${slots.item_key ? slots.item_key({ key, index }) : ``}${!shouldShowColon || shouldShowColon(key) ? `<span class="${"operator"}">:</span>` : ``}
            </span>${slots.item_value ? slots.item_value({ key, index }) : ``}
          `;
      }
    })}
        </li>`;
  })}</ul>` : ``}`}`;
});
var PreviewList_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".comma.svelte-150ffaa{margin-left:-0.5em;margin-right:0.5em}")();
const css$6 = {
  code: ".comma.svelte-150ffaa{margin-left:-0.5em;margin-right:0.5em}",
  map: null
};
const PreviewList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { list } = $$props;
  let { hasMore } = $$props;
  let { label = void 0 } = $$props;
  let { prefix = void 0 } = $$props;
  let { postfix = void 0 } = $$props;
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  if ($$props.hasMore === void 0 && $$bindings.hasMore && hasMore !== void 0)
    $$bindings.hasMore(hasMore);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.postfix === void 0 && $$bindings.postfix && postfix !== void 0)
    $$bindings.postfix(postfix);
  $$result.css.add(css$6);
  return `${prefix ? `${label ? `<span class="${"label"}">${escape(label)}</span>` : ``}<span class="${"operator"}">${escape(prefix)}</span>` : ``}
${each(list, (item, index) => {
    return `${slots.item ? slots.item({ item, index }) : ``}
  ${index < list.length - 1 ? `<span class="${"comma operator svelte-150ffaa"}">,</span>` : ``}`;
  })}
${hasMore ? `<span class="${"comma operator svelte-150ffaa"}">,</span>
  <span class="${"operator"}">\u2026</span>` : ``}
${postfix ? `<span class="${"operator"}">${escape(postfix)}</span>` : ``}`;
});
const JSONObjectNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let keys;
  let previewKeys;
  let { value } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  keys = Object.getOwnPropertyNames(value);
  previewKeys = keys.slice(0, 5);
  return `${validate_component(JSONNested, "JSONNested").$$render($$result, { keys }, {}, {
    item_value: ({ key }) => {
      return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: value[key] }, {}, {})}`;
    },
    item_key: ({ key }) => {
      return `<span class="${"property"}">${escape(key)}</span>`;
    },
    preview: () => {
      return `${validate_component(PreviewList, "PreviewList").$$render($$result, {
        list: previewKeys,
        hasMore: previewKeys.length < keys.length,
        prefix: "{",
        postfix: "}"
      }, {}, {
        item: ({ item }) => {
          return `<span class="${"property"}">${escape(item)}</span><span class="${"operator"}">${escape(": ")}</span>${validate_component(JSONNode, "JSONNode").$$render($$result, { value: value[item] }, {}, {})}`;
        }
      })}
  `;
    },
    summary: () => {
      return `<span class="${"label"}">${escape("{\u2026}")}</span>`;
    }
  })}`;
});
const JSONArrayNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let keys;
  let preview;
  let { value } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  keys = Object.getOwnPropertyNames(value);
  preview = value.slice(0, 5);
  return `${validate_component(JSONNested, "JSONNested").$$render($$result, { keys }, {}, {
    item_value: ({ key }) => {
      return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: value[key] }, {}, {})}`;
    },
    item_key: ({ key }) => {
      return `<span class="${"property"}">${escape(String(key))}</span>`;
    },
    preview: () => {
      return `${validate_component(PreviewList, "PreviewList").$$render($$result, {
        list: preview,
        hasMore: preview.length < value.length,
        label: "(" + value.length + ") ",
        prefix: "[",
        postfix: "]"
      }, {}, {
        item: ({ item }) => {
          return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: item }, {}, {})}`;
        }
      })}
  `;
    },
    summary: () => {
      return `<span class="${"label"}">Array(${escape(value.length)})</span>`;
    }
  })}`;
});
const ENTRIES$1 = "[[Entries]]";
const JSONIterableArrayNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let previewItems;
  let { value } = $$props;
  let { nodeType } = $$props;
  let indexes = [];
  let items = [];
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.nodeType === void 0 && $$bindings.nodeType && nodeType !== void 0)
    $$bindings.nodeType(nodeType);
  {
    {
      let _indexes = [];
      let _items = [];
      let i = 0;
      for (const entry of value) {
        _indexes.push(i++);
        _items.push(entry);
      }
      indexes = _indexes;
      items = _items;
    }
  }
  previewItems = items.slice(0, 5);
  return `${validate_component(JSONNested, "JSONNested").$$render($$result, {
    keys: [ENTRIES$1, "size"],
    shouldShowColon: (key) => key !== ENTRIES$1
  }, {}, {
    item_value: ({ key }) => {
      return `${key === ENTRIES$1 ? `${validate_component(JSONNested, "JSONNested").$$render($$result, { keys: indexes, defaultExpanded: true }, {}, {
        item_value: ({ key: index }) => {
          return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: items[index] }, {}, {})}`;
        },
        item_key: ({ key: index }) => {
          return `<span class="${"property"}">${escape(index)}</span>`;
        }
      })}` : `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: value[key] }, {}, {})}`}
  `;
    },
    item_key: ({ key }) => {
      return `<span${add_attribute("class", key === ENTRIES$1 ? "internal" : "property", 0)}>${escape(key)}</span>`;
    },
    preview: () => {
      return `${validate_component(PreviewList, "PreviewList").$$render($$result, {
        list: previewItems,
        hasMore: previewItems.length < items.length,
        label: `${nodeType}(${indexes.length}) `,
        prefix: "{",
        postfix: "}"
      }, {}, {
        item: ({ item }) => {
          return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: item }, {}, {})}`;
        }
      })}
  `;
    },
    summary: () => {
      return `<span class="${"label"}">${escape(nodeType)}(${escape(indexes.length)})</span>`;
    }
  })}`;
});
const ENTRIES = "[[Entries]]";
const JSONIterableMapNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let previewKeys;
  let { value } = $$props;
  useState();
  let indexes = [];
  let keys = [];
  let values = [];
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  {
    {
      let _indexes = [];
      let _keys = [];
      let _values = [];
      let i = 0;
      for (const entry of value) {
        _indexes.push(i++);
        _keys.push(entry[0]);
        _values.push(entry[1]);
      }
      indexes = _indexes;
      keys = _keys;
      values = _values;
    }
  }
  previewKeys = Array.from(value.keys()).slice(0, 5);
  return `${validate_component(JSONNested, "JSONNested").$$render($$result, {
    keys: [ENTRIES, "size"],
    shouldShowColon: (key) => key !== ENTRIES
  }, {}, {
    item_value: ({ key }) => {
      return `${key === ENTRIES ? `${validate_component(JSONNested, "JSONNested").$$render($$result, {
        keys: indexes,
        expandKey: (index) => keys[index],
        defaultExpanded: true
      }, {}, {
        item_value: ({ key: index }) => {
          return `${validate_component(JSONNested, "JSONNested").$$render($$result, { keys: ["key", "value"] }, {}, {
            item_value: ({ key: name }) => {
              return `${validate_component(JSONNode, "JSONNode").$$render($$result, {
                value: name === "key" ? keys[index] : values[index]
              }, {}, {})}`;
            },
            item_key: ({ key: name }) => {
              return `<span class="${"property"}">${escape(name)}</span>`;
            },
            preview: () => {
              return `<span class="${"operator"}">${escape("{ ")}</span>${validate_component(JSONNode, "JSONNode").$$render($$result, { value: keys[index] }, {}, {})}<span class="${"operator"}">${escape(" => ")}</span>${validate_component(JSONNode, "JSONNode").$$render($$result, { value: values[index] }, {}, {})}<span class="${"operator"}">${escape(" }")}</span>`;
            }
          })}
        `;
        },
        item_key: ({ key: index }) => {
          return `<span class="${"property"}">${escape(index)}</span>`;
        }
      })}` : `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: value[key] }, {}, {})}`}
  `;
    },
    item_key: ({ key }) => {
      return `<span${add_attribute("class", key === ENTRIES ? "internal" : "property", 0)}>${escape(key)}</span>`;
    },
    preview: () => {
      return `${validate_component(PreviewList, "PreviewList").$$render($$result, {
        list: previewKeys,
        hasMore: previewKeys.length < value.size,
        label: `Map(${keys.length}) `,
        prefix: `{`,
        postfix: "}"
      }, {}, {
        item: ({ item }) => {
          return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: item }, {}, {})}<span class="${"operator"}">${escape(" => ")}</span>${validate_component(JSONNode, "JSONNode").$$render($$result, { value: value.get(item) }, {}, {})}`;
        }
      })}
  `;
    },
    summary: () => {
      return `<span color="${"label"}">Map(${escape(keys.length)})</span>`;
    }
  })}`;
});
var JSONValueNode_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".Date.svelte-l95iub{color:var(--date-color)}.BigInt.svelte-l95iub{color:var(--number-color)}.Number.svelte-l95iub{color:var(--number-color)}.Boolean.svelte-l95iub{color:var(--boolean-color)}.Null.svelte-l95iub{color:var(--null-color)}.Undefined.svelte-l95iub{color:var(--undefined-color)}.Symbol.svelte-l95iub{color:var(--symbol-color)}")();
const css$5 = {
  code: ".Date.svelte-l95iub{color:var(--date-color)}.BigInt.svelte-l95iub{color:var(--number-color)}.Number.svelte-l95iub{color:var(--number-color)}.Boolean.svelte-l95iub{color:var(--boolean-color)}.Null.svelte-l95iub{color:var(--null-color)}.Undefined.svelte-l95iub{color:var(--undefined-color)}.Symbol.svelte-l95iub{color:var(--symbol-color)}",
  map: null
};
const JSONValueNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value, nodeType } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.nodeType === void 0 && $$bindings.nodeType && nodeType !== void 0)
    $$bindings.nodeType(nodeType);
  $$result.css.add(css$5);
  return `<span class="${escape(null_to_empty(nodeType)) + " svelte-l95iub"}">${escape(value)}
</span>`;
});
var ErrorStack_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".indent.svelte-1u08yw6{padding-left:var(--li-identation)}")();
const css$4 = {
  code: ".indent.svelte-1u08yw6{padding-left:var(--li-identation)}",
  map: null
};
const ErrorStack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $expandable, $$unsubscribe_expandable;
  let $expanded, $$unsubscribe_expanded;
  let { stack } = $$props;
  const { expanded, expandable } = useState();
  $$unsubscribe_expanded = subscribe(expanded, (value) => $expanded = value);
  $$unsubscribe_expandable = subscribe(expandable, (value) => $expandable = value);
  set_store_value(expandable, $expandable = true, $expandable);
  if ($$props.stack === void 0 && $$bindings.stack && stack !== void 0)
    $$bindings.stack(stack);
  $$result.css.add(css$4);
  $$unsubscribe_expandable();
  $$unsubscribe_expanded();
  return `<span>${$expanded ? `${each(stack, (line, index) => {
    let appendNewLine = index < stack.length - 1;
    return `
      <span class="${["svelte-1u08yw6", index > 0 ? "indent" : ""].join(" ").trim()}">${validate_component(JSONNode, "JsonNode").$$render($$result, {
      value: line + (appendNewLine ? "\\n" : "")
    }, {}, {})}<span class="${"operator"}">${escape(appendNewLine ? " +" : "")}</span></span><br>`;
  })}` : `<span>${validate_component(JSONNode, "JsonNode").$$render($$result, { value: stack[0] + "\u2026" }, {}, {})}</span>`}
</span>`;
});
const ErrorNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let stack;
  let { value } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  stack = value.stack.split("\n");
  return `${validate_component(JSONNested, "JsonNested").$$render($$result, { keys: ["message", "stack"] }, {}, {
    item_value: ({ key }) => {
      return `${key === "stack" ? `${validate_component(ErrorStack, "ErrorStack").$$render($$result, { stack }, {}, {})}` : `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: value[key] }, {}, {})}`}
  `;
    },
    item_key: ({ key }) => {
      return `<span class="${"property"}">${escape(key)}</span>`;
    },
    preview: () => {
      return `<span class="${"label"}">Error: ${escape(String(value.message))}</span>`;
    },
    summary: () => {
      return `<span class="${"label"}">Error: ${escape(String(value.message))}</span>`;
    }
  })}`;
});
function objType(obj) {
  const type = Object.prototype.toString.call(obj).slice(8, -1);
  if (type === "Object") {
    if (typeof obj[Symbol.iterator] === "function") {
      return "Iterable";
    }
    return obj.constructor.name;
  }
  return type;
}
var JSONStringNode_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "span.svelte-1fvwa9c{color:var(--string-color);word-break:break-all;word-wrap:break-word}")();
const css$3 = {
  code: "span.svelte-1fvwa9c{color:var(--string-color);word-break:break-all;word-wrap:break-word}",
  map: null
};
const JSONStringNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let serialised;
  let { value } = $$props;
  const map = { "\n": "\\n", "	": "\\t", "\r": "\\r" };
  const { displayMode } = useState();
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$3);
  serialised = value.replace(/[\n\t\r]/g, (_) => map[_]);
  return `${displayMode === "summary" ? `<span class="${"svelte-1fvwa9c"}">&quot;${escape(serialised.slice(0, 30) + (serialised.length > 30 ? "\u2026" : ""))}&quot;</span>` : `<span class="${"svelte-1fvwa9c"}">&quot;${escape(serialised)}&quot;</span>`}`;
});
var JSONFunctionNode_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".i.svelte-1eamqdt{font-style:italic}.fn.svelte-1eamqdt,.i.svelte-1eamqdt{color:var(--function-color)}")();
const css$2 = {
  code: ".i.svelte-1eamqdt{font-style:italic}.fn.svelte-1eamqdt,.i.svelte-1eamqdt{color:var(--function-color)}",
  map: null
};
const FUNCTION = "[[Function]]";
const PROTO = "[[Prototype]]";
function getPreview1({ isGenerator, isAsync, isClass }) {
  if (isClass)
    return `class ${isClass}`;
  return (isAsync ? "async " : "") + "\u0192" + (isGenerator ? "*" : "");
}
function getPreview2({ isAsync, isArrow, fnName, args }) {
  return (isArrow && isAsync ? "async" : "") + " " + (fnName ?? "") + args + (isArrow ? " => \u2026" : "");
}
function toString(value) {
  try {
    return value.toString();
  } catch {
    switch (value.constructor.name) {
      case "AsyncFunction":
        return "async function () {}";
      case "AsyncGeneratorFunction":
        return "async function * () {}";
      case "GeneratorFunction:":
        return "function * () {}";
      default:
        return "function () {}";
    }
  }
}
const JSONFunctionNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let str;
  let ctx;
  let keys;
  let { value } = $$props;
  function parseFunction(str2) {
    const match = str2.match(/^(?:(async)\s+)?(?:function)?(\*)?\s*([^(]+)?(\([^)]*\))\s*(=>)?/);
    const isAsync = match == null ? void 0 : match[1];
    const isGenerator = match == null ? void 0 : match[2];
    const fnName = match == null ? void 0 : match[3];
    const args = match == null ? void 0 : match[4];
    const isArrow = match == null ? void 0 : match[5];
    const classMatch = str2.match(/^class\s+([^\s]+)/);
    const isClass = classMatch == null ? void 0 : classMatch[1];
    return {
      args,
      isAsync,
      isGenerator,
      fnName,
      isArrow,
      isClass
    };
  }
  function getValue(key) {
    if (key === PROTO)
      return value.__proto__;
    return value[key];
  }
  function filterKeys(key) {
    if (key === FUNCTION)
      return true;
    return getValue(key);
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$2);
  str = toString(value);
  ctx = parseFunction(str);
  keys = ["length", "name", "prototype", FUNCTION, PROTO].filter(filterKeys);
  return `${validate_component(JSONNested, "JSONNested").$$render($$result, { keys }, {}, {
    item_value: ({ key }) => {
      return `${key === FUNCTION ? `<span class="${"i svelte-1eamqdt"}">${escape(str)}</span>` : `${key === "prototype" ? `${validate_component(JSONObjectNode, "JsonObjectNode").$$render($$result, { value: getValue(key) }, {}, {})}` : `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: getValue(key) }, {}, {})}`}`}`;
    },
    item_key: ({ key }) => {
      return `<span${add_attribute("class", key === FUNCTION || key === PROTO ? "internal" : "property", 0)}>${escape(key)}</span>`;
    },
    preview: () => {
      return `${!ctx.isArrow ? `<span class="${"fn i svelte-1eamqdt"}">${escape(getPreview1(ctx))}</span>` : ``}${!ctx.isClass ? `<span class="${"i svelte-1eamqdt"}">${escape(getPreview2(ctx))}</span>` : ``}`;
    },
    summary: () => {
      return `<span class="${"i svelte-1eamqdt"}">\u0192</span>`;
    }
  })}`;
});
const STORE_VALUE = "$value";
const JSONSvelteStoreNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let objectKeys;
  let keys;
  let previewKeys;
  let storeValue;
  let isWritableStore;
  let $value, $$unsubscribe_value;
  let { value } = $$props;
  $$unsubscribe_value = subscribe(value, (value2) => $value = value2);
  function getValue(key) {
    if (key === STORE_VALUE)
      return storeValue;
    return value[key];
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  objectKeys = Object.getOwnPropertyNames(value);
  keys = [STORE_VALUE, ...objectKeys];
  previewKeys = objectKeys.slice(0, 5);
  storeValue = $value;
  isWritableStore = typeof value.set === "function";
  $$unsubscribe_value();
  return `${validate_component(JSONNested, "JSONNested").$$render($$result, { keys }, {}, {
    item_value: ({ key }) => {
      return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: getValue(key) }, {}, {})}
  `;
    },
    item_key: ({ key }) => {
      return `<span${add_attribute("class", key === STORE_VALUE ? "internal" : "property", 0)}>${escape(key)}</span>`;
    },
    preview: () => {
      return `${validate_component(PreviewList, "PreviewList").$$render($$result, {
        list: previewKeys,
        hasMore: previewKeys.length < objectKeys.length,
        prefix: "{",
        postfix: "}"
      }, {}, {
        item: ({ item }) => {
          return `<span class="${"property"}">${escape(item)}</span><span class="${"operator"}">${escape(": ")}</span>${validate_component(JSONNode, "JSONNode").$$render($$result, { value: value[item] }, {}, {})}`;
        }
      })}
  `;
    },
    summary: () => {
      return `<span class="${"label"}">${escape(isWritableStore ? "writable(" : "readable(")}${validate_component(JSONNode, "JSONNode").$$render($$result, { value: storeValue }, {}, {})}${escape(")")}</span>`;
    }
  })}`;
});
const TO_STRING_TAG = "Symbol(Symbol.toStringTag)";
const TypedArrayNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let keys;
  let preview;
  let { value } = $$props;
  let { nodeType } = $$props;
  const internalKeys = ["buffer", "byteLength", "byteOffset", "length", TO_STRING_TAG];
  function getValue(key) {
    if (key === TO_STRING_TAG) {
      return value[Symbol.toStringTag];
    }
    return value[key];
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.nodeType === void 0 && $$bindings.nodeType && nodeType !== void 0)
    $$bindings.nodeType(nodeType);
  keys = [...Object.getOwnPropertyNames(value), ...internalKeys];
  preview = value.slice(0, 5);
  return `${validate_component(JSONNested, "JSONNested").$$render($$result, { keys }, {}, {
    item_value: ({ key }) => {
      return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: getValue(key) }, {}, {})}`;
    },
    item_key: ({ key }) => {
      return `<span${add_attribute("class", internalKeys.includes(key) ? "internal" : "property", 0)}>${escape(String(key))}</span>`;
    },
    preview: () => {
      return `${validate_component(PreviewList, "PreviewList").$$render($$result, {
        list: preview,
        hasMore: preview.length < value.length,
        label: nodeType + "(" + value.length + ") ",
        prefix: "[",
        postfix: "]"
      }, {}, {
        item: ({ item }) => {
          return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: item }, {}, {})}`;
        }
      })}
  `;
    },
    summary: () => {
      return `<span class="${"label"}">${escape(nodeType)}(${escape(value.length)})</span>`;
    }
  })}`;
});
var RegExpNode_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".regex.svelte-17k1wqt{color:var(--regex-color)}")();
const css$1 = {
  code: ".regex.svelte-17k1wqt{color:var(--regex-color)}",
  map: null
};
const RegExpNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let str;
  let { value } = $$props;
  const keys = [
    "lastIndex",
    "dotAll",
    "flags",
    "global",
    "hasIndices",
    "ignoreCase",
    "multiline",
    "source",
    "sticky",
    "unicode"
  ];
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$1);
  str = value.toString();
  return `${validate_component(JSONNested, "JSONNested").$$render($$result, { keys }, {}, {
    item_value: ({ key }) => {
      return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: value[key] }, {}, {})}`;
    },
    item_key: ({ key }) => {
      return `<span class="${"internal"}">${escape(String(key))}</span>`;
    },
    preview: () => {
      return `<span class="${"regex svelte-17k1wqt"}">${escape(str)}</span>`;
    },
    summary: () => {
      return `<span class="${"regex svelte-17k1wqt"}">${escape(str)}</span>`;
    }
  })}`;
});
const JSONNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let componentType;
  let props;
  let $nodeType, $$unsubscribe_nodeType;
  let { value } = $$props;
  const nodeType = writable();
  $$unsubscribe_nodeType = subscribe(nodeType, (value2) => $nodeType = value2);
  function getComponentAndProps(nodeType2, value2) {
    switch (nodeType2) {
      case "Object":
        if (typeof value2.subscribe === "function")
          return [JSONSvelteStoreNode];
        return [JSONObjectNode];
      case "Error":
        return [ErrorNode];
      case "Array":
        return [JSONArrayNode];
      case "Map":
        return [JSONIterableMapNode];
      case "Iterable":
      case "Set":
        return [JSONIterableArrayNode, { nodeType: nodeType2 }];
      case "Number":
        return [JSONValueNode, { nodeType: nodeType2 }];
      case "String":
        return [JSONStringNode];
      case "Boolean":
        return [
          JSONValueNode,
          {
            nodeType: nodeType2,
            value: value2 ? "true" : "false"
          }
        ];
      case "Date":
        return [JSONValueNode, { nodeType: nodeType2, value: value2.toISOString() }];
      case "Null":
        return [JSONValueNode, { nodeType: nodeType2, value: "null" }];
      case "Undefined":
        return [JSONValueNode, { nodeType: nodeType2, value: "undefined" }];
      case "Function":
      case "AsyncFunction":
      case "AsyncGeneratorFunction":
      case "GeneratorFunction":
        return [JSONFunctionNode];
      case "Symbol":
        return [JSONValueNode, { nodeType: nodeType2, value: value2.toString() }];
      case "BigInt":
        return [JSONValueNode, { nodeType: nodeType2, value: String(value2) + "n" }];
      case "ArrayBuffer":
        return [
          JSONValueNode,
          {
            nodeType: nodeType2,
            value: `ArrayBuffer(${value2.byteLength})`
          }
        ];
      case "BigInt64Array":
      case "BigUint64Array":
      case "Float32Array":
      case "Float64Array":
      case "Int8Array":
      case "Int16Array":
      case "Int32Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Uint16Array":
      case "Uint32Array":
        return [TypedArrayNode, { nodeType: nodeType2 }];
      case "RegExp":
        return [RegExpNode];
      default:
        return [JSONValueNode, { nodeType: nodeType2, value: `<${nodeType2}>` }];
    }
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  set_store_value(nodeType, $nodeType = objType(value), $nodeType);
  [componentType, props] = getComponentAndProps($nodeType, value);
  $$unsubscribe_nodeType();
  return `${validate_component(componentType || missing_component, "svelte:component").$$render($$result, Object.assign({ value }, props), {}, {})}`;
});
function getShouldExpandNode({ defaultExpandedPaths, defaultExpandedLevel }) {
  const defaultExpandedPathsParts = defaultExpandedPaths.map((path) => path.split("."));
  function matchPath(keyPath) {
    outer:
      for (const parts of defaultExpandedPathsParts) {
        if (keyPath.length > parts.length)
          continue;
        const length = Math.min(keyPath.length, parts.length);
        for (let i = 0; i < length; i++) {
          if (parts[i] !== "*" && parts[i] !== String(keyPath[i]))
            continue outer;
        }
        return true;
      }
    return false;
  }
  return function({ keyPath, level }) {
    return level <= defaultExpandedLevel || matchPath(keyPath);
  };
}
var Root_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "ul.svelte-16cw61f{--string-color:var(--json-tree-string-color, #cb3f41);--symbol-color:var(--json-tree-symbol-color, #cb3f41);--boolean-color:var(--json-tree-boolean-color, #112aa7);--function-color:var(--json-tree-function-color, #112aa7);--number-color:var(--json-tree-number-color, #3029cf);--label-color:var(--json-tree-label-color, #871d8f);--property-color:var(--json-tree-property-color, #000000);--arrow-color:var(--json-tree-arrow-color, #727272);--operator-color:var(--json-tree-operator-color, #727272);--null-color:var(--json-tree-null-color, #8d8d8d);--undefined-color:var(--json-tree-undefined-color, #8d8d8d);--date-color:var(--json-tree-date-color, #8d8d8d);--internal-color:var(--json-tree-internal-color, grey);--regex-color:var(--json-tree-regex-color, var(--string-color));--li-identation:var(--json-tree-li-indentation, 1em);--li-line-height:var(--json-tree-li-line-height, 1.3);font-size:var(--json-tree-font-size, 12px);font-family:var(--json-tree-font-family, 'Courier New', Courier, monospace)}ul.svelte-16cw61f li{line-height:var(--li-line-height);display:var(--li-display, list-item);list-style:none}ul.svelte-16cw61f,ul.svelte-16cw61f ul{padding:0;margin:0}ul.svelte-16cw61f{margin-left:var(--li-identation)}ul.svelte-16cw61f{cursor:default}ul.svelte-16cw61f .label{color:var(--label-color)}ul.svelte-16cw61f .property{color:var(--property-color)}ul.svelte-16cw61f .internal{color:var(--internal-color)}ul.svelte-16cw61f .operator{color:var(--operator-color)}")();
const css = {
  code: "ul.svelte-16cw61f{--string-color:var(--json-tree-string-color, #cb3f41);--symbol-color:var(--json-tree-symbol-color, #cb3f41);--boolean-color:var(--json-tree-boolean-color, #112aa7);--function-color:var(--json-tree-function-color, #112aa7);--number-color:var(--json-tree-number-color, #3029cf);--label-color:var(--json-tree-label-color, #871d8f);--property-color:var(--json-tree-property-color, #000000);--arrow-color:var(--json-tree-arrow-color, #727272);--operator-color:var(--json-tree-operator-color, #727272);--null-color:var(--json-tree-null-color, #8d8d8d);--undefined-color:var(--json-tree-undefined-color, #8d8d8d);--date-color:var(--json-tree-date-color, #8d8d8d);--internal-color:var(--json-tree-internal-color, grey);--regex-color:var(--json-tree-regex-color, var(--string-color));--li-identation:var(--json-tree-li-indentation, 1em);--li-line-height:var(--json-tree-li-line-height, 1.3);font-size:var(--json-tree-font-size, 12px);font-family:var(--json-tree-font-family, 'Courier New', Courier, monospace)}ul.svelte-16cw61f li{line-height:var(--li-line-height);display:var(--li-display, list-item);list-style:none}ul.svelte-16cw61f,ul.svelte-16cw61f ul{padding:0;margin:0}ul.svelte-16cw61f{margin-left:var(--li-identation)}ul.svelte-16cw61f{cursor:default}ul.svelte-16cw61f .label{color:var(--label-color)}ul.svelte-16cw61f .property{color:var(--property-color)}ul.svelte-16cw61f .internal{color:var(--internal-color)}ul.svelte-16cw61f .operator{color:var(--operator-color)}",
  map: null
};
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shouldExpandNode;
  let { value } = $$props;
  let { defaultExpandedPaths = [] } = $$props;
  let { defaultExpandedLevel = 0 } = $$props;
  const expanded = writable(true);
  useState({
    expanded,
    isParentExpanded: readable(true),
    root: true,
    shouldExpandNode: (opts) => shouldExpandNode(opts),
    level: 0,
    keyPath: []
  });
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.defaultExpandedPaths === void 0 && $$bindings.defaultExpandedPaths && defaultExpandedPaths !== void 0)
    $$bindings.defaultExpandedPaths(defaultExpandedPaths);
  if ($$props.defaultExpandedLevel === void 0 && $$bindings.defaultExpandedLevel && defaultExpandedLevel !== void 0)
    $$bindings.defaultExpandedLevel(defaultExpandedLevel);
  $$result.css.add(css);
  shouldExpandNode = getShouldExpandNode({
    defaultExpandedPaths,
    defaultExpandedLevel
  });
  return `<ul class="${"svelte-16cw61f"}">${validate_component(Expandable, "Expandable").$$render($$result, { key: "$", expanded }, {}, {
    default: () => {
      return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value }, {}, {})}`;
    }
  })}
</ul>`;
});
export { Root as R };
