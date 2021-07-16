import profileReducer from "./prof-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello', likesCount: 12},
                {id: 2, message: 'Hi', likesCount: 17}
            ],
            newPostText: 'New Post'
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Roma'},
                {id: 3, name: 'Alina'},
                {id: 4, name: 'Misha'},
                {id: 5, name: 'Oksana'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'Hi'},
                {id: 4, message: 'Hi'},
                {id: 5, message: 'Hi'}
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
        console.log('+')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPost = {
            id: 3, message: this._state.profilePage.newPostText, likesCount: 16
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },

    dispatch(action) {
        this._state.profilePage =  profileReducer(this._state.profilePage, action);
        this._state.dialogPage =  dialogsReducer(this._state.dialogPage, action);

        this._callSubscriber(this._state)
    }
}



export default store
