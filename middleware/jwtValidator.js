'use strict';
const jwksRsa = require('jwks-rsa-promisified');
const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-lambda');

const client = jwksRsa({
  strictSsl: true, // Default value
  jwksUri:
    'https://' +
    process.env.FAMILY_SERVICE_OAUTH_URL +
    '/.well-known/jwks.json',
});

module.exports = {
  validateJwt: async (token) => {
    try {
      if (!token) {
        return new AuthenticationError('Not authorized');
      }

      const tokenParts = token.split(' ');
      const tokenValue = tokenParts[1];

      if (!(tokenParts[0].toLowerCase() === 'bearer' && tokenValue)) {
        return new AuthenticationError('Not authorized');
      }

      const decodedToken = jwt.decode(tokenValue, { complete: true });

      const key = await client.getSigningKeyAsync(decodedToken.header.kid);

      const publicKey = key.getPublicKey();

      let response = jwt.verify(tokenValue, publicKey, { complete: true });

      if (!response.payload || !response.header || !response.signature) {
        return new AuthenticationError('Not authorized');
      }

      return true;
    } catch (err) {
      console.error('Failed to validate JWT Token: ', err);
      return new AuthenticationError('Not authorised');
    }
  },
};
