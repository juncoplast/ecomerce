"use client";

import { useState } from "react";
import { ColorSelector } from "@/components/ColorSelector";
import { TypeSelector } from "@/components/TypeSelector";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const colors = [
  "BRANCO",
  "ARGILA INP",
  "VERDE MUSGO INP",
  "VERDE BAMBU INP",
  "LARANJA INP",
  "VERDE TIFANY INP",
  "ANARELO INP",
  "PRETO INP",
  "TABACO INP",
  "GRAFITE INP",
  "CHOCOLATE INP",
  "TERRACOTA INP",
  "CAMURÇA INP",
  "PALHA IMP",
  "MARFIM IMP",
  "BRANCO IMPERIAL",
  "ARGILA FRI",
  "PRETO FRI",
  "GRAFITE FRI",
  "VERDE MUSGO FRI",
  "VERDE BAMBU FRI",
  "CHOCOLATE FRI",
  "PALHA FRI",
  "CAMURÇA FRI",
  "MARFIM FRIZADO",
  "CAPICCINO",
  "ARGILA",
  "CARVALHO",
  "AVELÃ ENVELHECIDO",
  "CARAMELO",
  "CEREJA TROPICAL",
  "TABACO TROPICAL",
  "CAPUCCINO TROPICAL",
  "PALHA TROPICAL",
  "TERRACOTA",
  "VERMELHO",
  "LARANJA",
  "ROSA PINK",
  "AZUL MARINHO",
  "AZUL ROYAL",
  "VERDE BAMBU",
  "VERDE MUSGO",
  "VERDE LIMÃO",
  "VERDE TIFFANY",
  "AMARELO",
  "AZUL BB",
  "VERDE BB",
  "ROSA BB",
  "PRETO",
  "TABACO",
  "CINZA",
  "CHOCOLATE",
  "PALHA",
  "CAMURÇA",
  "MARFIM",
  "AREIA",
];

const types = ["FRIZADO", "IMPERIAL", "CD", "MC", "FITA", "CORDÃO NALTICO"];

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [cart, setCart] = useState<
    { color: string; type: string; quantity: number }[]
  >([]);

  const handleQuantityChange = (type: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [type]: Math.max((prev[type] || 0) + delta, 0),
    }));
  };

  const handleAddToCart = () => {
    if (!selectedColor) return;

    const items = types
      .map((type) => ({
        type,
        quantity: quantities[type] || 0,
      }))
      .filter((item) => item.quantity > 0);

    const newItems = items.map((item) => ({
      color: selectedColor,
      type: item.type,
      quantity: item.quantity,
    }));

    setCart((prev) => [...prev, ...newItems]);
    setQuantities({});
    setSelectedColor(null);
  };

  const handleClearCart = () => {
    setCart([]);
  };
  const handleCheckout = () => {
    const message = [
      "🛒 *Novo Orçamento*",
      "",
      ...cart.map(
        (item) => `✅ *${item.quantity}x* ${item.type} - _${item.color}_`
      ),
      "",
      "📦 Aguardando confirmação!",
    ].join("\n");

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "5585989569856";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="flex-1 flex flex-col gap-10">
      <div className="flex items-center justify-center gap-10 ">
        <Avatar>
          <AvatarImage className="dark:bg-white rounded-full" src="/favicon.ico" />
        </Avatar>
      </div>

      <ColorSelector colors={colors} onSelect={setSelectedColor} />

      {selectedColor && (
        <>
          <TypeSelector
            color={selectedColor}
            types={types}
            quantities={quantities}
            onChange={handleQuantityChange}
          />
          <Button className="self-end" onClick={handleAddToCart}>
            Adicionar ao Carrinho
          </Button>
        </>
      )}

      {cart.length > 0 && (
        <section className="flex flex-col gap-4 border-t pt-6">
          <h3 className="text-xl font-semibold text-primary">Carrinho</h3>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border px-4 py-2 rounded-lg bg-muted"
            >
              <span className="text-sm">
                {item.quantity}x {item.type}
              </span>
              <span className="text-sm">({item.color})</span>
            </div>
          ))}
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={handleClearCart}>
              Limpar Carrinho
            </Button>
            <Button onClick={handleCheckout}>
              Finalizar Pedido via WhatsApp
            </Button>
          </div>
        </section>
      )}
    </main>
  );
}
