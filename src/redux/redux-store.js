import {combineReducers, createStore} from "redux";
import profileReducer from "./prof-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer ,
    profilePage: profileReducer,
    userPage: usersReducer
})

let store = createStore(reducers);

export default store;

