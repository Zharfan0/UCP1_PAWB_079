const pupukModel = require('../models/ArrPupuk');

module.exports = {
    getAllArrPupuk: (req, res) => {
        res.render('ArrPupuk/index', { ArrPupuk: pupukModel.getAll() });
    },
    addpupuk: (req, res) => {
        pupukModel.add(req.body);
        res.redirect('/ArrPupuk');
    },
    editpupuk: (req, res) => {
        const index = req.params.id;
        const ArrPupuk = pupukModel.getAll();
        res.render('ArrPupuk/edit', { pupuk: ArrPupuk[index], index });
    },
    updatepupuk: (req, res) => {
        const index = req.params.id;
        pupukModel.update(index, req.body);
        res.redirect('/ArrPupuk');
    },
    deletepupuk: (req, res) => {
        const index = req.params.id;
        pupukModel.delete(index);
        res.redirect('/ArrPupuk');
    },
};
