import "dotenv/config";

import * as aiLib from "ai";
import * as fs from "fs";
import * as path from "path";

// Configuration
const DATA_DIR = path.join(__dirname, "data");
const CHUNK_SIZE = 1000;
const CHUNK_OVERLAP = CHUNK_SIZE * 0.1;

interface DocumentChunk {
  id: string;
  content: string;
  metadata: {
    filename: string;
    chunkIndex: number;
    charStart: number;
    charEnd: number;
  };
}

/**
 * Simulates inserting data into Azion Edge SQL
 */
async function mockInsertDatabase(chunk: DocumentChunk, embedding: number[]) {
  // Simulate latency
  await new Promise((resolve) => setTimeout(resolve, 50));

  console.log(
    `[DB] Inserted: ${chunk.metadata.filename} (Chunk #${chunk.metadata.chunkIndex}) - Vector Size: ${embedding.length}`
  );
}

/**
 * Splits text into chunks with overlap
 */
function chunkTextWithOverlap(
  filename: string,
  content: string
): DocumentChunk[] {
  const chunks: DocumentChunk[] = [];
  let start = 0;

  while (start < content.length) {
    const end = Math.min(start + CHUNK_SIZE, content.length);
    chunks.push({
      id: `${filename}-${chunks.length}`,
      content: content.slice(start, end),
      metadata: {
        filename,
        chunkIndex: chunks.length,
        charStart: start,
        charEnd: end,
      },
    });

    if (end === content.length) break;
    start += CHUNK_SIZE - CHUNK_OVERLAP;
  }
  return chunks;
}

/**
 * Main Ingestion Logic
 */
async function runIngestion() {
  console.log("🚀 Starting Ingestion...");
  console.log(`📂 Dir: ${DATA_DIR}`);

  if (!fs.existsSync(DATA_DIR)) throw new Error("Data directory not found");

  const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith(".md"));
  console.log(`📄 Found ${files.length} markdown files`);

  for (const file of files) {
    console.log(`\nProcessing: ${file}`);
    try {
      const content = fs.readFileSync(path.join(DATA_DIR, file), "utf-8");
      const chunks = chunkTextWithOverlap(file, content);
      console.log(`-> Created ${chunks.length} chunks`);

      for (const chunk of chunks) {
        try {
          // Generate Embedding
          const { data } = await aiLib.embedding(chunk.content);
          const vector = data?.[0]?.embedding;

          if (!vector) throw new Error("No embedding returned from AI");

          // Insert into DB
          await mockInsertDatabase(chunk, vector);
        } catch (err) {
          console.error(`❌ Error chunk #${chunk.metadata.chunkIndex}:`, err);
        }
      }
    } catch (error) {
      console.error(`❌ Error processing file ${file}:`, error);
    }
  }
  console.log("\n✅ Ingestion Complete");
}

runIngestion().catch(console.error);
