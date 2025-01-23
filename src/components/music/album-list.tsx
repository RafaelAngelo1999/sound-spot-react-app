// components/music/AlbumList.tsx

import React, { useState } from "react";
import { AlbumArtwork } from "@/components/music/album-artwork";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ConfirmAddDialog from "./confirm-add-dialog";
import useClientStore from "@/store/useClientStore";

interface AlbumListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  albums: any[];
  aspectRatio: "portrait" | "square" | undefined;
  width: number;
  height: number;
}

const AlbumList: React.FC<AlbumListProps> = ({
  albums,
  aspectRatio,
  width,
  height,
}) => {
  const addSongToPlaylist = useClientStore((state) => state.addSongToPlaylist);

  const [showDialog, setShowDialog] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  console.log(selectedSong);

  const handleOpenDialog = (song) => {
    setSelectedSong(song);
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setSelectedSong(null);
  };

  const handleConfirmDelete = (song) => {
    // Aqui você pode fazer a exclusão do item com o ID
    console.log("Item excluído com ID:", song);
    addSongToPlaylist(song);
    handleCloseDialog(); // Fecha o dialog após a exclusão
  };

  return (
    <div className="relative">
      <ScrollArea>
        <div className="flex space-x-4 pb-4 overflow-x-auto">
          {albums.map((album) => (
            <AlbumArtwork
              key={album.name}
              album={album}
              className={`w-[${width}px] sm:w-[${width + 50}px]`}
              aspectRatio={aspectRatio}
              width={width}
              height={height}
              onClick={() => handleOpenDialog(album)}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <ConfirmAddDialog
        open={showDialog}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmDelete}
        song={selectedSong}
      />
    </div>
  );
};

export default AlbumList;
