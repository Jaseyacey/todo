"use strict";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const checkPassword = () => {
    console.log("password_confirmation", password);
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={checkPassword} type="submit">
          Login
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
