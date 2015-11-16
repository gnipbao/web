import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
const nodeEnv = process.env.NODE_ENV;

const environments = {
  production: argv.production || nodeEnv === 'production',
  staging: argv.staging || nodeEnv === 'staging',
  test: argv.test || nodeEnv === 'test'
};

const environmentName = Array.find(Object.keys(environments), (el) => environments[el]) || 'development';
environments.development = argv.development || environmentName === 'development';

export default { environments, environmentName };
