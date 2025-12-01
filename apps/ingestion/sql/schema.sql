-- Create table for storing document embeddings
-- Table designed for Azion Edge SQL (SQLite-compatible)

CREATE TABLE IF NOT EXISTS document_embeddings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    filename TEXT NOT NULL,
    content TEXT NOT NULL,
    -- Storing embedding as a JSON string (e.g., "[0.1, 0.2, ...]")
    -- as Edge SQL might not have native vector type yet.
    embedding TEXT, 
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Index for faster lookups by filename
CREATE INDEX IF NOT EXISTS idx_filename ON document_embeddings(filename);
