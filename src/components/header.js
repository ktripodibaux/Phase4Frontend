import { Link } from "react-router-dom";

function Header({user}) {

    


    return (
        <>
            <div className="header">
                <Link to="/" >Login</Link>
                <br></br>
                <Link to="/post">Posts</Link>
                <br></br>
                <Link to="profile">{user ? `${user.name}'s Profile` : "Profile"}</Link>
            </div>
        <h1 className="title">Flatiron Forum</h1>

        </>
    )
}

export default Header