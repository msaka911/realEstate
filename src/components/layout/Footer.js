import { Fragment } from 'react/cjs/react.production.min';
import classes from './Footer.module.css';
import Card from '../UI/Card';

const Footer=()=>{


    return(
        <Fragment>
        <div className={classes.wrapper}>
            <div>
                <h3>Visit Our Location</h3>
            </div>
            <div>
                <h3>Contact Us</h3>
            </div>
            <div>
                <h3>Hourse Of Operation</h3>
            </div>
        </div>
        </Fragment>
    )
}

export default Footer;