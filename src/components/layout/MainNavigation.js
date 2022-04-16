import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.top}>
      <div className={classes.logo}>YST AUTO</div>
      <div className={classes.contact}>Contact Info</div>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
          <NavLink to='/quotes' activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
          <NavLink to='/quotes' activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
          <NavLink to='/inventory' activeClassName={classes.active}>
              Inventory
            </NavLink>
          </li>
          <li>
          <NavLink to='/quotes' activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-quote' activeClassName={classes.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
