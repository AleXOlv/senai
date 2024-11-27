create database estoque;
use estoque;
create	table usuarios (
   id int auto_increment primary key,
   nome varchar(100) not null,
   email varchar(100) not null unique,
   senha varchar (100) not null,
   cpf varchar(11) not null unique,
   telefone varchar(15) not	null
);

create table produtos (
 COMMENTid int auto_increment primary key,
 nome varchar(100) not null,
 preco decimal(10, 2) not null,
 validade date not null
);


