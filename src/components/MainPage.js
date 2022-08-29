import { Outlet } from "react-router-dom"
import Header from "./header"
import { useState } from "react"



function MainPage({user}){

    

    return(
        <>
        <Header user={user}/>
        {/* <h1>{user ? user.name : null}</h1> */}

        <div className="container">
            <Outlet />
        </div>

        </>
    )
}

export default MainPage