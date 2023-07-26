const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const db = require("./util/database");

const errorController = require("./controllers/error");

const app = express();

function getProducts() {
  db.execute("SELECT * FROM products").then(([rows, fileData]) => {
    console.log(rows);
  });
}
// getProducts();

function insertProduct() {
  const query =
    "INSERT INTO products (title, description, imageUrl, price) VALUES (?, ?, ?, ?)";
  const values = [
    "Shoe",
    "This is an awesome shoe!..",
    "url2", 1999,
  ];
  db.execute(query, values).then((result) => {
    console.log(result);
  });
}
// insertProduct();

function deleteProducts(id) {
    const query =
      "DELETE FROM products WHERE products.id = ?";
    const values = [2];
    db.execute(query, values).then(([row, fileData]) => {
      console.log(row);
    }).catch((err) => console.log(err));
  }
  deleteProducts();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
