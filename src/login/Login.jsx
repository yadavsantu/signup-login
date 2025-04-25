import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='addUser'>
      <h3>Log In</h3>
      <form className='addUserForm'>
        <div className="inputGroup">
           
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' autoComplete='off' placeholder='Enter your email' required />
            <label htmlFor="password">Password:</label>
            <input type="password" id='password' autoComplete='off' placeholder='Enter your password' required />
            <button type="submit" class="btn btn-primary">Log In</button>
            
        </div>
      </form>
      <div className="login">
        <p>Don't have an account?</p>
        <Link to="/" type="submit" class="btn btn-success">Sign Up</Link>
      </div>
    </div>
  )
}

export default Login
