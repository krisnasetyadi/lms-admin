import { configureStore } from "@reduxjs/toolkit";
import sidebarState from "./sidebarReducer";

export const store = configureStore({
    reducer: {
        open: sidebarState
    }
})

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
