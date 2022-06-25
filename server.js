const mysql = require("mysql2");
const apiRoutes = require("./routes/apiRoutes");
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", apiRoutes);
// Connect to database

// Get all clients and their trainers
app.get("/api/clients", (req, res) => {
  const sql = `SELECT clients.*, trainers.name 
                AS first_name, last_name 
                FROM clients 
                LEFT JOIN trainers 
                ON clients.trainer_id = trainers.id`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// Get single client with trainer
app.get("/api/client/:id", (req, res) => {
  const sql = `SELECT clients.*, trainers.name 
               AS trainer_name 
               FROM clients 
               LEFT JOIN trainers 
               ON clients.trainer_id = trainers.id 
               WHERE clients.id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

// Create a client
app.post("/api/client", ({ body }, res) => {
  // Client is allowed not to be affiliated with a trainer
  const errors = inputCheck(body, "first_name", "last_name", "skills");
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `INSERT INTO clients (first_name, last_name, skills, phone, address, birth_date) VALUES (?,?,?,?,?,?)`;
  const params = [
    body.first_name,
    body.last_name,
    body.skills,
    body.phone,
    body.address,
    body.birth_date,
  ];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
      changes: result.affectedRows,
    });
  });
});

// Update a clients trainer
app.put("/api/client/:id", (req, res) => {
  // Client is allowed to not have trainer affiliation
  const errors = inputCheck(req.body, "party_id");
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `UPDATE clients SET party_id = ? 
               WHERE id = ?`;
  const params = [req.body.party_id, req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      // check if a record was found
    } else if (!result.affectedRows) {
      res.json({
        message: "Client not found",
      });
    } else {
      res.json({
        message: "success",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
});

// Delete a client
app.delete("/api/client/:id", (req, res) => {
  const sql = `DELETE FROM clients WHERE id = ?`;
  const params = [req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Client not found",
      });
    } else {
      res.json({
        message: "deleted",
        changes: result.affectedRows,
        id: req.params.id,
      });
    }
  });
});

// Get all trainers
app.get("/api/trainers", (req, res) => {
  const sql = `SELECT * FROM trainers`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// Get single trainer
app.get("/api/trainer/:id", (req, res) => {
  const sql = `SELECT * FROM trainers WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

// Delete a client
app.delete("/api/trainer/:id", (req, res) => {
  const sql = `DELETE FROM trainers WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
      // checks if anything was deleted
    } else if (!result.affectedRows) {
      res.json({
        message: "Trainer not found",
      });
    } else {
      res.json({
        message: "deleted",
        changes: result.affectedRows,
        id: req.params.id,
      });
    }
  });
});

// Not Found response for unmatched routes
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
