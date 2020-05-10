const { HTTPCache, RESTDataSource } = require('apollo-datasource-rest');
const familyServiceUrl = process.env.FAMILY_SERVICE_BASE_URL;
const auth = require('./familyAPI.Auth');

module.exports = class familyAPI extends RESTDataSource {
  constructor() {
    super();
    this.httpCache = new HTTPCache();
    this.baseURL = familyServiceUrl;
  }

  async willSendRequest(request) {
    let token = await auth.getAuthToken();
    request.headers.set('Authorization', 'Bearer ' + token);
    request.headers.set('Content-Type', 'application/json');
  }

  // QUERIES

  async getFamilyById(id) {
    try {
      return JSON.parse(await this.get(`family/${id}`));
    } catch (err) {
      console.error('BFF - Failed to get family :', err);
      throw new Error('BFF - Failed to get family' + err.message);
    }
  }

  async getMemberById(id) {
    try {
      return JSON.parse(await this.get(`member/${id}`));
    } catch (err) {
      console.error('BFF - Failed to get member :', err);
      throw new Error('BFF - Failed to get member' + err.message);
    }
  }

  async listAllMembersForFamily(familyId) {
    try {
      return JSON.parse(await this.get(`family/${familyId}/member`));
    } catch (err) {
      console.error('BFF - Failed to get list of members in family :', err);
      throw new Error(
        'BFF - Failed to get list of members in family' + err.message
      );
    }
  }

  async listAllFamiliesForMember(id) {
    try {
      return JSON.parse(await this.get(`member/${id}/family`));
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
      return JSON.parse(await this.post('family', JSON.stringify(familyData)));
    } catch (err) {
      console.error('BFF - Failed to create family :', err);
      throw new Error('BFF - Failed to create family' + err.message);
    }
  }

  async updateFamily(id, familyData) {
    try {
      return JSON.parse(await this.put(`family/${id}`, JSON.stringify(familyData)));
    } catch (err) {
      console.error('BFF - Failed to update family :', err);
      throw new Error('BFF - Failed to update family' + err.message);
    }
  }

  async deleteFamily(id) {
    try {
      return JSON.parse(await this.delete(`family/${id}`));
    } catch (err) {
      console.error('BFF - Failed to delete family :', err);
      throw new Error('BFF - Failed to delete family' + err.message);
    }
  }

  async createMember(memberData) {
    try {
      return JSON.parse(await this.post('member', JSON.stringify(memberData)));
    } catch (err) {
      console.error('BFF - Failed to create member :', err);
      throw new Error('BFF - Failed to create member' + err.message);
    }
  }

  async updateMemberForFamily(id, familyId, memberData) {
    try {
      return JSON.parse(await this.put(
        `member/${id}/family/${familyId}`,
        JSON.stringify(memberData)
      ));
    } catch (err) {
      console.error('BFF - Failed to update member for family :', err);
      throw new Error('BFF - Failed to update member for family' + err.message);
    }
  }

  async updateMemberGlobally(id, memberData) {
    try {
      return JSON.parse(await this.put(`member/${id}`, JSON.stringify(memberData)));
    } catch (err) {
      console.error('BFF - Failed to update member globally :', err);
      throw new Error('BFF - Failed to update member globally' + err.message);
    }
  }

  async deleteMemberFromFamily(id, familyId) {
    try {
      return JSON.parse(await this.delete(`member/${id}/family/${familyId}`));
    } catch (err) {
      console.error('BFF - Failed to delete member in family :', err);
      throw new Error('BFF - Failed to delete member in family' + err.message);
    }
  }

  async deleteMember(id) {
    try {
      return JSON.parse(await this.delete(`member/${id}`));
    } catch (err) {
      console.error('BFF - Failed to delete member in all families :', err);
      throw new Error(
        'BFF - Failed to delete member in all families' + err.message
      );
    }
  }
};
