import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCount = create(
    persist(
        (set, get) => ({
            count: 1,
            action: {
                increase: ((C) => {
                    set((_count) => ({
                        count: _count.count + C
                    }))
                }),
                decrease: ((C) => {
                    const index = get().count;
                    if (index > 0) {
                        set((_count) => ({
                            count: _count.count - C
                        }))
                    }
                }),
                setcount:(()=>{
                    set(()=>({
                        count : 1
                    }))
                })
            }
        }),
        {
            name: 'count_product',
            partialize: (state) =>
                Object.fromEntries(
                    Object.entries(state).filter(([key]) => !['action'].includes(key))
                )
        }
    )
)