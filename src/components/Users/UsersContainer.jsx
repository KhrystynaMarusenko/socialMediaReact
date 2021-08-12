import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage,
    setIsFollowingInProgress,
    unFollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";
import {
    getCurrentPageSelector, getIsFetchingSelector, getIsFollowingInProgressSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    //if you want all users (more then 10000) this.props.setTotalUsersCount(response.data.totalCount);
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   isFollowingInProgress={this.props.isFollowingInProgress}
            />
        </>
    }
}

/*let mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        isFollowingInProgress: state.userPage.isFollowingInProgress
    }
}*/
let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        isFollowingInProgress: getIsFollowingInProgressSelector(state)
    }
}


export default compose(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        setIsFollowingInProgress,
        getUsers
    }),
    withAuthRedirect
)(UsersContainer)





/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID))
        },
        unfollow: (userID) => {
            dispatch(unFollowActionCreator(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersActonCreator(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActonCreator(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountActonCreator(totalUsersCount))
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingActionCreator(isFetching))
        }
    }
}*/
