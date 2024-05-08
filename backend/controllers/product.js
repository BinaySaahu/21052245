const { default: axios } = require("axios");
// const Product = require("../models/products");
const dotenv = require("dotenv");
dotenv.config();

let products = [];

const getAllProducts = async (req, res) => {
  const { companyName, categoryName, n, minPrice, maxPrice } = req.params;
  const { access_token } = res.locals.accessData;
  console.log()
  try {
    if (companyName && categoryName && n && minPrice && maxPrice) {
      const response = await axios.get(
        `http://20.244.56.144/test/companies/${companyName}/categories/${categoryName}/products?top=${n}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      console.log("Res: ",response)
      products = response;
      let Nprod = products.slice(0, n);
      Nprod = Nprod.filter((p) => {
        p.price >= Number(minPrice) && p.price <= Number(maxPrice);
      });
      return res.status(200).json({ data: Nprod });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getAProduct = async (req, res) => {
  const { id } = req.params;
  const productDet = products.filter((p) => p.id === id);
  if (productDet[0]) {
    return res.status(200).json({ data: productDet[0] });
  } else {
    return res
      .status(404)
      .json({ message: "Cannot find the product with specified id." });
  }
};

exports.getAllProducts = getAllProducts;
exports.getAProduct = getAProduct;
