import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { type CartItem } from "@/lib/cart";

const CART_STORAGE_KEY = "dunc-electric-cart-v1";

type CartContextValue = {
  cartItems: CartItem[];
  cartCount: number;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function readStoredCart(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter((item): item is CartItem => {
      return Boolean(
        item &&
          typeof item === "object" &&
          "id" in item &&
          "productId" in item &&
          "productName" in item &&
          "colorName" in item &&
          "imageSrc" in item &&
          "unitPrice" in item &&
          "quantity" in item
      );
    });
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(readStoredCart);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (item: CartItem) => {
    setCartItems((current) => {
      const existingIndex = current.findIndex((existing) => existing.id === item.id);
      if (existingIndex === -1) {
        return [...current, item];
      }

      return current.map((existing, index) =>
        index === existingIndex
          ? { ...existing, quantity: existing.quantity + item.quantity }
          : existing
      );
    });
  };

  const removeItem = (itemId: string) => {
    setCartItems((current) => current.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = useMemo<CartContextValue>(
    () => ({
      cartItems,
      cartCount: cartItems.reduce((count, item) => count + item.quantity, 0),
      addItem,
      removeItem,
      clearCart
    }),
    [cartItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
