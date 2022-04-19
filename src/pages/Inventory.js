import ProductItem from '../components/ProductItem';
import classes from './Inventory.module.css';
import { useState,useEffect,useMemo} from 'react';
import { useAlert } from 'react-alert'
import LoadingSpinner from "../components/UI/LoadingSpinner"
import { useSelector,useDispatch} from 'react-redux';
import { Fragment } from 'react/cjs/react.production.min';
import { stateActions } from '../store/store';
import SearchInput, {createFilter} from 'react-search-input'

const axios = require('axios');


const Inventory = (props) => {
  const [searchTerm,setTerm]=useState("");
  const [reachCount,setCount]=useState(false)
  const [focused,setFocus]=useState(false)
  const [data,setData]=useState([])

  const alert=useAlert();
  const dispatch=useDispatch()
  const count=useSelector(state=>state.count)
  const storedData=useSelector(state=>state.items)

  
  
 
  // console.log(filteredData?.map((items)=>items.name))


  useEffect(()=>{
    
    if(data!=[]){
      // axios.get('http://localhost:3001/realestate')
      axios.get('https://mybackend1.herokuapp.com/realestate')
      .then(function (response) {
        dispatch(stateActions.setItems(response.data),
        setData(response.data),
        console.log("hi")
        )})
      .catch(function (error) {
        alert.error("cannot load the page")
      })
    }
  },[])
  

// useMemo(()=>{
//   if(!data){
//     if(count>15){
//       console.log("count")
//   }
//   }
// },
// [count])



useMemo(()=>{
   if(count>10){
    setCount(true)
  }
},
[data,count])

var filteredData

useMemo(()=>{
  filteredData=Object.values(data)?.filter(obj=>obj.name.toLowerCase()?.includes(searchTerm.toLowerCase()))
  if (filteredData?.length>6){
    filteredData=filteredData?.slice(0,6)
  }
 }
,
[searchTerm])


useEffect(()=>{
  if(storedData&&searchTerm===""){
    setData(storedData)
  }
},[storedData,searchTerm])

console.log(reachCount)


const filtering=(id)=>{
  
  const clickedItem=filteredData?.find((obj)=>obj._id===id)
  

  setData([clickedItem])
  const scroll=document.getElementById('scroll')
  scroll.scrollIntoView({behavior:'smooth'})

  // if(!clickedItem){
  //   console.log("empty")
  //   setData("")
  //   return
  // }
}


return (
    <Fragment>
     <div className='centered' style={{display:reachCount?'none':'block'}}>
              <LoadingSpinner />
     </div>
     <div style={{display:reachCount?'block':'none'}}>
        <SearchInput className={classes.serachinput}  onFocus={()=>setFocus(true)} onChange={(input)=>setTerm(input)} />
        {focused&&searchTerm? (filteredData?.map(items => {
          return (
            <div className= {classes.searchBar} key={items._id} onClick={()=>filtering(items._id)}> 
              <h5 >{items.name}</h5>
              <img src={`data:image/jpeg;base64,${items.image1}`}  alt="Image1"/>
              {/* <h5 >{items.brand}</h5> */}
              <h5 >${items.price}</h5>
            </div>
          )
        })):null}

      </div>
     <section className={classes.products} style={{display:reachCount?'block':'none'}}>
      <h2>Inventory</h2>
        <ul id="scroll">
          {data?.map(product=><ProductItem
            key={product._id}
            id={product._id}
            title={product.name}
            price={product.price}
            brand={product.brand}
            mileage={product.mileage}
            description={product.description}
            image1={product.image1}
            image2={product.image2}
            image3={product.image3}
          />)}
        </ul>
      </section>
    </Fragment>
           )
};

export default Inventory;