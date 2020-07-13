import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
//-->Navbar
	import {Navbar, Nav, NavbarBrand, NavLink, NavDropdown,Form, FormControl, Button} from 'react-bootstrap';
	import {Link} from 'react-router-dom';
//<--

//->Logo
	import logo from '../logo.png';
//<--

//-> CSS
	import '../App.css';
//<--

//-> Bootstrap
	import 'bootstrap/dist/css/bootstrap.min.css';
//<--
//->Icons
	import {FaInstagram} from 'react-icons/fa';
	import {FaFacebook} from 'react-icons/fa';
//<--

class Header extends Component{
	constructor(props){
		super(props);
	}

	scrollToRef(ref=''){
		var elmnt = document.getElementById(ref);
	  	this.props.history.push('/'+ref);
	  	if(ref.length == 0){
	  		window.scrollTo(0, 0);
	  	}else{
	  		elmnt.scrollIntoView();
	  	}
	}

	render(){
		return(
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home"><img src={logo}/>J & A Hair Studio</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Link className="nav-link" onClick={()=>this.scrollToRef('')}>Home</Link>
					<Nav.Link onClick={()=>this.scrollToRef('team')}>Our Team</Nav.Link>
					<Nav.Link onClick={()=>this.scrollToRef('gallery')}>Gallery</Nav.Link>
					<Nav.Link onClick={()=>this.scrollToRef('services')}>Services</Nav.Link>
					<Nav.Link onClick={()=>this.scrollToRef('testimonials')}>Testimonials</Nav.Link>
					<Nav.Link onClick={()=>this.scrollToRef('about')}>About</Nav.Link>
					<Nav.Link onClick={()=>this.scrollToRef('contact')}>Contact</Nav.Link>
					<Nav.Link href="https://www.instagram.com/jagtar.haircuts/"><FaInstagram/></Nav.Link>
					<Nav.Link href="https://www.facebook.com/hairstudioja/"><FaFacebook/></Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		)
	}
}
export default withRouter(Header);