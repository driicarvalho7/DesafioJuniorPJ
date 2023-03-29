/*
  @AUTHOR: https://github.com/driicarvalho7

  Nesse arquivo, utilizei a estrutura axios para realizar as requisições
  de API na URL indicada abaixo.

  Está é a URL padrão ao executar o arquivo json, para executa-lo digite no terminal:
  
  json-server --watch clientes.json

  Lembrando que é necessário estar dentro da pasta "api".

  Esse comando iniciára um localhost na porta 3000, que é onde sera puxado as informações.
*/

// IMPORTE DA BIBLIOTECA AXIOS
import axios from 'axios'

//EXPORT PADRÃO DO AXIOS
export default axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
    },
})