'use client';

import { Button } from "@/components/ui/button";

type Props = {
  color: string;
  types: string[];
  quantities: Record<string, number>;
  onChange: (type: string, delta: number) => void;
};

export function TypeSelector({ color, types, quantities, onChange }: Props) {
  return (
    <section className="flex flex-col gap-6">
      <h3 className="text-lg font-medium text-black">{color}</h3>
      <div className="flex flex-col gap-4">
        {types.map((type) => (
          <div
            key={type}
            className="flex items-center justify-between border rounded-xl px-4 bg-muted"
          >
            <span className="text-sm font-medium mr-2">{type}</span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onChange(type, -1)}
              >
                -
              </Button>
              <span className="w-6 text-center text-sm">
                {quantities[type] || 0}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onChange(type, 1)}
              >
                +
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}