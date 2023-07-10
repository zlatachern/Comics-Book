import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import comicOne from '../../images/img_comics/comics_1.jpg';
import comicThree from '../../images/img_comics/comics_3.jpg';
import comicTwo from '../../images/img_comics/comics_2.jpg';
import frameOne from '../../images/img_frames/frame_1.jpg';
import frameTwo from '../../images/img_frames/frame_2.jpg';
import frameThree from '../../images/img_frames/frame_3.jpg';
import frameFour from '../../images/img_frames/frame_4.jpg';
import frameFive from '../../images/img_frames/frame_5.jpg';
import frameSix from '../../images/img_frames/frame_6.jpg';
import frameSeven from '../../images/img_frames/frame_7.jpg';
import frameEight from '../../images/img_frames/frame_8.jpg';
import frameEleven from '../../images/img_frames/frame_11.jpg';
import frameThirteen from '../../images/img_frames/frame_13.jpg';
import frameFourteen from '../../images/img_frames/frame_14.jpg';
import './gallery.scss';

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="carousel-container">
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
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={comicTwo} alt="Comic Two" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={frameSix} alt="Frame Six" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={frameSeven} alt="Frame Seven" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={frameEight} alt="Frame Eight" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={comicOne} alt="Comic One" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={frameEleven} alt="Frame Eleven" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={frameThirteen} alt="Frame Thirteen" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={frameFourteen} alt="Frame Fourteen" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;




