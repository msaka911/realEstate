import {useDispatch,useSelector} from "react-redux"
import { useAlert } from 'react-alert'
import classes from "./Admin.module.css"
import { Fragment } from "react"
import Button from "../components/UI/Button"
import { useRef} from "react"
import { stateActions } from "../store/store"
import { useNavigate } from "react-router-dom"

const Admin=()=>{
    const files=useRef("")
    const price=useRef(0)
    const description=useRef("");
    const name=useRef("");
    const item=useRef("");
    const alert=useAlert();

    const navigate=useNavigate();

    const token=useSelector((state)=>state.token)

   

    const uploadFile=(event)=>{
        event.preventDefault();
        const axios = require('axios');
        const formData = new FormData();
        const file = files.current.files
        formData.append('images',file)
        
        Array.from(file).forEach((element)=>{
            formData.append('images',element)
        })

        formData.append('price',price.current.value)
        formData.append('description',description.current.value)
        formData.append('name',name.current.value)
         
        console.log(token)
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        
        axios.post('https://mybackend1.herokuapp.com/upload',
          formData,
          config
        ).then((response)=>{
            alert.show("Images successfully uploaded")
        }   
        ).catch(function(error){
            alert.error(error.response.data)
        })
    }

    const deleteItem=(event)=>{
        event.preventDefault();
        const axios = require('axios');
        const deletedItem=item.current.value
        // axios.post(`http://localhost:3001/deleteItem?name=${deletedItem}`
        axios.post(`https://mybackend1.herokuapp.com/deleteItem?name=${deletedItem}`,{},

        {headers: {Authorization: `Bearer ${token}`}}
        ).then((response)=>{
            alert.show("Item successfully deleted")
        }  
        ).catch(function(error){
            console.log(error)
            alert.error(error.response.data.toString())
        })
    }
    
    const dispatch=useDispatch();
    
    const loggedin=useSelector((state)=>state.loggedin)
    const logOut=(event)=>{
        event.preventDefault();
        
        dispatch(stateActions.setState(false))
        dispatch(stateActions.setToken(""))
        navigate('/login')
    }
    return(
    <Fragment>
        <form className={classes.card} onSubmit={uploadFile}>
         <h3>Upload</h3>
            <div className={classes.wrapper}>
            <input type="file" multiple ref={files}/>
            <div>
                <label>Price</label>
                <input type="number" min="0" ref={price}/>
            </div>
            <div>
                <label>Name</label>
                <input type="text" ref={name}/>
            </div>
            <div>
                <label>Description</label>
                <textarea rows={3} type="text"ref={description} />
            </div>
            </div>
        <Button>Submit</Button>
        </form>
     <form className={classes.card} onSubmit={deleteItem}>
            <h3>Delete inventory</h3>
                <div className={classes.wrapper}>
                   <div>
                       <label>Name</label>
                       <input type="text" ref={item}/>
                   </div>
                </div>
        <Button>Submit</Button>
    </form>

    <button onClick={logOut}>Log Out</button>
    </Fragment>
    )
}


export default Admin;