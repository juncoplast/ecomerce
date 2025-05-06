'use client';

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { HomeIcon } from 'lucide-react'

type Props = {
  colors: string[];
  selectedColor: string;
  onSelect: (color: string) => void;
};

export function ColorSelector({ colors, selectedColor, onSelect }: Props) {
  return (
    <section className="flex flex-col">
      <div className="flex flex-row text-primary ">
        <Link href="/">
          <HomeIcon className="mr-4"></HomeIcon>
        </Link>
        <h2 className="text-xl font-semibold text-primary mb-2">Escolha a Cor</h2>
      </div>
      <Select value={selectedColor} onValueChange={onSelect}>
        <SelectTrigger className="w-full text-lg font-semibold border border-primary rounded-lg shadow-sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {colors.map((color) => (
            <SelectItem key={color} value={color} className="text-base">
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </section>
  );
}
