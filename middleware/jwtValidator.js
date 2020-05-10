'use strict';
const AuthenticationClient = require('auth0').OAuthAuthenticator;

module.exports = {
    validateJwt: async (jwt) => {
        try {
            AuthenticationClient.
        } catch (err) {
            console.error('Failed to validate JWT Token: ', err);
            throw new Error('Failed to validate JWT Token: ' + err.message);
        }
    }
};