const platform = require("os").platform();

const op = platform == "linux" ? "localhost" : "192.168.99.100";

const port = process.env.DB_PORT || 5430;

module.exports = {
  dialect: "postgres",
  host: op,
  port: port,
  username: "postgres",
  password: "root",
  database: "data",
  define: {
    timestamps: true,
    underscored: true
  }
};
