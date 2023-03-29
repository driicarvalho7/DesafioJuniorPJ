/*
  @AUTHOR: https://github.com/driicarvalho7

  Nesse arquivo, criei a Badge de exibição da renda do cliente.

  Utilizei as estruturas de if's para definir qual cor teria o background
  de acordo com o valor que ele receber quando for chamado.
*/

//IMPORTS PADRÕES
import React from "react";
import "./Badge.css";

const Badge = ({ value }) => {

  let color = "";

  if (value <= 980) {
    color = "red";
  } else if (value <= 2500) {
    color = "#C9D400";
  } else if (value > 2500) {
    color = "green";
  }

  //FORMATAR O VALOR PARA QUE ELE SEJA EXIBIDO MAIS BONITO NA EXIBIÇÃO
  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);

  return (
    <div className="badge" style={{ backgroundColor: color }}>
      {formattedValue}
    </div>
  );
};

export default Badge;
