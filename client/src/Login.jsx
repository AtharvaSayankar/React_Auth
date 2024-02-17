import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { auth } from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault() // To prevent default submission
    try {
      // Main logic
      await signInWithEmailAndPassword(auth, email, password)
      alert('Login Successful !!')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor='email'>
            Email:
            <input type='text' onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label htmlFor='password'>
            Password:
            <input type="password"  onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button type='submit'>Login</button> <br /><br />
        <p>Don't Have Account?
          {/*Link is functionality of react-router-dom*/}
          {/*You can also use normal <a href=""></a>*/}
          <span> <Link to='/signup'>Sign Up</Link></span>
        </p>
      </form>
    </div>
  )
}

export default Login