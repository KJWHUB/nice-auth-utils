import { create } from "zustand";

type NiceStore = {
  niceAuthResult: null | string;
  setNiceAuthResult: (result: string) => void;
};

export const useNiceStore = create<NiceStore>()((set) => ({
  niceAuthResult: null,
  setNiceAuthResult: (result) => {
    set((state) => ({ ...state, niceAuthResult: result }));
  },
}));
