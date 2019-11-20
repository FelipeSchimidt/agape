const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

require("dotenv");
require("./database");

const port = process.env.PORT || 3333;

const server = express();

server.use(cors());
server.use(express.json());
server.use(require("../src/routes"));
server.use(morgan("dev"));

server.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
