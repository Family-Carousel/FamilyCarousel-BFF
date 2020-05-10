'use strict';
const AuthenticationClient = require('auth0').AuthenticationClient;

const auth0 = new AuthenticationClient({
  domain: process.env.FAMILY_SERVICE_OAUTH_URL,
  clientId: process.env.FAMILY_SERVICE_OAUTH_CLIENTID,
  clientSecret: process.env.FAMILY_SERVICE_OAUTH_CLIENTSECRET,
});

module.exports = {
  getAuthToken: async () => {
    try {
      let response = await auth0.clientCredentialsGrant({
        audience: process.env.FAMILY_SERVICE_AUDIENCE_URL,
      });

      return response.access_token;
    } catch (err) {
      console.error('BFF - Failed to get auth token: ', err);
      throw new Error('BFF - Failed to get auth token: ' + err.message);
    }
  },
};
