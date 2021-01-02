import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './HomePage.css';
import start from '../../Assets/start.svg';
import stop from '../../Assets/stop.svg';
import speedup from '../../Assets/speedup.svg';
import speeddown from '../../Assets/break.svg';
import ReactSpeedometer from "react-d3-speedometer"


class HomePage extends Component {


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

                        <Container id="speedicon">
                            <Row>
                            <a href="#"><img src={speedup} id="speedup" alt="speed up" /></a>
                            </Row>
                            <br />
                            <Row>
                            <a href="#"><img src={speeddown} id="speeddown" alt="speed down" /></a>
                            </Row>
                        </Container>
                    </Col>

                    <Col md={4} id="meters">
                    <ReactSpeedometer height={150} width={250}/>
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