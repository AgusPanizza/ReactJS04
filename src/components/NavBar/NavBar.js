import React from 'react'
import { ItemListContainer } from '../ItemListContainer/ItemListContainer'
import { CartWidget } from './CartWidget'
import "./NavBar.css"

export const NavBar = ({logo}) =>{
return (
<header>

<h1 class="logo">{logo}</h1>

<nav class="Nav">
    <li>Home</li>
    <li>Nosotros</li>
    <li>Nuestro Café</li>
    <li>Patisserie</li>
    <li>Contacto</li>
   <li><CartWidget/></li>

</nav>


<ItemListContainer/>

</header>
)
}