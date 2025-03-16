const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.post("/", productController.addProduct);

router.get("/:id", productController.getProductById);

router.put("/:id", productController.updateProductById);

router.delete("/:id", productController.deleteProductById);

module.exports = router;
