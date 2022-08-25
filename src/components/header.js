import { Link } from "react-router-dom";

function Header() {


    return (
        <>
        <h1>header</h1>
        <Link to="/" >Home</Link>
        <br></br>
        <Link to="/post">post</Link>

        </>
    )
}

export default Header