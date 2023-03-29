/*
  @AUTHOR: https://github.com/driicarvalho7

  Este é o arquivo de relatórios

  Não consegui finaliza-lo por conta do tempo.

  Porém, utilizei o componente "tab" da biblioteca "react-bootstrap"
  para exibir o "Mês", "Semana" e "Hoje". 
  
  Além disso, coloquei um botão para exibir a data atual e os dados 
  que vieram da API.
*/

// IMPORTE DE COMPONENTES E ICONES PARA FUNCIONAMENTO DA APLICAÇÃO.
import React, { useState } from 'react';
import Sidebar from '../../components/SideBar/Sidebar.js';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import './Relatorios.css'
import axios from '../../api/axios.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const fetchData = () => {
  return axios.get('./clientes')
    .then(result => {
      const res = result.data;

      // Quantidade de clientes maiores de 18 anos com renda maior que a renda média
      const mediaRenda = res.reduce((total, cliente) => total + cliente.renda, 0) / res.length;
      const clientesMaiores18 = res.filter(cliente => (new Date().getFullYear() - new Date(cliente.dataNasc).getFullYear()) > 18);
      const clientesMaiores18RendaMaiorMedia = clientesMaiores18.filter(cliente => cliente.renda > mediaRenda);
      const qtdClientesMaiores18RendaMaiorMedia = clientesMaiores18RendaMaiorMedia.length;

      // Quantidade de clientes em cada classe (A, B e C)
      const faixasRenda = {
        A: { min: 2500.01, max: Infinity },
        B: { min: 950.01, max: 2500 },
        C: { min: 0, max: 950 }
      };
      const qtdClientesPorFaixaRenda = {
        A: 0,
        B: 0,
        C: 0
        };
        res.forEach(cliente => {
        const faixa = Object.keys(faixasRenda).find(faixa => cliente.renda >= faixasRenda[faixa].min && cliente.renda < faixasRenda[faixa].max);
        qtdClientesPorFaixaRenda[faixa]++;
      });

      let data = new Date();

      // Exibição dos dados no console. Aqui poderia ser implementada uma função melhor para exibição.

      console.log(mediaRenda.toFixed(2));
      console.log(qtdClientesMaiores18RendaMaiorMedia);
      console.log(qtdClientesPorFaixaRenda);
      console.log(data);
  });
};



function Relatorios() {
  const [key, setKey] = useState('home');

  return (
    <div className="CadastroCli">
      <header className="header">
        <Sidebar />
        <h1 className="title">Relatórios <ContactPageIcon fontSize='large' className='personIconCad'/></h1>
      </header>
      <div className="CadastroCli-content">
        <div className="CadastroCli-form-box1">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="home" title="Mês" className='tabsColor'>
              <button onClick={fetchData}>Exibir no Console os dados</button>
            </Tab>
            <Tab eventKey="profile" title="Semana" className='tabsColor'>
              <button onClick={fetchData}>Exibir no Console os dados</button>
            </Tab>
            <Tab eventKey="contact" title="Hoje" className='tabsColor'>
              <button onClick={fetchData}>Exibir no Console os dados</button>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Relatorios;