import React from "react";
import Input from "./Input";

function Login() {
  return <form className="form">
  <input type="name" placeholder="name" />
  <input type="password" placeholder="Password" />
  <button type="submit">Login</button>
</form>
}

export default Login;