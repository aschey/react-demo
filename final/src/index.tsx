import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// This is the entry point of the app
// Look in public/index.html and you should see an HTML element like this: <div id="root"></div>
// This is where React attaches itself to the DOM
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Strict mode is a development tool to highlight potential problems with your code
// It will show additional warnings in the console
// See https://reactjs.org/docs/strict-mode.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
