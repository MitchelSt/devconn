import axios from 'axios';
import { setAlert } from './alertActions';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './actionTypes';
import setAuthToken from '../utils/setAuthToken';


export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const response = await axios.get('http://localhost:5000/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
        });
    }
};


export const register = ({ name, email, password }) => async dispatch => {
    try {
        const options = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            data: JSON.stringify({ name, email, password }),
            url: "http://localhost:5000/api/users",
        };
        const response = await axios(options);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        const errors = error.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.message, 'danger')));
        }

        dispatch({
            type: REGISTER_FAIL,
        });
    }
};

export const loginUser = ({ email, password }) => async dispatch => {
    try {
        const options = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            data: JSON.stringify({ email, password }),
            url: "http://localhost:5000/api/auth",
        };
        const response = await axios(options);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        });
    } catch (error) {

        dispatch(setAlert(error.message, 'danger'));

        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
};