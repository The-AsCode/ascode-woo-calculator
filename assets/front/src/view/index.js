import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('ascode_calculator_view'));
const calculatorId = document.getElementById('ascode_calculator_view').getAttribute('data-value');
root.render(
  <React.StrictMode>
    <App calculatorId={calculatorId} />
  </React.StrictMode>
);