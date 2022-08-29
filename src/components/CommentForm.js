

function CommentForm({addComment}){

    return(
        <>
            <form onSubmit={(e)=>addComment(e)}>
                <label>Comment: </label>
                <input type="text"></input>
                <br></br>
                <input type="submit"></input>
            </form>
        </>
    )
}

export default CommentForm