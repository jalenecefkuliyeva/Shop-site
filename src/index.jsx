import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App.jsx';
import { ApiProvider } from './context/ApiContext';
import { ModeProvider } from './context/ModeContext.jsx';
import { LangProvider } from './context/LangContext.jsx';
import { CartProvider } from 'react-use-cart';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LangProvider>
      <ModeProvider>
        <CartProvider>
          <ApiProvider>
            <App />
          </ApiProvider>
        </CartProvider>
      </ModeProvider>
    </LangProvider>
  </React.StrictMode>
);

