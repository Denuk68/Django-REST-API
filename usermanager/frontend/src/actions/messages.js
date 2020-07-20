import { GET_ERRORS, CREATE_MESSAGE } from "./actions";

export const createMessage = (msg) => {
    return{
        type: CREATE_MESSAGE,
        payload: msg,
    }
}


export const returnErrors = (msg, status) => {
    return{
        type: GET_ERRORS,
        payload: {msg, status}
    }
}