'use strict';
const axios = require('axios');

module.exports = {
  getAuthToken: async () => {
    try {
      const url = 'https://' + process.env.FAMILY_SERVICE_OAUTH_URL + '/oauth/token';

      const body = {
        grant_type: 'client_credentials',
        client_id: process.env.FAMILY_SERVICE_OAUTH_CLIENTID,
        client_secret: process.env.FAMILY_SERVICE_OAUTH_CLIENTSECRET,
        audience: process.env.FAMILY_SERVICE_AUDIENCE_URL
      };

      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const authResponse = await axios.post(url, body, options);

      return authResponse.data.access_token;
    } catch (err) {
      console.error('BFF - Failed to get auth token: ', err);
      throw new Error('BFF - Failed to get auth token: ' + err.message);
    }
  }
};
