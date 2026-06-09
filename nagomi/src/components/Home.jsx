import React from 'react'
import { Link } from 'react-router'

export const Home = () => {
  return (
    <section className='container box-content' style={{paddingTop:'5rem'}}>

    <div className='hero-text'>

      <span> 和食 · Cozinha japonesa </span>
      <p>O silêncio entre o mar e a brasa.</p>
      <p>Em Nagomi, cada peça nasce do encontro entre o peixe perfeito, o arroz na temperatura exata e as mãos de quem dedicou a vida ao ofício. Uma experiência de balcão, conduzida em silêncio e atenção.</p>

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
      鮨 と 炭
    </div>
    
    
    </section>
  )
}
