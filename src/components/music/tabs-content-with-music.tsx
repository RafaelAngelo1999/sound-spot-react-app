import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import SectionTitle from "@/components/music/section-title";
import AlbumList from "@/components/music/album-list";
import { MusicEmptyPlaceholder } from "@/components/music/music-empty-placeholder";
import SearchInput from "./search-input";

interface TabsContentWithMusicProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  albums: any[];
  albumsArtist: any[];
  sectionTitle: string;
  sectionDescription: string;
  aspectRatio: "portrait" | "square" | undefined;
  width: number;
  height: number;
}

const TabsContentWithMusic: React.FC<TabsContentWithMusicProps> = ({
  albums,
  albumsArtist,
  sectionTitle,
  sectionDescription,
  aspectRatio,
  width,
  height,
}) => (
  <TabsContent value="music" className="border-none p-0 outline-none">
    {/* <SectionTitle title={sectionTitle} description={sectionDescription} /> */}
    {/* Título da seção */}
    <div className="mb-2">
      <h2 className="text-2xl font-semibold tracking-tight">
        Selecionar Músicas
      </h2>

      {/* Caixa de pesquisa em linha separada */}
      <div className="flex justify-end mb-4">
        <SearchInput value={"teste"} onChange={() => {}} />
      </div>

      {/* Renderizar o conteúdo baseado na pesquisa */}
      <div>
        <p className="text-sm text-muted-foreground">
          Pesquisando por: <span className="font-medium">{"teste"}</span>
        </p>
      </div>
    </div>

    {/* Listagem de álbuns */}

    <div className="my-4">
      <AlbumList
        albums={albums}
        aspectRatio="portrait"
        width={250}
        height={330}
      />
    </div>
    <div className="my-4">
      <AlbumList
        albums={albumsArtist}
        aspectRatio={"portrait"}
        width={width}
        height={height}
      />
    </div>
  </TabsContent>
);

export default TabsContentWithMusic;
