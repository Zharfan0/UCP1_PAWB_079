const express = require('express');
const router = express.Router();

let ArrPupuk = []; // Array untuk menyimpan data pupuk

// GET: Menampilkan daftar pupuk
router.get('/', (req, res) => {
    res.render('ArrPupuk/index', { ArrPupuk });
});

// GET: Form tambah pupuk
router.get('/new', (req, res) => {
    res.render('ArrPupuk/new');
});

// POST: Tambah data pupuk baru
router.post('/', (req, res) => {
    const { name, species } = req.body;
    const id = ArrPupuk.length + 1;
    ArrPupuk.push({ id, name, species });
    res.redirect('/ArrPupuk');
});

// GET: Form edit pupuk
router.get('/:id/edit', (req, res) => {
    const id = parseInt(req.params.id);
    const pupuk = ArrPupuk.find(a => a.id === id);
    if (pupuk) {
        res.render('ArrPupuk/edit', { pupuk });
    } else {
        res.status(404).send('pupuk tidak ditemukan');
    }
});

// PUT: Update data pupuk
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pupuk = ArrPupuk.find(a => a.id === id);
    if (pupuk) {
        const { name, species } = req.body;
        pupuk.name = name;
        pupuk.species = species;
        res.redirect('/ArrPupuk');
    } else {
        res.status(404).send('pupuk tidak ditemukan');
    }
});

// DELETE: Hapus data pupuk
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    ArrPupuk = ArrPupuk.filter(a => a.id !== id);
    res.redirect('/ArrPupuk');
});

module.exports = router;
