import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h2>Welcome to Ninja Store</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
