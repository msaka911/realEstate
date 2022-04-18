import classes from "./Login.module.css"
import { useRef } from "react"

import {useDispatch, useSelector} from "react-redux"
import { stateActions } from '../store/store';
import {useNavigate} from 'react-router-dom';
import { useAlert } from 'react-alert'


const Login=()=>{
    const loggedin = useSelector((state) => state.loggedin);
    const navigate=useNavigate()
    const alert = useAlert()
    const dispatch = useDispatch();

    const password=useRef();
    const username=useRef();

    if(loggedin){
      navigate("/admin")
    }




    const submit=async(event)=>{
        event.preventDefault();
        const bodyParameters = {
            email: username.current.value,
            password:password.current.value
        }
        const axios = require('axios');
        await axios.post('https://mybackend1.herokuapp.com/users/login',
        // await axios.post('http://localhost:3001/users/login',
        bodyParameters,
        ).then((response)=>{
            dispatch(stateActions.setState(true));
            dispatch(stateActions.setToken(response.data.token))
            navigate('/admin');
            }
        ).catch((e)=>{
            alert.error("authentification faild, try it again")
        })
        }


    return(
        <form className={classes.form} onSubmit={submit}>
            <h2>Login Page</h2>
            <div className={classes.username}>
                    <label> username</label>
                    <input ref={username}></input>
            </div>
            <div className={classes.password}>
                    <label> password</label>
                    <input ref={password}></input>
            </div>
            <button>Submit</button>
        </form>
    )
}


export default Login;