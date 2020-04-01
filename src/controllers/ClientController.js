
module.exports = {

    async index(request, response) {
        return response.json('Controller Client # index');

    },

    async show(request, response) {
        return response.json('Controller Client # show');

    },

    async create(request, response) {
        return response.json('Controller Client # create');

    },

    async update(request, response) {
        return response.json('Controller Client # update');

    },

    async destroy(request, response) {
        return response.json('Controller Client # destroy');

    }

};
