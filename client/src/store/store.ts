import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import fetchAllPostsReducer, { getPosts } from "../reducers/postSlice";
import sendPostReducer from '../reducers/sendPostsSlice';

const combinedReducers = combineReducers({
    post : fetchAllPostsReducer,
    send: sendPostReducer
})

export const store = configureStore({
    reducer:combinedReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch