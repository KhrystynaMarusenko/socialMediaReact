import React from 'react'
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import './App.css';
 import SideBar from "./components/SideBar/SideBar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavContainer from "./components/Nav/NavContainer";
import LoginForm from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";




class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <NavContainer/>
                    <SideBar/>
                    <div className='content'>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <LoginForm/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


const mapStateToProps = (state) => ({
    initialized : state.appPage.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)
