import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: {
        id: 1,
        title: 'Desenvolvimento de site',
        type: 'income',
        category: 'Freelancer',
        value: 3000,
        createdAt: new Date(),
      }
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction'); // Devolvendo toda a tabela
    })
  
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody); //variavel que recebe os valores e converte para formato JSON.

      return schema.create('transaction', data); //Atualizando a tabela com base no model definido em models e passando os valores da const data.
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);