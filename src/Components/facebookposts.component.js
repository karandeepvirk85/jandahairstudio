import React, { Component} from 'react';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import { Row, Col } from 'react-bootstrap';
 
export default class FacebookPosts extends Component {
	render() {
		return (
			<FacebookProvider appId="378244259239209">
				<Row className="fb-row">
					<Col xs={12} md={6}>
						<EmbeddedPost href="https://www.facebook.com/hairstudioja/photos/pcb.282432786456336/282432733123008/?type=3&theater"/>
					</Col>
					<Col xs={12} md={6}>
						<EmbeddedPost href="https://www.facebook.com/hairstudioja/photos/a.115927629773520/196110598421889/?type=3&theater"/>
					</Col>
				</Row>
				<Row className="fb-row">
					<Col xs={12} md={6}>
						<EmbeddedPost href="https://www.facebook.com/hairstudioja/photos/a.115927629773520/201230304576585/?type=3&theater"/>
					</Col>
					<Col xs={12} md={6}>
						<EmbeddedPost href="https://www.facebook.com/hairstudioja/photos/a.115927629773520/199159231450359/?type=3&theater"/>
					</Col>
				</Row>
			</FacebookProvider>
		);
	}
}