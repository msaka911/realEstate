import { Fragment, useRef,useState } from 'react';
import { useAlert } from 'react-alert'

import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import HouseIcon from '@mui/icons-material/House';
import { isMobile } from 'react-device-detect';


import classes from './Form.module.css';
import validator from 'validator';

const Form = (props) => {
//------------options for select------------
  const animatedComponents = makeAnimated();
  const options = [
    { value: 'TownHouse', label: 'TownHouse' },
    { value: 'House', label: 'House' },
    { value: 'Semi', label: 'Semi' },
    { value: 'Condo', label: 'Condo' },
  ]
  const[selected,setSelect]=useState([]);

//----------------------------------------

  const alert = useAlert()
  const nameInputRef = useRef();
  const contactRef=useRef();
  const addressRef=useRef();
  const appointmentRef=useRef(" ");
  const area=useRef(0);
 


  function submitFormHandler(event) { 
    event.preventDefault();
    const axios = require('axios');
    const enteredName = nameInputRef.current.value;
    const enteredContact=contactRef.current.value;
    const enteredAddress=addressRef.current.value;
    const enteredArea=area.current.value;
    const enteredAppointment=appointmentRef.current.value

    //--------------check email, zip code, phone number---------------------//

    if(!validator.isMobilePhone(enteredContact,['en-CA'])){
      document.getElementById('contact').style.borderColor='red';
      alert.error("Please enter valid phone number",{onClose:()=>{
        document.getElementById('contact').style.borderColor='black';
        
      }})
      return
    }
    if(!validator.isPostalCode(enteredAddress,['CA'])){
      document.getElementById('address').style.borderColor='red';
      alert.error("Please enter valid zip code",{onClose:()=>{
        document.getElementById('address').style.borderColor='black';
      }})
      return
    }
    // if(validator.isMobilePhone(enteredContact,['en-CA'])&&validator.isEmail(enteredEmail)){
    //     axios.post('https://mybackend1.herokuapp.com/appointment',{
    //       name: enteredName,
    //       contact:enteredContact,
    //       address:enteredAddress,
    //       area:enteredArea,
    //       appointment:enteredAppointment
    //     })
    //     .then(function (response) {
    //     alert.show("Thanks! \n We will process your request asap")
    //     document.getElementById('name').value="";
    //     document.getElementById('contact').value="";
    //     document.getElementById('address').value=""
    //     document.getElementById('vin').value=""
    //     document.getElementById('mileage').value=""
    //     document.getElementById('brand').value=""
    //     document.getElementById('appointment').value=""
    //     })
    //     .catch(function (error) {
    //       alert.error("cannot send the data")
    //     })
    // }
    // else{
    //     alert.error("Please fill valid contents")
    // }
  }


  return (
    <Fragment>
      <div className={classes.card} clicked={props.clicked}>
        <form
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          <div className={classes.control}>
            <label htmlFor='name'>Name</label>
            <input type='text' placeholder='Name' id='name' ref={nameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='contact'>Contact</label>
            <input type='text' placeholder='Tel' id='contact' ref={contactRef} />
          </div>
          <div className={classes.control}>
         <div className={isMobile?classes.media:classes.selection}>
         <label><HouseIcon/>Estimated Area(feet)
         <input
          type="number"
          min="0"
          ref={area}
            />
         </label>
         </div>
          <label htmlFor='select'>Selection for residence category</label>
          <Select 
          className={classes.control} 
          components={animatedComponents}
          isMulti
          onChange={options=>{setSelect(options)}}
          options={options}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='postal code'>Postal Code</label>
            <input  className={classes.postal} type='text' placeholder='Zip Code' id='address' ref={addressRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='appointment'>Detail</label>
            <textarea type='text' rows={3} placeholder='Detail' id='appointment' ref={appointmentRef} />
          </div>
          <div className={classes.actions}>
            <button onClick={submitFormHandler} className='btn'>Submit</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
