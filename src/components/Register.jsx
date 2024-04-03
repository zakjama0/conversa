import { useState } from "react";
const Register = ({users, registerUser}) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if(handleValidation()){
      const newUser = {
        username,
        email,
      }
      registerUser(newUser);
      return;
    }
  }


  const handleValidation = () => {
    let validation = true;

    if(users.find(user => user.username === username)){
      alert("User already exists");
      validation = false;
    }

    if(username === "" || email === ""){
      alert("Please fill in all fields")
      validation = false;
    }
    return validation;
  }


  return(
    <>
      <h2>Sign up!</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={ (event) => setUsername(event.target.value) }
        />
        <input 
          type="email"
          name="email"
          placeholder="Enter email address"
          value={email}
          onChange={ (event) => setEmail(event.target.value)}
        />
        <input type="submit" value="Submit"/>
      </form>
    </>
  );
};

export default Register;