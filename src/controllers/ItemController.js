
module.exports = {

    async index(request, response) {
        return response.json('Controller Item # index');

    },

    async show(request, response) {
        return response.json('Controller Item # show');

    },

    async create(request, response) {
        return response.json('Controller Item # create');

    },

    async update(request, response) {
        return response.json('Controller Item # update');

    },

    async destroy(request, response) {
        return response.json('Controller Item # destroy');

    }

};
