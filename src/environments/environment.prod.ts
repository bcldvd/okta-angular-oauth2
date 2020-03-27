export const environment = {
  production: true,
  oktaConfig: {
    issuer: 'https://dev-628596.okta.com/oauth2/default',
    redirectUri: window.location.origin + '/implicit/callback',
    clientId: '0oa4ycbmq5d6IGjRh4x6',
    scopes: ['openid', 'profile'],
    pkce: true,
  },
};
