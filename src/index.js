import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.js';
import './index.css'
import GlobalContext from './context/GlobalContext.js';
import { AuthcontextProvider } from './context/authContext'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <GlobalContext>
        <AuthcontextProvider>

            <App />
        </AuthcontextProvider>
    </GlobalContext>
)
