// context/CartContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
    color: string;
    type: string;
    quantity: number;
};

type CartContextType = {
    cart: CartItem[];
    addItem: (item: CartItem) => void;
    clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart deve ser usado dentro de CartProvider");
    return context;
}

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addItem = (item: CartItem) => {
        setCart((prev) => [...prev, item]);
    };

    const clearCart = () => {
        setCart([]);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <CartContext.Provider value={{ cart, addItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}
