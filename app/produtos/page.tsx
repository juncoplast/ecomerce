"use client";

import { useState } from "react";
import { ColorSelector } from "@/components/ColorSelector";
import { TypeSelector } from "@/components/TypeSelector";
import { Button } from "@/components/ui/button";
import FloatingCart from "@/components/FloatingCart";
import { useCart } from "@/context/CartContext";

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
  const { cart, addToCart, clearCart, checkout } = useCart();

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

    items.forEach(addToCart);
    setQuantities({});
    setSelectedColor("Todas as cores");
  };

  return (
    <main className="mt-[25vh] flex-1 flex flex-col w-full gap-7">
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
                  className="flex flex-col items-center border max-w-screen-md px-4 py-1 rounded-xl w-full"
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
                  <Button className="self-center mt-2 mb-2" onClick={handleAddToCart}>
                    Adicionar ao Carrinho
                  </Button>
                </div>
              ))
          ) : (
            <div className="flex flex-col items-center border max-w-screen-md px-4 py-1 rounded-xl w-full">
              <TypeSelector
                color={selectedColor}
                types={types}
                quantities={quantities}
                onChange={handleQuantityChange}
              />
              <Button className="self-center mt-2 mb-2" onClick={handleAddToCart}>
                Adicionar ao Carrinho
              </Button>
            </div>
          )}
        </div>
      )}

      {/* ✅ FloatingCart deve estar aqui para aparecer sempre */}
      <FloatingCart />
    </main>
  );
}
