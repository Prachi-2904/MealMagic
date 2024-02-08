import React from 'react';
import { Container } from 'react-bootstrap';

const SignUp = () => {
  return (
    <div style={{ paddingTop: '160px', background: '#EBA874' }}>

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
        <div className="row mb-5">
          <div className="row justify-content-center">
            <div className="col-sm-5">
              <h3><a href='/chefregister'>🎩 Culinary Sorcerer (aka Chef)</a></h3>
              <div className="img-wrapper">
                <a href="/chefregister">
                  <img className="inner-img img-fluid" src="./images/chef1.jpg" alt="Chef" />
                </a>
              </div>
            </div>
            <div className="col-sm-5 d-inline" >
            <h3><a href='/userregister'>🍔 Foodie Fanatic (aka Hungry Human)</a></h3>

              <div className="img-wrapper">
                <a href="/userregister">
                  <img className="inner-img img-fluid" src="./images/foodie.jpg" alt="Foodie" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
