import React, { useEffect, useState } from 'react'
import './Header.css'

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
          <a className="logo">NAGOMI 和み</a>
          <ul className="box-header">
            <li><a href='#filosofia'>Filosofia</a></li>
            <li><a href='#cardapio' >Cardápio</a></li>
            <li><a href='#chef'>O Chef</a></li>
            <li><a href='#omakase' >Omakase</a></li>
            <a className="btn-reserva" href='#reservar'>Reservar</a>
          </ul>
        </div>
      </nav>
    </header>


  </div>

  )
}
