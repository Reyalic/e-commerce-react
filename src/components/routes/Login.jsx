import React, { useEffect, useState } from 'react'
import LoginForm from '../login/LoginForm'
import LogOutForm from '../login/LogOutForm'

const Login = () => {

  const [isLogged, setIsLogged] = useState()

  useEffect(() => {
    setIsLogged(localStorage.getItem('token'))
  }, [])

  return (
    <main className='login'>
      {
        isLogged ?
          <LogOutForm setIsLogged={setIsLogged} isLogged={isLogged} />
        :
          <LoginForm setIsLogged={setIsLogged} />
      }
    </main>
  )
}

export default Login
