const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* ADD X-ROBOTS HERE */
app.use((req, res, next) => {
  res.setHeader("X-Robots-Tag", "index, follow");
  next();
});

/* -------------------------
   DATABASE CONNECTION
--------------------------*/

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "seo_db"
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed");
  } else {
    console.log("MySQL connected");
  }
});

/* -------------------------
   CREATE SEO
--------------------------*/

app.post("/add-seo", (req, res) => {

  const { page, meta_title, meta_description, keywords } = req.body;

  const sql =
    "INSERT INTO seo_data (page, meta_title, meta_description, keywords) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [page, meta_title, meta_description, keywords],
    (err, result) => {
      if (err) {
        res.send("Error inserting SEO data");
      } else {
        res.send("SEO data added successfully");
      }
    }
  );
});

/* -------------------------
   GET ALL SEO
--------------------------*/

app.get("/seo", (req, res) => {

  const sql = "SELECT * FROM seo_data";

  db.query(sql, (err, result) => {
    if (err) {
      res.send("Error fetching SEO list");
    } else {
      res.json(result);
    }
  });

});

/* -------------------------
   GET SEO BY PAGE
--------------------------*/

app.get("/seo/:page", (req, res) => {

  const page = req.params.page;

  const sql = "SELECT * FROM seo_data WHERE page = ?";

  db.query(sql, [page], (err, result) => {
    if (err) {
      res.send("Error fetching SEO data");
    } else {
      res.json(result);
    }
  });

});

/* -------------------------
   UPDATE SEO
--------------------------*/

app.put("/seo/:id", (req, res) => {

  const id = req.params.id;

  const { page, meta_title, meta_description, keywords } = req.body;

  const sql = `
  UPDATE seo_data
  SET page=?, meta_title=?, meta_description=?, keywords=?
  WHERE id=?`;

  db.query(
    sql,
    [page, meta_title, meta_description, keywords, id],
    (err, result) => {
      if (err) {
        res.send("Error updating SEO");
      } else {
        res.send("SEO updated successfully");
      }
    }
  );

});

/* -------------------------
   DELETE SEO
--------------------------*/

app.delete("/seo/:id", (req, res) => {

  const id = req.params.id;

  const sql = "DELETE FROM seo_data WHERE id = ?";

  db.query(sql, [id], (err, result) => {

    if (err) {
      res.send("Error deleting SEO");
    } else {
      res.send("SEO deleted successfully");
    }

  });

});

/* -------------------------
   TEST ROUTE
--------------------------*/

app.get("/", (req, res) => {
  res.send("SEO API Server Running");
});

/* -------------------------
   START SERVER
--------------------------*/

app.listen(5000, () => {
  console.log("Server running on port 5000");
});


