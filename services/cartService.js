const cartDao = require("../models/cartDao");

const cartList = async (userId) => {
  return await cartDao.cartList(userId);
};

const addCart = async (userId, productId) => {
  return await cartDao.addCart(userId, productId);
};

const changeQuantity = async (userId, cartId, quantity) => {
  return await cartDao.changeQuantity(userId, cartId, quantity);
};

const deleteCart = async (cartId) => {
  return await cartDao.deleteCart(cartId);
};

module.exports = {
  cartList,
  addCart,
  changeQuantity,
  deleteCart,
};
