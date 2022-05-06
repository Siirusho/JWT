import { listTypes } from "./listTypes";
import { setList } from "./utils";

export const listState = {
    list: null,
};

const listReducer = (state: any = listState, action: any) => {
    switch (action.type) {
        case listTypes.SET_LIST:
            state = setList(state, action.payload);
            break;
    };
    return { ...state };
};

export default listReducer;