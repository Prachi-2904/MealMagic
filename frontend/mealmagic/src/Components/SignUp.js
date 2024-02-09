import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const SignUp = () => {
  return (
    <div style={{ paddingTop: '160px', background: '#F8B72B' }}>
      <div style={{ padding: '30px', textAlign: 'center', color: '#493305', textShadow: '1px 1px 2px #0000' }}>
        <h1 style={{ fontFamily: 'cursive', fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
          👨‍🍳 Ready to whip up magic in the kitchen or just here to admire the delicious chaos?
          <br />
          Choose your role! 🎉
        </h1>
        <p style={{ fontSize: '2.5rem' }}>
          Select your culinary alter ego and let the flavor fiesta begin!
          <br />
          Remember, the only thing we take seriously is the food - everything else is just sauce on the side! 😄🍕
        </p>
      </div>

      <Container>
        <Row className="mb-5">
          <Col sm={5}>
            <h3><Link to='/chefregister'>🎩 Culinary Sorcerer (aka Chef)</Link></h3>
            <div className="img-wrapper">
              <Link to="/chefregister">
                <img className="inner-img img-fluid" src="./images/chef1.jpg" alt="Chef" />
              </Link>
            </div>
          </Col>
          <Col sm={5}>
            <h3><Link to='/userregister'>🍔 Foodie Fanatic (aka Hungry Human)</Link></h3>
            <div className="img-wrapper">
              <Link to="/userregister">
                <img className="inner-img img-fluid" src="./images/foodie.jpg" alt="Foodie" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
