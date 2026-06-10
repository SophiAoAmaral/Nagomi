import React from 'react'
import { Link } from 'react-router'
import './Home.css'

export const Home = () => {
  return (
  <section className='container'>
    <div className='box-content'>
    <div className='hero-content'>

      <div className='hero-text'>
        <span className='detail-home'> 和食  ·  Cozinha japonesa </span>
        <p className='hero-title'>O silêncio entre o mar e a <span>brasa</span>.</p>
        <p className='hero-p'>Em Nagomi, cada peça nasce do encontro entre o peixe perfeito, o arroz na temperatura exata e as mãos de quem dedicou a vida ao ofício. Uma experiência de balcão, conduzida em silêncio e atenção.</p>
      </div>

      <div className='hero-links'>
        <ul>
          <li>
            <Link to='/reservar'>Reservar Mesa</Link>
          </li>
          <li>
            <Link to='/cardapio'>Ver o cardapio</Link>
          </li>
        </ul>
      </div>
    </div>

    <div className='hero-details'>
      <span>和</span>
      <span>鮨</span>
      <span>と</span> 
      <span>炭</span>
    </div>
    </div>

    <div className='details-role'>
      <span>Role para descer</span>
    </div>
    
    </section>
  )
}
