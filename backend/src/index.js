const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app  = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

/*
* Rota / Recursos
*/

/*
*Metodo HTTP:
*
*Get: Buscar uma informação do back-end
*Post: Criar uma informação no back-end
*Put: Alterar informação no back-end
*Delete: deletar uma informação no back-end
*
*/

/**
 * Tipos de parâmetro:
 * 
 * Query Params: Parametros nomeados enviados na rota após o "?" (Filtros, Paginação)
 * Route Params: Parametros usados para identificar recursos
 * Request Body: Corpo da requisição, para criar ou alterar recursos
 */

 /**
  * Bancos de dado
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Ms SQL Server
  * noSQL: MongoDB, CouchDB
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */


