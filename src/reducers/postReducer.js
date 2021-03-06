import { GET_POSTS, POST_ERROR, UPDATE_LIKES, GET_POST, COMMENT_POST, DELETE_COMMENT, ADD_POST, DELETE_POST } from '../actions/actionTypes';

const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                loading: false,
                posts: payload
            };
        case GET_POST:
            return {
                ...state,
                loading: false,
                post: payload
            };
        case ADD_POST:
            return {
                ...state,
                posts: [payload, ...state.posts],
                loading: false
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== payload),
                loading: false
            };
        case UPDATE_LIKES:
            const { postId, likes } = payload;
            return {
                ...state,
                loading: false,
                posts: state.posts.map(post => post._id === postId
                    ? { ...post, likes: likes }
                    : post
                )
            };
        case COMMENT_POST:
            return {
                ...state,
                loading: false,
                post: { ...state.post, comments: payload }
            };
        case DELETE_COMMENT:
            return {
                ...state,
                post: { ...state.post, comments: state.post.comments.filter(comment => comment._id !== payload) }
            };
        case POST_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            };
        default:
            return state;
    }
}