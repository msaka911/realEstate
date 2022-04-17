import classes from './ProductItem.module.css';


import React, {useState } from "react";
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";

const ProductItem = (props) => {
  const { title, price, description,brand,image1,image2,image3 } = props;
  
  const [nav1,setSlider1]=useState("")
  const [nav2,setSlider2]=useState("")


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: false,
  };


  //---------adding active dots----------

  return (
    <li className={classes.item}>
      <div className={classes.card}>
        <header>
          <h3 >{title}</h3>
          <h5 >{brand}</h5>
        </header>
        <div className={classes.container}>
      <Slider 
          {...settings} 
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}>
          <div>
          <img src={`data:image/jpeg;base64,${image1}`} alt="Image1"/>
          </div>
          <div>
          <img src={`data:image/jpeg;base64,${image2}`}  alt="Image2"/>
          </div>
          <div>
          <img src={`data:image/jpeg;base64,${image3}`}  alt="Image3"/>
          </div>
          </Slider>
        <div className={classes.slider2}>
        <Slider
          asNavFor={nav1}
          ref={slider => (setSlider2(slider))}
          slidesToShow={2.65}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
        >          
        <div>
        <img src={`data:image/jpeg;base64,${image1}`}  alt="Image1"/>
        </div>
        <div>
        <img src={`data:image/jpeg;base64,${image2}`}  alt="Image2"/>
        </div>
        <div>
        <img src={`data:image/jpeg;base64,${image3}`}  alt="Image3"/>
        </div>
        </Slider>
        </div>
        </div>
          <p>{description}</p>
          <div className={classes.price}>${parseInt(price.substring(2))}</div>
          <div className={classes.actions}>
        {/* <button onClick={adding}>Adding to quote cart</button> */}
        </div>
      </div>
    </li>
    
  );
};

export default ProductItem;