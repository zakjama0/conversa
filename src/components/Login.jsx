const Login = () => {


    return (
        <>
        <form action="">
            <label htmlFor="login-name">Username:</label>
            <input 
            id="username"
            name="username"
            type="text" 
            placeholder="Enter username.."
            />
            
            <label htmlFor="login-password">Password:</label>
            <input 
            id="password"
            name="password"
            type="text" 
            placeholder="Enter password.."
            />

            <input type="submit" value="Add Chocolate"/>  


        </form>
        
        </>



    )
}