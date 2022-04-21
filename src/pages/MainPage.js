import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import { Fragment } from 'react/cjs/react.production.min';
import { useParallax } from 'react-scroll-parallax';
import image from "../assets/Hero-Image.png"
import classes from './MainPage.module.css';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import group from "../assets/interior.png"
import finance from "../assets/Finance-Icon.jpeg"
import warranty from "../assets/Warranty-Icon.jpeg"
import lease from "../assets/Lease-Icon.jpeg"
import { useDispatch, useSelector } from 'react-redux';
import { stateActions } from '../store/store';

const MainPage = () => {
  const { ref } = useParallax({ speed: -40 })
 
  const dispatch=useDispatch();
  const screen=useSelector(state=>state.smallScreen)
  console.log(screen)
  const navigate=useNavigate();

  useEffect(()=>{
    const handler = e => dispatch(stateActions.setSmallScreen(!e.matches));
    window.matchMedia("(min-width: 726px)").addEventListener('change', handler);
  })
  



  return (
  <Fragment>
  <header className={screen?classes.media:classes.welcome}>
    <h2>Welcome To</h2>
    <h1>YST Auto Sales</h1>
    <img  ref={ref}  src={image}></img>
    <Button onClick={()=>{navigate('/inventory')}}>Inventory</Button>
  </header>
  <section className={classes.section}>
    <Card title="Finance" description="Our best advisors" button="Apply for Finance">
      <img src={finance}/>
    </Card>
    <Card title="Lease" description="Lease can be great options" button="Apply for Lease">
    <img src={lease}/>
    </Card>
    <Card i title="Warranty" description="Extended Warranty" button="Know More">
    <img src={warranty}/>
    </Card>
  </section>
  <section className={screen?classes.mediaSection:classes.introduction}>
   <h2>BUY WITH CONFIDENCE</h2>
   <p>With our amazing collection on the lot, we guarantee you’ll be extremely satisfied with your choices. Come and test drive one now. 
      Sometimes we offer an incredible discount on a select vehicle. Right now, that includes our extensive Vehicle collection. Whether you’re 
      looking for new or used, large or small, bare essentials or fully equipped, we know you’ll ride away from YST AUTO SALES with an awesome set of wheels to call your own.
   </p>
  </section>

  <section className={screen?classes.mediaGroup:classes.group}>
  <h2>Auto Group</h2>
  <img src={group} ></img>
  </section>

  </Fragment>
  );
};

export default MainPage;
