import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSignIcon, CreditCardIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function PaymentOptionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Opções de pagamento</CardTitle>
        <CardDescription>
          Selecione seu método de pagamento preferido
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <RadioGroup
          defaultValue="other"
          className="grid grid-cols-2 gap-4 items-center"
        >
          <div>
            <RadioGroupItem value="other" id="other" className="peer sr-only" />
            <Label
              htmlFor="other"
              className="flex flex-col items-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <DollarSignIcon className="mb-3 h-6 w-6" />
              PIX
            </Label>
          </div>
          <div>
            <RadioGroup
              value="card"
              id="card"
              className="peer sr-only"
              disabled
            />
            <Label
              htmlFor="card"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <CreditCardIcon className="mb-3 h-6 w-6" />
              Cart. de Crédito
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
