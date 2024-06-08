import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, price, image, category } = product;
  return (
    <Link to={`/products/${id}`}>
      <div className="w-64 min-h-[300px] border cursor-pointer shadow-md">
        <div className="w-32 h-40 mx-auto p-2 ">
          <img src={image} alt={title} className="w-full h-full" />
        </div>

        <div className="p-2">
          <h2 className="font-semibold">{title}</h2>

          <div className="mt-2">
            <p className="text-lg">${price}</p>
            <p className="text-gray-400">{category}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
