import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import VideoSrc from "../intro.mp4";
import VideoSrc2 from "../intro2.mp4";
export default class Video extends Component {
    render(){
        return (
            <Row>
                <Col xs={12} md={12}>
                    <video loop autoPlay muted>
                        <source src={VideoSrc} type="video/mp4" />
                    </video>
                </Col>
            </Row>
        )
    }
}