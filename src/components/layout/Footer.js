import { Fragment } from 'react/cjs/react.production.min';
import classes from './Footer.module.css';
import { isMobile } from 'react-device-detect';

const Footer=()=>{
    return(
        <Fragment>
            <footer className={isMobile?classes.media:classes.footer}>
                <ul class={classes.nav}>
                    <li class={classes.item}>
                    <a class={classes.link} href="#">About</a>
                    </li>
                    <li class={classes.item}>
                    <a class={classes.link} href="#">Terms of Use</a>
                    </li>
                    <li class={classes.item}>
                    <a class={classes.link} href="#">Address</a>
                    </li>
                    <li class={classes.item}>
                    <a class={classes.link} href="#">Contact Us</a>
                    </li>
                </ul>
            {/* <img src="img/icon.png" alt="Logo" class="footer__logo" /> */}
            </footer>
        </Fragment>
    )
}

export default Footer;