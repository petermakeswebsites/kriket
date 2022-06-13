import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'
import type { Bug } from './bugStore';

const __dirname = dirname(fileURLToPath(import.meta.url));
type Data = {
    bugs: Bug[]
}

// Use JSON file for storage
const file = join(__dirname, 'db.json')
console.log("JSON storage path: ", file)
const adapter = new JSONFile<Data>(file)
export const db = new Low(adapter)
await db.read()
db.data ||= { bugs: [] }