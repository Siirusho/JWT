// @ts-nocheck

import { store } from "../index";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export const setList = (state: RootState, list: any) => {
    state.list = list;
    return state;
};