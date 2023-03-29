/*
  @AUTHOR: https://github.com/driicarvalho7

  Nesse arquivo, eu criei um card dinâmico para ser exibido
  abaixo do filtro de informações.
*/

import './CardFiltro.css';
import Badge from '../../components/Badge/Badge.js';

export function CardFiltro(props) {
  const { product, onProductDelete } = props;

  return (
    <div className="Card-Select-Comp-Prod">
      <p className='idC-Json'> {product.id} </p>
      <p className='nomeC-Json'> {product.nome} </p>
      <p className='nomeC-Json'> {product.cpf} </p>
      <p className='fornecedorC-Json'> {product.dataNasc} </p>
      <p className='fornecedorC-Json'> {product.dataCad} </p>
      <p className='valorC-Json'> <Badge value={product.renda} /> </p>  
    </div>
  );
}