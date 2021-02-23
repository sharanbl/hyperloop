import React, { Component } from 'react';
import { Row, Col, Container, Input, Button } from 'reactstrap';
import './HomePage.css';
import start from '../../Assets/start.svg';
import stop from '../../Assets/stop.svg';
import speedup from '../../Assets/speedup.svg';
import speeddown from '../../Assets/break.svg';
import ReactSpeedometer from "react-d3-speedometer";

import AWS from 'aws-sdk';
import awsIoT from 'aws-iot-device-sdk';


// let awsConfig = {
//     identityPoolId: 'us-east-2:dc49bbd2-6a53-4243-827d-9cad0e5444f7',
//     mqttEndpoint: `a1xzn1z3u9o660-ats.iot.us-east-2.amazonaws.com`,
//     region: 'us-east-2',
//     clientId: 'mqtt-client-' + (Math.floor((Math.random() * 100000 + 1))),
//     //userPoolId: process.env.REACT_APP_USER_POOL_ID
//   };
  
//   const mqttClient = awsIoT.device({
//     region: awsConfig.region,
//     host: awsConfig.mqttEndpoint,
//     clientId: awsConfig.clientId,
//     protocol: 'wss',
//     maximumReconnectTimeMs: 8000,
//     debug: false,
//     accessKeyId: '',
//     secretKey: '',
//     sessionToken: ''
//   });
  
//   AWS.config.region = awsConfig.region;
  
//   AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//       IdentityPoolId: awsConfig.identityPoolId
//   });
  
//   AWS.config.credentials.get((err) => {
//       if (err) {
//           console.log(AWS.config.credentials);
//           throw err;
//       } else {
//           mqttClient.updateWebSocketCredentials(
//               AWS.config.credentials.accessKeyId,
//               AWS.config.credentials.secretAccessKey,
//               AWS.config.credentials.sessionToken
//           );
//       }
//   });
  


class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            speed: 100,
            input: '',
        };

        this.speedometer = this.speedometer.bind(this);
     //  this.handlePWM = this.handlePWM.bind(this);
     //   this.handleChange = this.handleChange.bind(this);
    }

   speedometer = () => {

        this.setState({speed: Math.floor(Math.random() * 200)});
   }

//    handlePWM = () => {
//         console.log(this.state.input);
//         // mqttClient.on('connect', () => {
//         //     console.log('mqttClient connected')
//         //     mqttClient.publish('hello/pwm')
//         //   });
          
//         //   mqttClient.on('error', (err) => {
//         //     console.log('mqttClient error:', err)
//         //     //login()
//         //   });
          
//         //   mqttClient.on('message', (topic, payload) => {
//         //     const msg = JSON.parse(payload.toString());
//         //     console.log('mqttClient message: ', this.state.input);
//         //   });
//         mqttClient.publish('hellp/pwm', JSON.stringify(this.state.input))

//    }

//    handleChange = (e) => {
//         this.setState({input: e.target.value})
//    }

   componentDidMount() {
    setInterval(this.speedometer, 1000);
  }


    render() {
        return(
            <div className="HomePage">
                <h1 id="IITH">ILLINOIS TECH HYPERLOOP</h1>
                <br />
                <br />
                <Row>
                    <Col md={8}>
                        <Container>
                        <Row>
                            <Col>
                                <a href="#"><img src={start} id="startbtn" alt="start button" /></a>
                            </Col>
                            <Col>
                                 <a href="#"><img src={stop} id="stopbtn" alt="stop button" /></a>
                            </Col>
                        </Row>
                        </Container>

                        <Container id="rpmcontainer">
                            <br /><br />
                            <div id="rpm">
                            <ReactSpeedometer height={200}/>
                            <h3 id="rpmtext">RPM</h3>
                            </div>
                        </Container>

                        <Container>
                            <Input placeholder="PWM from min value: 700 to max value: 2000" type="number" min={700} max={2000} onChange={this.handleChange }/><Button onClick={this.handlePWM}>Submit</Button>
                        </Container>

                        {/* <Container id="speedicon">
                            <Row>
                            <a href="#"><img src={speedup} id="speedup" alt="speed up" /></a>
                            </Row>
                            <br />
                            <Row>
                            <a href="#"><img src={speeddown} id="speeddown" alt="speed down" /></a>
                            </Row>
                        </Container> */}
                    </Col>

                    <Col md={4} id="meters">
                    <ReactSpeedometer height={150} width={250} value={this.state.speed}/>
                    <h6>Speedometer</h6>
                    <br />
                    <ReactSpeedometer height={150} width={250}/>
                    <h6>Gyrometer</h6>
                    <br />
                    <ReactSpeedometer height={150} width={250}/>
                    <h6>Speed</h6>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default HomePage;