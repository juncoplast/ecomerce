"use client";

import { useState } from "react";
import { ColorSelector } from "@/components/ColorSelector";
import { TypeSelector } from "@/components/TypeSelector";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import GradientText from "@/components/GradientText/GradientText";
import { CartProvider } from "@/context/CartContext";
import FloatingCart from "@/components/FloatingCart";

const colors = [
  "Todas as cores",
  "Amarelo",
  "Areia",
  "Areia Mesclado",
  "Argila",
  "Avelã Envelhecido",
  "Azul BB",
  "Azul Marinho",
  "Azul Royal",
  "Bege",
  "Bege Mesclado",
  "Branco",
  "Branco Mesclado",
  "Camurça",
  "Capuccino",
  "Capuccino Tropical",
  "Caramelo",
  "Carvalho",
  "Cedro",
  "Cerejeira Tropical",
  "Chocolate",
  "Chocolate Mesclado",
  "Cinza",
  "Cinza Tropical",
  "Grafite",
  "Laranja",
  "Madeira",
  "Marfim",
  "Palha",
  "Palha Tropical",
  "Pinus",
  "Preto",
  "Preto Mesclado",
  "Rosa BB",
  "Rosa Pink",
  "Roxo",
  "Tabaco",
  "Tabaco Tropical",
  "Terracota",
  "Tiffany",
  "Verde Bambu",
  "Verde BB",
  "Verde Limão",
  "Verde Musgo",
  "Vermelho"
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
  const [selectedColor, setSelectedColor] = useState<string>("Todas as cores");
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
    setSelectedColor("Todas as cores");
    // window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); // rola suavemente até o final da página
  };

  const handleClearCart = () => {
    setCart([]);
    setSelectedColor("Todas as cores");
    window.scrollTo({ top: 0, behavior: 'smooth' }); // sobe suavemente até o topo
  };

  const handleCheckout = () => {
    const today = new Date().toLocaleDateString("pt-BR"); // pega a data no formato dd/mm/yyyy

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
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <CartProvider>
      <main className="mt-[25vh] flex-1 flex flex-col w-full gap-7">
        {/* este trecho é fixo */}
        <div className="fixed top-[25vh] left-0 w-full z-50 bg-secondary px-5 py-4">
          <ColorSelector
            colors={colors}
            selectedColor={selectedColor}
            onSelect={setSelectedColor}
          />
        </div>


        {selectedColor && (
          <div className="flex flex-col gap-6 mt-[15vh] items-center">
            {selectedColor === "Todas as cores" ? (
              colors
                .filter((color) => color !== "Todas as cores")
                .map((color) => (
                  <div
                    key={color}
                    className="flex flex-col items-center border max-w-screen-md p-4 rounded-xl w-full"
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
                    <Button className="self-center mt-5 mb-7" onClick={handleAddToCart}>
                      Adicionar ao Carrinho
                    </Button>
                  </div>
                ))
            ) : (
              <div className="flex flex-col items-center border max-w-screen-md p-4 rounded-xl w-full">
                <TypeSelector
                  color={selectedColor}
                  types={types}
                  quantities={quantities}
                  onChange={handleQuantityChange}
                />
                <Button className="self-center mt-5 mb-7" onClick={handleAddToCart}>
                  Adicionar ao Carrinho
                </Button>
              </div>
            )}
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
            <div className="flex justify-between px-5 gap-2 mt-4">
              <Button variant="outline" onClick={handleClearCart}>
                Limpar Carrinho
              </Button>
              <Button onClick={handleCheckout}>
                Enviar Orçamento
              </Button>
            </div>
          </section>
        )}
      </main>
    </CartProvider>
  );
}
