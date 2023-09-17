const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/products");
const server = express();

// Middleware
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Connect to database

const connection = ""
mongoose.connect(connection)
  .then(() => {
    console.log('Connected');
  })
  .catch((err) => {
    console.error('Error connecting:', err);
  });

server.get("/home", (req, res) => {
  res.send("<b>Welcome to our APIs</b>");
});

server.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

server.get('/products/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.status(404).send('Product not found');
    } else {
      res.json(product);
    }
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Default route redirects to /home
server.get("/", (req, res) => {
  res.redirect("/home");
});

// Handle 404 - Not Found
server.use((req, res) => {
  res.status(404).send("404 Not Found");
});

server.listen(3002, () => {
  console.log("Server connected at port 3002");
});
