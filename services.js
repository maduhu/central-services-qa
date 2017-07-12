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
  },
  directory: {
    name: 'central-directory',
    imageTag: 'v0.8.1',
    environment: [
      {
        name: 'CDIR_DATABASE_URI',
        value: `postgres://${Variables.directory.db.user}:${Variables.directory.db.password}@${Variables.directory.db.host}:5432/${Variables.directory.db.database}`
      },
      {
        name: 'CDIR_HOSTNAME',
        value: Variables.directory.hostname
      },
      {
        name: 'CDIR_END_USER_REGISTRY_URL',
        value: Variables.registry.hostname
      }
    ],
    desiredCount: 1,
    port: Variables.directory.port,
    image: `${Variables.aws_account_id}.dkr.ecr.${Variables.region}.amazonaws.com/${Variables.directory.image}`
  },
  ledger: {
    name: 'central-ledger',
    imageTag: 'v1.80.0',
    environment: [
      {
        name: 'CLEDG_DATABASE_URI',
        value: `postgres://${Variables.ledger.db.user}:${Variables.ledger.db.password}@${Variables.ledger.db.host}:5432/${Variables.ledger.db.database}`
      },
      {
        name: 'CLEDG_HOSTNAME',
        value: Variables.ledger.hostname
      },
      {
        name: 'CLEDG_EXPIRES_TIMEOUT',
        value: '5000'
      },
      {
        name: 'CLEDG_ENABLE_BASIC_AUTH',
        value: 'true'
      }
    ],
    desiredCount: 1,
    port: Variables.ledger.port,
    image: `${Variables.aws_account_id}.dkr.ecr.${Variables.region}.amazonaws.com/${Variables.ledger.image}`
  },
  ledger_admin: {
    name: 'central-ledger-admin',
    imageTag: 'v1.80.0',
    environment: [
      {
        name: 'CLEDG_DATABASE_URI',
        value: `postgres://${Variables.ledger.db.user}:${Variables.ledger.db.password}@${Variables.ledger.db.host}:5432/${Variables.ledger.db.database}`
      },
      {
        name: 'CLEDG_HOSTNAME',
        value: Variables.ledger.hostname
      },
      {
        name: 'CLEDG_EXPIRES_TIMEOUT',
        value: '5000'
      }
    ],
    desiredCount: 1,
    port: Variables.ledger_admin.port,
    image: `${Variables.aws_account_id}.dkr.ecr.${Variables.region}.amazonaws.com/${Variables.ledger_admin.image}`
  }
}
