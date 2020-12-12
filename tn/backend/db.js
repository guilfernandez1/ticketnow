const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./tn.db');

db.serialize(function() {
    db.run(`
    CREATE TABLE IF NOT EXISTS tickets(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        description,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        status TEXT
        );
    `)
    module.exports = db;
})