import React, {Component} from 'react';
import{Row, Col, Form, Button, Alert} from 'react-bootstrap';
import axios from 'axios';

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            message:''
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    
    handleFormSubmit(event){
        event.preventDefault();
        const objData           = new FormData(event.target);
        const strName           = objData.get('name');
        const strMessage        = objData.get('message');
        if(strName.length==0 || strMessage.length==0){
            alert('Please Fill Both Fields');
        }else{
            axios({
                method: 'post',
                url: 'https://jandahairstudio.ca/api/mail.php',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: objData
            })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error => this.setState({ error: error.message }));
        }
    }

    render(){
        return(
            <Row>
                <Col xs={12} md={12}>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Name" />
                        <br/>
                        <Form.Control as="textarea" name="message" rows ="3" />
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>
                    {this.state.mailSent &&
                        <Alert variant="success">
                            <Alert.Heading>Hey, Thanks for contacting us</Alert.Heading>
                            <p>
                                Someone will read this message and will get back to you soon. Please dont hesitate to call if you want to make an appoinment. Please do leave your phone number or email in the message.
                            </p>
                            <hr />
                        </Alert>
                    }
                </Form>
                </Col>
            </Row>
        )
    }
}

function newFunction(error) {
    error = 1;
    return error;
}
