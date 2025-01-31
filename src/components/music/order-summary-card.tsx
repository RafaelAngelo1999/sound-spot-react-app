// OrderSummaryCard.js
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import useClientStore from "@/store/useClientStore";
import Image from "next/image";

export default function OrderSummaryCard() {
  const playlist = useClientStore((state) => state.playlist);
  const valorTotal = playlist.reduce((acc, item) => acc + item.value, 0);

  const valorTaxa = 0.1;

  const formatCurrency = (value: number): string => {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumo do pedido</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="max-h-[9vh] overflow-y-auto">
            {playlist.map((song) => (
              <div
                key={song.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={song?.cover}
                    alt={song?.name}
                    width={64}
                    height={64}
                    className="rounded-md"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                      paddingBottom: "6px",
                    }}
                  />
                  <div>
                    <div className="font-medium">{song?.name}</div>
                    <div className="text-muted-foreground">{song?.artist}</div>
                  </div>
                </div>
                <div className="font-medium">
                  R${formatCurrency(song?.value)}
                </div>
              </div>
            ))}
          </div>
          <Separator />
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Subtotal</div>
              <div>R${formatCurrency(valorTotal)}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Taxa</div>
              <div>R${formatCurrency(playlist.length * valorTaxa)}</div>
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between font-medium">
            <div>Total</div>
            <div>R${formatCurrency(valorTotal + valorTaxa)}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
