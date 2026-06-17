import React from 'react'
import './Omakase.css'

const destaques = [
  { id: 1, valor: "12", rotulo: "Tempos" },
  { id: 2, valor: "8", rotulo: "Lugares" },
  { id: 3, valor: "R$ 280", rotulo: "Por pessoa" },
]




export const Omakase = () => {
  return (
    <>
    <section className='box__omakase' id='omakase'>
            <div className='shadow__omakase'>
                <section className='container container__omakase'>
                    <span className='omakase__detail'>お任せ · Confie no Chef</span>
                    <h1 className='omakase__title'>Omakase do Balcão</h1>
                    <p className='omakase__text'> Doze tempos servidos um a um, no ritmo do chef. Apenas oito lugares por noite, em duas sessões. Uma conversa silenciosa entre o itamae e você.</p>
                    <ul className="destaques__omakase">
                        {destaques.map((item) => (
                            <li className="destaque__omakase" key={item.id}>
                                <span className="destaque__omakase">{item.valor}</span>
                                <span className="destaque__omakase">{item.rotulo}</span>
                            </li>
                        ))}
                    </ul>
                    <button className='button'><a href="#reservar">Reservar o balcao</a></button>
                        </section>
            </div>
    </section>








    </>
  )
}
