import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import App from './App';
import { BrowserRouter,
  Routes,
  Route, } from "react-router-dom";
import ForumsList from './components/ForumsList';
import Post from './components/Post';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Login />} />
          <Route path="forum" element={<ForumsList />} />
          <Route path="post" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

