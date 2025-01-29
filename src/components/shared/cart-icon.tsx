import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { Toast, ToastProvider } from "@/components/ui/toast";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface CartIconProps {
  itemCount: number;
}

export const CartIcon: React.FC<CartIconProps> = ({ itemCount }) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (itemCount > 0) {
      setShowToast(true);
      const timeout = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [itemCount]);

  const isHighlighted = itemCount > 0;

  return (
    <ToastProvider>
      <TooltipProvider>
        <div className="relative inline-block cursor-pointer">
          <Tooltip>
            <TooltipTrigger>
              <ShoppingCart
                className={`w-8 h-8 transition-transform ${
                  isHighlighted
                    ? "text-primary scale-110"
                    : "text-muted-foreground"
                }`}
              />
            </TooltipTrigger>
            <TooltipContent>
              {itemCount > 0
                ? "Clique para finalizar!"
                : "Seu carrinho está vazio."}
            </TooltipContent>
          </Tooltip>

          {itemCount > 0 && (
            <div
              className={`absolute -top-1.5 -right-1.5 h-5 w-5 flex items-center justify-center text-xs font-bold rounded-full ${
                isHighlighted
                  ? "bg-black text-white"
                  : "bg-muted text-foreground"
              }`}
            >
              {itemCount}
            </div>
          )}
        </div>
      </TooltipProvider>

      {showToast && itemCount > 0 && (
        <Toast className="fixed bottom-4 right-4">
          <div className="text-sm">
            Carrinho com {itemCount} item{itemCount > 1 ? "s" : ""}. Clique para
            finalizar!
          </div>
        </Toast>
      )}
    </ToastProvider>
  );
};
