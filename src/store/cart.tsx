import * as React from "react";

type ActionIncrement = {
  type: "increment";
  sku_id: number;
};

type ActionDecrement = {
  type: "decrement";
  sku_id: number;
};

type Action = ActionIncrement | ActionDecrement;
type Dispatch = (action: Action) => void;
type State = { count: number };
type CartProviderProps = { children: React.ReactNode };

const CartStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function cartReducer(state: State, action: Action) {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = React.useReducer(cartReducer, { count: 0 });
  const value = { state, dispatch };

  return (
    <CartStateContext.Provider value={value}>
      {children}
    </CartStateContext.Provider>
  );
}

function useCart() {
  const context = React.useContext(CartStateContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}

export { CartProvider, useCart };
