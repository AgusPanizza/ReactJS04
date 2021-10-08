import React from 'react'
import { CartWidget } from './CartWidget'
import "./NavBar.css"

export const NavBar = ({logo}) =>{
return (
<header>

<h1 className="logo">{logo}</h1>

<nav className="Nav">
    <li>Home</li>
    <li>Nosotros</li>
    <li>Nuestro Café</li>
    <li>Patisserie</li>
    <li>Contacto</li>
   <li><CartWidget/></li>

</nav>

</header>
)
}