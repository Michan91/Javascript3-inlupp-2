import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logoutUser } from '../store/actions/authActions'

const Navbar = () => {

  const dispatch = useDispatch() 

  const isAuth = useSelector(state => state.auth.token)
  
  return (
    <nav className='navbar'>
      <div className="container">
        <Link to="/" className='navbar-brand' >MinEventLista</Link>

        <ul className='nav-links'>
          <li><NavLink to="/" className="nav-link" >Event</NavLink></li>

          { isAuth      
          ? (<>
            <li><NavLink to="/create" className="nav-link" >Skapa nytt Event</NavLink></li>
            <li><Link onClick={() => dispatch(logoutUser())} to="/login" className="nav-link">Logga ut</Link></li>
            </>)

          : <li><NavLink to="/login" className="nav-link" >Logga in</NavLink></li>
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar