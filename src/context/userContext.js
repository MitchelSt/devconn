import React, { useReducer, createContext } from 'react';

const initialState = {
    loading: false,
    error: false,
    user: 'HelloSir'
};

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_USER':
            return {
                ...state,
                loading: false,
                error: false,
                user: payload
            };
        default:
            return {
                ...state
            };
    }
};


const UserDataContext = createContext(initialState);

function UserDataProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <UserDataContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UserDataContext.Provider>
    );
}

export { UserDataContext, UserDataProvider };