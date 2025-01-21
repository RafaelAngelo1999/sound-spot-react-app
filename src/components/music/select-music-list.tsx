import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "../ui/button";
import { Trash2 } from "lucide-react"; // Para o ícone de excluir
import Image from "next/image"; // Importe o Image do Next.js

interface SelectedMusicDataTableProps {
  musicList: { id: number; title: string; artist: string; albumArt: string }[];
  onRemove: (id: number) => void;
}

const SelectedMusicDataTable: React.FC<SelectedMusicDataTableProps> = ({
  musicList,
  onRemove,
}) => {
  return (
    <>
      <div className="overflow-x-auto bg-background p-4 rounded-md shadow-md">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">Album</TableHead>{" "}
              <TableHead className="w-full">Music & Artist</TableHead>{" "}
              <TableHead className="w-12">Action</TableHead>{" "}
            </TableRow>
          </TableHeader>
          <TableBody>
            {musicList.map((music, _) => (
              <TableRow key={music.id}>
                <TableCell>
                  <Image
                    src={music.albumArt}
                    alt={music.title}
                    width={48} // Definindo um tamanho fixo para a imagem
                    height={48}
                    className="rounded"
                    layout="intrinsic"
                  />
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-semibold text-lg">{music.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {music.artist}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    onClick={() => onRemove(music.id)}
                    size="icon"
                  >
                    <Trash2 size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Valor Total</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$3.00</div>
          <p className="text-xs text-muted-foreground">
            3 músicas selecionadas
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default SelectedMusicDataTable;
