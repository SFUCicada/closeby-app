import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import Slider2 from './slider';
import Tags from './tags';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Slider2 />
    <Tags />
  </React.StrictMode>
);
