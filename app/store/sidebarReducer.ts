import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'sidebar',
    initialState: {
        isOpen: true
    },
    reducers: {
        setIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload
        },
    }
})

export const {setIsOpen} = slice.actions

export default slice.reducer