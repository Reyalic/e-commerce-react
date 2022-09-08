import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom'

const LoginForm = ({setIsLogged}) => {
  const [loginError, setLoginError] = useState(false);

  const { handleSubmit, reset, register } = useForm();

  const navigate = useNavigate();

  const submit = (data) => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/users/login";
    axios
      .post(URL, data)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        setIsLogged(res.data.data.user)
        navigate("/");
      })
      .catch((err) => {
        console.log(err)
        localStorage.setItem("token", "");
        setLoginError(true);
        setTimeout(() => {
          setLoginError(false);
        }, 5000);
      });
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(submit)} className="login__form">
        <h2>Enter your email and password</h2>
        <ul className="login-list">
          <li className="login-item">
            <label htmlFor="login-email" className="login-label">
              Email
            </label>
            <input
              type="text"
              className="login-input"
              id="login-email"
              {...register("email")}
            />
          </li>
          <li className="login-item">
            <label htmlFor="login-input" className="login-label">
              Password
            </label>
            <input
              type="password"
              className="login-input"
              id="login-password"
              {...register("password")}
            />
          </li>
        </ul>
        <div>{loginError && "Invalid email or password, try again..."}</div>
        <button>Login</button>
      </form>
      <button className="link-button"><NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/signup">Create an account</NavLink>
      </button>
    </div>
  );
};

export default LoginForm;
