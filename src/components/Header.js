import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <NavLink to='/'>Sign in</NavLink>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/add'>Add a new week</NavLink>
    </nav>
  )
}

export default Header