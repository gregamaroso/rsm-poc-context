import React from "react";
import { useCart } from "../store/cart";
import "./cart.css";

// If we don't use React.memo here, this component gets rerendered
// every time the "add to bag" button is clicked because it's
// parent is using the useCart() hook.
const One = React.memo(function () {
  console.log("One component is rendered because the parent calls useCount()");

  return <Two />;
});

const Two = React.memo(function () {
  console.log("Two component is rendered because the parent calls useCount()");

  return <></>;
});

function Unrelated() {
  const { state } = useCart();
  console.log(`Unrelated component: ${state.count}`);

  return <One />;
}

export function Cart() {
  const { state } = useCart();

  return (
    <div className="cart">
      {`${state.count} items in your cart`}
      <Unrelated />
    </div>
  );
}

export default Cart;
