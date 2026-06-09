import React, { useEffect, useState } from 'react'
import './Header.css'
import {Link} from 'react-router'


export const Header = () => {
 const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
 

  <div>
    <header className="header">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-box">
          <Link className="logo" to="/">NAGOMI 和み</Link>
          <ul className="box-header">
            <li><Link to="/filosofia">Filosofia</Link></li>
            <li><Link to="/cardapio">Cardápio</Link></li>
            <li><Link to="/chef">O Chef</Link></li>
            <li><Link to="/omakase">Omakase</Link></li>
            <Link to="/reserva" className="btn-reserva">Reservar</Link>
          </ul>
        </div>
      </nav>
    </header>


  </div>

  )
}
