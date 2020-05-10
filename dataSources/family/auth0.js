const { HTTPCache, RESTDataSource } = require('apollo-datasource-rest');
const auth = require('./familyAPI.Auth');
const auth0 = require('auth0-js');

let Auth = new auth0.WebAuth({
  domain: process.env.FAMILY_SERVICE_OAUTH_URL,
  clientID: process.env.FAMILY_SERVICE_OAUTH_CLIENTID
});

module.exports = class auth0API extends RESTDataSource {
  constructor() {
    super();
    this.httpCache = new HTTPCache();
    this.baseURL = 'https://' + process.env.FAMILY_SERVICE_OAUTH_URL;
  }

  async SignUpUser(userData) {
    try {
      let data = {
        email: userData.Email,
        password: userData.Password,
        username: userData.Email,
        user_metadata: {
          firstName: userData.FirstName,
          DateOfBirth: userData.DateOfBirth
        }
      };

      const userCreateResponse = await Auth.signup(data);
      console.log('created user: ', userCreateResponse);
      return userCreateResponse;
    } catch (err) {
      console.error('Failed to sign up user: ', err);
      throw new Error('Failed to sign up user ' + err.message);
    }
  }

  // async listAllFamiliesForMember(id) {
  //   try {
  //     return JSON.parse(await this.get(`member/${id}/family`));
  //   } catch (err) {
  //     console.error('BFF - Failed to get list of families by member :', err);
  //     throw new Error(
  //       'BFF - Failed to get list of families by member' + err.message
  //     );
  //   }
  // }

  // MUTATIONS

  async createFamily(familyData) {
    try {
      return JSON.parse(await this.post('family', JSON.stringify(familyData)));
    } catch (err) {
      console.error('BFF - Failed to create family :', err);
      throw new Error('BFF - Failed to create family' + err.message);
    }
  }
};
