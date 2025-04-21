"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

type CartItem = {
  color: string;
  type: string;
  quantity: number;
};

export default function FloatingCart() {
  const [open, setOpen] = useState(false);
  const {
    cart,
    clearCart,
    checkout,
  }: {
    cart: CartItem[];
    clearCart: () => void;
    checkout: () => void;
  } = useCart();

  const handleCheckout = () => {
    checkout();
    setOpen(false);
  };

  const handleClear = () => {
    clearCart();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg"
          variant="default"
        >
          <ShoppingCart className="mr-2" />
          {cart.length}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Seu Carrinho</DialogTitle>
        </DialogHeader>
        {cart.length > 0 ? (
          <div className="flex flex-col gap-2">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-sm border-b pb-1"
              >
                <span>
                  {item.quantity}x {item.type}
                </span>
                <span>({item.color})</span>
              </div>
            ))}
            <div className="mt-4 flex gap-2">
              <Button variant="outline" onClick={handleClear}>
                Limpar
              </Button>
              <Button className="flex-1" onClick={handleCheckout}>
                Enviar Orçamento
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-muted-foreground text-sm mt-4">
            Seu carrinho está vazio.
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}
