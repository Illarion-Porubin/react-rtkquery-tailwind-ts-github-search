import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const LS_FAV_KEY = 'rfk';

interface GithbState {
    favorites: string[]
}

const initialState: GithbState = {
    favorites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]') 
}

export const githubSlice = createSlice({
    name: "gihub",
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<string>){
            state.favorites.push(action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites))
        },
        removeFavorite(state, action: PayloadAction<string>){
            state.favorites = state.favorites.filter( f => f !== action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites))
        },
    }
})

export const gitHubActions = githubSlice.actions
export const gitHubReducer = githubSlice.reducer
