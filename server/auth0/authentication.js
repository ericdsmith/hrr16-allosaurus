//Authentication for Auth0 Api access
//uses bear scheme
var AUTH0_AUTHENTICATION = 'Bearer ' + process.env.AUTH0_API;
exports.AUTH0_AUTHENTICATION = AUTH0_AUTHENTICATION;
