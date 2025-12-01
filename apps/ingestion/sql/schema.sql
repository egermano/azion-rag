-- Create table for storing document embeddings
-- Table designed for Azion Edge SQL (SQLite-compatible)

CREATE TABLE IF NOT EXISTS document_embeddings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    filename TEXT NOT NULL,
    content TEXT NOT NULL,
    -- Storing embedding as F32_BLOB for Vector Search
    embedding F32_BLOB(1536), 
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Index for faster lookups by filename
CREATE INDEX IF NOT EXISTS idx_filename ON document_embeddings(filename);
