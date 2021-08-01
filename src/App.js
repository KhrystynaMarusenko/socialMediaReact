import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Logo from "./components/Logo/Logo";
import Nav from "./components/Nav/Nav";
import SideBar from "./components/SideBar/SideBar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


function App(props) {
     return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Logo/>
                <Nav/>
                <SideBar/>
                <div className='content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
