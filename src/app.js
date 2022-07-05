const express = require('express');

const routes = require('./router');

const app = express();
const port = 3000;

app.use(routes);

retreiveMessage=1;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})