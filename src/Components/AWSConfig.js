import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
const AWS = require('aws-sdk');
const AWSIoTData = require('aws-iot-device-sdk');

let awsConfig = {
  identityPoolId: 'us-east-2:dc49bbd2-6a53-4243-827d-9cad0e5444f7',
  mqttEndpoint: `a1xzn1z3u9o660-ats.iot.us-east-2.amazonaws.com`,
  region: 'us-east-2',
  clientId: 'mqtt-client-' + (Math.floor((Math.random() * 100000 + 1))),
  //userPoolId: process.env.REACT_APP_USER_POOL_ID
};

const mqttClient = AWSIoTData.device({
  region: awsConfig.region,
  host: awsConfig.mqttEndpoint,
  clientId: awsConfig.clientId,
  protocol: 'wss',
  maximumReconnectTimeMs: 8000,
  debug: false,
  accessKeyId: '',
  secretKey: '',
  sessionToken: ''
});

AWS.config.region = awsConfig.region;

AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: awsConfig.identityPoolId
});

AWS.config.credentials.get((err) => {
    if (err) {
        console.log(AWS.config.credentials);
        throw err;
    } else {
        mqttClient.updateWebSocketCredentials(
            AWS.config.credentials.accessKeyId,
            AWS.config.credentials.secretAccessKey,
            AWS.config.credentials.sessionToken
        );
    }
});

mqttClient.on('connect', () => {
  console.log('mqttClient connected')
  mqttClient.subscribe('helloworld')
});

mqttClient.on('error', (err) => {
  console.log('mqttClient error:', err)
  //login()
});

mqttClient.on('message', (topic, payload) => {
  const msg = JSON.parse(payload.toString());
  console.log('mqttClient message: ', msg);
});

class AWSConfig extends Component {
    render() {
        return (
            <div>
                <h1>Realtime Weather</h1>
                <p>Check the console..</p>
            </div>
        );
    }
}

export default AWSConfig;
