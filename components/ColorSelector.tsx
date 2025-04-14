'use client';

import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

type Props = {
  colors: string[];
  onSelect: (color: string) => void;
};

export function ColorSelector({ colors, onSelect }: Props) {
  return (
    <section className="flex flex-col w-full">
      <h2 className="text-xl font-semibold text-primary">Escolha uma cor</h2>
      <Select onValueChange={onSelect}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecione a cor" />
        </SelectTrigger>
        <SelectContent>
          {colors.map((color) => (
            <SelectItem key={color} value={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </section>
  );
}