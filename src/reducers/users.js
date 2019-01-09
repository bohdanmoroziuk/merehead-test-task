import ACTION_TYPES from '../actions/types';

const initialState = {
    list: [],
    loading: false,
    error: null
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_USERS_STARTED:
            return {
                ...state,
                loading: true,
                error: null
            };
        case ACTION_TYPES.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.payload.list
            };
        case ACTION_TYPES.FETCH_USERS_FAILURE: 
            return {
                ...state,
                list: [],
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
};

export default usersReducer;