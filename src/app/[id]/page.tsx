"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import TabsContentWithMusic from "@/components/music/tabs-content-with-music";
import { listenNowAlbums } from "@/data/albums";
import { MusicEmptyPlaceholder } from "@/components/music/music-empty-placeholder";
import SectionTitle from "@/components/music/section-title";
import { Body } from "@/components/shared/body";
import { HeaderMusic } from "@/components/shared/header-music";
import { PlayListMusic } from "@/components/shared/playlist-music";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CreditCardIcon, DollarSignIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
        <TabsContent
          value="payments"
          className="h-full flex-col border-none p-0 data-[state=active]:flex"
        >
          <SectionTitle
            title={"Playlist"}
            description={
              "Sua lista de reprodução. Adicione agora uma música 🎵."
            }
          />
          <div className="my-4">
            <Card>
              <CardHeader>
                <CardTitle>Opções de pagamento</CardTitle>
                <CardDescription>
                  Selecione seu método de pagamento preferido
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup
                  defaultValue="other"
                  className="grid grid-cols-2 gap-4 items-center" // Adicione items-center aqui
                >
                  <div>
                    <RadioGroupItem
                      value="other"
                      id="other"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="other"
                      className="flex flex-col items-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <DollarSignIcon className="mb-3 h-6 w-6" />
                      PIX
                    </Label>
                  </div>
                  <div>
                    <RadioGroup
                      value="card"
                      id="card"
                      className="peer sr-only"
                      disabled
                    />
                    <Label
                      htmlFor="card"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <CreditCardIcon className="mb-3 h-6 w-6" />
                      Cart. de Crédito
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>
          <div className="my-4">
            <Card>
              <CardHeader>
                <CardTitle>Resumo do pedido </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Image
                        src={"/assets/fantasma.jpg"}
                        alt={"Teste"}
                        width={64}
                        height={64}
                        className="rounded-md"
                        style={{ aspectRatio: "64/64", objectFit: "cover" }}
                      />

                      <div>
                        <div className="font-medium">Fantasma - Gordão</div>
                        <div className="text-muted-foreground">
                          Quantidade: 1
                        </div>
                      </div>
                    </div>
                    <div className="font-medium">R$1,00</div>
                  </div>
                  <Separator />
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="text-muted-foreground">Subtotal</div>
                      <div>R$9,00</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-muted-foreground">Taxa</div>
                      <div>$0,10</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between font-medium">
                    <div>Total</div>
                    <div>R$9,10</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <Button size="lg" className="w-full">
            Finalizar Pagamento 🚀
          </Button>
        </TabsContent>
      </Tabs>
    </Body>
  );
}
