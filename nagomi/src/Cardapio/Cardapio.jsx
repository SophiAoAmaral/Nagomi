import React from "react";
import "./Cardapio.css";
import { pratos } from "./Pratos";

export const Cardapio = () => {
  return (
    <section className="container">
      <header>
        <p lang="ja">
          品書き · <span>seleção da casa</span>
        </p>
        <h2 id="menu-titulo">Do balcão à mesa, o essencial</h2>
        <p>
          Uma amostra do nosso repertório. O cardápio completo acompanha a
          estação e a pesca do dia.
        </p>
      </header>

      <ul className="box-cardapio">
        {pratos.map((prato) => (
          <li>
            <article>
              <img src={prato.img} alt="" />
              <div>
                <header>
                 <h3>{prato.nome}</h3>
                  <span>{prato.preco}</span>
                </header>
                <p>{prato.nomeJp}</p>
                <p>{prato.descricao}</p>
              </div>
            </article>
          </li>
        ))}
        <li></li>
      </ul>
    </section>
  );
};
