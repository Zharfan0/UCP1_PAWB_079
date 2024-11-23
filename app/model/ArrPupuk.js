let ArrPupuk = [];

module.exports = {
    getAll: () => ArrPupuk,
    add: (pupuk) => ArrPupuk.push(pupuk),
    update: (index, pupuk) => (pupuk[index] = pupuk),
    delete: (index) => ArrPupuk.splice(index, 1),
};