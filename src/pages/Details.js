import { useParams } from 'react-router-dom';
import classes from './Details.module.css';
import Card from '../components/UI/Card';
import { useSelector } from 'react-redux';
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";

const Details=()=>{

    const params=useParams();
    const getId=params.id
    const data=useSelector(state=>{return state.items?.filter((item)=>
        item._id===getId
    )})

    if(data.length===0){
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
        arrows:true,
        centerMode:true,
        drggable:true
      };
    
    return(
        <Card>
        <h2 className={classes.detail}>{data[0].name}</h2>
        
        <Slider 
          className={classes.slider}
          {...settings} 
          >
          <div>
          <img src={`data:image/jpeg;base64,${data[0].image1}`} alt="Image1" />
          </div>
          <div>
          <img src={`data:image/jpeg;base64,${data[0].image2}`}  alt="Image2"/>
          </div>
          <div>
          <img src={`data:image/jpeg;base64,${data[0].image3}`}  alt="Image3"/>
          </div>
          </Slider>
          <div className={classes.price}>${parseInt(data[0].price)}</div>
        </Card>
    )
}

export default Details;