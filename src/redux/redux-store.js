import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./prof-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./app-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer ,
    profilePage: profileReducer,
    userPage: usersReducer,
    auth: authReducer,
    appPage : appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;

