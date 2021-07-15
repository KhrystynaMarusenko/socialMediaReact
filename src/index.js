import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/state";

let renderEntireTree = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())

store.subscribe(renderEntireTree)