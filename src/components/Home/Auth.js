import React, {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../../store/AuthContext'
import { useNavigate } from 'react-router-dom'



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
    <div>
      {register ? (
        <form onSubmit={e => handleSubmit(e)}>
          <h2>Thank you for visiting InstaPlan! Create an account below.</h2>
          <input placeholder='username' onChange={e => setUsername(e.target.value)}/>
          <input placeholder='password' onChange={e => setPassword(e.target.value)}/>
          <button>Submit</button>

        </form>
      ) : (
        <form onSubmit={e => handleSubmit(e)}>
          <h2>Thank you for visiting InstaPlan! Please Sign in below.</h2>
          <input placeholder='username' onChange={e => setUsername(e.target.value)}/>
          <input placeholder='password' onChange={e => setPassword(e.target.value)}/>
          <button>Submit</button>
        </form>
      )}
      <button onClick={() => setRegister(!register)}>Need to {register ? 'login?' : 'register?'}</button>
    </div>
  )
}

export default Auth