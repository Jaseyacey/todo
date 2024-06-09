"use strict";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const checkPassword = () => {
    password !== passwordConfirmation
      ? setError("Passwords do not match")
      : true;
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
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
