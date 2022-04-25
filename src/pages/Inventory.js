import ProductItem from '../components/ProductItem';
import classes from './Inventory.module.css';
import { useState,useEffect,useMemo} from 'react';
import { useAlert } from 'react-alert'
import LoadingSpinner from "../components/UI/LoadingSpinner"
import { useSelector,useDispatch} from 'react-redux';
import { Fragment } from 'react/cjs/react.production.min';
import { stateActions } from '../store/store';
import SearchInput, {createFilter} from 'react-search-input'
import { useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';




const Inventory = (props) => {
  const location = useLocation()

  const [searchTerm,setTerm]=useState("");
  const [reachCount,setCount]=useState(false)
  const [focused,setFocus]=useState(false)
  const [data,setData]=useState([])
  const [filteredData,setFiltered]=useState([])

  const axios = require('axios');
  const alert=useAlert();
  
  const dispatch=useDispatch()
  const count=useSelector(state=>state.count)
  const storedData=useSelector(state=>state.items)

  
  


useEffect(()=>{
  if(!storedData){
    // axios.get('http://localhost:3001/realestate')
    axios.get('https://mybackend1.herokuapp.com/realEstate')
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

useMemo(()=>{
   if(count===storedData?.length){
    setCount(true)
  }
},
[storedData,count])

useEffect(() => {
    // runs on location, i.e. route, change
    dispatch(stateActions.reset())
    setData(storedData)
    // console.log('handle route change here', location)
  }, [location])


useMemo(()=>{
  if(focused){
    setFiltered(Object.values(storedData)?.filter(obj=>obj.name.toLowerCase()?.includes(searchTerm.toLowerCase())))
    if (filteredData?.length>6){
      setFiltered(filteredData?.slice(0,6))
    }
    if(searchTerm.length===0){
      setFiltered([])
    }
  }
 }
,
[searchTerm,focused])


useEffect(()=>{
  if(storedData&&focused){
    setData(storedData)
  }
},[storedData,focused])



const filtering=(id)=>{
  const clickedItem=filteredData?.find((obj)=>obj._id===id)

  setData([clickedItem])
  const scroll=document.getElementById('scroll')
  scroll.scrollIntoView({behavior:'smooth'})
  setFocus(false)
}

return (
    <Fragment>
     <div className='centered' style={{display:reachCount?'none':'block'}}>
              <LoadingSpinner />
     </div>
     <div style={{display:reachCount?'block':'none'}}>
        <SearchInput className={isMobile?classes.media:classes.serachinput}  onFocus={()=>setFocus(true)} onChange={(input)=>setTerm(input)} />
        {(focused&&filteredData.length>0)?(filteredData.map(items => {
          return (
            <div className= {isMobile?classes.mediaSearchBar:classes.searchBar} key={items._id} onClick={()=>filtering(items._id)}> 
              <h5 >{items.name}</h5>
              <img src={`data:image/jpeg;base64,${items.image1}`}  alt="Image1"/>
              {/* <h5 >{items.brand}</h5> */}
              <h5 >${items.price}</h5>
            </div>
          )
        })):((filteredData.length===0&&focused&&searchTerm)?<div className= {classes.noresult}><h5 >No result found</h5></div>:null)}
      </div>
     <h2>Inventory</h2>
     <section className={classes.products} style={{display:reachCount?'block':'none'}}>
        <ul id="scroll">
          {(data)?.map(product=><ProductItem
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