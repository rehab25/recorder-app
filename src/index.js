import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
          {/* <Home /> */}
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
