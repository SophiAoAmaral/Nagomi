import React from 'react'
import './FormReserva.css'
import { useState } from 'react';

export const FormReserva = () => {
     const [enviado, setEnviado] = useState(false);

    function handleSubmit(e){
        e.preventDefault()
        setEnviado(true)
    }
  return (
    <section className='form' id='reservar'>
        <section className='container form__container'>

           <div className="form__info">
                <span className="form__sobretitulo" lang="ja">予約 · Reservas</span>
                <h3 className="form__titulo">Reserve a sua noite.</h3>
                <p className="form__descricao">Recomendamos reserva com antecedência, especialmente para o balcão omakase. Confirmamos por mensagem em até duas horas.</p>

            <ul className="form__lista">
                <li className="info">
                <h4 className="info__rotulo">Endereço</h4>
                <div className='info_box'>
                    <p className="info__dado">Rua das Glicínias, 142</p>
                    <p className="info__dado2">Jardins · São Paulo</p>
                </div>
            </li>

            <li className="info">
                <h4 className="info__rotulo">Horário</h4>
                <div className='info_box'>
                    <p className="info__dado">Terça a Domingo</p>
                    <p className="info__dado2">2 sessões · 19h e 21h30</p>
                </div>
            </li>

            <li className="info">
                <h4 className="info__rotulo">Contato</h4>
                <div className='info_box'>
                    <p className="info__dado">+55 11 4002-8922</p>
                    <p className="info__dado2">nagomiatendimento@gmail.com</p>
                </div>
            </li>
            </ul>

            </div>


            <div className={enviado ? 'enviado' : 'form__box'}>
                <h3>Solicitar reserva</h3>
                <form onSubmit={handleSubmit}  className="formulario ">

                    <div className='form-inputs'>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name='nome' id='nome' placeholder='Seu Nome' required />
                        
                    </div>

                    <div className='form-inputs'>
                        <label htmlFor="telefone">Telefone</label>
                        <input type="text" name='telefone' id='telefone' placeholder='(11)12345-6789' required />
                    </div>

                    <div className='form-inputs'>
                        <label htmlFor="data">Data</label>
                        <input type="date" name='date' id='date'  required/>
                    </div>

                    <div className='form-inputs'>
                        <label htmlFor="pessoas">Pessoas</label>
                        <select name="pessoas" id="pwessoas" required>
                            <option value="1">1 Pessoa</option>
                            <option value="2">2 Pessoas</option>
                            <option value="3">3 Pessoas</option>
                            <option value="4">4 Pessoas</option>
                        </select>
                    </div>

                    <div className='form-inputs experiencia'>
                        <label htmlFor="experiencia">experiencia</label>
                        <select name="experiencia" id="experiencia" required>
                            <option value="salao" >Salão à la carte</option>
                            <option value="balcao">Balcão - Omakase (12 tempos)</option>
                        </select>
                    </div>

                    <button className='button__form'>Enviar Solicitação</button>
                </form>
                <p className='form-conf'>Sem cobrança neste momento. Confirmação por mensagem.</p>
            </div>


            <div className={enviado ? 'active' : 'ofline'}>
                  <span className='detail-enviado'>予</span>  
                  <h3 className='enviado-title'>Solicitação enviada</h3>
                  <p className='enviado-text'>Obrigado. Nossa equipe confirmará a sua reserva em breve.</p>
                  <span className='enviado-text'> ありがとうございます。</span>
            </div>
        </section>
    </section>
  )
}
