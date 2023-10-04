import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {PartyProvider} from './providers/party-provider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PartyProvider>
      <App />
    </PartyProvider>
  </React.StrictMode>
);

