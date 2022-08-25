import { useEffect, useState } from "react";
import Post from "./Post";


function PostsPage(){

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/posts').then(res=>res.json()).then(data=>setPosts(data))
    },[])

    let postsArray = []

    if(posts){
        posts.map(post=>{
            postsArray.push(<Post posti={post} />)
        })
    }
        



    return(
        <>
        <h1>sds</h1>
            {/* <Post /> */}
            {postsArray}
        </>
    )
}

export default PostsPage