import { useParams } from 'react-router-dom';
import classes from './Details.module.css';
import Card from '../components/UI/Card';
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import { isMobile } from 'react-device-detect';
import { useAlert } from 'react-alert'

const Details=()=>{
    const [storedData,setData]=useState([]);

    const params=useParams();
    const getId=params.id


    const axios = require('axios');
    const alert=useAlert();
//----------------------find one detail------------------
    useEffect(()=>{
        // axios.get('http://localhost:3001/realestate')
        axios.get(`https://mybackend1.herokuapp.com/realEstate/details/${getId}`)
        .then(function (response) {
            setData(response.data)
            })
        .catch(function (error) {
            alert.error("cannot load the item")
        })
        },[])

    if(storedData.length===0){
        return(<div sytle={{color:"white"}}>No such product</div>)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        autoplay: true,
        arrows:isMobile?false:true,
        drggable:true
      };
    
    return(
        <Card>
        <h2 className={classes.detail}>{storedData[0].name}</h2>
        
        <Slider 
          className={classes.slider}
          {...settings} 
          >
          <div>
          <img src={`data:image/jpeg;base64,${storedData[0].image1}`} alt="Image1" />
          </div>
          <div>
          <img src={`data:image/jpeg;base64,${storedData[0].image2}`}  alt="Image2"/>
          </div>
          <div>
          <img src={`data:image/jpeg;base64,${storedData[0].image3}`}  alt="Image3"/>
          </div>
          </Slider>
          <div className={classes.price}>${parseInt(storedData[0].price)}</div>
        </Card>
    )
}

export default Details;