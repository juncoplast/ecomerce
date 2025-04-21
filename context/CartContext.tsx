"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
    color: string;
    type: string;
    quantity: number;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    clearCart: () => void;
    checkout: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart((prev) => [...prev, item]);
    };

    const clearCart = () => {
        setCart([]);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const checkout = () => {
        const today = new Date().toLocaleDateString("pt-BR");

        const message = [
            "*Orçamento*", // Emoji do carrinho
            `*Data: ${today}*`,
            "",
            ...cart.map(
              (item) => ` ✅ ${item.quantity}x ${item.type} - (${item.color})`
            ),
            "",
            "*Aguardando orçamento!*",
          ].join("\n");

        // Codificando a mensagem de forma correta
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "5585989569856";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Abrir o WhatsApp
        window.open(whatsappUrl, "_blank");
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, checkout }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart deve ser usado dentro de um CartProvider");
    }
    return context;
};
