import React, { useState } from "react";
import Header from "./components/header";
import { Outlet, useOutletContext } from "react-router-dom";
import MainPage from "./components/MainPage";
import PostsPage from './components/PostsPage'



import ReactDOM from 'react-dom/client';
import "./App.css";
import { BrowserRouter,
  Routes,
  Route, } from "react-router-dom";

import Post from './components/Post';
import Login from './components/Login';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined)

  function handleNewUser(user){

    if (user.id){
      setCurrentUser(user)
    }
    else {
      setCurrentUser("invalid")
    }
    
  }


  return (
    <div className="App">
      {/* <Header /> */}
        

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage user={currentUser} />}>
          <Route path="/" element={<Login user={currentUser} handleNewUser={handleNewUser} />} />
          <Route path="post" element={<PostsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
      {/* <Outlet context={ {currentUser} } /> */}
    </div>
  );
}

export default App;
