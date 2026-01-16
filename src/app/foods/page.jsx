import FoodCard from "@/components/Cards/FoodCard";
import CartItems from "@/components/Cart/CartItems";
import React from "react";

const getFoods = async () => {
  const res = await fetch(
    " https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );
  const data = await res.json();
  return data.foods || [];
};

const FoodsPage = async () => {
  const foods = await getFoods();

  return (
    <div>
      <h2 className="text-3xl font-bold text-center py-4">
        Total {foods.length} Foods
      </h2>
      <div className="flex gap-5">
        <div className="flex-1 grid grid-cols-3 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food}></FoodCard>
          ))}
        </div>
        <div className="w-75 border-2 rounded-xl p-4">
          <h1 className="text-2xl font-bold">Add To Cart</h1> <hr />
          <CartItems></CartItems>
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;
