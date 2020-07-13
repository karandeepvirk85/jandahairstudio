import React, {Component} from 'react';
import "video-react/dist/video-react.css"; // import css
//->Node Modules
	import {Carousel, CarouselItem, CarouselCaption, Container, Row, Image, Col} from 'react-bootstrap';
//<--
//-->Images
	//->Slides
		import slide1 from '../images/s1.jpg';
		import slide2 from '../images/s2.jpg';
		import slide3 from '../images/s3.jpg';
	//->Testimonials
		import T1 from '../images/T1.jpg';
		import T2 from '../images/T2.jpg';
		import T3 from '../images/T3.jpg';
		import T4 from '../images/T4.jpg';
		import T5 from '../images/T5.jpg';
		import TX from '../images/TX.png';
	//->Services
		import Hair from '../images/Hair.jpg';
		import Shave from '../images/Shave.jpg';
		import Trimming from '../images/Trimming.jpg';
	//->Team
		import Jagtaar from '../images/Jagtaar.jpg';
		import Avtaar from '../images/Avtaar.jpg';
//<--
		
//-->Sub Components
	//->Social
		import Instagram from '../Components/instagram.component.js'; 
		import FacebookPosts from '../Components/facebookposts.component.js';
	//->Gallery
		import Gallery from '../Components/gallery.component.js';
		import Contact from '../Components/contact.component.js';
//<--

export default class Home extends Component{
	render(){
		return(
		    <>
		        <Carousel>
		            <Carousel.Item>
		                <img
		                    className="d-block w-100"
		                    src={slide1}
		                    alt="First slide"
		                />
		            </Carousel.Item>

		            <Carousel.Item>
		                <img
		                    className="d-block w-100"
		                    src={slide2}
		                    alt="Third slide"
		                />
		            </Carousel.Item>

					<Carousel.Item>
		                <img
		                    className="d-block w-100"
		                    src={slide3}
		                    alt="Third slide"
		                />
		            </Carousel.Item>
		        </Carousel>

		        <div className = "home-container">            
		            <Container className = "services" id="services">
		                <h1>WHAT DO WE DO?</h1> 
		                <Row>
		                    <Col xs={12} md={4}>
		                        <div className="services-image" style={{backgroundImage:'url('+Hair+')'}}>
		                            <span>$15</span>
		                        </div>
		                        <h3 className="services-label">Hair Cut</h3>
		                    </Col>
		                    <Col xs={12} md={4}>
		                        <div className="services-image" style={{backgroundImage:'url('+Shave+')'}}>
		                            <span>$10</span>
		                        </div>
		                        <h3 className="services-label">Shaving</h3>
		                    </Col>
		                    <Col xs={12} md={4}>
		                        <div className="services-image" style={{backgroundImage:'url('+Trimming+')'}}>
		                            <span>$10</span>
		                        </div>
		                        <h3 className="services-label">Trimming</h3>
		                    </Col>
		                </Row>
		            </Container>
		            

		            <Container className = "about" id="about">
		                <h1>WHO WE ARE?</h1>
		                <Row>
		                    <Col xs={12} md={12}>
		                        <h2>Jagtaar and Avtaar Hair Studio is an amazing barbershop located in the heart of Rutland Kelowna.</h2>
								<p>We sanitize our tools and clean our shop after every customer. We use high quality sanitizing materials. We have Indian and Canadian all types of entertainment. we also have kids channel to entertain your kids while you are busy.</p>
								<p>We are located in Rutland, Kelowna. We are famous for hairstyles and makeup and often visited by celebrities. We provide services by using trusted brands. Our services include precision haircuts & style, hair extensions, color & highlights, conditioning & smoothing treatments, thermal hair straightening, and perms, we also offer packages for occasions like weddings, proms, and other special events.</p>
								<p>We sanitize our tools and clean our shop after every customer. We use high quality sanitizing materials. We have Indian and Canadian all types of entertainment. we also have kids channel to entertain your kids while you are busy.</p>
								<p>We have been in this business since 1991. We have moved here from Surrey in search of better business and lifestyle. We also offer special bookings on marriages and special family functions.</p>
		                    </Col>
		                </Row>
		            </Container>

		            <Container className = "testimonials" id="testimonials">
		                <h1>WHAT OUR CUSTOMERS SAYS?</h1> 
		                <Row>
		                    <Col xs={12} md={12}>
		                        <Carousel>
		                            <Carousel.Item>
		                               <div className="upper-row"></div>
		                                <img
		                                    className="d-block w-100"
		                                    src={T1}
		                                    alt="Jashan Mavi"
		                                />
		                                <div className="bottom-row">
		                                    <h2>Jashan Mavi</h2>
		                                    <hr/>
		                                    <p>Positive: Cleanliness, Professionalism, Punctuality, Quality, Value
											<br/>Great service at best prices. Cant beat the quality of work and prices.👌🏼👌🏼👌🏼👌🏼</p>
		                                </div>
		                            </Carousel.Item>

		                            <Carousel.Item>
		                                <div className="upper-row"></div>
		                                <img
		                                    className="d-block w-100"
		                                    src={T2}
		                                    alt="Harpreet Singh Sahi"
		                                />
		                                <div className="bottom-row">
		                                    <h2>Harpreet Singh Sahi</h2>
		                                    <hr/>
		                                    <p>Great service...They take proper precautions for the safety of customers.</p>
		                                </div>
		                            </Carousel.Item>

		                            <Carousel.Item>
		                               <div className="upper-row"></div>
		                                <img
		                                    className="d-block w-100"
		                                    src={T3}
		                                    alt="Karandeep Virk"
		                                />
		                                <div className="bottom-row">
		                                    <h2>Karandeep Virk</h2>
		                                    <hr/>
		                                    <p>I really enjoy the environment of the shop. They use very good Punjabi music for entertainment. Prices are cheap too of hair cut and for other services.I never found any parking problem and the shop is surrounded by nice Indian Restaurants. </p>
		                                </div>	
		                            </Carousel.Item>

		                            <Carousel.Item>
		                               <div className="upper-row"></div>
		                                <img
		                                    className="d-block w-100"
		                                    src={T4}
		                                    alt="Angad Virk"
		                                />
		                                <div className="bottom-row">
		                                    <h2>Angad Virk</h2>
		                                    <hr/>
		                                    <p>I have been visiting them from last one year and everytime they maintain their service like the first day, both of the guys are polite , good service and very professional in their service.</p>
		                                </div>	
		                            </Carousel.Item>

		                            <Carousel.Item>
		                               <div className="upper-row"></div>
		                                <img
		                                    className="d-block w-100"
		                                    src={T5}
		                                    alt="MC"
		                                />
		                                <div className="bottom-row">
		                                    <h2>MC</h2>
		                                    <hr/>
		                                    <p>I love coming here, these guys are so friendly and great barbers. Amazing prices too! I would recommend to anyone looking for high-quality haircuts!</p>
		                                </div>	
		                            </Carousel.Item>

		                            <Carousel.Item>
		                               <div className="upper-row"></div>
		                                <img
		                                    className="d-block w-100"
		                                    src={TX}
		                                    alt="Rajwinder Singh"
		                                />
		                                <div className="bottom-row">
		                                    <h2>Rajwinder Singh</h2>
		                                    <hr/>
		                                    <p>HIGHLY SKILLED HAIRDRESSERS .NEAT AND CLEAN SHOP. AWESOME ATMOSPHERE.DECENT PRICE.HAVE GOOD SENCE OF HUMOROUS</p>
		                                </div>	
		                            </Carousel.Item>

		                        </Carousel>
		                    </Col>
		                </Row>
		            </Container>

		            <Container className = "team" id="team">
		                <h1>OUR TEAM</h1>
		                <Row>
		                    <Col xs={12} md={6}>
		                        <img
		                            className="d-block w-100"
		                            src={Jagtaar}
		                            alt="Jagtar Singh"
		                        />
		                        <h2>JAGTAR SINGH</h2>
		                    </Col>
		                    <Col xs={12} md={6}>
		                        <img
		                            className="d-block w-100"
		                            src={Avtaar}
		                            alt="Avatar Singh"
		                        />
		                        <h2>AVTAR SINGH</h2>
		                    </Col>            
		                </Row>
		            </Container>

		            <Container className = "gallery" id="gallery">
		                <h1>OUR STYLES</h1>
		                <Row>
		                    <Col xs={12} md={12}>
		                        <Gallery/>
		                    </Col>            
		                </Row>
		            </Container>

		            <Container className = "social" id="social">
						<h1 className="text-center">Instagram</h1>
						<Instagram/>
						<h1 className="text-center">Facebook</h1>
						<FacebookPosts/>
		            </Container>

					
					<Container className = "contact" id="contact">
		                <h1>Drop a message</h1>
		                <Row>
		                    <Col xs={12} md={12}>
		                        <Contact/>
		                    </Col>            
		                </Row>
		            </Container>
		        </div>
		    </>
		)
	}
}