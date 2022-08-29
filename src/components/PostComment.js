import { useEffect, useState } from "react"
import CommentCard from "./CommentCard"
import Post from "./Post"



function PostComment ({posti, handleDelete, user, handleDisplayPost}) {

    const [comments, setComments] = useState(undefined)

    useEffect(()=>{

        setComments(posti.comments)

    },[])




let commentsList = []
  
 if(comments){
     comments.map(comment=>{
        commentsList.push(<CommentCard removeComment={removeComment} user={user} comment={comment} />)
    })

 }

function moreComment(comment){
    setComments([...comments, comment])
}

function removeComment(old){
    const newArray = comments.filter(comment=>{
        return comment != old
    })
    setComments(newArray)
}

    return(
        <>
        <button onClick={handleDisplayPost}>Go back: </button>
            <Post moreComment={moreComment} handleDelete={handleDelete} user={user} posti={posti}/>
            <div className="commentContainer">
                {commentsList}
            </div>
        </>
    )
}

export default PostComment