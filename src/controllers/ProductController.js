
module.exports = {

    async index(request, response) {
        return response.json('Controller Product # index');

    },

    async show(request, response) {
        return response.json('Controller Product # show');

    },

    async create(request, response) {
        return response.json('Controller Product # create');

    },

    async update(request, response) {
        return response.json('Controller Product # update');

    },

    async destroy(request, response) {
        return response.json('Controller Product # destroy');

    }

};
