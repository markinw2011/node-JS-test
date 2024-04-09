const express = require("express");
const chalk = require("chalk");
const morgan = require("morgan");
const debug = require("debug")("app");
const app = express();
const PORT = process.env.PORT || 4000;
const path = require("path");
const productRounter = express.Router();

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

productRounter.route("/").get((req, res) => {
  res.render("Products",{
    products: [
        {productTitle:'นำเยาลางจาน',productDescription:'ล้างสะอาด',productPrice: 40},
        {productTitle:'นำเยาลางจาน2',productDescription:'ล้างสะอาด2',productPrice: 42},
        {productTitle:'นำเยาลางจาน3',productDescription:'ล้างสะอาด3',productPrice: 43},
        {productTitle:'นำเยาลางจาน4',productDescription:'ล้างสะอาด4',productPrice: 44},
    ]
  });
});
app.use("/products", productRounter);

app.get("/", (req, res) => {
  res.render("index", {
    username: "what555+",
    customers: ["jack", "ben", "wolf"],
  });
});

app.listen(PORT, () => {
  debug("listening on port" + chalk.green(" : " + PORT));
});
