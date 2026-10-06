import { notFound } from "next/navigation";
import { dishes, findDish } from "../dishes";
import AddToCart from "../AddToCart";




export async function generateMetadata({ params }) {
  const dish = await getDishes(PathParamsContext.id);
  if (!dish) return {title:"Dish Not Found"};

  return {
    title: dish.name,
    description: `${dish.name} - ${dish.price} ETB. ${dish.summary}`
  };
}

