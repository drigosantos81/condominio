const { create } = require("browser-sync");

module.exports = {
    async index(req, res) {
        return res.render('admin/registers/residents/index');
    },

    async create(req, res) {
        return res.render('admin/registers/residents/create');
    }
}