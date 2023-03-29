/*
  author: https://github.com/driicarvalho7

  Este é o arquivo principal após a aplicação ser carregada.

  Tem como finalidade fazer o cadastro do cliente, e gravar as informações
  no banco de dados. Porém, como tive problemas, criei um console.log para
  ser exibido no terminal as informações.
*/

// IMPORTE DE COMPONENTES E ICONES PARA FUNCIONAMENTO DA APLICAÇÃO.
import { React, useState } from 'react';
import './CadastroCli.css';

import Sidebar from '../../components/SideBar/Sidebar.js';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

// FUNÇÕES PARA FORMATAÇÃO DO INPUT. DEIXANDO A EXIBIÇÃO MAIS FLUIDA PARA O USUÁRIO
function formatCPF(e) {
  const cpf = e.target.value
    .replace(/\D/g, '') // remove todos os caracteres que não são números
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4') // formata o CPF com pontos e hífen
  e.target.value = cpf
}
function formatRenda(e) {
  const renda = e.target.value
    .replace(/\D/g, '') // remove todos os caracteres que não são números
    .replace(/(\d{1,})(\d{2})$/, (x, y, z) => `R$ ${y}.${z.padEnd(2, '0')}`) // formata a renda com R$ e vírgula
  e.target.value = renda
}

//FUNÇÃO PRINCIPAL A SER EXPORTADA
function CadastroCli() {
  //VARIÁVEIS PARA MANIPULAÇÃO DOS CAMPOS UTILIZANDO "useState()" DO REACT.
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [dataNasc, setDataNasc] = useState('')
  const [dataCad, setDataCad] = useState(new Date().toISOString().split('T')[0])
  const [renda, setRenda] = useState('')

  //FUNÇÃO PARA LIMPAR O FORMULÁRIO
  function clearForm(){
    setNome('')
    setCpf('')
    setDataNasc('')
    setRenda('')
  }

  /*
  ******************************************************************************
    ABAIXO SÃO AS FUNÇÕES NECESSÁRIAS PARA O SUBMIT DO FORMS
  */
  function handleDataCadastroChange() {
    setDataCad(new Date().toLocaleDateString());
  }

  function removePontuacaoCPF(cpf) {
    return cpf.replace(/[^\d]/g, '')
  }

  const rendaSemPrefixo = renda.toString().replace('R$ ', '') || '0';
  const cpfSemPontuacao = removePontuacaoCPF(cpf)

  const handleSubmit = (e) => {
    e.preventDefault();

    /* 
      ESSE MOMENTO, SERIA NECESSÁRIO QUE AS BIBLIOTECAS DE BANCO DE DADOS
      ESTIVESSEM CORRETAS NO MEU PROJETO PARA ENVIAR O PUSH PARA O BANCO.

      DE ACORDO COM A ESTRUTURA DO ARQUIVO "dbSQL.js", SERIA CHAMADA A
      FUNÇAÕ "inserirCliente" PASSANDO OS PARÂMETROS QUE SERIAM ADICIONADOS.

      ex:
      inserirCliente(nome, cpfSemPontuacao, dataNasc, dataCad, rendaSemPrefixo)

      PORÉM, PARA VERIFICAR LOCALMENTE QUE AS INFORMAÇÕES ESTÃO SENDO COLETADAS
      DEIXEI UM CONSOLE LOG QUE EXIBIRA NO NAVEGADOR AS INFORMAÇÕES.
    */
    console.log({
      nome,
      cpfSemPontuacao,
      dataNasc,
      dataCad,
      rendaSemPrefixo
    });
  };
  //****************************************************************************

  return (
    <div className="CadastroCli">
      <header className="header">
        <Sidebar />
        <h1 className="title">Cadastro de Clientes <PersonAddIcon fontSize='large' className='personIconCad'/></h1>
      </header>
      <div className="CadastroCli-content">
        <div className="CadastroCli-form-box">
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome:</label>
            <input 
              type="text" 
              id="nome" 
              name="nome" 
              className='inptNome'
              maxLength={150}
              required={true}
              value={nome}
              onChange={e => setNome(e.target.value)}
            />

            <label htmlFor="cpf">CPF:</label>
            <input 
              type="text" 
              id="cpf" 
              name="cpf" 
              className='inptCPF'
              maxLength={11}
              onInput={formatCPF}
              value={cpf}
              onChange={e => setCpf(e.target.value)}
            />

            <label htmlFor="dataNascimento">Data de Nascimento:</label>
            <input 
              type="date" 
              id="dataNascimento" 
              name="dataNascimento" 
              className='inptDataNasc'
              value={dataNasc}
              onChange={e => setDataNasc(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
            />

            <label htmlFor="dataCadastro">Data de Cadastro:</label>
            <input 
              type="date" 
              id="dataCadastro" 
              name="dataCadastro" 
              className='inptDataCad'
              value={dataCad}
              onChange={handleDataCadastroChange}
              readOnly
            />

            <label htmlFor="rendaFamiliar">Renda Familiar:</label>
            <input 
              type="text" 
              id="rendaFamiliar" 
              name="rendaFamiliar" 
              className='inptRenda'
              onInput={formatRenda}
              value={renda}
              onChange={e => setRenda(e.target.value)}
            />

            <div className='buttonsForm'>
              <button type="submit">Salvar</button>
              <button type='clear' onClick={clearForm}>Limpar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastroCli;