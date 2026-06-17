import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <section className='footer-container'>
        <footer className='container footer-box'>
            <div>
                <h1 className='logo-footer'>Nagomi 和み</h1>
                <p className='footer-text'>Cozinha japonesa contemporânea. O encontro entre o mar, a brasa e o silêncio peça após peça.</p>
            </div>

            <div>
                <ul className='list-footer'>
                    <div>
                        <h3 className='title-list'>Navegar</h3>
                        <li className='items-footer'>Filosofia</li>
                        <li className='items-footer'>Cardápio</li>
                        <li className='items-footer'>O Chef</li>
                        <li className='items-footer'>Omakase</li>
                        <li className='items-footer'>Reservar</li>
                    </div>
                    <div>
                        <h3 className='title-list'>Visite</h3>
                        <li className='items-footer'>Rua das Glicínias, 142</li>
                        <li className='items-footer'>Jardins · São Paulo</li>
                        <li className='items-footer'>Ter–Dom · 19h às 23h</li>
                    </div>

                     <div>
                        <h3 className='title-list'>Contato</h3>
                        <li className='items-footer'>+55 11 4002-8922</li>
                        <li className='items-footer'>nagomiatendimento@gmail.com</li>
                        <li className='items-footer'>Instagram</li>
                    </div>
                </ul>
            </div>

        </footer>
        <div className='footer-copy container'>
                <p>© 2026 NAGOMI 和み · Cozinha Japonesa</p>
                <p>「 旬を味わう 」 — saborear a estação</p>
            </div>
    </section>
  )
}
