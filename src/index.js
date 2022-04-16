import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <ParallaxProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ParallaxProvider>,
  document.getElementById('root')
);
