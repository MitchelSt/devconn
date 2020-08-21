import axios from "axios";
import { GET_POSTS, POST_ERROR, UPDATE_LIKES, GET_POST, COMMENT_POST, DELETE_COMMENT, ADD_POST, DELETE_POST } from "./actionTypes";

export const getPosts = () => async dispatch => {
    try {
        const response = await axios.get('http://localhost:5000/api/posts');

        dispatch({
            type: GET_POSTS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
};

export const getPost = (postId) => async dispatch => {
    try {
        const response = await axios.get(`http://localhost:5000/api/posts/${postId}`);

        dispatch({
            type: GET_POST,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
};

export const addPost = (text) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:5000/api/posts', { text });

        dispatch({
            type: ADD_POST,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
};

export const addLike = (postId) => async dispatch => {
    try {
        const response = await axios.put(`http://localhost:5000/api/posts/like/${postId}`);

        const likes = response.data;

        dispatch({
            type: UPDATE_LIKES,
            payload: { postId, likes }
        });
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
};

export const removeLike = (postId) => async dispatch => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/posts/like/${postId}`);

        const likes = response.data;

        dispatch({
            type: UPDATE_LIKES,
            payload: { postId, likes }
        });
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
};

export const addComment = (postIdComments, comment) => async dispatch => {
    try {
        const response = await axios.put(`http://localhost:5000/api/posts/comment/${postIdComments}`, { text: comment });

        const comments = response.data.comments;

        dispatch({
            type: COMMENT_POST,
            payload: comments
        });
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
};

export const deleteComment = (postId, commentId) => async dispatch => {
    try {
        await axios.delete(`http://localhost:5000/api/posts/comment/${postId}/${commentId}`);

        dispatch({
            type: DELETE_COMMENT,
            payload: commentId
        });
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
};

export const deletePost = (postId) => async dispatch => {
    try {
        await axios.delete(`http://localhost:5000/api/posts/${postId}`);

        dispatch({
            type: DELETE_POST,
            payload: postId
        });
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
};