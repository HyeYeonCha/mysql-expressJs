const mysql = require("mysql");
// export DATABASE_SPRINT_PASSWORD=your_password_here -> 전역에 패스워드 설정해주기

const password = process.env.DATABASE_SPRINT_PASSWORD;

const host = "localhost";

module.exports = {
  connection: mysql.createConnection({
    host: host,
    user: "root",
    password: password,
    database: "chat",
  }),
};
