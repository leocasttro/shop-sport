import React from "react";

import './footer.css'

const Footer = () => {
  return (
    <div className="containerFooter col">
      <div className="logoFooter">
        <img src="../../assets/img/escudo.png" alt="logo" />
        <p>Copyrigth &copy; 2022 </p>
      </div>
      <div className="textFooter">
        <h3>Sobre a Loja</h3>
        <p>Com foco no mundo esportivo ao alcance de todos, nossa loja é dividida em diferentes seções: feminina, masculina, infantil, com uma variedade incrível de produtos. Atendimento: De Segunda a Sexta, das 09:00h as 17:00hs</p>
      </div>
      <div className="column">
        <h3>Confira</h3>
        <ul>
          <li>Depoimentos de clientes</li>
          <li>Duvidas frequentes</li>
          <li>Quem somos</li>
          <li>Contato</li>
          <li>Compra segura</li>
        </ul>
      </div>
      <div className="column">
        <h3>Institucional</h3>
        <ul>
          <li>Politica de privacidade</li>
          <li>Politica de entrega</li>
          <li>Politica de troca e devolução</li>
          <li>Politica de termo de uso</li>
          <li>Frete e prazo</li>
        </ul>
      </div>
      <div className="column">
        <h3>Entre em Contato</h3>
        <ul>
          <li>+55 11 9999-9999</li>
          <li>sport@gmail.com</li>
          <li>@Sport</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;