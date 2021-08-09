import {authAPI} from "../api/api";

const SET_USER_DATE = 'SET_USER_DATE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    "id": null,
    "login": null,
    "email": null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.data,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state;
    }
}


export const setUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATE,
        data: {
            userId,
            email,
            login,
            isAuth
        }
    }
}
export const setIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const authorization = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                dispatch(setIsFetching(true))
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setUserData(id, email, login, true));
                    dispatch(setIsFetching(false))
                }
                /*this.props.setTotalUsersCount(response.data.totalCount);*/
            })
    }
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            dispatch(setIsFetching(true))
            if (response.data.resultCode === 0) {
                dispatch(authorization())
                dispatch(setIsFetching(false))
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            dispatch(setIsFetching(true))
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
                dispatch(setIsFetching(false))
            }
        })
}

export default authReducer