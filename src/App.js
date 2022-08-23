import React from "react";
import Header from "./components/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
        

      
      <Outlet />
    </div>
  );
}

export default App;
