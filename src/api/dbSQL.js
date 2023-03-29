/*
  @AUTHOR: https://github.com/driicarvalho7

  Nesse arquivo, tentei aplicar o conceito de CRUD em SQL.

  Como exclarecido no README, tive muitos problemas com versões da biblioteca,
  portanto, não consegui implementar corretamente no projeto.

  Porém deixei detalhado todos os elementos de CRUD e como seria realizado.

  Ademais, para funcionar esse arquivo, eu criei um Schema no MySQL Workbench
  chamado "db_freehub", com isso, utilizei o arquivo "dbMySQL.sql" para criar 
  a primeira tabela, e fazer as verificações se estavam funcionando localmente.

  Portanto, caso seja criado o Schema dessa forma e realizando o comando
  "node dbSQL.js", irá aparecer no console a mensagem "Conexão realizada".
*/

//UTILIZANDO A BIBLIOTECA MYSQL2
const mysql = require('mysql2');

//CRIANDO CONEXÃO COM O BANCO LOCALHOST
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senha',
    database: 'db_freehub'
})

connection.connect(function(err) {
    console.log("Conexão realizada!")
})

/*
  ABAIXO DEIXEI A REALIZAÇÃO DE CRUD COMENTADA PARA NÃO TER
  PROBLEMAS NA HORA DE EXECUTAR O ARQUIVO!

function inserirCliente(nome, cpf, dataNasc, dataCad, renda) {
    const sql = 'INSERT INTO tbl_cliente (nome, cpf, dataNasc, dataCad, renda) VALUES (?, ?, ?, ?, ?)';
    const values = [nome, cpf, dataNasc, dataCad, renda];
    connection.query(sql, values, function(err, results) {
      if (err) throw err;
      console.log('Registro criado com sucesso!');
    });
}

function consultarClientes() {
    const sql = 'SELECT * FROM tbl_cliente';
    connection.query(sql, function(err, results) {
      if (err) throw err;
      console.log(results);
    });
  }

function atualizarCliente(id, nome, cpf, dataNasc, dataCad, renda) {
    const sql = 'UPDATE tbl_cliente SET nome = ?, cpf = ?, dataNasc = ?, dataCad = ?, renda = ? WHERE id = ?';
    const values = [nome, cpf, dataNasc, dataCad, renda, id];
    connection.query(sql, values, function(err, results) {
        if (err) throw err;
        console.log('Registro atualizado com sucesso!');
    });
}

function deletarCliente(id) {
    const sql = 'DELETE FROM tbl_cliente WHERE id = ?';
    const values = [id];
    connection.query(sql, values, function(err, results) {
        if (err) throw err;
        console.log('Registro deletado com sucesso!');
    });
}
*/