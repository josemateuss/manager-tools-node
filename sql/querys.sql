show databases;
use manager_tools;
show tables;

create table ferramentas(
	id int not null primary key auto_increment,
    nome varchar(30),
    descricao varchar(100),
    data_cadastro timestamp default current_timestamp
);

insert into ferramentas (nome, descricao) values ('Chave de Boca 10"','Chave combinada de 10 polegadas');
insert into ferramentas (nome, descricao) values ('Chave de Fenda','Chave de Fenda 5 polegadas');

update ferramentas set nomea = 'Chave de Fenda' where id = 2;

select * from ferramentas;