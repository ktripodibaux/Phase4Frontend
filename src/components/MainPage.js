import { Outlet } from "react-router-dom"
import Header from "./header"
import { useState } from "react"



function MainPage({user}){

    

    return(
        <>
        <Header />
        <h1>{user ? user.name : null}</h1>

        <Outlet />

        </>
    )
}

export default MainPage