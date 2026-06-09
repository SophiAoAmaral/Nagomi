import React from 'react'
import { Header } from './Header'
import {Home} from './Home'
import './Content.css'

export const Content = () => {
  return (
    <section className='box-container'>
        <div className='box-shadow'>
            <Header/>
            <Home/>
        </div>
    </section>
  )
}
