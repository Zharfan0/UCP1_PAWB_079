const db = require('./db');

module.exports = {
    getAll: (callback) => {
        db.all('SELECT * FROM pupuk', [], (err, rows) => {
            callback(err, rows);
        });
    },
    add: (pupuk, callback) => {
        db.run(
            'INSERT INTO pupuk (name, merk) VALUES (?, ?)',
            [pupuk.name, pupuk.species],
            callback
        );
    },
    update: (id, pupuk, callback) => {
        db.run(
            'UPDATE pupuk SET name = ?, merk = ? WHERE id = ?',
            [pupuk.name, pupuk.merk, id],
            callback
        );
    },
    delete: (id, callback) => {
        db.run('DELETE FROM pupuk WHERE id = ?', [id], callback);
    },
};
