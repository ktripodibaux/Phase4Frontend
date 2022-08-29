import { useEffect, useState } from "react";

function CommentCard({comment,user, removeComment}){

    const [same, setSame] = useState(false)
    const [poster, setPoster] = useState(undefined)

    const moment = require("moment");
    useEffect(()=>{
        fetch(`http://localhost:3000/users/${comment.User_id}`).then(res=>res.json()).then(data=>setPoster(data.name))

        if (user){
            // console.log(user, posti.User)
            if (user.id === comment.User_id){
                setSame(true)  
            }
        }
    },[])

    let momentObj = moment(comment.created_at)


    // const moment = require("moment");
   
    function deleteComment(){
        removeComment(comment)
        fetch(`http://localhost:3000/comments/${comment.id}`,{
            method: 'DELETE'
        }).then(res=>res.json()).then(data=>console.log(data))
    }
    

   

    return(
        <div className="card comment">

        <p>"{comment.content}"</p>
        <p>Posted by: {poster} at {momentObj.format('MMMM Do YYYY, h:mm:ss a')}</p>
        {same ? <button onClick={()=>{deleteComment()}}>Delete comment</button> : null}
        </div>
    )
}

export default CommentCard