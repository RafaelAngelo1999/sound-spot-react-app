import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CartIcon } from "@/components/shared/cart-icon";

export const HeaderMusic: React.FC = () => {
  return (
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
        <CartIcon itemCount={1} />
      </div>
    </div>
  );
};
