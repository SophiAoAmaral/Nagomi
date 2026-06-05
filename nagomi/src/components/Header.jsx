import React from 'react'
import './Header.css'
import {Link} from 'react-router'

export const Header = () => {
  return (
   
      <header className='header'>
         <section className='box-shadow'>
            <nav className='header-container'>
                <div>
                    <div>
                      <Link style={{textDecoration: 'none'}} className='logo'>NAGOMI 和み</Link>
                    </div>
                </div>
                <div>
                  <ul className='box-header'>
                    <li>
                      <Link>Filosofia</Link>
                    </li>
                    <li>
                      <Link>Cardapio</Link>
                    </li>
                    <li>
                      <Link>O Chef</Link>
                    </li>
                    <li>
                      <Link>Omakase</Link>
                    </li>
                    <button className='btn-reserva'>
                      <Link>Reservar</Link>
                    </button>
                  </ul>
                </div>
            </nav>
        </section>
      </header>
    
  )
}
