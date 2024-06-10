"use strict";
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const checkPassword = () => {
    password !== passwordConfirmation
      ? setError("Passwords do not match")
      : registerUser();
  };
  const alreadyRegistered = () => {
    window.location.href = "/login";
  };

  const registerUser = () => {
    axios.post("/api/register", { "test@test.com": "test" }).then((res) => {
      if (res.data.error) {
        setError(res.data.error);
        alert(res.data.error);
      } else {
        alert("User registered");
      }
    });
  };
  return (
    <div>
      <h1>Register</h1>
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
        <div>
          <label>Password Confirmation</label>
          <input
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
        <button onClick={checkPassword} type="submit">
          Register
        </button>
        <h6 onClick={alreadyRegistered}>Already Registered</h6>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
