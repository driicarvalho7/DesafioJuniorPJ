ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Pedro20!';

create table tbl_cliente (
id int primary key auto_increment,
nome varchar(150),
cpf int,
dataNasc date,
dataCad date,
renda decimal(6,2)
);

insert into tbl_cliente (nome, cpf, dataNasc, dataCad, renda) values ("Adriano", 123456789, "2002-03-27", "2020-09-11", 2540.09);

select * from tbl_cliente;

drop table tbl_cliente;