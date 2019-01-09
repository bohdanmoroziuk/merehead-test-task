import ACTION_TYPES from '../actions/types';

const initialState = {
    currentPage: 1,
    usersPerPage: 5
};

const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload.currentPage
            };
        case ACTION_TYPES.CHANGE_USER_PER_PAGE_VALUE:
            return {
                ...state,
                usersPerPage: action.payload.usersPerPage
            };
        default:
            return state;
    }
};

export default paginationReducer;