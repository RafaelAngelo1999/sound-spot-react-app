import { cn } from "@/lib/utils";
import useClientStore from "@/store/useClientStore";

const Header: React.FC = () => {
  const client = useClientStore((state: any) => state.client);

  return (
    <header
      className={cn(
        "w-full bg-primary text-primary-foreground",
        "fixed top-0 left-0 z-80 shadow-lg h-[80px]"
      )}
    >
      <div className="container mx-auto px-4 flex h-full items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            {client.name || "Nome da Loja"}
          </h1>
          {client.name && (
            <p className="text-sm text-muted-foreground mt-1">{client.name}</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
