import { useState, useContext } from "react";
import { userState } from "../container/ChatContainer";
import { Link, Outlet, useNavigate } from "react-router-dom";
const Login = (users) => {
    const [loggedUsername, setLoggedUsername] = useState("")
    const context = useContext(userState)
    const {activeUser, setActiveUser} = context;
    // const [activeUser, setActiveUser] = useState({});
    console.log(users);
    const navigate = useNavigate(); 

    const filteredUser = users.users.filter((user) => 
      user.username.toLowerCase().includes(loggedUsername.toLowerCase())
    );


    const handleFormSubmit = (e) =>{
        e.preventDefault();
        console.log(filteredUser[0]);
        setActiveUser(filteredUser[0]);
        e.target.reset();
        if (nullActiveUser){
          alert("Please Sign Up")
        } else{
          navigate("/chatrooms")
        }
        
       }
       const nullActiveUser = () => {
        return activeUser.length === 0;
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
        
       <h1>Welcome back! Please login</h1> 
        
        
        <Outlet/>
        
        </>



    )
}

export default Login;