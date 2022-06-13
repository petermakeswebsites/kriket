import { a as bugs, g as getBug, b as bugsSorted, d as delBug } from "../../../chunks/bugStore-d38c271b.js";
import { g as get_store_value } from "../../../chunks/index-e1d5e562.js";
import "../../../chunks/index-4037f9b1.js";
import "randomstring";
import "path";
import "lowdb";
import "url";
const get = async ({ request, params }) => {
  console.log("test2!?");
  try {
    const id = params.id || new URLSearchParams(request.url).get("id");
    console.log(id);
    console.log(get_store_value(bugs));
    if (id) {
      const item = getBug(params.id);
      console.log("item", item);
      if (item) {
        return {
          body: { bug: item }
        };
      }
    } else {
      return {
        body: {
          bugs: get_store_value(bugsSorted)
        }
      };
    }
    return {
      status: 404
    };
  } catch (e) {
    return {
      status: 503
    };
  }
};
const del = async ({ request, params }) => {
  try {
    const id = params.id;
    if (id && delBug(id)) {
      return {
        status: 200
      };
    } else {
      return {
        status: 404
      };
    }
  } catch (e) {
    return {
      status: 503
    };
  }
};
export { del, get };
