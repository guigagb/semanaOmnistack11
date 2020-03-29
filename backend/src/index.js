const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes')

const app = express();

app.use(cors({
    // origin: 
}));
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Rota / Recurso
 */

 /**
  *  Métodos HTTP:
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação do back-end
  * ṔUT: Alterar uma informação do back-end
  * DELETE: deletar uma informação do back-end
  */

  /**
   * Tipos de parâmetros
   * 
   * Query Params: parâmetros nomeados enviados na rota após ? , serve para filtro ,paginação , etc..
   * Route Params: parâmetros para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   * 
   */

    /**
     * SQL: mySQL, Oracle, firebird, postgree, SQLite
     * NoSQL: MongoDB, Firebird, etc
     */

     /**
      * Driver: 
      * Query Build: knex
      * Query Build:
      */



app.listen(3333);