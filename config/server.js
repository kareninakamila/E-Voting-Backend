
module.exports = ({ env }) => ({
  host: env('HOST', 'https://evoting.azurewebsites.net/'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
  
});
