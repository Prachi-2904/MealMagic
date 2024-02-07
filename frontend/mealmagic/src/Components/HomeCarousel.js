import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  const localImages = [
    'images/food1.jpg',
    'images/food5.jpg',
    'images/food2.jpg',
  ];

  return (
    <div>
    <Carousel style={{ maxWidth: '100%', maxHeight: '550px' }}>
      {localImages.map((imagePath, index) => (
        <Carousel.Item key={index} interval={index === 0 ? 1000 : 500}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/' + imagePath}
            alt={`Slide ${index + 1}`}
            style={{ maxHeight: '550px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>The meals You would like to Try !!! </h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>

    </div>
  );
}

export default HomeCarousel;
