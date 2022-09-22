import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import ApiFetch from "./ApiFetch";
import Cart from "./Cart";
// import Clickcounting from "./Clickcounting";

function App() {
  const [products, getProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log("......................");
  // console.log(products);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((Response) => Response.json())
      .then((data) => {
        getProducts(data.products);
      });
  }, []);

  const addeditems = (product) => {
    // console.log(product);
    setCart((prevState) => [...prevState, product]);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<ApiFetch products={products} addeditems={addeditems} />}
        />
        <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </>
  );
}

export default App;
