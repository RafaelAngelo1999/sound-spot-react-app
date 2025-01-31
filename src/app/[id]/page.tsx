"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import TabsContentWithMusic from "@/components/music/tabs-content-with-music";
import { listenNowAlbums } from "@/data/albums";
import SectionTitle from "@/components/music/section-title";
import { Body } from "@/components/shared/body";
import { HeaderMusic } from "@/components/shared/header-music";

import PaymentOptionsCard from "@/components/music/payment-options-card";
import OrderSummaryCard from "@/components/music/order-summary-card";
import PaymentActions from "@/components/music/payment-actions";

import useClientStore from "@/store/useClientStore";
import PlayListMusic from "@/components/shared/playlist-music";
import MusicEmptyPlaceholder from "@/components/music/music-empty-placeholder";
import FloatingButtonsContainer from "@/components/music/floating-buttons-container";

import { useFetchClientData } from "@/hooks/useFetchClientData";
import { useTabsStore } from "@/store/useTabsStore";

export default function MusicPage() {
  const { isLoading, isError } = useFetchClientData();
  const playlist = useClientStore((state) => state.playlist);
  const { activeTab, setActiveTab } = useTabsStore();

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao buscar os dados</div>;

  const showPlaylist = activeTab !== "playlist" && playlist.length > 0;
  const showPayment = activeTab !== "payments" && playlist.length > 0;
  return (
    <Body>
      <FloatingButtonsContainer
        isPlaylistVisible={showPlaylist}
        isPaymentVisible={showPayment}
        onRedirectPlaylist={() => setActiveTab("playlist")}
        onRedirectPayment={() => setActiveTab("payments")}
      />

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="h-full space-y-4"
      >
        <HeaderMusic />
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
            {playlist.length < 1 ? (
              <MusicEmptyPlaceholder
                onClickButton={() => setActiveTab("music")}
              />
            ) : (
              <PlayListMusic />
            )}
          </div>
        </TabsContent>
        <TabsContentWithMusic albums={listenNowAlbums} />
        <TabsContent
          value="payments"
          className="h-full flex-col border-none p-0 data-[state=active]:flex"
        >
          <SectionTitle
            title={"Pagamento"}
            description={"Escolha e finalize o pagamento 🎵."}
          />
          <div className="my-4">
            <PaymentOptionsCard />
          </div>
          <div className="my-4">
            <OrderSummaryCard />
          </div>
          <PaymentActions />
        </TabsContent>
      </Tabs>
    </Body>
  );
}
