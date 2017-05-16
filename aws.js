'use strict'

const AWS = require('aws-sdk')
const Promise = require('bluebird')
const Exec = Promise.promisify(require('child_process').exec)
const Variables = require('./variables')

const configureAws = () => {
  return Exec(`aws configure set default.region ${Variables.region}`)
    .then(r => {
      return AWS.config.update({ region: Variables.region })
    })
}

module.exports = {
  configureAws
}
