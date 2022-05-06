// @ts-nocheck 

import { userTypes } from "./userTypes";
import { setUser } from "./utils";

export const userState = {
    currentUser: null,
};

const userReducer = (state = userState, { type, payload }) => {
    switch (type) {
        case userTypes.SET_USER:
            state = setUser(state, payload);
            break;
    };
    return { ...state };
};


export default userReducer;

