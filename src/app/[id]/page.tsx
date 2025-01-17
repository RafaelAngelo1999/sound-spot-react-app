import { Metadata } from "next";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import TabsContentWithMusic from "@/components/music/tabs-content-with-music";
import { listenNowAlbums, madeForYouAlbums } from "@/data/albums";
import { MusicEmptyPlaceholder } from "@/components/music/music-empty-placeholder";
import SectionTitle from "@/components/music/section-title";

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
};

export default function MusicPage() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="border-t">
          <div className="bg-background">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-4/5 w-full px-4 py-6 lg:px-8">
                <Tabs defaultValue="playlist" className="h-full space-y-6">
                  <div className="flex justify-between items-center">
                    <TabsList>
                      <TabsTrigger value="playlist">Playlist</TabsTrigger>
                      <TabsTrigger value="music" className="relative">
                        Music
                      </TabsTrigger>
                      <TabsTrigger value="live" disabled>
                        Live
                      </TabsTrigger>
                    </TabsList>
                    <div className="ml-auto mr-4">
                      <Button>
                        <PlusCircle />
                        Add music
                      </Button>
                    </div>
                  </div>
                  {/* Music Tab */}
                  <TabsContentWithMusic
                    albums={listenNowAlbums}
                    sectionTitle="Listen Now"
                    sectionDescription="Top picks for you. Updated daily."
                    aspectRatio="portrait"
                    width={250}
                    height={330}
                  />

                  {/* Made for You Tab */}
                  <TabsContentWithMusic
                    albums={madeForYouAlbums}
                    sectionTitle="Made for You"
                    sectionDescription="Your personal playlists. Updated daily."
                    aspectRatio="square"
                    width={150}
                    height={150}
                  />
                  {/* Playlist Tab */}
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
                      <MusicEmptyPlaceholder />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
