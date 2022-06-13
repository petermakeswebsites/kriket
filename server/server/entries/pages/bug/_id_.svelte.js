import { c as create_ssr_component, l as escape, v as validate_component } from "../../../chunks/index-e1d5e562.js";
import { format } from "date-fns";
import { R as Root } from "../../../chunks/Root-2a30b880.js";
import { I as Icon } from "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-e5c122cd.js";
import "../../../chunks/index-4037f9b1.js";
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let { bug } = $$props;
  if ($$props.bug === void 0 && $$bindings.bug && bug !== void 0)
    $$bindings.bug(bug);
  return `${bug ? `<h1>${escape(bug.domain)}</h1>

<td class="${"bug-list-error"}"><div class="${"bug-list-error-tree"}">${validate_component(Root, "JSONTree").$$render($$result, { value: bug.error }, {}, {})}</div><a href="${"#"}">${validate_component(Icon, "Icon").$$render($$result, { name: "braces" }, {}, {})}</a></td>
<td>${escape((_a = bug.custom) == null ? void 0 : _a.version)}</td>
<td>${escape(format(bug.time, "MMM do yyyy h:mm bbb"))}</td>
<td>${escape(bug.domain)}</td>` : `whoops! an error happened`}`;
});
export { U5Bidu5D as default };
