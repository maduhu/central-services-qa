const Variables = require('./variables')

module.exports = {
  registry: {
    name: 'central-end-user-registry',
    imageTag: 'v0.7.0',
    environment: [
      {
        name: 'CREG_DATABASE_URI',
        value: `postgres://${Variables.registry.db.user}:${Variables.registry.db.password}@${Variables.registry.db.host}:5432/${Variables.registry.db.database}`
      },
      {
        name: 'CREG_HOSTNAME',
        value: Variables.registry.hostname
      }
    ],
    desiredCount: 1,
    port: Variables.registry.port,
    image: `${Variables.aws_account_id}.dkr.ecr.${Variables.region}.amazonaws.com/${Variables.registry.image}`
  }
}