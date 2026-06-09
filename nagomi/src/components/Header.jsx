import React, { useEffect, useState } from 'react'
import './Header.css'
import {Link} from 'react-router'


export const Header = () => {

  return (
  
    <header className="header">
       <section className="box-shadow">
        <nav className="header-box container"  >

        <Link className="logo" to="/">
        NAGOMI 和み
        </Link>

      <ul className="box-header">
        <li><Link to="/filosofia">Filosofia</Link></li>
        <li><Link to="/cardapio">Cardápio</Link></li>
        <li><Link to="/chef">O Chef</Link></li>
        <li><Link to="/omakase">Omakase</Link></li>

        <Link to="/reserva" className="btn-reserva">
            Reservar
        </Link>
      
      </ul>

    </nav>
  </section>
</header>
  )
}
