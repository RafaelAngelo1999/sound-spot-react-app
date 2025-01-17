"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import TabsContentWithMusic from "@/components/music/tabs-content-with-music";
import { listenNowAlbums } from "@/data/albums";
import { MusicEmptyPlaceholder } from "@/components/music/music-empty-placeholder";
import SectionTitle from "@/components/music/section-title";
import { Body } from "@/components/shared/body";
import { HeaderMusic } from "@/components/shared/header-music";
import { PlayListMusic } from "@/components/shared/playlist-music";

export default function MusicPage() {
  return (
    <Body>
      <Tabs defaultValue="playlist" className="h-full space-y-4">
        <HeaderMusic />
        <TabsContentWithMusic albums={listenNowAlbums} />
        <TabsContent
          value="playlist"
          className="h-full flex-col border-none p-0 data-[state=active]:flex"
        >
          <SectionTitle
            title={"Playlist"}
            description={
              "Sua lista de reprodução. Adicione agora uma música 🎵."
            }
          />
          <div className="my-4">
            {false ? <MusicEmptyPlaceholder /> : <PlayListMusic />}
          </div>
        </TabsContent>
      </Tabs>
    </Body>
  );
}
