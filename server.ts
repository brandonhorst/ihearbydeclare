import Db from "./db.ts";

let db: Db | undefined;

export function getDb(): Db {
  if (db == null) {
    throw new Error("GameServer is not initialized");
  }
  return db;
}

export async function initializeDb() {
  const kv = await Deno.openKv();
  db = new Db(kv);
}
