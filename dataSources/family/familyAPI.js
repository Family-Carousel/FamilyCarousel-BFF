const { HTTPCache, RESTDataSource } = require('apollo-datasource-rest');
const apiKey = process.env.FAMILY_SERVICE_API_KEY;

module.exports = class familyAPI extends RESTDataSource {

    constructor() {
        super();
        this.HTTPCache = new HTTPCache();
        this.baseUrl = process.env.FAMILY_SERVICE_BASE_URL;
    }

    async willSendRequest(request) {
        request.headers.set('x-api-key', apiKey);
    }

    // EXAMPLE
    // async get(templateId) {
    //     try {
    //         return await this.post('family', { data });
    //     } catch (err) {
    //         console.error(' :', err);
    //         throw('');
    //     }
    // }
}