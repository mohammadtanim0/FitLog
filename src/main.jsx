import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { FitLogProvider } from './context/FitLogContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FitLogProvider>
        <App />
      </FitLogProvider>
    </BrowserRouter>
  </React.StrictMode>
);
