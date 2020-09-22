import { SET_CURRENT_USER, USER_LOADING, SET_CURRENT_PATH } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
    currentPath: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_CURRENT_PATH:
            return {
                ...state,
                currentPath: action.payload
            }
        default:
            return state;
    }
}
