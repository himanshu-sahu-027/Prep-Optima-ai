import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router";
import "../auth.form.scss";
import { useAuth } from "../hooks/useAuth";

import Loader from "../../../sharedComponents/Loader";

function Login() {
  const { loading, handleLogin } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleLogin({ email, password });

    const redirectTo = location.state?.from?.pathname || "/";

    navigate(redirectTo, { replace: true });
  };

  if (loading) {
    return <Loader/>;
  }

  return (
    <main className="auth-page">
      <div className="form-container">
        <h1 className="auth-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
              />
            </div>
          </div>

          <button className="button primary-button">Login</button>
        </form>
        <p>
          Don't have an account? <Link to={"/register"}>Register</Link>{" "}
        </p>
      </div>
    </main>
  );
}

export default Login;
