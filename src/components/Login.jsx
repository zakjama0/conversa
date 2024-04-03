import { useState, useContext } from "react";
import { userState } from "../container/ChatContainer";
import { Link, Outlet, useNavigate } from "react-router-dom";
const Login = ({ users }) => {
    const [loggedUsername, setLoggedUsername] = useState("")
    const context = useContext(userState)
    const { activeUser, setActiveUser } = context;
    const navigate = useNavigate();



    const handleFormSubmit = (e) => {
        e.preventDefault();
        const filteredUser = users.filter((user) =>
            user.username.toLowerCase() === loggedUsername.toLowerCase()
        );
        
        if (filteredUser.length===0) {
            alert("Please Sign Up")
            e.target.reset();
            return;
        }
        setActiveUser(filteredUser[0]);
        e.target.reset();
        navigate("/chatrooms")
    }


    return (
        <>
        <div className="register">
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

                <input className = "loginUser" type="submit" value="Login" />

            </form>
            

            <h1>Welcome back! Please login</h1>


            <Outlet />
        </div>
        </>



    )
}

export default Login;