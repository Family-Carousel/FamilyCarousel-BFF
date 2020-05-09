const { HTTPCache, RESTDataSource } = require('apollo-datasource-rest');
const apiKey = process.env.FAMILY_SERVICE_API_KEY;
const familyServiceUrl = process.env.FAMILY_SERVICE_BASE_URL;

module.exports = class familyAPI extends RESTDataSource {
  constructor() {
    super();
    this.httpCache = new HTTPCache();
    this.baseURL = familyServiceUrl;
  }

  async willSendRequest(request) {
    request.headers.set('x-api-key', apiKey);
    request.headers.set('Content-Type', 'application/json');
  }

  // QUERIES

  async getFamilyById(id) {
    try {
      return await this.get(`family/${id}`);
    } catch (err) {
      console.error('BFF - Failed to get family :', err);
      throw new Error('BFF - Failed to get family' + err.message);
    }
  }

  async getMemberById(id) {
    try {
      return await this.get(`member/${id}`);
    } catch (err) {
      console.error('BFF - Failed to get member :', err);
      throw new Error('BFF - Failed to get member' + err.message);
    }
  }

  async listAllMembersForFamily(familyId) {
    try {
      let response = await this.get(`family/${familyId}/member`);
      console.log(response);
      return response;
    } catch (err) {
      console.error('BFF - Failed to get list of members in family :', err);
      throw new Error(
        'BFF - Failed to get list of members in family' + err.message
      );
    }
  }

  async listAllFamiliesForMember(id) {
    try {
      return await this.get(`member/${id}/family`);
    } catch (err) {
      console.error('BFF - Failed to get list of families by member :', err);
      throw new Error(
        'BFF - Failed to get list of families by member' + err.message
      );
    }
  }

  // MUTATIONS

  async createFamily(familyData) {
    try {
      return await this.post('family', JSON.stringify(familyData));
    } catch (err) {
      console.error('BFF - Failed to create family :', err);
      throw new Error('BFF - Failed to create family' + err.message);
    }
  }

  async updateFamily(id, familyData) {
    try {
      return await this.put(`family/${id}`, JSON.stringify(familyData));
    } catch (err) {
      console.error('BFF - Failed to update family :', err);
      throw new Error('BFF - Failed to update family' + err.message);
    }
  }

  async deleteFamily(id) {
    try {
      return await this.delete(`family/${id}`);
    } catch (err) {
      console.error('BFF - Failed to delete family :', err);
      throw new Error('BFF - Failed to delete family' + err.message);
    }
  }

  async createMember(memberData) {
    try {
      return await this.post('member', JSON.stringify(memberData));
    } catch (err) {
      console.error('BFF - Failed to create member :', err);
      throw new Error('BFF - Failed to create member' + err.message);
    }
  }

  async updateMemberForFamily(id, familyId, memberData) {
    try {
      return await this.put(
        `member/${id}/family/${familyId}`,
        JSON.stringify(memberData)
      );
    } catch (err) {
      console.error('BFF - Failed to update member for family :', err);
      throw new Error('BFF - Failed to update member for family' + err.message);
    }
  }

  async updateMemberGlobally(id, memberData) {
    try {
      return await this.put(`member/${id}`, JSON.stringify(memberData));
    } catch (err) {
      console.error('BFF - Failed to update member globally :', err);
      throw new Error('BFF - Failed to update member globally' + err.message);
    }
  }

  async deleteMemberFromFamily(id, familyId) {
    try {
      return await this.delete(`member/${id}/family/${familyId}`);
    } catch (err) {
      console.error('BFF - Failed to delete member in family :', err);
      throw new Error('BFF - Failed to delete member in family' + err.message);
    }
  }

  async deleteMember(id) {
    try {
      return await this.delete(`member/${id}`);
    } catch (err) {
      console.error('BFF - Failed to delete member in all families :', err);
      throw new Error(
        'BFF - Failed to delete member in all families' + err.message
      );
    }
  }
};
