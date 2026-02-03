import { create } from "zustand";
import type { Item } from "../types/Items";


type Store = {
    items: Array<Item>
}

type Action = {
    addItem: (item: Item) => void
    removeItem: (index: number) => void
    clearItems: () => void
    updateItem: (index: number, item: Item) => void
}

const useItems = create<Store & Action>((set) => ({
    items: [
        {
            title: "Item 1",
            description: "Description 1"
        }
    ],
    addItem: (item: Item) => set((state) => ({ items: [...state.items, item] })),
    removeItem: (index: number) => set((state) => ({ items: state.items.filter((_, i) => i !== index) })),
    clearItems: () => set(() => ({ items: [] })),
    updateItem: (index: number, item: Item) => set((state) => ({ items: state.items.map((el, i) => i === index ? item : el) }))

}))

export default useItems;