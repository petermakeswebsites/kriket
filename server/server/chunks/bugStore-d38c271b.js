var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { w as writable, d as derived } from "./index-4037f9b1.js";
import { generate } from "randomstring";
import { dirname, join } from "path";
import { JSONFile, Low } from "lowdb";
import { fileURLToPath } from "url";
import { g as get_store_value } from "./index-e1d5e562.js";
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);
await db.read();
console.log("Initial data: ", db.data);
db.data || (db.data = { bugs: [] });
if (!db.data)
  throw new Error("database has no data");
const isNewBug = (obj) => obj && "error" in obj && "domain" in obj;
const bugs = writable(db.data.bugs);
const bugsSorted = derived(bugs, (bugs2) => bugs2.sort((a, b) => a.time - b.time));
const getBug = (id) => get_store_value(bugs).find((bug) => bug.id == id);
const setBug = (newBug) => {
  const id = generate(10);
  const time = Date.now();
  const bug = __spreadProps(__spreadValues({}, newBug), { id, time });
  bugs.update((bugs2) => {
    bugs2.push(bug);
    return bugs2;
  });
  console.log("Bugs:", get_store_value(bugs));
  db.write();
  return id;
};
const delBug = (id) => {
  const index = get_store_value(bugs).findIndex((bug) => bug.id == id);
  if (index != -1) {
    bugs.update((bugs2) => {
      bugs2 = bugs2.filter((bug) => bug.id != id);
      return bugs2;
    });
    db.write();
    return true;
  } else {
    return false;
  }
};
get_store_value(bugsSorted);
export { bugs as a, bugsSorted as b, delBug as d, getBug as g, isNewBug as i, setBug as s };
