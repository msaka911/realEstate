import { NavLink } from 'react-router-dom';


import classes from './MainNavigation.module.css';
import HomeIcon from '@mui/icons-material/Home';
import { isMobile } from 'react-device-detect';
const MainNavigation = () => {


  return (
    <header className={isMobile?classes.media:classes.header}>
      <div className={classes.top}>
      <div className={classes.logo}><HomeIcon/>Real Estate</div>
      <div className={classes.contact}>Contact Info</div>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' className={(navData) => (navData.isActive ? `${classes.active}` : '')}>
              Home
            </NavLink>
          </li>
          <li>
          <NavLink to='/inventory'  className={(navData) => (navData.isActive ? `${classes.active}` : '')}>
              House Listing
            </NavLink>
          </li>

          <li>
          <NavLink to='/new-quote'  className={(navData) => (navData.isActive ? `${classes.active}` : '')}>
              Free Quote
            </NavLink>
          </li>
          <li>
            <NavLink to='/login'  className={(navData) => (navData.isActive ? `${classes.active}` : '')}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
