
module.exports = {

    async index(request, response) {
        return response.json('Controller User # index');

    },

    async show(request, response) {
        return response.json('Controller User # show');

    },

    async create(request, response) {
        return response.json('Controller User # create');

    },

    async update(request, response) {
        return response.json('Controller User # update');

    },

    async destroy(request, response) {
        return response.json('Controller User # destroy');

    }

};
