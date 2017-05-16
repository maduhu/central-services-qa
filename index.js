'use strict'

const Variables = require('./variables')
const Aws = require('./aws')
const services = require('./services')
const ecs = require('./ecs')

const createTaskDefinition = (service) => {
  return {
    containerDefinitions: [
      {
        name: service.name,
        image: `${service.image}:${service.version}`,
        essential: true,
        memoryReservation: 200,
        portMappings: [
          {
            containerPort: service.port
          }
        ],
        environment: service.environment,
        logConfiguration: {
          logDriver: 'syslog',
          options: {
            'syslog-address': 'tcp://127.0.0.1:514',
            'syslog-facility': 'daemon',
            'tag': service.name
          }
        }
      } 
    ],
    family: service.name
  }
}

const deployServices = () => {
  Object.keys(services).forEach((serviceKey) => {
    const service = services[serviceKey]
    const taskDefinition = createTaskDefinition(service)
    ecs.registerTaskDefinition(taskDefinition)
      .then(t => ecs.deployService(Variables.cluster, service.name, t, service.desiredCount))
  })
}

Aws.configureAws()
  .then(() => deployServices())
