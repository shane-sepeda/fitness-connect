const db = mysql.createConnection({
  host: "localhost",
  // Your MySQL username,
  user: "root",
  // Your MySQL password
  password: "",
  database: "fitness_connect_db",
});

module.exports = db;
