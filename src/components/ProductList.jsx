import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      const { data } = response;
      setLoading(false);
      dispatch(setProducts(data));
    } catch (err) {
      setLoading(false);
      console.log(err.response);
    }
  };

  return (
    <>
      {loading ? (
        <div className="m-2">
          <p className="text-lg">Loading...</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center max-w-[1100px] mx-auto gap-6 my-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
