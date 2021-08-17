import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATE = 'SET_USER_DATE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';


let initialState = {
    "id": null,
    "login": null,
    "email": null,
    isFetching: false,
    isAuth: false,
    captchaUrl : null
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
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }
}


export const setUserData = (id, email, login, isAuth) => {
    return {
        type: SET_USER_DATE,
        data: {
            id,
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

export const getCaptchaUrlSuccess = (captchaUrl) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        captchaUrl
    }
}

export const authorization = () => {
    return async (dispatch) => {
        let response = await authAPI.me()

        dispatch(setIsFetching(true))
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setUserData(id, email, login, true));
            dispatch(setIsFetching(false))
        }
        /*this.props.setTotalUsersCount(response.data.totalCount);*/
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)

    dispatch(setIsFetching(true))
    if (response.data.resultCode === 0) {
        dispatch(authorization())
        dispatch(setIsFetching(false))
    }else{
        if(response.data.resultCode === 10){
            dispatch(getCaptchaUrl())
        }
        alert(response.data.messages[0])
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    debugger
    let captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    dispatch(setIsFetching(true))
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
        dispatch(setIsFetching(false))
    }
}

export default authReducer