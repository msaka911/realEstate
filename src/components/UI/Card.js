import classes from './Card.module.css';
import Button from './Button';
import { useSelector } from 'react-redux';

const Card = (props) => {
  const screen=useSelector(state=>state.smallScreen)

  return (  
  <div className={screen?classes.media:classes.card}>
    {props.children}
      <h3>{props.title}</h3>
     <label>{props.description}</label>
     <Button>{props.button}</Button>
  </div>)

};

export default Card;
