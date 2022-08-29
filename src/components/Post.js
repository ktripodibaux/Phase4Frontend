import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";
import PostComment from "./PostComment";
import UpdateForm from "./UpdateForm";

function Post ({posti,user, handleDelete, displayPost, moreComment}) {

    // console.log(posti)

    const [same, setSame] = useState(false)
    const [comment, setComment] = useState(false)
    const [updating, setUpdate] = useState(false)
    const [loggedIn, setLoggedIn] = useState(true)

    const moment = require("moment");
   
    useEffect(()=>{
        if (user){
            setLoggedIn(true)
            // console.log(user, posti.User)
            if (user.id === posti.User.id){
                setSame(true)
                
            }

        }
    },[])

    function handleChange(){
        setComment(!comment)

    }

    let example = <p>You need to be logged in to comment!  <Link to="/">Click here to log in</Link></p>

    function addComment(e){

        e.preventDefault()
        if (!user){
            setLoggedIn(false)
        }
        
        const comment = e.target[0].value
        console.log(comment)
        console.log(user)
        console.log(posti)
        // e.target[0].value = ''
        if(user){
            fetch('http://localhost:3000/comments',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    content: comment,
                    User_id: user.id,
                    Post_id: posti.id
                })
            }).then(res=>res.json()).then(data=>moreComment(data))
        }

    }

    

    

    

    // if (user.name = posti.User.name){
    //     sameUser = true
    // }
    
// console.log(posti)
let momentObj = moment(posti.created_at)

function changeUpdate(){
    setUpdate(!updating)
}

function handleUpdate(e){
    e.preventDefault()
    
    const content = e.target[0].value
    changeUpdate()
    posti.content = content

    fetch(`http://localhost:3000/posts/${posti.id}`,{
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            content: content
        })
    }).then(res=>res.json()).then(data=>console.log(data))

}

const button = <button onClick={handleChange}>Add comment</button>
const update = <button onClick={changeUpdate} >Edit</button>


    return(
        <div className='card'>
            <div onClick={()=>displayPost(posti)}>
                <h4>{posti.title}</h4>
                {updating? <UpdateForm handleUpdate={handleUpdate} /> : <p>{posti.content}</p>}
                <br></br>
            <p>Posted by: {posti.User.name} at {momentObj.format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
            {loggedIn? null: example}
            {comment ? <CommentForm addComment={addComment} /> : button}
            {same ? update : null}
            {same ? <button onClick={()=>{handleDelete(posti)}}>Delete post</button> : null}
            
        </div>
    )
}

export default Post