import { GET_USER, LOAD_USER } from "../constants/user";


export const getUser = user => ({
    type: GET_USER,
    user,
});

export const loadUser = () => ({
    type: LOAD_USER,
})
