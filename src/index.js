import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import Authcontext from './utils/Authcontext';
import "antd/dist/reset.css";
import { SearchProvider } from './utils/SearchContext';
import CartContext from './utils/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Authcontext>
      <SearchProvider>
        <CartContext>
          <App></App>
          </CartContext>
          </SearchProvider>
          </Authcontext>
          </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
