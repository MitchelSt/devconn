import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE, GET_PROFILES, GET_GITHUB_REPOS } from '../actions/actionTypes';

const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PROFILE:
        case UPDATE_PROFILE:
            return {
                ...state,
                loading: false,
                profile: payload
            };
        case GET_PROFILES:
            return {
                ...state,
                loading: false,
                profiles: payload
            };
        case GET_GITHUB_REPOS:
            return {
                ...state,
                loading: false,
                repos: payload
            };
        case PROFILE_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            };
        default:
            return state;
    }
}