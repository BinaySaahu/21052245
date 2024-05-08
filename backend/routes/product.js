const express = require("express");
const auth = require("../middleware/validator")

const router = express.Router();
const getProducts = require("../controllers/product")

router.use(auth);

router.get("/all/:n&:minPrice&:maxPrice&:companyName&:categoryName",getProducts.getAllProducts)
router.get("/productDet/:id",getProducts.getAProduct)

module.exports = router;