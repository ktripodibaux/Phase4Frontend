import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import App from './App';
import { BrowserRouter,
  Routes,
  Route, } from "react-router-dom";

import Post from './components/Post';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

