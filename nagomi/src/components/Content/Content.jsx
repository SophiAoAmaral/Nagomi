import React from 'react'
import { Header } from '../Header/Header'
import {Home} from '../Home/Home'
import './Content.css'
import { Apresenta } from '../Apresentacao/Apresenta'
import { Cardapio } from '../../Cardapio/Cardapio'

export const Content = () => {
  return (
    <section className='box-container '>
        <div className='box-shadow'>
            <Header/>
            <Home/>
            <Apresenta/>
            <Cardapio/>
        </div>
    </section>
  )
}
