import React from 'react'
import image1 from '../imgs/filo-1.jpg'
import image2 from '../imgs/filo-2.jpg'
import image3 from '../imgs/filo-3.jpg'
import './Apresenta.css'

export const Apresenta = () => {
  return (
   <section className='content-apresent'>
    <section className='container'>
      <section className='container-apresent'>
        <div className='box-apresentation'>
            <p className='details-filo'> 心 · Nossa filosofia</p>
            <p className='title-apresent'>Menos elementos, mais presença.</p>
            <p className='text-apresent'>Acreditamos que no <span>shun</span>  o instante exato em que cada ingrediente atinge seu
                auge. Trabalhamos com poucos fornecedores, peixe pescado por linha e arroz cultivado
                para nós.
            </p>
            <p className='subtext-apresent'>Nada de excessos. O tempero correto é aquele que  você não percebe: ele apenas
                revela o que o ingrediente já era.
            </p>
            <div className='details-apresent'>
                <span>「 旬を味わう 」</span>
                <span>saborear a estação</span>
            </div>
        </div>

        <div className='content-images'>
            <div className='image-1'>
                <img src={image1} alt="" />
            </div>
            <div className='image-2'>
                <img src={image2} alt="" />
            </div>
            <div className='image-3'>
                <img src={image3} alt="" />
            </div>
        </div>
            </section>
        </section>
    </section> 
  )
}
