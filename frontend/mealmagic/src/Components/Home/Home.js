import React from 'react';
import HomeCarousel from './HomeCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const buttonStyle = {
    marginRight: '15px', // Adjust the right margin as needed
  };
  const navigate= useNavigate();
   function handleSignUpClick(){
    navigate("/chefregister");
  } 
  return (
    <div style={{ paddingTop: '150px' ,background:'#D4A84A' }}>
      <HomeCarousel />
      
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <h1 style={{fontFamily:'-moz-initial', fontPalette:'dark'}} className='fw-bolder'>
              Find and book <br />Chef on Any<br /> Occasions.
            </h1>
          </div>
          <span className='col-md-5' d-flex>
            <p style={{fontPalette:'dark'}}> Discover talented chefs in your area and enjoy delicious meal tailored to your preferences . Wheather it is special event or a regular one . MagicMeal has you covered </p>
            <Button variant="dark" style={buttonStyle}>Explore Now</Button> 
            <Button variant="dark" className='=btn' onClick={handleSignUpClick}>Sign Up</Button>

            </span>
        </div>

          </div>
    </div>
  );
}

export default Home;
