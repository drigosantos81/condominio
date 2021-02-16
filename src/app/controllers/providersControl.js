module.exports = {
    async index(req, res) {
        return res.render('admin/registers/providers/index');
    },

    async create(req, res) {
        return res.render('admin/registers/providers/create');
    }

}