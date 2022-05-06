import { userTypes } from "./userTypes"
import axios from "axios";

const token = process.env.REACT_APP_JWT_TOKEN;

const set_user = (user: any) => {
    return {
        type: userTypes.SET_USER,
        payload: user,
    }
};

export const getCurrentUser = (userId: string) => {
    const api = `https://opn-interview-service.nn.r.appspot.com/get/${userId}`;
    return (dispatch: any) => {
        axios.get(api, { headers: { "Authorization": `Bearer ${token}` } }).then((res) => {
            dispatch(set_user(res.data.data))
        }).catch(err => console.log(err));
    }
};
