import { useState, useContext } from "react";
import { userState } from "../container/ChatContainer";
import { Link, Outlet, useNavigate } from "react-router-dom";
const Login = ({ users }) => {
    const [loggedUsername, setLoggedUsername] = useState("")
    const [loggedEmail, setLoggedEmail] = useState("")
    const context = useContext(userState)
    const { activeUser, setActiveUser } = context;
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const filteredUser = users.find((user) =>
            user.username.toLowerCase() === loggedUsername.toLowerCase()
        );

        if (!filteredUser) {
            alert("Please Sign Up")
            e.target.reset();
            return;
        }

        setActiveUser(filteredUser);
        e.target.reset();
        navigate("/chatrooms");
    }


    return (
        <>
            <div className="login">
            <section class="stars">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </section>
            <div className="main-login">
            <h1>Welcome back! Please login</h1>
                <div className="wrapper">
                    <div className="wrap">
                        <form onSubmit={handleFormSubmit}>
                            
                            <div className="input-box">
                            <label htmlFor="login-name">Username:</label>
                            <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    value={loggedUsername}
                                    onInput={(e) => setLoggedUsername(e.target.value)}
                                    placeholder="Enter username.."
                                />
                            </div>
                            
                            <div className="input-box">
                            <label htmlFor="login-email">Email:</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter email.."
                                />
                            </div>
                            <div class="remember-forgot">
                                <label for="">
                                    <input type="checkbox" name="" id=""/> Remember Me</label>
                            </div>
                            <div class="register-link">
                                <p> Dont have an account? <Link to="/register" className="register">Register</Link></p>
                            </div>
                            
                            <input className="btn" type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
            
 
                <Outlet />
            </div>
        </>
    )
}

export default Login;