import { Fragment } from 'react/cjs/react.production.min';
import classes from './Footer.module.css';
import { isMobile } from 'react-device-detect';

const Footer=()=>{
    return(
        <Fragment>
            <footer class="footer" className={isMobile?classes.media:null}>
                <ul class="footer__nav">
                    <li class="footer__item">
                    <a class="footer__link" href="#">About</a>
                    </li>
                    <li class="footer__item">
                    <a class="footer__link" href="#">Terms of Use</a>
                    </li>
                    <li class="footer__item">
                    <a class="footer__link" href="#">Address</a>
                    </li>
                    <li class="footer__item">
                    <a class="footer__link" href="#">Contact Us</a>
                    </li>
                </ul>
            {/* <img src="img/icon.png" alt="Logo" class="footer__logo" /> */}
            </footer>
        </Fragment>
    )
}

export default Footer;