import { g as getBug, b as bugsSorted, i as isNewBug, s as setBug, d as delBug } from "../../../chunks/bugStore-d38c271b.js";
import { g as get_store_value } from "../../../chunks/index-e1d5e562.js";
import "../../../chunks/index-4037f9b1.js";
import "randomstring";
import "path";
import "lowdb";
import "url";
const get = async ({ request, params }) => {
  try {
    const id = params.id || new URLSearchParams(request.url).get("id");
    console.log(new URLSearchParams(request.url));
    if (id) {
      const item = getBug(params.id);
      if (item) {
        return {
          body: { item }
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
const post = async ({ request }) => {
  const newBug = await request.json();
  if (!isNewBug(newBug)) {
    return {
      status: 401,
      body: "This bug is not formatted properly"
    };
  }
  const bugID = setBug(newBug);
  return {
    status: 200,
    body: bugID
  };
};
const del = async ({ request, params }) => {
  try {
    const id = params.id || (await request.json()).id;
    console.log(id);
    if (id && delBug(id)) {
      return {
        status: 200,
        body: {
          bugs: get_store_value(bugsSorted)
        }
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
export { del, get, post };
