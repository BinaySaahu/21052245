const express = require("express");
const auth = require("../middleware/validator")

const router = express.Router();
const getProducts = require("../contollers/product")

router.use(auth);

router.get("/all/:n&:minPrice&:maxPrice&:companyName&:categoryName",getProducts.getProducts)
router.get("/productDet/:id",)

module.exports = router;