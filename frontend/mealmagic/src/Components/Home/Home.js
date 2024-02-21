import React from 'react';
import HomeCarousel from './HomeCarousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const buttonStyle = {
    marginRight: '15px', // Adjust the right margin as needed
  };
  const navigate= useNavigate();
  function handleSignUpClick(){
   navigate("/signup");
 };
 function handleFindAllChef(){
  navigate("/findallchef");
};
 

  return (
    <div style={{ paddingTop: '150px', background: '#F8B72B' }}>
      <HomeCarousel />
      <Container className="mt-4" style={{paddingTop:'30px'}}>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <h1 style={{fontFamily:'-moz-initial', fontPalette:'dark'}} className='fw-bolder'>
              Find and book <br />Chef on Any<br /> Occasions.
            </h1>
          </div>
          <span className='col-md-5' d-flex>
            <p style={{fontPalette:'dark'}}> Discover talented chefs in your area and enjoy delicious meal tailored to your preferences . Wheather it is special event or a regular one . MagicMeal has you covered </p>
            <Button variant="dark" style={buttonStyle} onClick={handleFindAllChef}>Explore Now</Button> 
            <Button variant="dark" className='=btn' onClick={handleSignUpClick}>Sign Up</Button>
          </span>
          </div>
      </div>
      </Container>
      <hr/>
      <Container className="mt-4" style={{paddingTop:'30px'}}>
        <Row>
          <Col md={6}>
            <h1 style={{ fontFamily: '-moz-initial', fontPalette: 'dark' }} className="fw-bolder">
              Book Top Chefs Instantly <br /> with MealMagic
            </h1>
            <p style={{ fontPalette: 'dark' ,paddingTop:'30px'}}>
              Discover a world of culinary delights with MealMagic. Our Platform allows you to easily book top chefs for any occasion, wheather it's one-time event or a recurring meal plan. With just a few clicks, you can find chefs based on thier speciality,location and ratings, ensuring that you get the perfect fit for your culinary needs . Leave cooking to the chef's and enjoy a hassle-free dining experience.
            </p>
            <div className="d-flex ml-auto">
                <Button variant="dark" style={buttonStyle}>Learn More</Button>
                <Button variant="dark" className='ml-4' onClick={handleSignUpClick}>Sign-Up</Button>
            </div>
          </Col>
          <Col md={6}>
            <Image src="./images/chef.jpg" fluid thumbnail />
          </Col>
        </Row>
      </Container>
      <hr/>
      <Container style={{paddingTop:'40px', paddingBottom:"30px"}}>
        <Row>
          <Col>
          <Image src="./images/chef2.jpg" fluid thumbnail/>
          </Col>
          <Col>

          <Row>
          <h1 style={{ fontFamily: '-moz-initial', fontPalette: 'dark' }} className="fw-bolder">
          <Nav.Item>
          <Nav.Link href="/findallchef">Discover Chef specialities</Nav.Link>
          </Nav.Item></h1>
          <p>Explore a wide range of chef specialities and find the perfect match for your event or meal...</p>
          </Row>


          <Row style={{paddingTop:"30px"}}>
          <h1 style={{ fontFamily: '-moz-initial', fontPalette: 'dark' }} className="fw-bolder">
          <Nav.Item>
          <Nav.Link href="/happycustomer">Rate and Review Chefs</Nav.Link>
          </Nav.Item></h1>
          <p>Share your experience and help others make informed descisions by rating and reviewing the chefs you've booked.</p>
          </Row>

          <Row style={{paddingTop:"30px"}}>
          <h1 style={{ fontFamily: '-moz-initial', fontPalette: 'dark' }} className="fw-bolder">
          <Nav.Item>
          <Nav.Link href="/findallchef" >Flexible Bookings</Nav.Link>
          </Nav.Item></h1>
          <p>Book chef for one time events, weekly or monthly basis and enjoy the convenience of flexible bookings.</p>
          </Row>
          </Col>


        </Row>
      </Container>
    </div>
  );
};

export default Home;
