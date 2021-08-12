export const getUsersSelector = (state) => {
    return state.userPage.users;
}

export const getPageSizeSelector = (state) => {
    return state.userPage.pageSize;
}

export const getTotalUsersCountSelector = (state) => {
    return state.userPage.totalUsersCount;
}

export const getCurrentPageSelector = (state) => {
    return state.userPage.currentPage;
}

export const getIsFetchingSelector = (state) => {
    return state.userPage.isFetching;
}

export const getIsFollowingInProgressSelector = (state) => {
    return state.userPage.isFollowingInProgress;
}