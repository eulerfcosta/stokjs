
module.exports = {

    async index(request, response) {
        return response.json('Controller Condominium # index');

    },

    async show(request, response) {
        return response.json('Controller Condominium # show');

    },

    async create(request, response) {
        return response.json('Controller Condominium # create');

    },

    async update(request, response) {
        return response.json('Controller Condominium # update');

    },

    async destroy(request, response) {
        return response.json('Controller Condominium # destroy');

    }

};
