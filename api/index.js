const express = require("express");
require("dotenv").config();

const cors = require("cors");
// const routes = require('./routes');

require("./database");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

// routes(app);

app.listen(port, () => {
  try {
    console.log(`Servindo na porta ${port}`);
  } catch (err) {
    console.log(`Erro ao servir: \n\n ${err}`);
  }
});
