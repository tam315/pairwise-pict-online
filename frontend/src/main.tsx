import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { Top } from './features/top';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Top />
  </React.StrictMode>,
);
