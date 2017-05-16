const environment = process.env.ENVIRONMENT || 'QA';
const dbHost = process.env.DB_HOST || 'ec2-35-164-236-164.us-west-2.compute.amazonaws.com';
const dbPassword = process.env.DB_PASSWORD || 'password';

module.exports = {
  aws_account_id: process.env.AWS_ACCOUNT_ID || 886403637725,
  cluster: process.env.CLUSTER || 'central-services',
  region: process.env.AWS_REGION || 'us-west-2',
  registry: {
    db: {
      host: process.env.CREG_DB_HOST || dbHost,
      user: process.env.CREG_DB_USER || 'central_end_user_registry',
      password: process.env.CREG_DB_PASSWORD || dbPassword,
      database: process.env.CREG_DB_DATABASE || 'central_end_user_registry'
    },
    hostname: process.env.CREG_HOSTNAME || 'http://central-end-user-registry-1833170602.us-west-2.elb.amazonaws.com',
    port: process.env.CREG_PORT || 3001,
    image: 'leveloneproject/central-end-user-registry'
  },
  directory: {
    db: {
      host: process.env.CDIR_DB_HOST || dbHost,
      user: process.env.CDIR_DB_USER || 'central_directory',
      password: process.env.CDIR_DB_PASSWORD || dbPassword,
      database: process.env.CDIR_DB_DATABASE || 'central_directory'
    },
    hostname: process.env.CDIR_HOSTNAME || 'http://central-directory-214462011.us-west-2.elb.amazonaws.com',
    port: process.env.CDIR_PORT || 3000,
    image: 'leveloneproject/central-end-user-registry'
  }
}
