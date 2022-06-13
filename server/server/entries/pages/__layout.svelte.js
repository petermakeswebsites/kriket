import { d as getContext, c as create_ssr_component, e as compute_rest_props, f as spread, h as escape_object, j as escape_attribute_value, k as add_attribute, l as escape, o as onDestroy, p as createEventDispatcher, v as validate_component, m as missing_component, b as subscribe, q as set_store_value } from "../../chunks/index-e1d5e562.js";
import { w as writable } from "../../chunks/index-4037f9b1.js";
import { c as classnames, u as uuid, I as Icon } from "../../chunks/Offcanvas.svelte_svelte_type_style_lang-e5c122cd.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let classes;
  let defaultAriaLabel;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "active",
    "block",
    "children",
    "close",
    "color",
    "disabled",
    "href",
    "inner",
    "outline",
    "size",
    "style",
    "value",
    "white"
  ]);
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { block = false } = $$props;
  let { children = void 0 } = $$props;
  let { close = false } = $$props;
  let { color = "secondary" } = $$props;
  let { disabled = false } = $$props;
  let { href = "" } = $$props;
  let { inner = void 0 } = $$props;
  let { outline = false } = $$props;
  let { size = null } = $$props;
  let { style = "" } = $$props;
  let { value = "" } = $$props;
  let { white = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.close === void 0 && $$bindings.close && close !== void 0)
    $$bindings.close(close);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.white === void 0 && $$bindings.white && white !== void 0)
    $$bindings.white(white);
  ariaLabel = $$props["aria-label"];
  classes = classnames(className, close ? "btn-close" : "btn", close || `btn${outline ? "-outline" : ""}-${color}`, size ? `btn-${size}` : false, block ? "d-block w-100" : false, {
    active,
    "btn-close-white": close && white
  });
  defaultAriaLabel = close ? "Close" : null;
  return `${href ? `<a${spread([
    escape_object($$restProps),
    { class: escape_attribute_value(classes) },
    { disabled: disabled || null },
    { href: escape_attribute_value(href) },
    {
      "aria-label": escape_attribute_value(ariaLabel || defaultAriaLabel)
    },
    { style: escape_attribute_value(style) }
  ], {})}${add_attribute("this", inner, 0)}>${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}</a>` : `<button${spread([
    escape_object($$restProps),
    { class: escape_attribute_value(classes) },
    { disabled: disabled || null },
    { value: escape_attribute_value(value) },
    {
      "aria-label": escape_attribute_value(ariaLabel || defaultAriaLabel)
    },
    { style: escape_attribute_value(style) }
  ], {})}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : `
      ${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}
    `}</button>`}`;
});
const InlineContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const ModalBackdrop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "isOpen", "fade"]);
  let { class: className = "" } = $$props;
  let { isOpen = false } = $$props;
  let { fade = true } = $$props;
  let loaded = false;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0)
    $$bindings.fade(fade);
  classes = classnames(className, "modal-backdrop");
  return `${isOpen && loaded ? `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], { classes: fade ? "fade" : "" })}></div>` : ``}`;
});
const ModalBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = classnames(className, "modal-body");
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const ModalHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "toggle", "closeAriaLabel", "children", "id"]);
  let { class: className = "" } = $$props;
  let { toggle = void 0 } = $$props;
  let { closeAriaLabel = "Close" } = $$props;
  let { children = void 0 } = $$props;
  let { id = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.closeAriaLabel === void 0 && $$bindings.closeAriaLabel && closeAriaLabel !== void 0)
    $$bindings.closeAriaLabel(closeAriaLabel);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  classes = classnames(className, "modal-header");
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}><h5 class="${"modal-title"}"${add_attribute("id", id, 0)}>${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}</h5>
  ${slots.close ? slots.close({}) : `
    ${typeof toggle === "function" ? `<button type="${"button"}" class="${"btn-close"}"${add_attribute("aria-label", closeAriaLabel, 0)}></button>` : ``}
  `}</div>`;
});
const Portal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  let ref;
  let portal;
  onDestroy(() => {
    if (typeof document !== "undefined") {
      document.body.removeChild(portal);
    }
  });
  return `<div${spread([escape_object($$restProps)], {})}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const css$1 = {
  code: ".modal-open{overflow:hidden;padding-right:0}",
  map: null
};
const dialogBaseClass = "modal-dialog";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let outer;
  compute_rest_props($$props, [
    "class",
    "static",
    "isOpen",
    "autoFocus",
    "body",
    "centered",
    "container",
    "fullscreen",
    "header",
    "scrollable",
    "size",
    "toggle",
    "labelledBy",
    "backdrop",
    "wrapClassName",
    "modalClassName",
    "contentClassName",
    "fade",
    "unmountOnClose",
    "returnFocusAfterClose"
  ]);
  createEventDispatcher();
  let { class: className = "" } = $$props;
  let { static: staticModal = false } = $$props;
  let { isOpen = false } = $$props;
  let { autoFocus = true } = $$props;
  let { body = false } = $$props;
  let { centered = false } = $$props;
  let { container = void 0 } = $$props;
  let { fullscreen = false } = $$props;
  let { header = void 0 } = $$props;
  let { scrollable = false } = $$props;
  let { size = "" } = $$props;
  let { toggle = void 0 } = $$props;
  let { labelledBy = header ? `modal-${uuid()}` : void 0 } = $$props;
  let { backdrop = true } = $$props;
  let { wrapClassName = "" } = $$props;
  let { modalClassName = "" } = $$props;
  let { contentClassName = "" } = $$props;
  let { fade = true } = $$props;
  let { unmountOnClose = true } = $$props;
  let { returnFocusAfterClose = true } = $$props;
  onDestroy(() => {
  });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.static === void 0 && $$bindings.static && staticModal !== void 0)
    $$bindings.static(staticModal);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.autoFocus === void 0 && $$bindings.autoFocus && autoFocus !== void 0)
    $$bindings.autoFocus(autoFocus);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.centered === void 0 && $$bindings.centered && centered !== void 0)
    $$bindings.centered(centered);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.fullscreen === void 0 && $$bindings.fullscreen && fullscreen !== void 0)
    $$bindings.fullscreen(fullscreen);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.scrollable === void 0 && $$bindings.scrollable && scrollable !== void 0)
    $$bindings.scrollable(scrollable);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.labelledBy === void 0 && $$bindings.labelledBy && labelledBy !== void 0)
    $$bindings.labelledBy(labelledBy);
  if ($$props.backdrop === void 0 && $$bindings.backdrop && backdrop !== void 0)
    $$bindings.backdrop(backdrop);
  if ($$props.wrapClassName === void 0 && $$bindings.wrapClassName && wrapClassName !== void 0)
    $$bindings.wrapClassName(wrapClassName);
  if ($$props.modalClassName === void 0 && $$bindings.modalClassName && modalClassName !== void 0)
    $$bindings.modalClassName(modalClassName);
  if ($$props.contentClassName === void 0 && $$bindings.contentClassName && contentClassName !== void 0)
    $$bindings.contentClassName(contentClassName);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0)
    $$bindings.fade(fade);
  if ($$props.unmountOnClose === void 0 && $$bindings.unmountOnClose && unmountOnClose !== void 0)
    $$bindings.unmountOnClose(unmountOnClose);
  if ($$props.returnFocusAfterClose === void 0 && $$bindings.returnFocusAfterClose && returnFocusAfterClose !== void 0)
    $$bindings.returnFocusAfterClose(returnFocusAfterClose);
  $$result.css.add(css$1);
  classnames(dialogBaseClass, className, {
    [`modal-${size}`]: size,
    "modal-fullscreen": fullscreen === true,
    [`modal-fullscreen-${fullscreen}-down`]: fullscreen && typeof fullscreen === "string",
    [`${dialogBaseClass}-centered`]: centered,
    [`${dialogBaseClass}-scrollable`]: scrollable
  });
  outer = container === "inline" || staticModal ? InlineContainer : Portal;
  return `${``}
${backdrop && !staticModal ? `${validate_component(outer || missing_component, "svelte:component").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(ModalBackdrop, "ModalBackdrop").$$render($$result, { fade, isOpen }, {}, {})}`;
    }
  })}` : ``}`;
});
const ModalFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = classnames(className, "modal-footer");
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Styles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icons = true } = $$props;
  if ($$props.icons === void 0 && $$bindings.icons && icons !== void 0)
    $$bindings.icons(icons);
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"}" data-svelte="svelte-5cxmaq">${icons ? `<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css"}" data-svelte="svelte-5cxmaq">` : ``}`, ""}`;
});
const open = writable(false);
const optionStore = writable();
const Modal_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $open, $$unsubscribe_open;
  let $optionStore, $$unsubscribe_optionStore;
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  $$unsubscribe_optionStore = subscribe(optionStore, (value) => $optionStore = value);
  const toggle = () => set_store_value(open, $open = !$open, $open);
  $$unsubscribe_open();
  $$unsubscribe_optionStore();
  return `${$open && $optionStore ? `${validate_component(Modal, "Modal").$$render($$result, { isOpen: $open, toggle }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { toggle }, {}, {
        default: () => {
          return `${escape($optionStore.title)}`;
        }
      })}
      ${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `${escape($optionStore.desc)}`;
        }
      })}
      ${validate_component(ModalFooter, "ModalFooter").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, {
            color: $optionStore.buttonColor || "primary"
          }, {}, {
            default: () => {
              return `${escape($optionStore.label)}`;
            }
          })}
        ${validate_component(Button, "Button").$$render($$result, { color: "secondary" }, {}, {
            default: () => {
              return `Cancel`;
            }
          })}`;
        }
      })}`;
    }
  })}` : ``}`;
});
var __layout_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "html,body,body>div{height:100%}.main-container{height:100%;width:100%;display:flex}.main-container .main{width:100%}.main-icon{height:2em;padding-right:1em}")();
const css = {
  code: "html,body,body>div{height:100%}.main-container{height:100%;width:100%;display:flex}.main-container .main{width:100%}.main-icon{height:2em;padding-right:1em}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(Modal_1, "Modal").$$render($$result, {}, {}, {})}
${validate_component(Styles, "Styles").$$render($$result, {}, {}, {})}
<div class="${"main-container"}"><div class="${"sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"}" style="${"width: 280px;"}"><a href="${"/"}" class="${"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"}"><svg class="${"main-icon"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 48 48"}"><title>bug</title><g><path d="${"M33.707,1.293a1,1,0,0,0-1.414,0L28.42,5.166a8.961,8.961,0,0,0-8.84,0L15.707,1.293a1,1,0,0,0-1.414,1.414l3.65,3.65a9,9,0,1,0,12.114,0l3.65-3.65A1,1,0,0,0,33.707,1.293Z"}" fill="${"currentColor"}"></path><path d="${"M11,28H2a1,1,0,0,1,0-2h9a1,1,0,0,1,0,2Z"}" fill="${"currentColor"}"></path><path d="${"M5,46a1.017,1.017,0,0,1-.243-.03,1,1,0,0,1-.728-1.212L5.621,38.4a6.035,6.035,0,0,1,2.072-3.232l3.682-2.945a1,1,0,0,1,1.25,1.562L8.943,36.727A4.02,4.02,0,0,0,7.561,38.88L5.97,45.242A1,1,0,0,1,5,46Z"}" fill="${"currentColor"}"></path><path d="${"M14,22a.994.994,0,0,1-.58-.187L7.742,17.759a5.959,5.959,0,0,1-2.2-2.986L4.052,10.316a1,1,0,1,1,1.9-.632l1.486,4.457A3.986,3.986,0,0,0,8.9,16.132l5.677,4.055A1,1,0,0,1,14,22Z"}" fill="${"currentColor"}"></path><path d="${"M46,28H37a1,1,0,0,1,0-2h9a1,1,0,0,1,0,2Z"}" fill="${"currentColor"}"></path><path d="${"M43,46a1,1,0,0,1-.969-.758L40.439,38.88a4.02,4.02,0,0,0-1.382-2.153l-3.682-2.946a1,1,0,0,1,1.25-1.562l3.682,2.945A6.041,6.041,0,0,1,42.379,38.4l1.591,6.362a1,1,0,0,1-.728,1.212A1.017,1.017,0,0,1,43,46Z"}" fill="${"currentColor"}"></path><path d="${"M34,22a1,1,0,0,1-.582-1.813L39.1,16.132a3.986,3.986,0,0,0,1.47-1.991l1.486-4.457a1,1,0,1,1,1.9.632l-1.485,4.457a5.959,5.959,0,0,1-2.2,2.986l-5.677,4.054A.994.994,0,0,1,34,22Z"}" fill="${"currentColor"}"></path><path d="${"M24,47A15.017,15.017,0,0,1,9,32V24a15,15,0,0,1,30,0v8A15.017,15.017,0,0,1,24,47Z"}" fill="${"#72c472"}"></path><path d="${"M23,46.949c.332.022.662.051,1,.051s.668-.029,1-.051V8H23Z"}" fill="${"currentColor"}"></path></g></svg>
            <span class="${"fs-4"}">Kriket</span></a>
        <hr>
        <ul class="${"nav nav-pills flex-column mb-auto"}"><li class="${"nav-item"}"><a href="${"/"}" class="${[
    "nav-link",
    ($page.url.pathname.length <= 1 ? "active" : "") + " " + (!($page.url.pathname.length <= 1) ? "text-white" : "")
  ].join(" ").trim()}" aria-current="${"page"}">${validate_component(Icon, "Icon").$$render($$result, { name: "house-door-fill" }, {}, {})}
                    Home
                </a></li>
            <li><a href="${"/bug"}" class="${[
    "nav-link",
    ($page.url.pathname.startsWith("/bug") ? "active" : "") + " " + (!$page.url.pathname.startsWith("/bug") ? "text-white" : "")
  ].join(" ").trim()}">${validate_component(Icon, "Icon").$$render($$result, { name: "bug-fill" }, {}, {})}
                    Bugs
                </a></li></ul>
        </div>
    <div class="${"main p-3"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
export { _layout as default };
