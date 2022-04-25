import { Route, Routes} from 'react-router-dom';
import { Fragment } from 'react';

import Form from './pages/Form';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import MainPage from './pages/MainPage';
import Inventory from './pages/Inventory';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Details from './pages/Details';
import { useSelector } from 'react-redux';


function App() {

  const isLoggedin = useSelector(state => state.loggedin);



  return (
    <Fragment>
    <Layout>
      <Routes>
        <Route path='/*' element={<MainPage/>} />
        <Route path='/inventory' element={<Inventory/>} exact />
        <Route path='/new-quote' element={<Form/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        {isLoggedin?<Route path='/login' element={<Admin/>}/>:<Route path='/login' element={<Login/>}/>}
        {isLoggedin?<Route path='/admin' element={<Admin/>}/>:null}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Layout>
   </Fragment>
  );
}

export default App;
