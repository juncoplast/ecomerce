"use client";

import { useState } from "react";
import { ColorSelector } from "@/components/ColorSelector";
import { TypeSelector } from "@/components/TypeSelector";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import GradientText from "@/components/GradientText/GradientText";

const colors = [
  "Todas as cores",
  "Amarela",
  "Areia",
  "Argila",
  "Avelã env ",
  "Azul BB",
  "Azul Marinho",
  "Azul Royal",
  "Branco",
  "Chocolate ",
  "Cinza",
  "Capuccino tropical ",
  "Caramelo ",
  "Cerejeira tropical",
  "Carvalho ",
  "Capuccino ",
  "Camurça ",
  "Gráfite ",
  "Laranja ",
  "Marfim ",
  "Madeira",
  "Preto",
  "Palha",
  "Palha tropical ",
  "Rosa bb",
  "Rosa pink ",
  "Roxo ",
  "Tabaco tropical ",
  "Tabaco",
  "Terracota ",
  "Verde bb",
  "Verde musgo ",
  "Verde bambu ",
  "Verde limão ",
  "Verde Tiffany",
];

const types = [
  "CD (Cordão 4mm)",
  "CDN (Cordão Náutico 6mm)",
  "MC (Meia Cana 6mm)",
  "FT (Fita 10mm)",
  "FTI (Fita Imperial 10mm)",
  "FTF (Fita Frizada 10mm)",
];

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
    const items = Object.entries(quantities)
      .map(([key, quantity]) => {
        const [color, type] = key.includes("__")
          ? key.split("__")
          : [selectedColor!, key];
        return {
          color,
          type,
          quantity,
        };
      })
      .filter((item) => item.quantity > 0);

    if (items.length === 0) return;

    setCart((prev) => [...prev, ...items]);
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
    <main className="mt-[25vh] flex-1 flex flex-col w-full gap-7">
      <div className="px-5 mt-2">
        <ColorSelector colors={colors} onSelect={setSelectedColor} />
      </div>

      {selectedColor && (
        <div className="flex flex-col gap-6 items-center">
          {selectedColor === "Todas as cores" ? (
            colors
              .filter((color) => color !== "Todas as cores")
              .map((color) => (
                <div
                  key={color}
                  className="flex flex-col items-center border max-w-screen-md p-4 rounded-xl shadow-sm w-full"
                >
                  <TypeSelector
                    color={color}
                    types={types}
                    quantities={quantities}
                    useKeyPrefix
                    onChange={(type, delta) =>
                      handleQuantityChange(`${color}__${type}`, delta)
                    }
                  />
                </div>
              ))
          ) : (
            <div className="flex flex-col items-center border max-w-screen-md p-4 rounded-xl shadow-sm w-full">
              <TypeSelector
                color={selectedColor}
                types={types}
                quantities={quantities}
                onChange={handleQuantityChange}
              />
            </div>
          )}

          <Button className="self-end" onClick={handleAddToCart}>
            Adicionar ao Carrinho
          </Button>
        </div>
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
