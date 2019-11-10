const { HTTPCache, RESTDataSource } = require('apollo-datasource-rest');
const apiKey = process.env.FAMILY_SERVICE_API_KEY;
const familyServiceUrl = process.env.FAMILY_SERVICE_BASE_URL;

module.exports = class familyAPI extends RESTDataSource {

    constructor() {
        super();
        this.HTTPCache = new HTTPCache();
        this.baseURL = familyServiceUrl;
    }

    async willSendRequest(request) {
        request.headers.set('x-api-key', apiKey);
    }

    async getAllFamiliesForMemberId(memberId) {
        try {
            return await this.get('family/' + {memberId: memberId});
        } catch (err) {
            console.error('BFF - Failed to get list of family :', err);
            throw('BFF - Failed to get list of family');
        }
    }
    
    async getFamily(id) {
        try {
            return await this.get('family/' + id);
        } catch (err) {
            console.error('BFF - Failed to get family :', err);
            throw('BFF - Failed to get family');
        }
    }

    async createFamily(familyData) {
        try {
            return await this.post('family', { data: familyData });
        } catch (err) {
            console.error('BFF - Failed to create family :', err);
            throw('BFF - Failed to create family');
        }
    }

    async updateFamily(familyData) {
        try {
            return await this.put('family', { data: familyData });
        } catch (err) {
            console.error('BFF - Failed to update family :', err);
            throw('BFF - Failed to update family');
        }
    }

    async deleteFamily(id) {
        try {
            return await this.delete('family/' + id);
        } catch (err) {
            console.error('BFF - Failed to delete family :', err);
            throw('BFF - Failed to delete family');
        }
    }
}
