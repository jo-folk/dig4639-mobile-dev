const express = require('express')
const fetch = require("node-fetch");
const cors = require('cors');
const app = express();
const port = 3001;

const simpleJson= {a:10, b: "hello world!"};

app.use(cors())
app.get('/', async (req, res) => {
  res.send(simpleJson)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));