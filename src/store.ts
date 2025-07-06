import { create } from 'zustand'

type CounterStore = {
    count: number
}

export const useUserStore = create<CounterStore>((set) => ({
    count: 0,
    increasePopulation: () => set((state) => ({ count: state.count + 1 })),
    removeAllBears: () => set({ count: 0 }),
    updateBears: (newBears: number) => set({ count: newBears }),
}))
