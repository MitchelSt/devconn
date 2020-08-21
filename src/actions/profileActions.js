import axios from 'axios';
import { GET_PROFILE, PROFILE_ERROR, DELETE_ACCOUNT, UPDATE_PROFILE, GET_PROFILES, GET_GITHUB_REPOS } from './actionTypes';
import { setAlert } from './alertActions';
import { logout } from './authActions';


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

export const getAllProfiles = () => async dispatch => {
    try {
        const response = await axios('http://localhost:5000/api/profile');

        dispatch({
            type: GET_PROFILES,
            payload: response.data
        });

    } catch (error) {


        dispatch({
            type: PROFILE_ERROR,
            payload: { message: error.response.statusText, status: error.response.status }
        });
    }
};

export const getProfileById = (userId) => async dispatch => {
    try {
        const response = await axios(`http://localhost:5000/api/profile/user/${userId}`);

        dispatch({
            type: GET_PROFILE,
            payload: response.data
        });

    } catch (error) {
        // dispatch({
        //     type: PROFILE_ERROR,
        //     payload: { message: error.response.statusText, status: error.response.status }
        // });
    }
};

export const getGithubRepos = (userId) => async dispatch => {
    try {
        const response = await axios(`http://localhost:5000/api/profile/github/${userId}`);

        dispatch({
            type: GET_GITHUB_REPOS,
            payload: response.data
        });

    } catch (error) {


        dispatch({
            type: PROFILE_ERROR,
            payload: { message: error.response.statusText, status: error.response.status }
        });
    }
};

export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            data: JSON.stringify(formData),
            url: 'http://localhost:5000/api/profile'
        };

        const response = await axios(options);

        dispatch({
            type: GET_PROFILE,
            payload: response.data
        });

        dispatch(setAlert(edit ? 'Profile Created' : 'Profile Created'));

        if (!edit) return history.push('/dashboard');

    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: error.stack
        });

        dispatch(setAlert(error.stack));

    }
};

export const addExperience = (formData, history) => async dispatch => {
    try {
        const options = {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            data: JSON.stringify(formData),
            url: 'http://localhost:5000/api/profile/experience'
        };

        const response = await axios(options);

        dispatch({
            type: GET_PROFILE,
            payload: response.data
        });

        dispatch(setAlert('Experience has been added'));

        history.push('/dashboard');

    } catch (error) {

        dispatch({
            type: PROFILE_ERROR,
            payload: error.stack
        });

        dispatch(setAlert(error.stack));
    }
};

export const addEducation = (formData, history) => async dispatch => {
    try {
        const options = {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            data: JSON.stringify(formData),
            url: 'http://localhost:5000/api/profile/education'
        };

        const response = await axios(options);

        dispatch({
            type: GET_PROFILE,
            payload: response.data
        });

        dispatch(setAlert('Education has been added'));

        history.push('/dashboard');

    } catch (error) {

        dispatch({
            type: PROFILE_ERROR,
            payload: error.stack
        });

        dispatch(setAlert(error.stack));
    }
};

export const deleteExperience = experienceId => async dispatch => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/profile/experience/${experienceId}`);

        dispatch({
            type: UPDATE_PROFILE,
            payload: response.data
        });

        dispatch(setAlert('Experience Removed', 'success'));
    } catch (error) {
    }
};

export const deleteEducation = educationId => async dispatch => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/profile/education/${educationId}`);

        dispatch({
            type: UPDATE_PROFILE,
            payload: response.data
        });

        dispatch(setAlert('Education Removed', 'success'));
    } catch (error) {
    }
};

export const deleteAccount = () => async dispatch => {
    try {
        const response = await axios.delete('http://localhost:5000/api/profile');

        dispatch({
            type: DELETE_ACCOUNT,
            payload: response.data
        });

        logout();
        dispatch(setAlert('Account Deleted', 'success'));
    } catch (error) {
    }
};