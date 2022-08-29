import { useEffect, useState } from "react";
import Post from "./Post";
import PostForm from "./PostForm";
import Login from "./Login";
import { Outlet } from "react-router-dom";
import PostComment from "./PostComment";


function PostsPage({user, handleNewUser}){

    const [posts, setPosts] = useState([])
    const [makingPost, setMakingPost] = useState(false)
    const [currentPost, setCurrentPost] = useState(undefined)

    

    useEffect(()=>{
        fetch('http://localhost:3000/posts').then(res=>res.json()).then(data=>setPosts(data))
    },[])

    // if(!user){
    //     return(
    //         <Login user={user} handleNewUser={handleNewUser} />
    //     )
    // }

    function handleSubmit(e){
        e.preventDefault()
        const title = e.target[0].value
        const content = e.target[1].value
        fetch('http://localhost:3000/posts',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                content: content,
                User_id: user.id
            })
        }).then(res=>res.json()).then(data=>{setPosts([...posts, data])
        e.target[0].value = ''
        e.target[1].value = ''
        })
        handleNewForm()

    }

    function handleDisplayPost(post){
        if (!currentPost){
            setCurrentPost(post)
        }
        else {
            setCurrentPost(undefined)
        }
    }

    let postsArray = []

    if(posts){
        posts.map(post=>{
            postsArray.push(<Post displayPost={handleDisplayPost} handleDelete={handleDelete} user={user} key={post.created_at} posti={post} />)
        })
    }

    function handleDelete(post){
        const newArray = posts.filter(sample=>{
            return sample != post
        })
        setPosts(newArray)
        post.comments.map(comment=>{
            fetch(`http://localhost:3000/comments/${comment.id}`,{
                method: "DELETE"
            })
        })
       


        fetch(`http://localhost:3000/posts/${post.id}`,{
            method: "DELETE"
        })
    }
        

    const form = <PostForm handleSubmit={handleSubmit} />

    function handleNewForm () {
        setMakingPost(!makingPost)
    }


    const button = <button className="center" onClick={handleNewForm}>Make new post</button>

    const display = <PostComment handleDisplayPost={handleDisplayPost} handleDelete={handleDelete} user={user} posti={currentPost} />
    // const display = <Post handleDelete={handleDelete} user={user} posti={currentPost} /> 

    // const newButton = {makingPost ? form : button}s
    
    if (!user){
        return(
            <>
            {currentPost ? display : postsArray}
            </>
        )
    }

    if (currentPost){
        return(
            <>
                {display}
            </>
        )
    }

    return(
        <>
            {makingPost? form : button}
            
            {currentPost ? display :  postsArray}
            {/* {display} */}
            {/* {postsArray} */}
        </>
    )
}

export default PostsPage