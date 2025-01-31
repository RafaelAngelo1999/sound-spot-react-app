import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";

interface FloatingPaymentButtonProps {
  onRedirect: () => void;
  isVisible: boolean;
}

const FloatingPaymentButton = ({
  onRedirect,
  isVisible,
}: FloatingPaymentButtonProps) => {
  if (!isVisible) return null;

  return (
    <Button
      onClick={onRedirect}
      className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all"
    >
      <DollarSign className="w-5 h-5" />
      Pagar
    </Button>
  );
};

export default FloatingPaymentButton;
