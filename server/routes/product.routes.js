const ProductController = require("../controllers/product.controllers");

module.exports = function (app) {
  app.get("/api", ProductController.index);
  app.post("/api/products", ProductController.createProduct);
};
