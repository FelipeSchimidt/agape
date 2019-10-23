const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

require("./database");

const server = express();

server.use(express.json());
server.use(require("../src/routes"));
server.use(cors());
server.use(morgan("dev"));

server.listen(3000);
