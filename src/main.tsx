import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './templates/App';
import './styles/index.css';

window.console.warn = () => {};
window.console.info = () => {};
window.console.error = () => {};
window.console.log = () => {};
window.console.clear();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




