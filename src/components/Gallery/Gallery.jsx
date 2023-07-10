import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import comicThree from '../../images/img_comics/comics_3.jpg';
import frameOne from '../../images/img_frames/frame_1.jpg';
import frameTwo from '../../images/img_frames/frame_2.jpg';
import frameThree from '../../images/img_frames/frame_3.jpg';
import frameFour from '../../images/img_frames/frame_4.jpg';
import frameFive from '../../images/img_frames/frame_5.jpg';
import './gallery.scss';

const Gallery = () => {
  return (
    <div className="gallery">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={comicThree} alt="Comic Three" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={frameOne} alt="Frame One" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={frameTwo} alt="Frame Two" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={frameThree} alt="Frame Three" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={frameFour} alt="Frame Four" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={frameFive} alt="Frame Five" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Gallery;


