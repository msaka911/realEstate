import { Route, Routes,useNavigate} from 'react-router-dom';
import { Fragment } from 'react';
import AllQuotes from './pages/MainPage';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import MainPage from './pages/MainPage';
import Inventory from './pages/Inventory';



function App() {
const navigate=useNavigate();

  return (
    <Fragment>
    <Layout>
      <Routes>
        <Route path='/*' element={<MainPage/>} />
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/quotes' element={<AllQuotes/>}/>
        <Route path='/quotes/:quoteId'element={<QuoteDetail/>}/>
   
        <Route path='/new-quote' element={<NewQuote/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Layout>
   </Fragment>
  );
}

export default App;
