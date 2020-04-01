
module.exports = {

    async index(request, response) {
        return response.json('Controller Stok # index');

    },

    async show(request, response) {
        return response.json('Controller Stok # show');

    },

    async create(request, response) {
        return response.json('Controller Stok # create');

    },

    async update(request, response) {
        return response.json('Controller Stok # update');

    },

    async destroy(request, response) {
        return response.json('Controller Stok # destroy');

    }

};
