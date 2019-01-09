import { combineReducers } from 'redux';
import usersReducer from './users';
import paginationReducer from './pagination';

const rootReducer = combineReducers({
    users: usersReducer,
    pagination: paginationReducer
});

export default rootReducer;