import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
/*const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';*/
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 12},
        {id: 2, message: 'Hi', likesCount: 17}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) =>{
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.postMessage,
                likesCount: 9
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (postMessage) => {
    return {
        type: ADD_POST,
        postMessage
    }
}
export const setUserProfile = (profile) => {
    return{
        type: SET_USER_PROFILE,
        profile
    }
}
export const setUserStatus = (status) => {
    return{
        type: SET_STATUS,
        status
    }
}



export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.putStatus(status)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(setUserStatus(status))
                }
            })
    }
}

export default profileReducer