import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./github/github.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { gitHubReducer } from "./github/github.slice";

export const store = configureStore({
    reducer: {
       [githubApi.reducerPath]: githubApi.reducer,
        //указываем ключ из githubApi и используем reducerPath, значение устанавливаем в качестве githubApi.reducer и связываем query с редюсером
        github: gitHubReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(githubApi.middleware),
    // создаем middleware для работы с кэшом и автоматическими рефрешерами от RTK Query
})

setupListeners(store.dispatch)

export type RooteState = ReturnType<typeof store.getState>