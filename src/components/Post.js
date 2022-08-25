import { useState } from "react"

function Post ({posti}) {
    



    return(
        <div className='card'>
            <h4>{posti.title}</h4>
            <p>{posti.content}</p>
            {/* <p>{user.name}</p> */}
        </div>
    )
}

export default Post