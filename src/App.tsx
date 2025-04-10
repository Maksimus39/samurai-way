import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Navbar} from "./navbar/Navbar";
import {Profile} from "./profile/Profile";

export const App = () => {
    return (
        <div className="App-Wrapper">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}


