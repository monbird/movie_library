import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";
import { toast } from "react-toastify";

import apis from "../api";

export const registerUser = (payload) => (dispatch) => {
    apis.register(payload)
        .then((response) => {
            const { token } = response.data;

            // Set token to localStorage
            localStorage.setItem("jwtToken", token);

            // Decode token to get user data
            const decoded = jwt_decode(token);

            // Set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch((error) => {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data.errors || {},
            });
        });
};

export const signInUser = (payload) => (dispatch) => {
    apis.signIn(payload)
        .then((response) => {
            const { token } = response.data;

            // Set token to localStorage
            localStorage.setItem("jwtToken", token);

            // Decode token to get user data
            const decoded = jwt_decode(token);

            // Set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch((error) => {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data.errors || {},
            });
        });
};

// Set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
    };
};

// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING,
    };
};

// Sign user out
export const signOutUser = () => (dispatch) => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");

    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));

    let msg = "👍 You have successfully signed out!";
    toast.dark(msg);
};
