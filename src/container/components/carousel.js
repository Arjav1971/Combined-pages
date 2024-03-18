import React, { useState  , useEffect} from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import image from '../../assets/image.svg'

import "../style/carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut  = null ;

  useEffect(()=>
  {
    timeOut = autoPlay && setTimeout(() =>{
      nextSlide();
    },1000)
  });


  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel" onMouseEnter={() => {setAutoPlay(false)}} onMouseLeave={() => {setAutoPlay(true)}}>
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img
            src={image}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
      <div className="text-gray-50 font-light text-xl font-Raleway">Manage your business like never before</div>
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
