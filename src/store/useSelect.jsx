import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSelect = create(
    persist(
        (set, get) => ({
            forwardShopping: {},
            selectedList: [],
            invoice: {
                totalPrice: 0,
            },
            action: {
                setSelect: ((item) => {
                    const IsthereItem = get().selectedList.some((_item) => _item.id === item.id)
                    if (IsthereItem) {
                        return (
                            set((_item) => ({
                                selectedList: _item.selectedList.filter((per) => per.id !== item.id),
                                invoice: {
                                    totalPrice: _item.invoice.totalPrice - item.price
                                }
                            }))
                        )
                    } else {
                        set((_item) => ({
                            selectedList: [..._item.selectedList, item],
                            invoice: {
                                totalPrice: _item.invoice.totalPrice + item.price
                            }
                        }))
                    }
                }),
                setforwardShopping: ((item) => {
                    const oldForward = get().forwardShopping
                    if (oldForward.id === item.id) {
                        set((_item) => ({
                            forwardShopping: {}
                        }))
                    } else {
                        set((_item) => ({
                            forwardShopping: item
                        }))
                    }
                }),
                clearforward : (()=>{
                    set(()=>({
                        forwardShopping : {}
                    }))
                })
            }
        }),
        {
            name: 'selected_items',
            partialize: (state) =>
                Object.fromEntries(
                    Object.entries(state).filter(([key]) => !['action'].includes(key))
                )
        }
    )
)