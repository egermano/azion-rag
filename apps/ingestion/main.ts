import "dotenv/config";

import * as aiLib from "ai";
import { useExecute } from "azion/sql";
import * as fs from "fs";
import * as path from "path";

// Config
const DATA_DIR = path.join(__dirname, "data");
const SQL_FILE = path.join(__dirname, "sql/embedding-data.sql");
const CHUNK_SIZE = 1000;
const CHUNK_OVERLAP = CHUNK_SIZE * 0.1;

const dbName = process.env.SQL_DATABASE_NAME!;
const tableName = process.env.SQL_DATABASE_TABLE!;

// Ensure SQL dir exists (minimal setup)
fs.mkdirSync(path.dirname(SQL_FILE), { recursive: true });

interface DocumentChunk {
  id: string;
  content: string;
  metadata: { filename: string; chunkIndex: number };
}

async function resetData() {
  // reset the file SQL_FILE

  console.log(`[DB] Resetting data...`);

  try {
    fs.writeFileSync(SQL_FILE, "");

    const { error } = await useExecute(dbName, [`DELETE FROM ${tableName}`]);
    if (error) console.error(`[DB] Error:`, error.message);
    else console.log(`[DB] Reset data`);
  } catch (err) {
    console.error(`[DB] Exception:`, err);
  }
}

/**
 * Insert into Azion Edge SQL & save to file
 */
async function databaseInsert(chunk: DocumentChunk, embedding: number[]) {
  const safeContent = chunk.content.replace(/'/g, "''");
  const vectorStr = JSON.stringify(embedding);

  const query = `INSERT INTO ${tableName} (filename, content, embedding) VALUES ('${chunk.metadata.filename}', '${safeContent}', '${vectorStr}');`;

  // Save locally
  fs.appendFileSync(SQL_FILE, query + "\n");

  // Insert to DB
  try {
    const { error } = await useExecute(dbName, [query]);
    if (error) console.error(`[DB] Error:`, error.message);
    else console.log(`[DB] Inserted chunk #${chunk.metadata.chunkIndex}`);
  } catch (err) {
    console.error(`[DB] Exception:`, err);
  }
}

/**
 * Split text into chunks
 */
function chunkText(filename: string, content: string): DocumentChunk[] {
  const chunks: DocumentChunk[] = [];
  let start = 0;

  while (start < content.length) {
    const end = Math.min(start + CHUNK_SIZE, content.length);
    chunks.push({
      id: `${filename}-${chunks.length}`,
      content: content.slice(start, end),
      metadata: { filename, chunkIndex: chunks.length },
    });
    if (end === content.length) break;
    start += CHUNK_SIZE - CHUNK_OVERLAP;
  }
  return chunks;
}

/**
 * Main
 */
async function run() {
  console.log("🚀 Starting Ingestion...");
  
  await resetData();

  const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    console.log(`Processing ${file}...`);
    const content = fs.readFileSync(path.join(DATA_DIR, file), "utf-8");
    const chunks = chunkText(file, content);

    for (const chunk of chunks) {
      // Clean newlines before embedding and insertion
      chunk.content = chunk.content.replace(/(\n|\t|\r)/g, " ");

      const { data } = await aiLib.embedding(chunk.content);
      if (data?.[0]?.embedding) {
        await databaseInsert(chunk, data[0].embedding);
      }
    }
  }
  console.log("✅ Done!");
}

run().catch(console.error);
