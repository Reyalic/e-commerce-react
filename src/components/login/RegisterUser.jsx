import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

const RegisterUser = () => {

  const {handleSubmit, reset, register} = useForm()

  const navigate = useNavigate()

  const submit = data => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
    axios.post(URL, data)
    .then(res => {
      localStorage.setItem("token", res.data.data.token)
      navigate("/")
    })
    .catch(err => console.log(err))
    reset({
        "firstName": "",
        "lastName": "",
        "email": "",
        "password": "",
        "phone": "",
        "role": ""
    })
  }

  return (
    <div>
         <form onSubmit={handleSubmit(submit)} className="register-form">
        <h2>Create an account</h2>
        <ul className="login-list">
          <li className="login-item">
            <label htmlFor="login-input" className="login-label">First Name: </label>
            <input type="text" className="login-input" id="login-first" {...register("first-name")} />
          </li>
         <li className="login-item">
            <label htmlFor="login-input" className="login-label">Last Name: </label>
            <input type="text" className="login-input" id="login-last" {...register("last-name")} />
          </li>
          <li className="login-item">
            <label htmlFor="login-input" className="login-label">Email: </label>
            <input type="email" className="login-input" id="login-email" {...register("email")} />
          </li>
          <li className="login-item">
            <label htmlFor="login-input" className="login-label">Password: </label>
            <input type="password" className="login-input" id="login-password" {...register("password")} />
          </li>
          <li className="login-item">
            <label htmlFor="login-input" className="login-label">Number: </label>
            <input type="number" className="login-input" id="login-number" {...register("number")} />
          </li>
          <li className="login-item">
            <label htmlFor="login-input" className="login-label">Role: </label>
            <input type="text" className="login-input" id="login-role" {...register("role")} />
          </li>
        </ul>
        <button>Sign up</button>
      </form>
      <button><NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/login">Login</NavLink>
      </button>
    </div>
  )
}

export default RegisterUser