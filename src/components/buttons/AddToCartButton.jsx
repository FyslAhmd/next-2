"use client";
import { CartContext } from "@/Context/CartProvider";
import React, { use, useState } from "react";

const AddToCartButton = ({ food }) => {
  const [inCart, setInCart] = useState(false);
  const { addToCart } = use(CartContext);

  const handleAddToCart = () => {
    addToCart(food);
    setInCart(true);
  };
  return (
    <button
      onClick={handleAddToCart}
      disabled={inCart}
      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 rounded-lg transition text-center disabled:bg-gray-800"
    >
      {inCart ? "Added" : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
