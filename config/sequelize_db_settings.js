module.exports = {
  username: process.env.DEVOPS_TEST_DATABASE_USERNAME || 'postgres',
  password: process.env.DEVOPS_TEST_DATABASE_PASSWORD || 'D@mep3rmiso',
  database: process.env.DEVOPS_TEST_DATABASE_NAME || 'postgres',
  host: process.env.DEVOPS_TEST_DATABASE_HOST || 'devops-global-postgres',
  dialect: 'postgres',
};
