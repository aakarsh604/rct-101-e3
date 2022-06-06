import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const {isAuth, login} = useContext(AuthContext);
  const [form, setform] = useState({
    email: "eve.holt@reqres.in",
    password : "cityslicka"
  });

  const handleClick = () => {
     login();
  }

  const handleChange = (e) => {
      const {name, value} = e.target;
    setform({
      ...form, 
      [name] : value,
    })
  }

  return (
    <div >
      <h1>Login</h1>
      <input data-cy="login-email" value={form.email} onChange={handleChange} name="email"/>
      <input data-cy="login-password" type="password" value={form.password} onChange={(e)=>handleChange(e)} name="password"/>
      <button data-cy="login-submit" onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
