import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import AlbumList from "@/components/music/album-list";
import SearchInput from "./search-input";

interface TabsContentWithMusicProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  albums: any[];
}

const TabsContentWithMusic: React.FC<TabsContentWithMusicProps> = ({
  albums,
}) => {
  return (
    <TabsContent value="music" className="border-none p-0 outline-none">
      <div className="mb-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          Selecionar Músicas
        </h2>
        <div className="flex justify-end mb-2 mt-2">
          <SearchInput value={"teste"} onChange={() => {}} />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">
            Pesquisando por: <span className="font-medium">{"teste"}</span>
          </p>
        </div>
      </div>

      {/* AlbumList component with only 3 albums */}
      <div className="my-4">
        <AlbumList
          albums={albums.slice(0, 3)}
          aspectRatio={"portrait"}
          width={800}
          height={800}
        />
      </div>

      <div className="my-4">
        <AlbumList
          albums={albums.slice(4)}
          aspectRatio={"portrait"}
          width={340}
          height={340}
        />
      </div>
      <div className="my-4">
        <AlbumList
          albums={albums.slice(4)}
          aspectRatio={"portrait"}
          width={340}
          height={340}
        />
      </div>
    </TabsContent>
  );
};

export default TabsContentWithMusic;
