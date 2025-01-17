"use client";

import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import TabsContentWithMusic from "@/components/music/tabs-content-with-music";
import { listenNowAlbums, madeForYouAlbums } from "@/data/albums";
import { MusicEmptyPlaceholder } from "@/components/music/music-empty-placeholder";
import SectionTitle from "@/components/music/section-title";
import SelectedMusicList from "@/components/music/select-music-list";
import { CartIcon } from "@/components/shared/cart-icon";

export const selectedMusic = [
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

export default function MusicPage() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="border-t">
          <div className="bg-background">
            <div className="w-full px-4 py-6 lg:px-8">
              <Tabs defaultValue="playlist" className="h-full space-y-4">
                <div className="flex justify-between items-center">
                  <TabsList>
                    <TabsTrigger value="playlist">Playlist</TabsTrigger>
                    <TabsTrigger value="music" className="relative">
                      Musicas
                    </TabsTrigger>
                    <TabsTrigger value="live" disabled>
                      Pagamento
                    </TabsTrigger>
                  </TabsList>
                  <div className="ml-auto mr-4">
                    <CartIcon itemCount={1} /> {/* Sem itens */}
                  </div>
                </div>
                {/* Music Tab */}

                {/* Made for You Tab */}
                <TabsContentWithMusic
                  albums={listenNowAlbums}
                  albumsArtist={madeForYouAlbums}
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
                    {false ? (
                      <MusicEmptyPlaceholder />
                    ) : (
                      <div className="overflow-x-hidden">
                        <div className="border-t">
                          <div className="bg-background">
                            <div className="w-full px-4 py-6 lg:px-8">
                              <div className="space-y-6">
                                <div className="flex justify-between items-center mb-4">
                                  <h2 className="text-2xl font-semibold tracking-tight">
                                    Seleção
                                  </h2>
                                  <Button
                                    onClick={() => {}}
                                    className="flex items-center"
                                  >
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
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
