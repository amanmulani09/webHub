import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.js';
import './index.css'
import GlobalContext from './state/GlobalContext.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<GlobalContext>
<App />
</GlobalContext>
)
