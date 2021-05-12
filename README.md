# DSVENDAS
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Eduguimar/DS-Vendas/blob/master/LICENSE) 

## https://eduardo-dsvendas.netlify.app/

## Sobre o Projeto

Projeto desenvolvido durante o evento Semana Spring React oferecido pela [`DevSuperior`](https://devsuperior.com.br).

Dashboard dinâmico com a análise do total de vendas exibido em diferentes perspectivas, através de gráficos e uma tabela paginada com os valores. 

Projeto construído com a base em Java, utilizando o framework Spring, e com o front end em ReactJS. Os dados estão armazenados no banco de dados Postgres, hospedado no Heroku.

## Layout

![Dashboard](https://github.com/Eduguimar/DS-Vendas/blob/master/frontend/assets/sdvendas_dashboard.png)

## Execução

Para executar este projeto é necessário ter o Gerenciador de Pacotes do Node ([`NPM`](https://www.npmjs.com/get-npm)) ou o Gerenciador de Pacotes YARN ([`YARN`](https://yarnpkg.com/getting-started)) instalado.

Na pasta frontend `frontend/`, executar os seguintes comandos no terminal:

- Com <b>npm</b>
  
```bash
 # Instalar dependências
 $ npm install

 # Iniciar servidor de desenvolvimento
 $ npm start
```
- Com <b>yarn</b>
```bash
# Instalar dependências
$ yarn

# Iniciar servidor de desenvolvimento
$ yarn start
``` 
Para funcionamento do backend, é necessário acessar o projeto com a IDE de preferência, importar a pasta `backend/` e inicializar a aplicação.

## Tecnologias utilizadas
### Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
- H2
### Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- Apex Charts
- Axios
### Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

## Autor
Eduardo Guimarães

## Licença
[MIT](https://github.com/Eduguimar/DS-Vendas/blob/master/LICENSE)
