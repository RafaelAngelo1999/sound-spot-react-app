// components/music/AlbumList.tsx

import React from "react";
import { AlbumArtwork } from "@/components/music/album-artwork";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
}) => (
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
          />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  </div>
);

export default AlbumList;
