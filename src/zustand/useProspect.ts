import { create } from "zustand";

// Define the state and actions with TypeScript types
interface AppState {
  isProspect: boolean;
  updateIsProspect: (value: boolean) => void;
  //   forceToggleOn: () => void;
}

export const useProspect = create<AppState>((set) => ({
  isProspect: false, // Initial state

  // Action to set the boolean value
  updateIsProspect: (value: boolean) => set({ isProspect: value }),

  // Action to force it to true
  //   forceToggleOn: () => set({ isToggled: true }),
}));
