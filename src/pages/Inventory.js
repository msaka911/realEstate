import ProductItem from '../components/ProductItem';
import classes from './Inventory.module.css';
import { useState,useEffect } from 'react';
import { useAlert } from 'react-alert'
import LoadingSpinner from "../components/UI/LoadingSpinner"

const axios = require('axios');


const Inventory = (props) => {
  const alert=useAlert();
  const [data,setData]=useState([])


  useEffect(()=>{
    // axios.get('https://mybackend1.herokuapp.com/realestate')
    axios.get('http://localhost:3001/realestate')
  .then(function (response) {
    console.log(response.data)
    setData(response.data)})
    
  .catch(function (error) {
    alert.error("cannot load the page")
  })
  },[alert])

//   if(loading){
//      return(
//         <div className='centered'>
//            <LoadingSpinner />
//         </div>
//      ) 
//   }


  return (
    <section className={classes.products}>
      <h2>Inventory</h2>
      {/* <img src={`data:image/jpeg;base64,${data}`}  height="200" width="200" alt="Image"/> */}
      <ul>
        {data.map(product=><ProductItem
          key={product._id}
          id={product._id}
          title={product.name}
          price={product.price}
          brand={product.brand}
          description={product.description}
          image1={product.image1}
          image2={product.image2}
          image3={product.image3}
        />)}
      </ul>
    </section>
  );
};

export default Inventory;