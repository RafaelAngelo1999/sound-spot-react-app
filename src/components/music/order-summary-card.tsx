// OrderSummaryCard.js
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function OrderSummaryCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumo do pedido</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={"/assets/fantasma.jpg"}
                alt={"Teste"}
                width={64}
                height={64}
                className="rounded-md"
                style={{ aspectRatio: "64/64", objectFit: "cover" }}
              />
              <div>
                <div className="font-medium">Fantasma - Gordão</div>
                <div className="text-muted-foreground">Quantidade: 3</div>
              </div>
            </div>
            <div className="font-medium">R$1,00</div>
          </div>
          <Separator />
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Subtotal</div>
              <div>R$3,00</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Taxa</div>
              <div>$0,30</div>
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between font-medium">
            <div>Total</div>
            <div>R$3,30</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
