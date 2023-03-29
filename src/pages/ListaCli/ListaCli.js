/*
  @AUTHOR: https://github.com/driicarvalho7

  Este é o arquivo de Listagem de clientes.

  Utilizei a biblioteca "react-select" para criar o filtro.

  Basicamente o que ocorre é:
    - O "fetchData" utiliza o axios para fazer uma requisição
      no http, assim pegando as informações do json de clientes
    - Em seguida, ao digitar no campo, dinâmicamente será exibido
      os clientes relacionados aquele nome.
    - Quando selecionado o cliente, um Card será exibido, trazendo as
      informações do cliente.
      (Pesquise por Adriano, Roberto e Paulo para visualizar as Badges)
*/

//IMPORTS NECESSÁRIOS PARA APLICAÇÃO
import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import Sidebar from '../../components/SideBar/Sidebar.js';
import ContactsIcon from '@mui/icons-material/Contacts';
import { CardFiltro } from '../../components/CardFiltro/CardFiltro.js';
import axios from '../../api/axios.js';

//FUNÇÃO QUE EXIBE OS CLIENTES SELECIONADOS
function SelectedProductList({ productList, onDelete }) {
  return (
    <div className="selectedProductList">
      {productList.map((product) => (
        <CardFiltro
          key={product.nome}
          product={product}
          onProductDelete={() => onDelete(product.nome)}
        />
      ))}
    </div>
  );
}

function ListaCli() {
  //USESTATES NECESSÁRIOS PARA O FILTRO
  const [values, setValues] = useState('')
  const [selectedVal, setSelectedVal] = useState(null)
  const [productList, setProductList] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([]); 
  const [filteredProductList, seteredProductList] = useState([])
  const [selectedProductsList, setSelectedProductsList] = useState([]);
  
  //****************************************************************************************
  //FUNÇÕES NECESSÁRIAS PARA O FILTRO FUNCIONAR
  const handleChange = (values) => {
    setSelectedVal(values);
    if (values) {
      setSelectedProducts((prevState) => [...prevState, values]);
      setSelectedProductsList((prevState) => [...prevState, values]);
    }
  };
  
  const fetchData = () => {
    return axios.get('./clientes')
      .then(result => {
        const res = result.data
        setProductList(res)
        return res
      })
  }

  const filterProducts = () => {
    return productList.filter(cliente =>
      cliente.nome.includes((values ?? ''))
    );
  }

  useEffect(() => {
    fetchData()
  }, [])

  //****************************************************************************************

  return (
    <div className="CadastroCli">
      <header className="header">
        <Sidebar />
        <h1 className="title">
          Listagem de Clientes <ContactsIcon fontSize="large" className="personIconCad" />
        </h1>
      </header>
      <div className="CadastroCli-content">
        <div className="CadastroCli-form-box">
          <label htmlFor="nome">Pesquise o cliente</label>
          <AsyncSelect 
            cacheOptions 
            defaultOptions
            placeholder="Insira o código"
            value={selectedVal}
            getOptionLabel={e => e.nome}
            getOptionValue={e => e.nome}
            loadOptions={(inputVal, callback) => {
              setValues(inputVal);
              const filteredProducts = filterProducts();
              callback(filteredProducts);
            }}  
            onChange={handleChange}
            noOptionsMessage={() => "Código não existe"}
          />
          <div className="selectedProductsContainer">
            <SelectedProductList
              productList={selectedProductsList}
            />
          </div>
          <div className="productList">
          {filteredProductList.map((product) => (
            <CardFiltro
              key={product.nome}
              product={product}
              onProductSelect={() => setSelectedProductsList((prevState) => [...prevState, product])}
            />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default ListaCli;