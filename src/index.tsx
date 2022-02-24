import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes(){
    this.namespace = 'api';
    this.get('/transactions', () => {
      return[
        {
          id: 1,
          descricption: 'Desenvolvimento de Site',
          category: 'Freela',
          amount: 2500.00,
          type: 'income',
          date: new Date()
        },
        {
          id: 2,
          descricption: 'Ida ao Shopping',
          category: 'Saída',
          amount: 150.00,
          type: 'expense',
          date: new Date()
        }
      ]
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);