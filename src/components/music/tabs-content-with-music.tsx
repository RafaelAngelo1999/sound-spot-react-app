import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import SectionTitle from "@/components/music/section-title";
import AlbumList from "@/components/music/album-list";
import { MusicEmptyPlaceholder } from "@/components/music/music-empty-placeholder";

interface TabsContentWithMusicProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  albums: any[];
  sectionTitle: string;
  sectionDescription: string;
  aspectRatio: "portrait" | "square" | undefined;
  width: number;
  height: number;
}

const TabsContentWithMusic: React.FC<TabsContentWithMusicProps> = ({
  albums,
  sectionTitle,
  sectionDescription,
  aspectRatio,
  width,
  height,
}) => (
  <TabsContent value="music" className="border-none p-0 outline-none">
    <SectionTitle title={sectionTitle} description={sectionDescription} />
    <div className="my-4">
      {albums.length < 12312312312 ? (
        <AlbumList
          albums={albums}
          aspectRatio={aspectRatio}
          width={width}
          height={height}
        />
      ) : (
        <MusicEmptyPlaceholder />
      )}
    </div>
  </TabsContent>
);

export default TabsContentWithMusic;
