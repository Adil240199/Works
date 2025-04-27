import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./sign.scss";

const Sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "Raymea@mail.ru" && password === "1111") {
      history.push("/Users");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="blockSign">
      <div className="container_sign">
        <h1>Log in to your account</h1>
        <div className="lines">
          <span className="line"></span>
          <p className="some_text">or</p>
          <span className="line"></span>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form className="sign" onSubmit={handleSubmit}>
          <p className="sgn_text">
            E-mail <br />
            <input
              className="email"
              type="email"
              name="login"
              value={email}
              onChange={handleEmailChange}
            />
          </p>
          <p className="sgn_text">
            Password <br />
            <input
              className="password"
              type="password"
              name="pass"
              value={password}
              onChange={handlePasswordChange}
            />
          </p>
          <p>
            <input className="submit" type="submit" value="Sign In" />
          </p>
        </form>
        <a href="https://www.youtube.com/" className="forgot_psw">
          Forgot Your Password?
        </a>
        <p className="regis">
          Don&#8217;t have an account?
          <a href="https://www.youtube.com/" className="regis_link">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sign;
