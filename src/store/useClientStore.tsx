import { create } from "zustand";

// Tipo da música
type Song = {
  id: string;
  name: string;
  artist: string;
  img: string;
  idSpotify: string;
  value: number;
};

// Tipo do estado do cliente
type ClientStore = {
  client: {
    name: string;
    id: number;
  };
  playlist: Song[];
  setClient: (clientData: { name: string; id: number }) => void;
  addSongToPlaylist: (song: Song | any) => void;
  removeSongFromPlaylist: (nameSong: string) => void;
  clearPlaylist: () => void;
};

const getPlaylistFromStorage = (): Song[] => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPlaylist = localStorage.getItem("playlist");
    return storedPlaylist ? JSON.parse(storedPlaylist) : [];
  }
  return []; // Retorna um array vazio caso localStorage não esteja disponível
};

const savePlaylistToStorage = (playlist: Song[]) => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem("playlist", JSON.stringify(playlist));
  }
};

const useClientStore = create<ClientStore>((set) => ({
  client: { name: "", id: 0 },
  playlist: getPlaylistFromStorage(), // Inicializa com a playlist do localStorage
  setClient: (clientData) => set({ client: clientData }),

  // Função para adicionar uma música à playlist
  addSongToPlaylist: (song) =>
    set((state) => {
      const updatedPlaylist = [...state.playlist, { ...song }];
      savePlaylistToStorage(updatedPlaylist); // Atualiza o localStorage
      return { playlist: updatedPlaylist };
    }),

  // Função para remover uma música da playlist
  removeSongFromPlaylist: (nameSong) =>
    set((state) => {
      const updatedPlaylist = state.playlist.filter(
        (song) => song.name !== nameSong
      );
      savePlaylistToStorage(updatedPlaylist); // Atualiza o localStorage
      return { playlist: updatedPlaylist };
    }),

  // Função para apagar toda a playlist
  clearPlaylist: () =>
    set(() => {
      savePlaylistToStorage([]); // Limpa o localStorage
      return { playlist: [] };
    }),
}));

export default useClientStore;
