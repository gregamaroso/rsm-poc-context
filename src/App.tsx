import React from "react";
import "./app.css";
import { CartProvider } from "./store/cart";
import { Cart } from "./cart";
import { Grid } from "./grid";

function Layout() {
  return (
    <div className="app-container">
      <div className="app-grid">
        <Grid />
      </div>
      <div className="app-cart">
        <Cart />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <CartProvider>
        <Layout />
      </CartProvider>
    </>
  );
}

export default App;
