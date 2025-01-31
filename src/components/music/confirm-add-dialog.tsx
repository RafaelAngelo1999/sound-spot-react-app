import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ConfirmAddDialog = ({ open, onClose, onConfirm, song }) => {
  // const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <>
      {/* <div className="p-4">
        <InputWithPopover
          isOpen={true}
          setIsOpen={setIsPopoverOpen}
          onRedirect={() => console.log("Redirecionando...")}
        />
      </div> */}
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Incluir Musica </DialogTitle>
            <DialogDescription>
              Deseja incluir a musica {song?.id}?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button>
            <Button onClick={() => onConfirm(song)}>Adicionar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ConfirmAddDialog;
