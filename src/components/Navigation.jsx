import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { userState } from "../container/ChatContainer";

const Navigation = () => {
    const context = useContext(userState)
    const { activeUser, setActiveUser } = context;
    
    
    const refreshActiveUser = () =>{
        setActiveUser({})
    }
    
    return (
        <>
            <header>
            <nav>

                    <ul className="home">
                        <li><Link to="/home">Home</Link></li>
                    </ul>

                     {/* <ul className="navLinks"> */}
                     {activeUser.id ? 

                     <div className="navLinks">
                     <li><Link to="/register" onClick={refreshActiveUser}>Sign Out</Link></li>
                     </div>
                     :
                     <div className="navLinks">
                     <li><Link to="/login" >Login</Link></li>
                     <li><Link to="/register">Sign Up</Link></li>
                     </div>
                     }
                        

                 
                     {/* </ul> */}
                </nav>
                <Outlet />
            </header>
                
          
        </>
    );
}

export default Navigation;