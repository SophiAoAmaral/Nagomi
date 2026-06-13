import React from 'react'
import image1 from '../imgs/filo-1.jpg'

export const Apresenta = () => {
  return (
    <section>
        <div>
            <span className='details-filo'>Nossa filosofia</span>
            <p>Menos elementos, mais presença.</p>
            <p>Acreditamos que no shun  o instante exato em que cada ingrediente atinge seu
                auge. Trabalhamoscom poucos fornecedores, peixe pescado por linha e arroz cultivado
                para nós.
            </p>
            <p>Nada de excessos. O tempero correto é aquele que  você não percebe: ele apenas
                revela o que o ingrediente já era.
            </p>
            <span>「 旬を味わう 」</span>
            <span>saborear a estação</span>
        </div>

        <div className='content-images'>
            <div className='image-1'>
                <img src={image1} alt="" />
            </div>
            <div className='image-2'></div>
            <div className='image-3'></div>
        </div>





    </section>
  )
}
