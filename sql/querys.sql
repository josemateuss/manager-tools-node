show databases;
use manager_tools;
show tables;

create table ferramentas(
	id_ferramenta int not null primary key auto_increment,
    nome_ferramenta varchar(30),
    descricao_ferramenta varchar(100),
    data_cadastro timestamp default current_timestamp
);

insert into ferramentas (nome_ferramenta, descricao_ferramenta) values ('Chave de Boca 10"','Chave combinada de 10 polegadas');
insert into ferramentas (nome_ferramenta, descricao_ferramenta) values ('Chave de Fenda','Chave de Fenda 5 polegadas');

update ferramentas set nome_ferramenta = 'Chave de Fenda' where id_ferramenta = 2;

select * from ferramentas;