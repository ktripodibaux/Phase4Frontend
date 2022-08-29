import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Login from "./Login"
import Post from "./Post"


function Profile({user, handleNewUser}){
    const [usersPosts, setUsersPosts] = useState(undefined)
    
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:3000/users/posts/${user.id}`).then(res=>res.json()).then(data=>setUsersPosts(data))
            
        }
    },[])
    
    if(!user){
        return(
            <div className="center">
                <Link to="/" >Click here to sign in</Link>
            </div>
        )
    }
    
    let postsArray = []

    if(usersPosts){
        usersPosts.map(post=>{
            postsArray.push(<Post user={user} key={post.created_at} posti={post} />)
        })
    }


    return(

        <>

        {/* <h2>{user.name}</h2> */}
        {postsArray}

        
        </>
    )
}

export default Profile