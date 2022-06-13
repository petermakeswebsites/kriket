import { c as create_ssr_component, s as setContext, k as add_attribute, e as compute_rest_props, f as spread, h as escape_object, v as validate_component, j as escape_attribute_value, t as each, l as escape } from "../../../chunks/index-e1d5e562.js";
import { c as classnames, I as Icon } from "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-e5c122cd.js";
import { isToday, format } from "date-fns";
import { R as Root } from "../../../chunks/Root-2a30b880.js";
import "../../../chunks/index-4037f9b1.js";
const Colgroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setContext("colgroup", true);
  return `<colgroup>${slots.default ? slots.default({}) : ``}</colgroup>`;
});
let className = "";
const ResponsiveContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let responsiveClassName;
  let { responsive = false } = $$props;
  if ($$props.responsive === void 0 && $$bindings.responsive && responsive !== void 0)
    $$bindings.responsive(responsive);
  responsiveClassName = classnames(className, {
    "table-responsive": responsive === true,
    [`table-responsive-${responsive}`]: typeof responsive === "string"
  });
  return `${responsive ? `<div${add_attribute("class", responsiveClassName, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
});
const TableFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  setContext("footer", true);
  return `<tfoot${spread([escape_object($$restProps)], {})}><tr>${slots.default ? slots.default({}) : ``}</tr></tfoot>`;
});
const TableHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  setContext("header", true);
  return `<thead${spread([escape_object($$restProps)], {})}><tr>${slots.default ? slots.default({}) : ``}</tr></thead>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "size",
    "bordered",
    "borderless",
    "striped",
    "dark",
    "hover",
    "responsive",
    "rows"
  ]);
  let { class: className2 = "" } = $$props;
  let { size = "" } = $$props;
  let { bordered = false } = $$props;
  let { borderless = false } = $$props;
  let { striped = false } = $$props;
  let { dark = false } = $$props;
  let { hover = false } = $$props;
  let { responsive = false } = $$props;
  let { rows = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className2 !== void 0)
    $$bindings.class(className2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.bordered === void 0 && $$bindings.bordered && bordered !== void 0)
    $$bindings.bordered(bordered);
  if ($$props.borderless === void 0 && $$bindings.borderless && borderless !== void 0)
    $$bindings.borderless(borderless);
  if ($$props.striped === void 0 && $$bindings.striped && striped !== void 0)
    $$bindings.striped(striped);
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.responsive === void 0 && $$bindings.responsive && responsive !== void 0)
    $$bindings.responsive(responsive);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  classes = classnames(className2, "table", size ? "table-" + size : false, bordered ? "table-bordered" : false, borderless ? "table-borderless" : false, striped ? "table-striped" : false, dark ? "table-dark" : false, hover ? "table-hover" : false);
  return `${validate_component(ResponsiveContainer, "ResponsiveContainer").$$render($$result, { responsive }, {}, {
    default: () => {
      return `<table${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${rows ? `${validate_component(Colgroup, "Colgroup").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}
      ${validate_component(TableHeader, "TableHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({ row }) : ``}`;
        }
      })}
      <tbody>${each(rows, (row2) => {
        return `<tr>${slots.default ? slots.default({ row: row2 }) : ``}
          </tr>`;
      })}</tbody>
      ${validate_component(TableFooter, "TableFooter").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}` : `${slots.default ? slots.default({}) : ``}`}</table>`;
    }
  })}`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".bug-list{width:100%}.bug-list .bug-list-error{display:flex;justify-content:space-between}.bug-list .bug-list-error .bug-list-error-tree{width:100%}")();
const css = {
  code: ".bug-list{width:100%}.bug-list .bug-list-error{display:flex;justify-content:space-between}.bug-list .bug-list-error .bug-list-error-tree{width:100%}",
  map: null
};
const Bug = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bugs } = $$props;
  if ($$props.bugs === void 0 && $$bindings.bugs && bugs !== void 0)
    $$bindings.bugs(bugs);
  $$result.css.add(css);
  return `<h1>Bug Report</h1>
Today&#39;s bugs: ${escape(bugs.filter((b) => isToday(b.time)).length)}
${validate_component(Table, "Table").$$render($$result, { class: "bug-list" }, {}, {
    default: () => {
      return `<thead><tr><th>Bug</th>
            <th>Version</th>
            <th>Date</th>
            <th>Domain</th></tr></thead>
    <tbody>${each(bugs, (bug, i) => {
        var _a;
        return `<tr><td class="${"bug-list-error"}"><div class="${"bug-list-error-tree"}">${validate_component(Root, "JSONTree").$$render($$result, { value: bug.error }, {}, {})}</div><a href="${"#"}">${validate_component(Icon, "Icon").$$render($$result, { name: "braces" }, {}, {})}</a></td>
                <td>${escape((_a = bug.custom) == null ? void 0 : _a.version)}</td>
                <td>${escape(format(bug.time, "MMM do yyyy h:mm bbb"))}</td>
                <td>${escape(bug.domain)}</td>
                <td><a href="${"#"}" class="${"link-danger"}">${validate_component(Icon, "Icon").$$render($$result, { name: "x-circle-fill" }, {}, {})}
                    </a></td>
            </tr>`;
      })}</tbody>`;
    }
  })}`;
});
export { Bug as default };
