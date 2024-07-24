import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSize = create(
    persist(
        (set)=>({
            size : null ,
            action:{
                setSize: ((S)=>{
                    set((_S)=>({
                        size: S
                    }))
                })
            }
        }),
        {
            name: 'size_product',
            partialize: (state) =>
                Object.fromEntries(
                    Object.entries(state).filter(([key]) => !['action'].includes(key))
                )
        }
    )
)