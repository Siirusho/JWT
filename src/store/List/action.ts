import { listTypes } from "./listTypes";
import axios from "axios";

const token = process.env.REACT_APP_JWT_TOKEN;

const set_all_items = (data: any) => {
    return {
        type: listTypes.SET_LIST,
        payload: data,
    }
};


export const setItemsAction = () => {
    const api = `https://opn-interview-service.nn.r.appspot.com/list`;
    return (dispatch: any) => {
        axios.get(api, { headers: { "Authorization": `Bearer ${token}` } }).then((res) => {
            dispatch(set_all_items(res.data.data))
        });
    }
};