import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Logo from "./components/Logo/Logo";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import SideBar from "./components/SideBar/SideBar";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Logo/>
                <Nav/>
                <SideBar/>
                <div className='content'>
                    <Route path='/profile' render={() => <Profile state={props.appState.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.appState.dialogPage}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
