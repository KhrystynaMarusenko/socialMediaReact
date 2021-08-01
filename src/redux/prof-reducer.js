const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 12},
        {id: 2, message: 'Hi', likesCount: 17}
    ],
    newPostText: 'New Post',
    profile: null
}

const profileReducer = (state = initialState, action) =>{
    switch (action.type){
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: state.newPostText, likesCount: 16}],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return  {
                ...state,
                newPostText : action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT,newText: text}
}
export const setUserProfile = (profile) => {
    return{
        type: SET_USER_PROFILE,
        profile
    }
}


export default profileReducer