const fixImageUrl = require("../helpers/fixImagePath")
const getUserWithProducts = require("../services/get-user-with-products")

module.exports = {
  show: async function (req, res) {
    const { _id } = req.params
    try {
      let user = await getUserWithProducts(_id)
      user.products = fixImageUrl(user.products)
      return res.json(user)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  },
}