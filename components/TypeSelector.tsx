import { Button } from "./ui/button";

type Props = {
  color: string;
  types: string[];
  quantities: Record<string, number>;
  onChange: (type: string, delta: number) => void;
  bannerUrl?: string;
  useKeyPrefix?: boolean;
};

export function TypeSelector({
  color,
  types,
  quantities,
  onChange,
  bannerUrl,
  useKeyPrefix = false,
}: Props) {
  return (
    <section className="flex flex-col w-full max-w-screen-xl items-center">
      <h3 className="text-lg font-medium text-muted-foreground">{color}</h3>
      <div
        className="border text-muted w-full px-2 h-28 mb-6 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bannerUrl || "/PINUS-ESTONADO-300x240.jpg"})`,
        }}
      />
      <div className="flex flex-col gap-0.5">
        {types.map((type) => {
          const key = useKeyPrefix ? `${color}__${type}` : type;
          return (
            <div
              key={type}
              className="flex items-center justify-between border rounded-xl px-4 bg-muted"
            >
              <span className="text-start text-sm font-bold truncate mr-2">{type}</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() => onChange(type, -1)}
                >
                  -
                </Button>
                <span className="w-6 text-center text-sm">
                  {quantities[key] || 0}
                </span>
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() => onChange(type, 1)}
                >
                  +
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
