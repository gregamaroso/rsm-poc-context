import React from "react";
import { useCart } from "../store/cart";
import "./grid.css";

interface IProduct {
  sku_id: number;
  name: string;
}

const products: IProduct[] = [
  {
    sku_id: 111,
    name: "Hair Gel",
  },
  {
    sku_id: 222,
    name: "Shampoo",
  },
  {
    sku_id: 333,
    name: "Conditioner",
  },
];

function Product({ sku_id, name }: IProduct) {
  const { dispatch } = useCart();

  return (
    <div className="product">
      <div className="product__name">{name}</div>

      <button onClick={() => dispatch({ type: "increment", sku_id })}>
        Buy Now
      </button>
    </div>
  );
}

export function Grid() {
  const Products = products.map(({ sku_id, name }: IProduct) => (
    <Product key={sku_id} sku_id={sku_id} name={name} />
  ));

  return <div className="products">{Products}</div>;
}

export default Grid;
