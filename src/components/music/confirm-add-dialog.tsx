import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useTabsStore } from "@/store/useTabsStore";
import { ToastAction } from "@radix-ui/react-toast";

const ConfirmAddDialog = ({ open, onClose, onConfirm, song }) => {
  const { toast } = useToast();
  const { setActiveTab } = useTabsStore();

  const handleAdd = () => {
    onConfirm(song);
    toast({
      title: "Adicionada com sucesso ✅!",
      description: song?.name + " | " + song?.artist,
      action: (
        <ToastAction
          onClick={() => setActiveTab("payments")}
          altText="Finalizar !"
        >
          <Button>Pagar 💵</Button>
        </ToastAction>
      ),
    });
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Incluir Música</DialogTitle>
            <DialogDescription>
              Deseja incluir a música {song?.name}?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button>
            <Button onClick={handleAdd}>Adicionar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ConfirmAddDialog;
