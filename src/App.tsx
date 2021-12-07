import React from "react";
import { CountProvider, useCount } from "./store/cart";


function One() {
  console.log('One component is rendered because the parent calls useCount()');

  return <Two />;
}

function Two() {
  console.log('Two component is rendered because the parent calls useCount()');

  return <></>;
}

function Unrelated() {
  // const { state } = useCount();
  // console.log(`Unrelated component: ${state.count}`);

  return <One />;
}

function Cart() {
  const { dispatch } = useCount();

  return (
    <button onClick={() => dispatch({ type: "increment" })}>
      Increment count
    </button>
  );
}

function CartDisplay() {
  const { state } = useCount();

  return <div>{`The current count is ${state.count}`}</div>;
}

function App() {
  return (
    <>
      <CountProvider>
        <Cart />
        <CartDisplay />
        <Unrelated />
      </CountProvider>
    </>
  );
}

export default App;
