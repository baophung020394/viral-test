import { create } from "zustand";

interface SalesPageState {
  salesTimer: number;
  salesExpire: boolean;
  setSalesTimer: (newSalesTimer: number) => void;
  setSalesExpire: (newSalesExpire: boolean) => void;
}

export const useStore = create<SalesPageState>((set) => ({
  salesTimer: 0,
  salesExpire: true,
  setSalesTimer: (newSalesTimer) => set(() => ({ salesTimer: newSalesTimer })),
  setSalesExpire: (newSalesExpire) =>
    set(() => ({ salesExpire: newSalesExpire })),
}));
