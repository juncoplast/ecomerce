// components/FloatingCart.tsx
"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

export default function FloatingCart() {
    const { cart, clearCart } = useCart();
    const [open, setOpen] = useState(false);

    const handleCheckout = () => {
        const today = new Date().toLocaleDateString("pt-BR");

        const message = [
            "🛒 *Orçamento*",
            `📅 *Data:* ${today}`,
            "",
            ...cart.map(
                (item) => `✅ *${item.quantity}x* ${item.type} - _${item.color}_`
            ),
            "",
            "📦 Aguardando confirmação!",
        ].join("\n");

        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "5585989569856";
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                onClick={() => setOpen((prev) => !prev)}
                className="rounded-full p-3 shadow-lg"
            >
                <ShoppingCart className="w-5 h-5" />
                <span className="ml-2">{cart.length}</span>
            </Button>

            {open && (
                <div className="mt-3 w-80 bg-white shadow-xl border rounded-lg p-4 space-y-3">
                    <h4 className="font-semibold text-lg">Carrinho</h4>
                    {cart.length === 0 ? (
                        <p className="text-sm text-gray-500">Nenhum item adicionado.</p>
                    ) : (
                        <>
                            <div className="max-h-60 overflow-y-auto space-y-2">
                                {cart.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex justify-between items-center text-sm border-b pb-1"
                                    >
                                        <span>{item.quantity}x {item.type}</span>
                                        <span>({item.color})</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button variant="outline" onClick={clearCart}>Limpar</Button>
                                <Button onClick={handleCheckout}>Finalizar</Button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
