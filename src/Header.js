import Logo from "./icons_assets/Logo.svg"
import React from 'react';

const Header = () => {
  return (
< >
    <nav>
        <img src= {Logo} alt="Little lemon logo"/>
    
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
    </nav>
</>
  )
}

export default Header;