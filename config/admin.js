module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: 'AtUFfl/nKmK/hm22g+VsZmg==',
  },
});
