import ACTION_TYPES from '../types';

const URI = 'http://localhost:3000/users.json';

export const fetchUsersStarted = () => ({
    type: ACTION_TYPES.FETCH_USERS_STARTED
});

export const fetchUsersSuccess = list => ({
    type: ACTION_TYPES.FETCH_USERS_SUCCESS,
    payload: { list }
});

export const fetchUsersFailure = error => ({
    type: ACTION_TYPES.FETCH_USERS_FAILURE,
    payload: { error }
});

export const changeCurrentPage = currentPage => ({
    type: ACTION_TYPES.CHANGE_CURRENT_PAGE,
    payload: { currentPage }
})

export const changeUserPerPageValue = userPerPage => ({
    type: ACTION_TYPES.CHANGE_USER_PER_PAGE_VALUE,
    payload: { userPerPage }
})

export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUsersStarted());

        return fetch(URI)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => dispatch(fetchUsersSuccess(json.users)))
            .catch(error => dispatch(fetchUsersFailure(error)));
    };
};

const handleErrors = response => {
    if ( ! response.ok) {
        throw new Error(response.statusText);
    }

    return response;
};