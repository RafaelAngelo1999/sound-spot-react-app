import { create } from "zustand";

interface TabsState {
  activeTab: string;
  defaultTab: string;
  setActiveTab: (tab: string) => void;
}

const initialState = "playlist";

export const useTabsStore = create<TabsState>((set) => ({
  activeTab: initialState,
  defaultTab: initialState,
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
