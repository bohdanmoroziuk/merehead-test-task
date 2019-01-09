export const selectsUsersData = state => state.users;

export const selectUsersLisr = state => state.users.list;

export const selectLoadingStatus = state => state.users.loading;

export const selectError = state => state.users.error;

export const selectPaginationData = state => state.pagination;

export const selectCurrentPage = state => state.pagination.currentPage;

export const selectUsersPerPageValue = state => state.pagination.usersPerPage;