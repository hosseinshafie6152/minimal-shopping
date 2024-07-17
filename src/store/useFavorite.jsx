import { create } from "zustand";
import { persist } from 'zustand/middleware'

export const useFavorite = create(
    persist((set, get) => ({
        favoriteList: [],
        action: {
            setFavorite: ((item) => {
                const isThereItem = get().favoriteList.some((_item) => _item.id === item.id)
                if (isThereItem) {
                    return (
                        set((_item) => ({
                            favoriteList: _item.favoriteList.filter((per) => per.id != item.id)
                        }))
                    )
                } else {

                    set((_item) => ({
                        favoriteList: [..._item.favoriteList, item]
                    }))
                }
            }),
        }
    }),
        {
            name: 'favorite_items',
            partialize: (state) =>
                Object.fromEntries(
                    Object.entries(state).filter(([key]) => !['action'].includes(key))
                )
        }

    ))

