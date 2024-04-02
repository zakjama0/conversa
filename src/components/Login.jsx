import { useState } from "react";
const Login = (users) => {
    const [loggedUsername, setLoggedUsername] = useState("")
    const [activeUser, setActiveUser] = useState({});
    console.log(users);

    const filteredUser = users.users.filter((user) => 
      user.username.toLowerCase().includes(loggedUsername.toLowerCase())
    );


    const handleFormSubmit = (e) =>{
        e.preventDefault();
        console.log(filteredUser[0]);
        setActiveUser(filteredUser[0]);
        e.target.reset();
       }

    return (
        <>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="login-name">Username:</label>
            <input 
            id="username"
            name="username"
            type="text" 
            value={loggedUsername}
            onInput={(e) => setLoggedUsername(e.target.value)}
            placeholder="Enter username.."
            />
            
            <label htmlFor="login-email">Email:</label>
            <input 
            id="email"
            name="email"
            type="email" 
            placeholder="Enter email.."
            />

            <input type="submit" value="Login User"/>  

        </form>
        <h1>You are logged in as {activeUser.username}</h1>
        
        </>



    )
}

export default Login;