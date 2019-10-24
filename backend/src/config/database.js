const platform = require('os').platform();

const op = platform == 'linux' ? 'localhost' : '192.168.99.100';

module.exports = {
  dialect: 'postgres',
  host: op,
  port: 5430,
  username: 'postgres',
  password: 'root',
  database: 'data',
  define: {
    timestamps: true,
    underscored: true
  }
};
