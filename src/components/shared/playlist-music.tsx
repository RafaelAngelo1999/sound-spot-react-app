import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SelectedMusicList from "@/components/music/select-music-list";

const selectedMusic = [
  {
    id: 1,
    title: "Fantasma",
    artist: "Gordão do PC e DJ Farnetti",
    albumArt: "/assets/fantasma.jpg",
  },
  {
    id: 2,
    title: "Fantasma 2",
    artist: "Gordão do PC e DJ Farnetti 2",
    albumArt: "/assets/fantasma.jpg",
  },
  {
    id: 3,
    title: "Fantasma 3",
    artist: "Gordão do PC e DJ Farnetti 3",
    albumArt: "/assets/fantasma.jpg",
  },

  // mais músicas mockadas
];

export const PlayListMusic: React.FC = () => {
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
                <Button onClick={() => {}} className="flex items-center">
                  <PlusCircle className="mr-2" />
                  Add Música
                </Button>
              </div>
              <SelectedMusicList
                musicList={selectedMusic}
                onRemove={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
