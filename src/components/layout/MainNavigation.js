import { NavLink } from 'react-router-dom';


import classes from './MainNavigation.module.css';
import { useSelector } from 'react-redux';

const MainNavigation = () => {

  const screen=useSelector(state=>state.smallScreen)

  return (
    <header className={screen?classes.media:classes.header}>
      <div className={classes.top}>
      <div className={classes.logo}>YST AUTO</div>
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
              Inventory
            </NavLink>
          </li>

          <li>
          <NavLink to='/new-quote'  className={(navData) => (navData.isActive ? `${classes.active}` : '')}>
              File A Quote
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
