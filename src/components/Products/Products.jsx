import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import Search from "./Search";

const BASE_URL = "http://localhost:8000/products";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      setProduct(data);
    };

    getAllData();
  }, []);

  const addProduct = async (item) => {
    const response = await fetch(BASE_URL, {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    const responseData = await response.json();
    setProduct([...product, responseData]);
  };

  const deleteBtn = async (id) => {
    await fetch(`${BASE_URL}/${id}`, { method: "delete" });
    setProduct(product.filter((item) => item.id !== id));
  };
  return (
    <div className="App">
      <ProductForm addProduct={addProduct} />

      <section>
        <Search  product ={product} setProduct={setProduct} />
        <ProductList product={product} deleteBtn={deleteBtn} />
      </section>
    </div>
  );
};

export default Products;
