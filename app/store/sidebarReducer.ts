import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'sidebar',
    initialState: {
        isOpen: false
    },
    reducers: {
        setIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload
        },
    }
})

export const {setIsOpen} = slice.actions
// export const { isOpen } = slice.getInitialState()


// const store = configureStore({
//     reducer: {}
//   })

export default slice.reducer