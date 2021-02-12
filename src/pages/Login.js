import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../_redux/actions/ActionAuthentication";
import { useHistory } from "react-router-dom";

const Login = ({ loginUser }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [realEmail] = useState("john@gmail.com");
  const [realPassword] = useState("john123");

  const handleSubmit = () => {
    if (email && password) {
      if (email === realEmail && password === realPassword) {
        loginUser(history, { email });
      } else {
        alert("Incorrect email or password");
      }
    } else {
      alert("enter all fields");
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default connect(null, { loginUser })(Login);
