import React from 'react'
import { Header } from '../Header/Header'
import {Home} from '../Home/Home'
import { Apresenta } from '../Apresentacao/Apresenta'
import { Cardapio } from '../Cardapio/Cardapio'
import { Chef } from '../Chef/Chef'
import { FormReserva } from '../FormReserva/FormReserva'
import { Omakase } from '../Reserva/Omakase'
import { Footer } from '../Footer/Footer'

export const Content = () => {
  return (
    <section>
        <div className='box-shadow'>
            <Header/>
            <Home/>
            <Apresenta/>
            <Cardapio/>
            <Chef/>
            <Omakase/>
            <FormReserva/>
            <Footer/>
        </div>
    </section>
  )
}
