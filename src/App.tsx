import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";

export const App = () => {
    return (
        <div className="App-Wrapper">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}