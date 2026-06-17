import React from "react";
import "./Cardapio.css";
import { pratos } from "./Pratos";

export const Cardapio = () => {
  return (
    <section className='cardapio__box'>
        <section className="container cardapio__container" id="cardapio">
          <header className="cardapio__header">
            <p className="cardapio__detail">品書き · seleção da casa</p>
            <h2 className="cardapio__title">Do balcão à mesa, o essencial.</h2>
            <p className="cardapio__description">
              Uma amostra do nosso repertório. O cardápio completo acompanha a
              estação e a pesca do dia.
            </p>
          </header>
          <ul className="box-cardapio">
            {pratos.map((prato) => (
              <li key={prato.id}>
                <article className="parto__container">
                  <div className="img__box">
                    <img src={prato.img} alt="" />
                  </div>
                  <div>
                    <header className="prato__box">
                     <h3>{prato.nome}</h3>
                      <span>{prato.preco}</span>
                    </header>
                    <p className="prato__japan">{prato.nomeJp}</p>
                    <p className="prato__description">{prato.descricao}</p>
                  </div>
                </article>
              </li>
            ))}
            <li></li>
          </ul>
          <div className="box-reserva">
              <a className="reservar">Reservar para experiencia completa</a>
          </div>
        </section>
    </section>
  );
};
