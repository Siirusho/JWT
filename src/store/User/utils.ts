
import { store } from "../index";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export const setUser = (state: RootState, payload: any) => {
    return { ...state, currentUser: payload }
};