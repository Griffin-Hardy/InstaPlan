import React, {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../../store/AuthContext'
import { useNavigate } from 'react-router-dom'
import "./Auth.css"



const Auth = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [register, setRegister] = useState(false)
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()

  console.log(authCtx)

  const handleSubmit = e => {
    e.preventDefault()

    const body = {
      username,
      password
    }

    axios.post(register ? '/register' : '/login', body)
      .then(res => {
        authCtx.login(res.data.token, res.data.exp, res.data.userId)
        navigate('/home')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='container-box'>
    <section className='form-container'>
      {register ? (
        <form onSubmit={e => handleSubmit(e)} className="auth-form">
          <h2>Thank you for visiting InstaPlan! Create an account below.</h2>
          <label htmlFor="username">Username</label>
          <input placeholder='username' id='username' onChange={e => setUsername(e.target.value)}/>
          <label htmlFor="password">Password</label>
          <input placeholder='password' id='password' onChange={e => setPassword(e.target.value)}/>
          <button className='auth-btn'>Submit</button>

        </form>
      ) : (
        <form onSubmit={e => handleSubmit(e)} className="auth-form">
          <h2>Thank you for visiting InstaPlan! Please sign in below.</h2>
          <label htmlFor="username">Username</label>
          <input placeholder='username' onChange={e => setUsername(e.target.value)}/>
          <label htmlFor="password">Password</label>
          <input placeholder='password' onChange={e => setPassword(e.target.value)}/>
          <button className='auth-btn'>Submit</button>
        </form>
      )}
      <button className='auth-btn' onClick={() => setRegister(!register)}>Need to {register ? 'login?' : 'register?'}</button>
    </section>
    </div>
  )
}

export default Auth