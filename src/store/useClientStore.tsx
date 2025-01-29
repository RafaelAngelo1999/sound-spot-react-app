import { Client, clientInitial } from "@/data/client";
import { Song } from "@/data/song";
import { create } from "zustand";

type ClientStore = {
  client: Client;
  playlist: Song[];
  setClient: (client: Client) => void;
  addSongToPlaylist: (song: Song | any) => void;
  removeSongFromPlaylist: (nameSong: string) => void;
  clearPlaylist: () => void;
};

const getPlaylistFromStorage = (): Song[] => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPlaylist = localStorage.getItem("playlist");
    return storedPlaylist ? JSON.parse(storedPlaylist) : [];
  }
  return [];
};

const savePlaylistToStorage = (playlist: Song[]) => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem("playlist", JSON.stringify(playlist));
  }
};

const useClientStore = create<ClientStore>((set) => ({
  client: clientInitial,
  playlist: getPlaylistFromStorage(),
  setClient: (client) => set({ client: client }),

  addSongToPlaylist: (song) =>
    set((state) => {
      const updatedPlaylist = [...state.playlist, { ...song }];
      savePlaylistToStorage(updatedPlaylist);
      return { playlist: updatedPlaylist };
    }),

  removeSongFromPlaylist: (nameSong) =>
    set((state) => {
      const updatedPlaylist = state.playlist.filter(
        (song) => song.name !== nameSong
      );
      savePlaylistToStorage(updatedPlaylist);
      return { playlist: updatedPlaylist };
    }),

  clearPlaylist: () =>
    set(() => {
      savePlaylistToStorage([]);
      return { playlist: [] };
    }),
}));

export default useClientStore;
