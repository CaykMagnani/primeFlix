import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarrosselResponsivo = () => {
  return (

    <Carousel className='carrossel'>
      <div className='imagemCarrosel'>
        <img src="" alt="Imagem 1" />
      </div>
      <div className='imagemCarrosel'>
        <img src="" alt="Imagem 2" />
      </div>
      <div className='imagemCarrosel'>
        <img src="" alt="Imagem 3" />
      </div>
    </Carousel>

  );
};

export default CarrosselResponsivo;