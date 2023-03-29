# Desafio - Sistema Administração de Clientes
Author: [Adriano Carvalho](https://github.com/driicarvalho7)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Inicializando o projeto

No diretorio principal, digite:

### `npm install`

Assim você vai instalar as dependências do projeto.

Para rodar o projeto, a porta localhost:3000 deve estar vazia para rodar o arquivo json que utilizei como API.

Dito isso, entre na pasta /src/api e digite:

### `json-server --watch clientes.json`

Após a API iniciar, ai sim, volte para a pasta principal (onde está o package.json), e digite:

### `npm start`

Aperte a tecla "y" para ele inicar em uma porta diferente da ":3000".

# Mais detalhes sobre o desenvolvimento

## Desafios

### Conexão de database local

Eu tive bastante dificuldade com a conexão do banco de dados localmente. Tentei utilizar muitas bibliotecas do JavaScript, como por exemplo:
- "mysql", "mysql2", "sequelize" e "lowdb"...
Tentei com algumas outras que fazem a conexão local com o SQL, porém nenuma delas funcionou... Tive bastante erro com o "webpack" por estar em uma versão diferente. Passei alguns dias com esse problema até que decidi tentar de outra forma.

Tentei fazer localmente um CRUD em arquivos .json, mas ainda sim tive problemas também com a biblioteca "fs".

Sendo assim, eu decidi por final utilizar a biblioteca "axios" e criar um .json estático para rodar local e fazer a busca de API estático. Porém a lógica caso o arquivo fosse dinâmico seria a mesma.

Porém, deixei comentado no arquivo "dbSQL.js" como eu pensei em criar a querry de CRUD.

### Gestão de tempo

Como meu tempo está bem corrido por conta do estágio, vice-presidencia da empresa junior e a faculdade, consegui desenvolver boa parte do projeto durante o final de semana.

Porém, caso vocês gostem do meu projeto estou disposto a negociar a minha posição no estágio!

# Agradecimentos

Ademais, gostei muito da proposta do projeto e dos desafios que tive que enfrentar.

Aguardo o retorno, e mesmo que seja negativo, gostaria de um feedback do que eu poderia melhorar!