import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <NavLink to='/'>
        <h1>E-commerce</h1>
        </NavLink>
        <nav className="header-nav">
            <ul className="header-list">
                <li className="header-item"><NavLink className={({isActive}) => isActive ? "active-link" : ""  } to="/login"><i class="fa-solid fa-user"></i>Login</NavLink></li>
                <li className="header-item"><NavLink className={({isActive}) => isActive ? "active-link" : ""  } to="/purchase"><i class="fa-sharp fa-solid fa-bag-shopping"></i>Purchases</NavLink></li>
                <li className="header-item"><NavLink className={({isActive}) => isActive ? "active-link" : ""  } to="/cart"><i class="fa-sharp fa-solid fa-cart-shopping"></i>Cart</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header