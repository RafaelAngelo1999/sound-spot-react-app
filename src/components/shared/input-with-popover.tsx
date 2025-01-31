import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

interface InputWithPopoverProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onRedirect: () => void;
}

const InputWithPopover = ({
  isOpen,
  setIsOpen,
  onRedirect,
}: InputWithPopoverProps) => {
  return (
    <div className="relative w-full">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger>
          <PopoverContent className="w-64 shadow-md p-3">
            <p className="text-sm text-gray-700">
              Clique abaixo para continuar:
            </p>
            <Button
              onClick={() => {
                onRedirect();
                setIsOpen(false);
              }}
              className="mt-2 w-full"
            >
              Redirecionar
            </Button>
          </PopoverContent>
        </PopoverTrigger>
      </Popover>
    </div>
  );
};

export default InputWithPopover;
