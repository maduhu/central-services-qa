'use strict'

const AWS = require('aws-sdk');
const ecs = new AWS.ECS()

const registerTaskDefinition = (definition) => {
  return ecs.registerTaskDefinition(definition).promise()
    .then(result => {
      const revision = result.taskDefinition.taskDefinitionArn
      console.log(`Registered task definition: ${revision}`)
      return revision
    })
}

const deployService = (cluster, service, taskDefinition, desiredCount) => {
  const params = {
    service,
    taskDefinition, 
    cluster,
    desiredCount
  }

  console.log(`Deploying ${taskDefinition} to ${service} on cluster ${clusterName}`)
  return ecs.updateService(params).promise()
    .then(result => result.service.taskDefinition)
}

module.exports = {
  registerTaskDefinition,
  deployService
}
