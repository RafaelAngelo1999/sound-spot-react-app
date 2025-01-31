import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";

interface FloatingPlaylistButtonProps {
  onRedirect: () => void;
  isVisible: boolean;
}

const FloatingPlaylistButton = ({
  onRedirect,
  isVisible,
}: FloatingPlaylistButtonProps) => {
  if (!isVisible) return null;

  return (
    <Button
      onClick={onRedirect}
      className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all"
    >
      <Music className="w-5 h-5" />
      Ir para Playlist
    </Button>
  );
};

export default FloatingPlaylistButton;
