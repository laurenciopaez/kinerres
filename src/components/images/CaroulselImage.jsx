import React from 'react';
import Image from 'react-bootstrap/Image';

function ExampleCarouselImage({ text }) {
  return (
    <Image
      className="m-auto pb-3 pt-3 rounded-xl"
      src={`https://source.unsplash.com/1200x700/?${text}`} // Utilizando Unsplash para imágenes de stock
      alt={text}
      fluid
    />
  );
}

export default ExampleCarouselImage;