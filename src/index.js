import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { types, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import './index.css';
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
  <AlertProvider type={types.SUCCESS}  position={positions.MIDDLE} template={AlertTemplate}>
  <ParallaxProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ParallaxProvider>
  </AlertProvider>
  </Provider>
  ,
  document.getElementById('root')
);
