import { useState } from "react";
const Register = ({ users, registerUser }) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValidation()) {
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

    if (users.find(user => user.username === username)) {
      alert("User already exists");
      validation = false;
    }

    if (users.find(user => user.email === email)) {
      alert("Email already exists");
      validation = false;
    }

    if (username === "" || email === "") {
      alert("Please fill in all fields")
      validation = false;
    }
    return validation;
  }


  return (
    <>
      <div className="register">
        <h2>Sign up!</h2>
        <form onSubmit={handleSubmit}>
          <input className="name"
            type="text"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input className="email"
            type="email"
            name="email"
            placeholder="Enter email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input className="submit" type="submit" value="Sign Up" />
        </form>
      </div>
    </>
  );
};

export default Register;