import React from "react";
import logo from "./logo.svg";
import "./login.css";

const Login = () => {
  return (
    <div className="formContainer">
      <img src={logo} className="logo" />
      <form className="loginForm">
        <h2>Connectez-vous</h2>
        <input type="text" name="email" placeholder="nom d'utilisateur" />
        <br />
        <input type="text" name="password" placeholder="mot de passe" />
        <br />
        <div className="resterConnectés">
          <input type="checkbox" className="checkbox" />
          <span>Restez connectés?</span>
        </div>
        <br />
        <input
          className="loginSubmit"
          type="submit"
          name="submit"
          value="sign in"
        />
        <span className="links">mot de passe oublié?</span>
        <span className="links">créer un nouveau compte</span>
      </form>
    </div>
  );
};

export default Login;
