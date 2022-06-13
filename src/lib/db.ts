import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'
import type { Bug } from './bugStore';

const __dirname = dirname(fileURLToPath(import.meta.url));
type Data = {
    bugs: Bug[]
}

console.log("Environemnt:", process.env)

// Use JSON file for storage
let file = join(__dirname, 'db.json')

if ('DB_PATH' in process.env && typeof process.env.DB_PATH === "string") {
    file = process.env.DB_PATH
} else {
    console.warn("Uh oh! DB_PATH wasn't set in env or is not a string. Your changes are saved in the build directory and will be overwritten on the next build.")
    console.log("JSON storage path: ", file)
}

const adapter = new JSONFile<Data>(file)
export const db = new Low(adapter)
await db.read()
db.data ||= { bugs: [] }