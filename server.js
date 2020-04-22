const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.static(__dirname + '/dist'));



app.get('/api', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
  .then(response => res.send(response.data))
  .catch(err => res.status(500));
})

const port = 3000;
app.listen(port, ()=>console.log(`listening on port ${port}!`))