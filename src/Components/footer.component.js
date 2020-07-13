import React,{Component} from 'react';
import {Container, Row, Image, Col} from 'react-bootstrap';
//->Logo
	import logo from '../logo.png';
	import Map from '../images/map.png';
	import Video from '../Components/video.component.js';
//<--
//->Icons
	import {FaMapMarker} from 'react-icons/fa';
	import {FaPhone} from 'react-icons/fa';
	import {FaDirections} from 'react-icons/fa';
	import {FaCalendar} from 'react-icons/fa';
	import {FaInstagram} from 'react-icons/fa';
	import {FaFacebook} from 'react-icons/fa';
//<--

export default class Footer extends Component{
	render(){
		return(
		<Container className = "footer">
			<Row className="middle-row">
				<Col className="footer-col" xs={12} md={8}>
					<img className="footer-image" src={Map}/>
				</Col>

				<Col className="footer-col" xs={12} md={4}>
					<img src={logo}></img>
					<a href="tel:(778) 317-6571"><FaPhone/> (778) 317-6571</a>
					<p><FaMapMarker/>160 Gray Road, Kelowna, BC</p>
					<p>Monday to Sunday: 9:30 AM – 8:00 PM **</p>
					<p>**We are closed on Tuesday</p>
					<div className="footer-links">
						<a href="https://www.google.com/maps/dir//160+Gray+Rd,+Kelowna,+BC+V1X+1W7/@49.8929452,-119.3954328,16z/data=!4m9!4m8!1m0!1m5!1m1!1s0x537d8d3c0af61d8b:0x93e8ff49ffb7216e!2m2!1d-119.3882253!2d49.88822!3e0"><FaDirections/></a>
						<a target="_blank" href="https://www.facebook.com/hairstudioja/"><FaFacebook /></a>
						<a target="_blank" href="https://www.instagram.com/jagtar.haircuts/"><FaInstagram /></a>
					</div>
				</Col>   
			</Row>
			<Container className = "video" id="video">
				<Video/>
				<Row className="bottom-row">
					<p>J&A Hair Studio (React App Designed and Developed by <a href="https://www.karandeepvirk.com">Karandeep Virk</a>)</p>
				</Row>
		    </Container>
		</Container>
		)
	}
}