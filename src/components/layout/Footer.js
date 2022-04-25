import { Fragment } from 'react/cjs/react.production.min';
import classes from './Footer.module.css';
import { isMobile } from 'react-device-detect';

const Footer=()=>{
    return(
        <Fragment>
        <div className={isMobile?classes.media:classes.wrapper}>
            <div>
                <h3>Visit Our Location</h3>
            </div>
            <div>
                <h3>Contact Us</h3>
            </div>
            <div>
                <h3>Hours Of Operation</h3>
            </div>
        </div>
        </Fragment>
    )
}

export default Footer;