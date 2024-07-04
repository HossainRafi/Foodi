const Carts = require("../models/Carts");

// get carts using email
const getCartByEmail = async (req, res) => {
  try {
    const email = req.query.email;
    // console.log(email);
    const query = { email: email };
    const result = await Carts.find(query).exec();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// post a cart when add-to-cart btn clicked
const addToCart = async (req, res) => {
  const { menuItemId, name, recipe, image, price, quantity, email } = req.body;
  // console.log(email)
  try {
    // exiting menu item
    const existingCartItem = await Carts.findOne({ email, menuItemId });
    // console.log(existingCartItem)
    if (existingCartItem) {
      return res
        .status(400)
        .json({ message: "Already exists in the cart !" });
    }

    const cartItem = await Carts.create({
      menuItemId,
      name,
      recipe,
      image,
      price,
      quantity,
      email,
    });

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCartByEmail,
  addToCart,
};
