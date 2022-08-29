

function PostForm({handleSubmit}){



    // function handleSubmit(e){
    //     e.preventDefault()
    //     const title

    //     console.log(e.target[1].value)
    // }


    return(
        <>
        <form className="center" onSubmit={(e)=>handleSubmit(e)}>
            <label>Title: </label>
            <input type="text"></input>
            <br></br>
            <label>Content: </label>
            <textarea 
          rows="5" cols="33">

</textarea>
            <br></br>
            <input type="submit"></input>
        </form>
        
        </>
    )
}

export default PostForm