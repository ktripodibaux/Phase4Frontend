import Post from "./Post"


function Login({handleNewUser, user}) {

    let valid = true

if (user === 'invalid'){
    valid = false
}

    function handleSubmit(e){
        e.preventDefault()
        const name = e.target[0].value
        const password = e.target[1].value
        const checked = e.target[2].checked
        console.log(name,password, checked)
        
        if (checked){
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {'Content-Type': "application/json"},
                body: JSON.stringify({
                    name: name,
                    password: password
                })
            }).then(res=>res.json()).then(data=>{
                handleNewUser(data)
            console.log(data)
            })
        }
        else {
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {'Content-Type': "application/json"},
                body: JSON.stringify({
                    name: name,
                    password: password
                })
            }).then(res=>res.json()).then(data=>{
                handleNewUser(data)
                    console.log(data)
            })
        }

    }
        function handleClick(){
            fetch('http://localhost:3000/sessions/destroy', {
                method: 'DELETE'
            })

            handleNewUser(undefined)
        }

        // function handleLogOut(){
            
        // }

        


    return(
        <>
        <div className="center">
            {valid ? undefined : <h5>Please enter valid credentials</h5>}
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label>Username:</label>
                <br></br>
                <input type="text"></input>
                <br></br>
                <label>Password:</label>
                <br></br>
                <input type="password"></input>
                <br></br>
                <label>New User: </label>
                <input value="accept" type="checkbox"></input>
                <br></br>
                {<input type="submit"></input>}
                
            </form>
            {user? <button onClick={handleClick}>Sign Out: </button> : null}
        </div>
        </>
    )
}

export default Login