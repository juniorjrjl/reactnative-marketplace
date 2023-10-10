const fixImagePath = require("../helpers/fixImagePath")
const getProductsByCategories = require("../services/get-products-by-categories")

module.exports = {
  index: async function (req, res) {
    try {
      let products = await getProductsByCategories()
      products = products.map(p => {
        p.products = fixImagePath(p.products)
        return p
      })
      return res.json(products)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  },
}