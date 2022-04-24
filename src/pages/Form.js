import { Fragment, useRef,useState } from 'react';
import { useAlert } from 'react-alert'

import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import { isMobile } from 'react-device-detect';


import classes from './Form.module.css';
import validator from 'validator';

const Form = (props) => {
//------------options for select------------
  const animatedComponents = makeAnimated();
  const options = [
    { value: 'free of accident', label: 'Free of Accident' },
    { value: 'free of repair', label: 'Free of repair' },
    { value: 'second-hand', label: 'Second-Hand' },
    { value: 'lease transfer', label: 'Lease Transfer' },
  ]
  const[selected,setSelect]=useState([]);

//----------------------------------------

  const alert = useAlert()
  const nameInputRef = useRef();
  const contactRef=useRef();
  const addressRef=useRef();
  const appointmentRef=useRef(" ");
  const distance=useRef(0);
  const brand=useRef("")
  const year=useRef("")
  const vin=useRef("")


  function submitFormHandler(event) { 
    event.preventDefault();
    const axios = require('axios');
    const enteredName = nameInputRef.current.value;
    const enteredContact=contactRef.current.value;
    const enteredAddress=addressRef.current.value;
    const enteredBrand=brand.current.value
    const enteredYear=year.current.value
    const enteredAppointment=appointmentRef.current.value
    const enteredVin=vin.current.value

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
    //       brand: enteredBrand,
    //       vin:enteredVin,
    //       mileage:enteredDistance,
    //       manufacture:enteredYear,
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
            <label htmlFor='text'>Vehicle vin#</label>
            <input type='text' placeholder='Vin#' id='vin' ref={vin} />
          </div>
          <div className={classes.control}>
         <div className={isMobile?classes.media:classes.selection}>
         <label><DriveEtaIcon/> Mileage
         <input
          id="mileage"
          type="number"
          min="0"
          ref={distance}
            />
         </label>
         <label>Brand/Model
         <input
          id="brand"
          type="text"
          ref={brand}
            />
         </label>
         <label>Manufactured Year
         <input
          type="number"
          min="2000"
          max="2050"
          ref={year}
            />
         </label>
         </div>
          <label htmlFor='select'>Selection for extra details</label>
          <Select 
          // closeMenuOnSelect={false}
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
            <label htmlFor='appointment'>Vehicle Detail</label>
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
