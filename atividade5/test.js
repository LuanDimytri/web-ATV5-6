const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Express está funcionando!');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
