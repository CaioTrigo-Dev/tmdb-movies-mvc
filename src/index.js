import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login';
import AuthProvider from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <Login/>
    </AuthProvider>
  </React.StrictMode>
);
