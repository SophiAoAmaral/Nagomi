import React from 'react'
import image from '../../imgs/chef.jpg'
import './Chef.css'

export const Chef = () => {
  return (
    <section className='chef__container' id='chef'>

            <section className='container chef__box'>
                <div className='chef__img'>
                    <img src={image} alt="" />
                    <span className='detail__chef'><span>28</span> Anos de ofício</span>
                </div>
                <div>
                    <span className='chef__apresentacao'>料理長 · O chefe</span>
                    <p className='chef__ex'>板長 ·  Itamae</p>
                    <h1 className='chef__name'>Kenji Arashiro</h1>
                    <p className='chef__text'>Formado em Kanazawa e moldado por uma década atrás dos balcões de Tóquio,
                    o chef Kenji trouxe ao Brasil uma convicção simples: o sushi é
                    um diálogo entre quem prepara e quem recebe não um espetáculo.</p>
                    <p className='chef__text'>Seu omakase muda todos os dias. Não há cardápio fixo no balcão: há a confiança de se entregar ao itamae
                    e deixar que a estação conduza o ritmo da refeição, peça após peça.</p>
                    <h2 className='chef__ass'>板長  · K. Arashiro</h2>
                </div>
            </section>

    </section>
  )
}
