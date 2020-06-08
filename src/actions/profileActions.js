import axios from 'axios';
import { GET_PROFILE, PROFILE_ERROR } from './actionTypes';


export const getCurrentProfile = () => async dispatch => {
    try {
        const response = await axios('http://localhost:5000/api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { message: error.response.statusText, status: error.response.status }
        });
    }
};