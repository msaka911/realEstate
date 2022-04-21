import classes from './Card.module.css';
import Button from './Button';
import { isMobile } from 'react-device-detect';
const Card = (props) => {


  return (  
  <div className={isMobile?classes.media:classes.card}>
    {props.children}
      <h3>{props.title}</h3>
     <label>{props.description}</label>
     <Button>{props.button}</Button>
  </div>)

};

export default Card;
