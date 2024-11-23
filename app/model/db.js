const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./pupuk.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS pupuk (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            
            name TEXT,
            merk TEXT
        )
    `);
});

module.exports = db;
