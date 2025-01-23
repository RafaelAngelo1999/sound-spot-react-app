import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SelectedMusicList from "@/components/music/select-music-list";
import useClientStore from "@/store/useClientStore"; // Importando o Zustand

const PlayListMusic: React.FC = () => {
  // Acessando a playlist do Zustand
  const playlist = useClientStore((state) => state.playlist);
  const addSongToPlaylist = useClientStore((state) => state.addSongToPlaylist);
  const removeSongFromPlaylist = useClientStore(
    (state) => state.removeSongFromPlaylist
  );

  // Função para adicionar uma nova música
  const handleAddMusic = () => {
    const newSong = {
      id: `${playlist.length + 1}`, // Gerando um ID único
      title: "Nova Música", // Título mockado para exemplo
      artist: "Artista Exemplo", // Artista mockado
      albumArt: "/assets/fantasma.jpg", // Imagem mockada
    };
    addSongToPlaylist(newSong); // Adicionando a música ao Zustand
  };

  // Função para remover uma música
  const handleRemoveMusic = (nameSong: string) => {
    removeSongFromPlaylist(nameSong); // Removendo a música do Zustand
  };
  console.log(playlist);

  return (
    <div className="overflow-x-hidden">
      <div className="border-t">
        <div className="bg-background">
          <div className="w-full px-4 py-6 lg:px-8">
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Seleção
                </h2>
                <Button onClick={handleAddMusic} className="flex items-center">
                  <PlusCircle className="mr-2" />
                  Add Música
                </Button>
              </div>
              <SelectedMusicList
                musicList={playlist} // Usando a playlist do Zustand
                onRemove={handleRemoveMusic} // Passando a função para remover músicas
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayListMusic;
